import mongoose, { model, models, Schema } from "mongoose";

const ProductItemSchema = new Schema(
    {
        product_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
        size_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Size",
            required: true,
        },
        color_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Color",
            required: true,
        },
        price: {
            type: Number,
        },
        quantity: {
            type: Number,
        },
        status: {
            type: String,
        },
    },
    { timestamps: true }
);

const ProductItem =
    models?.ProductItem || model("ProductItem", ProductItemSchema);
export default ProductItem;
