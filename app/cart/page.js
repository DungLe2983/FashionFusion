"use client";
import React, { useEffect, useState } from "react";
import { TableProductInCart } from "../components/layout/TableProductInCart";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const session = useSession();
    const { status } = session;

    // Tìm cartId từ email
    const [cartId, setCartId] = useState("");
    const userEmail = session.data?.session.user.email;

    const getCart = async (email) => {
        try {
            const res = await fetch(`/api/users/${email}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });

            if (res.ok) {
                const user = await res.json();
                const userId = user._id;

                if (userId) {
                    try {
                        const response = await fetch("/api/cart", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ user_id: userId }),
                        });

                        if (response.ok) {
                            const cart = await response.json();
                            if (cart) {
                                setCartId(cart._id);
                            }
                        } else {
                            console.error(
                                "Error fetching cart:",
                                response.statusText
                            );
                        }
                    } catch (error) {
                        console.error("Error:", error);
                    }
                } else {
                    console.error("User not found or response is empty.");
                }
            } else {
                console.error("Error fetching user:", res.statusText);
            }
        } catch (error) {
            console.error("Error in fetch:", error);
        }
    };

    useEffect(() => {
        if (userEmail) {
            getCart(userEmail);
        }
        if (cartId) {
            const fetchCartItems = async () => {
                try {
                    const response = await fetch(`/api/cart-item/${cartId}`);
                    if (!response.ok) {
                        throw new Error(
                            `HTTP error status: ${response.status}`
                        );
                    }
                    const data = await response.json();
                    setCartItems(data);
                } catch (error) {
                    console.error("Failed to fetch cart items:", error);
                }
            };

            fetchCartItems();
        }
    }, [userEmail, cartId]);

    useEffect(() => {
        if (cartItems.length > 0) {
            let total = 0;
            cartItems.forEach((item) => {
                total += item.product_item_id.price * item.item_quantity; // Giả sử mỗi item có thuộc tính price và quantity
            });
            setTotalPrice(total);
        }
    }, [cartItems]);

    // Check authenticated
    if (status === "loading") {
        return "Loading....";
    }

    if (status === "unauthenticated") {
        return redirect("/login");
    }

    return (
        <div>
            <h2 className="text-center font-bold text-3xl mt-8">
                Giỏ hàng của bạn
            </h2>
            <p className="text-center text-sm mt-2">
                Có <span className="font-semibold">3 sản phẩm</span> trong giỏ
                hàng
            </p>
            <div className="table-container mt-16">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Thông tin sản phẩm
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Số lượng
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Đơn giá
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Thành tiền
                                </th>
                            </tr>
                        </thead>
                        {/* <TableProductInCart /> */}
                        {cartItems.map((item, index) => (
                            <TableProductInCart key={index} item={item} />
                        ))}
                    </table>
                </div>
                <div className="mt-6 flex justify-end">
                    <div className="text-right flex flex-col gap-4 ">
                        <div className=" flex items-baseline gap-60">
                            <p className="font-semibold text-gray-900">
                                Tổng tiền:
                            </p>
                            <span className="text-red-500 font-semibold text-xl">
                                {totalPrice.toLocaleString()}đ
                            </span>
                        </div>
                        <Link
                            href={"/checkout"}
                            className=" text-center bg-primary font-bold py-3 w-full text-white "
                        >
                            Thanh toán
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
