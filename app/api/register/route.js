import User from "@/app/models/User";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dbConnect from "@/app/utils/db";

export async function POST(req) {
    try {
        //get data
        const body = await req.json();

        //connect to DB
        //await mongoose.connect(process.env.MONGO_URL);
        await dbConnect();


        //hash password
        const pass = body.password;
        const notHashedPassword = pass;
        const salt = bcrypt.genSaltSync(10);
        body.password = bcrypt.hashSync(notHashedPassword, salt);

        //create New user
        const createdUser = await User.create(body);
        return Response.json(createdUser);
    } catch (error) {
        console.log(error);
        return Response.json(error);
    }
}
