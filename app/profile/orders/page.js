'use client'
import React from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
const HistoryOrderPage = () => {
    return (
        <div className="py-8">
            <h1 className="border-b py-6 text-3xl font-semibold">
                Hồ sơ cá nhân{" "}
            </h1>
            <div className="grid grid-cols-8 pt-3 sm:grid-cols-10">
                <div className="relative my-4 w-56 sm:hidden">
                    <input
                        className="peer hidden"
                        type="checkbox"
                        name="select-1"
                        id="select-1"
                    />
                    <label
                        for="select-1"
                        className="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-gray-700 ring-gray-300 peer-checked:ring"
                    >
                        Thông tin tài khoản{" "}
                    </label>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-slate-700 transition peer-checked:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                    <ul className="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">
                        <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-primary hover:text-white">
                            Lịch sử đơn hàng
                        </li>
                        <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-primary hover:text-white">
                            Sổ địa chỉ
                        </li>
                        <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-primary hover:text-white">
                            Đánh giá và phản hồi
                        </li>
                        <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-primary hover:text-white">
                            Chính sách và câu hỏi thường gặp
                        </li>
                        <li
                            onClick={() => signOut({ callbackUrl: "/" })}
                            className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-primary hover:text-white"
                        >
                            Đăng xuất
                        </li>
                    </ul>
                </div>

                <div className="col-span-2 hidden sm:block">
                    <ul>
                        <li className="mt-5 cursor-pointer  border-l-2 border-transparent  px-2 py-2 font-semibold transition hover:border-l-primary hover:text-primary">
                            <Link
                                href={"/profile"}
                                className="flex gap-4 items-center"
                            >
                                <i className="ri-user-fill "></i>
                                <p>Thông tin tài khoản</p>
                            </Link>
                        </li>
                        <li className="mt-5 cursor-pointer border-l-2   border-l-primary  px-2 py-2 font-semibold transition hover:border-l-primary hover:text-primary text-primary ">
                            <div>
                                <Link
                                    href={"/profile/orders"}
                                    className="flex gap-4 items-center"
                                >
                                    <i className="ri-shopping-bag-3-fill "></i>
                                    <p>Lịch sử đơn hàng</p>
                                </Link>
                            </div>
                        </li>
                        <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-primary hover:text-primary">
                            <div className="flex gap-4 items-center">
                                <Link
                                    href={"/profile/user-address"}
                                    className="flex gap-4 items-center"
                                >
                                    <i className="ri-map-pin-2-fill"></i>
                                    <p>Sổ địa chỉ</p>
                                </Link>
                            </div>
                        </li>
                        <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-primary hover:text-primary">
                            <Link
                                href={"/profile/reviews"}
                                className="flex gap-4 items-center"
                            >
                                <i className="ri-shield-star-fill"></i>
                                <p>Đánh giá và phản hồi</p>
                            </Link>
                        </li>
                        <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-primary hover:text-primary">
                            <Link href={"/profile/faq"} className="flex gap-4">
                                <i className="ri-questionnaire-fill"></i>
                                <p>Chính sách và câu hỏi thường gặp</p>
                            </Link>
                        </li>
                        <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-primary hover:text-primary">
                            <div
                                className="flex gap-4 items-center"
                                onClick={() => signOut({ callbackUrl: "/" })}
                            >
                                <i className="ri-logout-box-r-fill"></i>
                                <p>Đăng xuất</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow">
                    <div className="pt-4">
                        <h1 className="py-2 text-2xl font-semibold">
                            Lịch sử đơn hàng
                        </h1>
                        <p
                            className="text-gray-600 mt-4 font-semibold
                        "
                        >
                            Đơn hàng của bạn
                        </p>
                    </div>
                    <p className="text-gray-600 text-center mt-8 text-sm font-bold">
                        Bạn chưa có đơn hàng nào...
                    </p>
                    {/* <div className='my-8 space-y-3 rounded-lg border px-2 py-4 sm:px-6'>
                        <div className='flex flex-col rounded-lg bg-white sm:flex-row'>
                            <img
                                className='m-2 h-28 w-28 rounded-md border object-cover object-center'
                                src='https://bizweb.dktcdn.net/thumb/compact/100/415/697/products/img-9367-1-56fef4f6-017a-4b12-96d8-fd10130f041b.jpg'
                                alt=''
                            />
                            <div className='flex w-full flex-col px-4 py-4 justify-between'>
                                <span className='font-semibold text-sm'>
                                    Áo Thun Teelab Local Brand Unisex Holiday
                                    special " Lướt sóng " Tshirt TS237
                                </span>
                                <div className='flex gap-4 mt-3 items-center '>
                                    <span className='float-right text-gray-400 text-sm'>
                                        Kem / M
                                    </span>
                                    <div className='flex items-center gap-0'>
                                        <button className='inline-flex items-center justify-center border-r-0 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300'>
                                            -
                                        </button>
                                        <input
                                            id='first_product'
                                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm block h-6 w-8  text-center appearance-none'
                                            required
                                            disabled
                                            defaultValue={1}
                                        />
                                        <button className='inline-flex items-center justify-center h-6 w-6 border-l-0 text-sm font-medium text-gray-500 bg-white border border-gray-300'>
                                            +
                                        </button>
                                    </div>
                                </div>
                                <p className='text-lg font-bold'>179.000 ₫</p>
                            </div>
                        </div>
                        <div className='flex flex-col rounded-lg bg-white sm:flex-row'>
                            <img
                                className='m-2 h-28 w-28 rounded-md border object-cover object-center'
                                src='https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                                alt=''
                            />
                            <div className='flex w-full flex-col px-4 py-4 justify-between'>
                                <span className='font-semibold text-sm'>
                                    Áo Thun Teelab Local Brand Unisex Holiday
                                    special " Lướt sóng " Tshirt TS237
                                </span>
                                <div className='flex gap-4 mt-3 items-center '>
                                    <span className='float-right text-gray-400 text-sm'>
                                        Cam / 2XL
                                    </span>
                                    <div className='flex items-center gap-0'>
                                        <button className='inline-flex items-center justify-center border-r-0 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300'>
                                            -
                                        </button>
                                        <input
                                            id='first_product'
                                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm block h-6 w-8  text-center appearance-none'
                                            required
                                            disabled
                                            defaultValue={1}
                                        />
                                        <button className='inline-flex items-center justify-center h-6 w-6 border-l-0 text-sm font-medium text-gray-500 bg-white border border-gray-300'>
                                            +
                                        </button>
                                    </div>
                                </div>

                                <p className='text-lg font-bold'>399.000 ₫</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default HistoryOrderPage;
