import Promotion from "../../models/promotion";
import dbConnect from "../../utils/db";
import { NextResponse } from "next/server";

export async function POST(req, context) {
    const { promotionCode } = await req.json();

    try {
        await dbConnect();

        const promotion = await Promotion.findOne({ code: promotionCode });

        if (promotion) {
            if (promotion.count > 0) {
                return NextResponse.json(
                    {
                        valid: true,
                        message: "Mã khuyến mãi hợp lệ!",
                        promotion,
                    },
                    { status: 200 }
                );
            } else {
                return NextResponse.json(
                    {
                        valid: false,
                        message: "Mã khuyến mãi đã hết! Không thể áp dụng.",
                    },
                    { status: 400 }
                );
            }
        } else {
            return NextResponse.json(
                {
                    valid: false,
                    message: "Mã khuyến mãi không tồn tại.",
                },
                { status: 404 }
            );
        }
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
