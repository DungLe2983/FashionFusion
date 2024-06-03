import mongoose, { model, models, Schema } from "mongoose";

const CartItemSchema = new Schema(
    {
        cart_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Cart",
        },
        product_item_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ProductItem",
        },
        item_quantity: {
            type: Number,
        },
    },
    { timestamps: true }
);

const CartItem = models?.CartItem || model("CartItem", CartItemSchema);
export default CartItem;
