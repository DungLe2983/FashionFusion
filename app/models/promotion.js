const { Schema, models, model } = require("mongoose");

const PromotionSchema = new Schema(
    {
        code: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
        },
        count: {
            type: Number,
        },
        percent: {
            type: Number,
        },
        price_promotion: {
            type: Number,
        },
    },
    { timestamps: true }
);

const Promotion = models?.Promotion || model("Promotion", PromotionSchema);
export default Promotion;
