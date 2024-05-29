const { Schema, model, models } = require("mongoose");

const CategorySchema = new Schema(
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

const Category = models?.Category || model("Category", CategorySchema);
export default Category;
