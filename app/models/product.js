import mongoose, { model, models, Schema } from "mongoose";

const ProductSchema = new Schema(
    {
        category_id: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Category",
                required: true,
            },
        ],
        product_item_id: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "ProductItem",
            },
        ],
        name: {
            type: String,
        },
        description: {
            type: String,
        },
        image: {
            type: [String],
        },
    },
    { timestamps: true }
);

const Product = models?.Product || model("Product", ProductSchema);
export default Product;
