import mongoose, { Schema, model, models } from "mongoose";

const OrderSchema = new Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        detail_id: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "OrderDetail",
            },
        ],
        total: {
            type: Number,
        },
        dateCreated: {
            type: Date,
            default: Date.now,
        },
        status: {
            type: Number,
        },
    },
    {
        timestamps: true,
    }
);

const Order = models?.Order || model("Order", OrderSchema);
export default Order;
