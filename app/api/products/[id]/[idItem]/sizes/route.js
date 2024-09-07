import dbConnect from "../../../../../utils/db";
import { NextResponse } from "next/server";
import ProductItem from "../../../../../models/product-item";
import Size from "../../../../../models/size";

export async function GET(req, context) {
    try {
        await dbConnect();

        const id = context.params.idItem;

        const product = await ProductItem.findById(id).populate("size_id");

        return NextResponse.json(product.size_id);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
