import { NextResponse } from "next/server";
import Product from "../../../models/product";
import ProductItem from "../../../models/product-item";
import Color from "../../../models/color";
import Size from "../../../models/size";
import dbConnect from "../../../utils/db";

export async function PUT(req, res) {
  const url = new URL(req.url);
  const page = url.searchParams.get("page");
  const skipPage = (page - 1) * 6;

  try {
    const filters = await req.json();

    await dbConnect();

    const allProducts = await Product.find().populate("product_item_id");

    let filteredProducts = allProducts;

    for (let filter of filters) {
      switch (filter.name) {
        case "Category":
          filteredProducts = filteredProducts.filter((product) =>
            product.category_id.includes(filter.options[0])
          );
          break;
        case "Color":
          if (filter.options.length === 0) {
            break;
          } else {
            filteredProducts = filteredProducts.filter((product) =>
              product.product_item_id.some((item) =>
                filter.options.includes(item.color_id.toString())
              )
            );
            break;
          }
        case "Size":
          if (filter.options.length === 0) {
            break;
          } else {
            filteredProducts = filteredProducts.filter((product) =>
              product.product_item_id.some((item) =>
                filter.options.includes(item.size_id.toString())
              )
            );
            break;
          }
        default:
          break;
      }
    }

    const startIndex = skipPage;
    const endIndex = Math.min(startIndex + 6, filteredProducts.length);
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    return NextResponse.json(paginatedProducts, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
