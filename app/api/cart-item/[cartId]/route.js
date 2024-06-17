import { NextResponse } from "next/server";
import CartItem from "../../../models/cart-item";
import dbConnect from "../../../utils/db";

export async function GET(req, context) {
    const cart_id = context.params.cartId;

    await dbConnect();

    if (!cart_id) {
        return NextResponse.json(
            { error: "Missing cart_id parameter" },
            { status: 400 }
        );
    }

    try {
        const cartItemsQuery = CartItem.find({ cart_id: cart_id })
            .populate({
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
            })
            .exec(); // Thực hiện query
        const cartItems = await cartItemsQuery; // Chờ kết quả từ promise

        if (cartItems.length > 0) {
            return NextResponse.json(cartItems, { status: 200 });
        } else {
            return NextResponse.json(
                { error: "Không tìm thấy sản phẩm nào trong giỏ hàng" },
                { status: 404 }
            );
        }
    } catch (error) {
        console.error("Error fetching cart items:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
