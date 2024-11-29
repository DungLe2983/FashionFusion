import User from "../../models/User";
import dbConnect from "../../utils/db";
import { NextResponse } from "next/server";

export async function GET(req, context) {
  const url = new URL(req.url);
  const email = url.searchParams.get("email");

  try {
    await dbConnect();

    let user;

    if (email) {
      user = await User.find({ email: email });
    } else {
      user = await User.find();
    }

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
