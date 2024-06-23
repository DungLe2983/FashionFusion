import dbConnect from "../../../../utils/db";
import Color from "../../../../models/color";
import Size from "../../../../models/size";
import Product from "../../../../models/product";
import ProductItem from "../../../../models/product-item";
import CartItem from "../../../../models/cart-item";
import { NextResponse } from "next/server";

export async function GET(req, context) {
    await dbConnect();

    const id = context.params.id;

    if (!id) {
        return NextResponse.json(
            { error: "Missing id parameter" },
            { status: 400 }
        );
    }

    try {
        const cartItem = await CartItem.findById(id).populate({
            path: "product_item_id",
            populate: [
                {
                    path: "product_id",
                },
                {
                    path: "size_id",
                },
                {
                    path: "color_id",
                },
            ],
        });

        if (cartItem) {
            return NextResponse.json(cartItem, { status: 200 });
        } else {
            return NextResponse.json(
                { error: "Cart item not found" },
                { status: 404 }
            );
        }
    } catch (error) {
        console.error("Error fetching cart items:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
