import User from "../../models/User";
import Cart from "../../models/cart";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dbConnect from "../../utils/db";

export async function POST(req) {
    try {
        // get data
        const body = await req.json();

        await dbConnect();

        // hash password
        const pass = body.password;
        const notHashedPassword = pass;
        const salt = bcrypt.genSaltSync(10);
        body.password = bcrypt.hashSync(notHashedPassword, salt);

        // create New user
        const createdUser = await User.create(body);

        // create a cart for the new user
        const cart = await Cart.create({
            user_id: createdUser._id,
            cart_items: [],
        });

        return Response.json(createdUser);
    } catch (error) {
        console.log(error);
        return Response.json(error);
    }
}
