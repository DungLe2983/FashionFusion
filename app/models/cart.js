import mongoose, { model, models, Schema } from "mongoose";

const CartSchema = new Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        cart_item_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "CartItem",
        },
    },
    { timestamps: true }
);

const Cart = models?.Cart || model("Cart", CartSchema);
export default Cart;
