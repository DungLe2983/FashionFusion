import { NextResponse } from "next/server";
import dbConnect from "../../utils/db";
import Category from "../../models/category";
import Color from "../../models/color";
import Size from "../../models/size";

export async function GET(req, res) {
    try {
        await dbConnect();

        const categories = await Category.find();
        const colors = await Color.find();
        const sizes = await Size.find();

        const data = [
            {
                name: "Category",
                options: categories,
                type: "radio",
            },
            {
                name: "Color",
                options: colors,
                type: "checkbox",
            },
            {
                name: "Size",
                options: sizes,
                type: "checkbox",
            },
        ];

        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
