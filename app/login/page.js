"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Flamenco } from "next/font/google";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginInProgress, setLoginInProgress] = useState(false);
    const [loginFalse, setLoginFalse] = useState(false);

    const router = useRouter();

    async function loginWithGoogle() {
        setLoginFalse(false);
        signIn("google", { callbackUrl: "/" });
    }

    async function handleFormSubmit(ev) {
        ev.preventDefault();
        setLoginInProgress(true);
        setLoginFalse(false);

        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (res.ok) {
            router.push("/");
            console.log("Sign-in successfully");
        } else {
            console.log("Sign-in failed");
            setLoginFalse(true);
        }

        setLoginInProgress(false);
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <p className="flex items-center mb-6 text-4xl font-semibold text-primary">
                    Login
                </p>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Access to your account
                        </h1>
                        <h1>
                            {loginFalse && (
                                <div className="text-sm font-light text-red-700 dark:text-gray-400 ">
                                    Email or password incorrect
                                </div>
                            )}
                        </h1>
                        <form
                            className="space-y-4 md:space-y-6"
                            action="#"
                            onSubmit={handleFormSubmit}
                        >
                            <div>
                                <label
                                    for="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                                    placeholder="Enter your email"
                                    required=""
                                    disabled={loginInProgress}
                                    value={email}
                                    onChange={(ev) => {
                                        setEmail(ev.target.value);
                                    }}
                                />
                            </div>
                            <div>
                                <label
                                    for="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                                    required=""
                                    disabled={loginInProgress}
                                    value={password}
                                    onChange={(ev) => {
                                        setPassword(ev.target.value);
                                    }}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full text-white bg-primary focus:ring-4 focus:outline-none focus:ring-gray-300 
                                font-medium rounded-lg text-sm px-5 py-3 text-center "
                                disabled={loginInProgress}
                            >
                                Login
                            </button>
                            <p className="text-center text-gray-500 text-sm">
                                or login with provider
                            </p>
                            <button
                                className="w-full flex items-center justify-center bg-gray-300  gap-2 font-medium rounded-lg text-sm px-5 py-2 text-center "
                                onClick={loginWithGoogle}
                                type="button"
                            >
                                <Image
                                    src={"/google.png"}
                                    alt={"googleIcon"}
                                    width={30}
                                    height={30}
                                />
                                Login with Google
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet?{" "}
                                <Link
                                    href="/register"
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Sign up
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
