import dbConnect from "../../../../utils/db";
import { NextResponse } from "next/server";
import ProductItem from "../../../../models/product-item";
import Color from "../../../../models/color";
import Size from "../../../../models/size";

export async function GET(req, context) {
    try {
        await dbConnect();

        const id = context.params.idItem;

        const product = await ProductItem.findById(id)
            .populate("color_id")
            .populate("size_id");

        console.log("product item: ====", product);

        return NextResponse.json(product);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
