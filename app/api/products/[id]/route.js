import Product from "../../../models/product";
import dbConnect from "../../../utils/db";
import { NextResponse } from "next/server";

export async function GET(req, context) {
    try {
        await dbConnect();

        const id = context.params.id;

        const product = await Product.findById(id).populate("product_item_id");

        return NextResponse.json(product);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
