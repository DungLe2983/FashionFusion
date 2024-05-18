'use client';
import React, { useState } from 'react';
import { TableProductInCart } from '../components/layout/TableProductInCart';
import Link from 'next/link';
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const CartPage = () => {
    //check authenticated
    const session = useSession();
    const { status } = session;

    
    //
    const [data, setData] = useState([
        {
            title: "Quần Short Lưới Teelab Local Brand Unisex Airism Texture PS067",
            color: "Den/M",
            price: 179000,
            quantity: 1,
            total: 179000,
        },
        {
            title: "Áo Thun Teelab Local Brand Unisex Holiday special Lượt sóng Tshirt TS237",
            color: "Kem/M",
            price: 185000,
            quantity: 1,
            total: 185000,
        },
    ]);
    
    // const handleQuantityChange = (e, index) => {
        //     const newData = [...data];
        //     newData[index].quantity = parseInt(e.target.value);
        //     newData[index].total = newData[index].quantity * newData[index].price;
        //     setData(newData);
        // };
        
        if (status === "loading") {
            return "Loading...."
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
                        <TableProductInCart />
                        <TableProductInCart />
                        <TableProductInCart />
                    </table>
                </div>
                <div className="mt-6 flex justify-end">
                    <div className="text-right flex flex-col gap-4 ">
                        <div className=" flex items-baseline gap-60">
                            <p className="font-semibold text-gray-900">
                                Tổng tiền:
                            </p>
                            <span className="text-red-500 font-semibold text-xl">
                                1.650.000đ
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
