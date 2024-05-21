import mongoose from "mongoose";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { compare } from "bcrypt";
import User from "../../../models/User";
import dbConnect from "@/app/utils/db";

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
                // await mongoose.connect(process.env.MONGO_URL);
                await dbConnect();

                const user = await User.findOne({ email: credentials?.email });
                const email = credentials.email;

                const passwordCorrect = await compare(
                    credentials?.password || "",
                    user.password
                );

                if (passwordCorrect) {
                    console.log({ user });
                    return {
                        id: user.id,
                        email: user.email,
                    };
                }

                return null;
            },
        }),
    ],
    callbacks: {
        async signIn({ account, profile }) {
            // await mongoose.connect(process.env.MONGO_URL);
            await dbConnect();

            if (account.provider === "google") {
                if (!profile || !profile.email) {
                    throw new Error("No profile");
                }

                try {
                    // await User.findOneAndUpdate(
                    //     { email: profile.email },
                    //     { name: profile.name },
                    //     { upsert: true }
                    // );
                    const user = await User.findOne({ email: profile.email });

                    if (user) {
                        // If the user is found, update their name
                        await User.updateOne(
                            { email: profile.email },
                            { $set: { name: profile.name } }
                        );
                    } else {
                        // If no user is found, create a new one
                        const newUser = new User({
                            email: profile.email,
                            name: profile.name,
                        });

                        await newUser.save(); // Save the new user to the database
                    }
                } catch (error) {
                    console.log(error);
                }
            }
            return true;
        },
    },
});

export { handler as GET, handler as POST };
