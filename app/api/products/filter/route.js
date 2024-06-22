import { NextResponse } from "next/server";
import Product from "../../../models/product";

export async function PUT(req, res) {
    try {
        const filters = await req.json();

        const allProducts = await Product.find()
            .populate("product_item_id")
            .exec();

        let filteredProducts = allProducts;

        for (let filter of filters) {
            switch (filter.name) {
                case "Category":
                    filteredProducts = filteredProducts.filter((product) =>
                        product.category_id.includes(filter.options[0])
                    );
                    break;
                case "Color":
                    filteredProducts = filteredProducts.filter((product) =>
                        product.product_item_id.some((item) =>
                            filter.options.includes(item.color_id)
                        )
                    );
                    break;
                case "Size":
                    filteredProducts = filteredProducts.filter((product) =>
                        product.product_item_id.some((item) =>
                            filter.options.includes(item.size_id)
                        )
                    );
                    break;
                default:
                    break;
            }
        }

        return NextResponse.json(filteredProducts, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
