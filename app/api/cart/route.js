import { NextResponse } from "next/server";
import dbConnect from "../../utils/db";
import Cart from "../../models/cart";

export async function POST(req, context) {
    try {
        await dbConnect();

        const data = await req.json();

        if (!data.user_id) {
            return NextResponse.json(
                { error: "Thiếu thông tin cần thiết" },
                { status: 400 }
            );
        }

        const cart = await Cart.find({ user_id: data.user_id });
        if (!cart) {
            return NextResponse.json(
                { error: "Không tìm thấy Cart" },
                { status: 400 }
            );
        }

        return NextResponse.json(cart[0], { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
