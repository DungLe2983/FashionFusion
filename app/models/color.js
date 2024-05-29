const { Schema, models, model } = require("mongoose");

const ColorSchema = new Schema(
    {
        name: {
            type: String,
        },
        description: {
            type: String,
        },
    },
    { timestamps: true }
);

const Color = models?.Color || model("Color", ColorSchema);
export default Color;
