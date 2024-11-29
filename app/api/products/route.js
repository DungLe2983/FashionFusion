import Product from "../../models/product";
import dbConnect from "../../utils/db";
import { NextResponse } from "next/server";
import ProductItem from "../../models/product-item";

export async function GET(req, context) {
  const url = new URL(req.url);
  const page = url.searchParams.get("page");
  const skipPage = page - 1;

  try {
    await dbConnect();

    const products = await Product.find()
      .populate("product_item_id")
      .skip(skipPage * 6)
      .limit(6);

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
