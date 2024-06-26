import mongoose from "mongoose";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { compare } from "bcrypt";
import User from "../../../models/User";
import Cart from "../../../models/cart";
import dbConnect from "../../../utils/db";

const handler = NextAuth({
    secret: process.env.SECRET,
    session: {
        strategy: "jwt",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials, req) {
                if (
                    !credentials ||
                    !credentials.email ||
                    !credentials.password
                ) {
                    return null;
                }

                await dbConnect();

                const user = await User.findOne({ email: credentials?.email });

                if (!user) {
                    return null;
                }

                const passwordCorrect = await compare(
                    credentials?.password || "",
                    user.password
                );

                if (passwordCorrect) {
                    const oUser = {
                        id: user.id,
                        email: user.email,
                        name: user.name,
                    };
                    return oUser;
                }

                return null;
            },
        }),
    ],
    callbacks: {
        async signIn({ account, profile }) {
            await dbConnect();

            if (account.provider === "google") {
                if (!profile || !profile.email) {
                    throw new Error("No profile");
                }

                try {
                    const user = await User.findOne({ email: profile.email });

                    if (user) {
                        // If the user is found, update their name
                        await User.updateOne(
                            { email: profile.email },
                            { $set: { name: profile.name } }
                        );
                    } else {
                        // Nếu tìm không thấy người dùng, tạo mới
                        const newUser = new User({
                            email: profile.email,
                            name: profile.name,
                        });

                        await newUser.save();

                        // Tạo mới Cart cho người dùng mới
                        const newCart = new Cart({
                            user_id: newUser._id,
                            cart_items: [],
                        });

                        await newCart.save();
                    }

                    const oUser = {
                        id: user.id,
                        email: user.email,
                        name: user.name,
                    };
                    console.log("oUser Gmail:", oUser);
                    return oUser;
                } catch (error) {
                    console.log(error);
                }
            }
            return true;
        },
        async session(session, user) {
            return session;
        },
    },
});

export { handler as GET, handler as POST };
