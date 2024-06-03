import dbConnect from "../../../../../utils/db";
import { NextResponse } from "next/server";
import ProductItem from "../../../../../models/product-item";
import Color from "../../../../../models/color";

export async function GET(req, context) {
    try {
        await dbConnect();

        const id = context.params.idItem;

        const product = await ProductItem.findById(id).populate("color_id");

        console.log(product.color_id);

        return NextResponse.json(product.color_id);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
