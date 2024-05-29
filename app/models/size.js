const { Schema, model, models } = require("mongoose");

const SizeSchema = new Schema(
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

const Size = models?.Size || model("Size", SizeSchema);
export default Size;
