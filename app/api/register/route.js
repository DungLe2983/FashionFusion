import { User } from "@/app/models/User";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

export async function POST(req) {
    //get data and connect to db
    const body = await req.json();
    mongoose.connect(process.env.MONGO_URL);

    //hash password
    const pass = body.password;
    const notHashedPassword = pass;
    const salt = bcrypt.genSaltSync(10);
    body.password = bcrypt.hashSync(notHashedPassword, salt);

    //create New user
    const createdUser = await User.create(body);
    return Response.json(createdUser);
}
