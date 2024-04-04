'use client';
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
const CheckoutPage = () => {
    return (
        <div>
            <div>
                <div className='flex flex-col items-center  bg-white py-4 sm:flex-row px-14'>
                    <a href='#' className='text-2xl font-bold text-gray-800'>
                        Thông tin vận chuyển
                    </a>
                </div>
                <div className='grid px-2 md:px-10 lg:grid-cols-2 '>
                    <div className='mt-10 bg-gray-50 px-4 pt-8 lg:mt-0'>
                        <p className='text-xl font-medium'>
                            Thông tin chi tiết
                        </p>
                        <p className='text-gray-400'>
                            Hoàn thành thông tin liên hệ của bạn
                        </p>
                        <div className=''>
                            <label
                                for='email'
                                className='mt-4 mb-2 block text-sm font-medium'
                            >
                                Email
                            </label>
                            <div className='relative'>
                                <input
                                    type='text'
                                    id='email'
                                    name='email'
                                    required
                                    className='w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-gray-500 focus:ring-gray-500'
                                />
                                <div className='pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3'>
                                    <i className='ri-mail-send-line'></i>
                                </div>
                            </div>
                            <label
                                for='Username'
                                className='mt-4 mb-2 block text-sm font-medium'
                            >
                                Họ và tên
                            </label>
                            <div className='relative'>
                                <input
                                    type='text'
                                    id='Username'
                                    name='Username'
                                    required
                                    className='w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-gray-500 focus:ring-gray-500'
                                />
                                <div className='pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3'>
                                    <i className='ri-id-card-line'></i>
                                </div>
                            </div>

                            <label
                                for='UserPhone'
                                className='mt-4 mb-2 block text-sm font-medium'
                            >
                                Số điện thoại
                            </label>
                            <div className='relative'>
                                <input
                                    type='text'
                                    id='UserPhone'
                                    name='UserPhone'
                                    required
                                    className='w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-gray-500 focus:ring-gray-500'
                                />
                                <div className='pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3'>
                                    <i className='ri-phone-line'></i>
                                </div>
                            </div>

                            <label
                                for='billing-address'
                                className='mt-4 mb-2 block text-sm font-medium'
                            >
                                Địa chỉ giao hàng
                            </label>
                            <div className='flex flex-col sm:flex-row'>
                                <div className='relative flex-shrink-0 w-full'>
                                    <input
                                        type='text'
                                        id='billing-address'
                                        name='billing-address'
                                        required
                                        className='w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-gray-500 focus:ring-gray-500'
                                    />
                                    <div className='pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3'>
                                        <i class='ri-home-8-line'></i>
                                    </div>
                                </div>
                            </div>
                            <label
                                for='billing-note'
                                className='mt-4 mb-2 block text-sm font-medium'
                            >
                                Ghi chú
                            </label>
                            <div className='flex flex-col sm:flex-row'>
                                <div className='relative flex-shrink-0 w-full'>
                                    <input
                                        type='text'
                                        id='billing-note'
                                        name='billing-note'
                                        className='w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-gray-500 focus:ring-gray-500'
                                        placeholder='Ví dụ: Giao hàng giờ hành chính'
                                    />
                                    <div className='pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3'>
                                        <i className='ri-sticky-note-line'></i>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-6 border-t border-b py-2'>
                                <div className='flex items-center justify-between'>
                                    <p className='text-sm font-medium text-gray-900'>
                                        Tạm tính
                                    </p>
                                    <p className='font-semibold text-gray-900'>
                                        578.000 ₫
                                    </p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p className='text-sm font-medium text-gray-900'>
                                        Phí giao hàng
                                    </p>
                                    <p className='font-semibold text-gray-900'>
                                        30.000 ₫
                                    </p>
                                </div>
                            </div>
                            <div className='mt-6 flex items-center justify-between'>
                                <p className='text-sm font-medium text-gray-900'>
                                    Tổng
                                </p>
                                <p className='text-2xl font-semibold text-gray-900'>
                                    608.000 ₫
                                </p>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <Link
                                className='w-full bg-primary text-center rounded-md mt-6 text-white py-3 font-bold'
                                href={'/checkout/success'}
                            >
                                Đặt hàng
                            </Link>
                        </div>
                    </div>
                    <div className='px-4 pt-8'>
                        <p className='text-xl font-medium'>Tóm tắt đơn hàng</p>
                        <p className='text-gray-400'>
                            Hãy kiểm tra kỹ lưỡng thông tin của đơn hàng
                        </p>
                        <div className='mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6'>
                            <div className='flex flex-col rounded-lg bg-white sm:flex-row'>
                                <img
                                    className='m-2 h-28 w-28 rounded-md border object-cover object-center'
                                    src='https://bizweb.dktcdn.net/thumb/compact/100/415/697/products/img-9367-1-56fef4f6-017a-4b12-96d8-fd10130f041b.jpg'
                                    alt=''
                                />
                                <div className='flex w-full flex-col px-4 py-4 justify-between'>
                                    <span className='font-semibold text-sm'>
                                        Áo Thun Teelab Local Brand Unisex
                                        Holiday special " Lướt sóng " Tshirt
                                        TS237
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
                                    <p className='text-lg font-bold'>
                                        179.000 ₫
                                    </p>
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
                                        Áo Thun Teelab Local Brand Unisex
                                        Holiday special " Lướt sóng " Tshirt
                                        TS237
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

                                    <p className='text-lg font-bold'>
                                        399.000 ₫
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p className='mt-8 text-lg font-medium'>
                            Phương thức thanh toán
                        </p>
                        <form className='mt-5 grid gap-6'>
                            <div className='relative'>
                                <input
                                    className='peer hidden'
                                    id='radio_1'
                                    type='radio'
                                    name='radio'
                                    checked
                                />
                                <span className='peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white'></span>
                                <label
                                    className='peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4'
                                    for='radio_1'
                                >
                                    <div className='flex items-center'>
                                        <i className='ri-truck-line text-4xl text-primary'></i>

                                        <div className='ml-5'>
                                            <span className='mt-2 font-semibold'>
                                                COD
                                            </span>
                                            <p className='text-slate-500 text-sm leading-6'>
                                                Thanh toán khi nhận hàng
                                            </p>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
