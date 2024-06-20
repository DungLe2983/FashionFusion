import { NextResponse } from "next/server";
import CartItem from "../../../models/cart-item";
import User from "../../../models/User";
import Cart from "../../../models/cart";
import Size from "../../../models/size";
import Color from "../../../models/color";
import Product from "../../../models/product";
import ProductItem from "../../../models/product-item";
import dbConnect from "../../../utils/db";

export async function GET(req, context) {
    const email = context.params.email;

    if (!email) {
        return NextResponse.json(
            { error: "Missing email parameter" },
            { status: 400 }
        );
    }

    try {
        await dbConnect();

        const user = await User.findOne({ email: email });

        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        const cart = await Cart.findOne({ user_id: user._id });

        if (!cart) {
            return NextResponse.json(
                { error: "Cart not found" },
                { status: 404 }
            );
        }

        const cartItems = await CartItem.find({ cart_id: cart._id })
            .populate({
                path: "product_item_id",
                populate: [
                    { path: "product_id" },
                    { path: "size_id" },
                    { path: "color_id" },
                ],
            })
            .exec();

        if (cartItems.length > 0) {
            return NextResponse.json(cartItems, { status: 200 });
        } else {
            return NextResponse.json(
                { error: "No items found in cart" },
                { status: 404 }
            );
        }
    } catch (error) {
        console.error("Error fetching cart items:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
