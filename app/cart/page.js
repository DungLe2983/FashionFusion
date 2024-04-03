'use client';
import React, { useState } from 'react';
import { TableProductInCart } from '../components/layout/TableProductInCart';

const CartPage = () => {
    const [data, setData] = useState([
        {
            title: 'Quần Short Lưới Teelab Local Brand Unisex Airism Texture PS067',
            color: 'Den/M',
            price: 179000,
            quantity: 1,
            total: 179000,
        },
        {
            title: 'Áo Thun Teelab Local Brand Unisex Holiday special Lượt sóng Tshirt TS237',
            color: 'Kem/M',
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

    return (
        <div>
            <h2 className='text-center font-bold text-3xl mt-8'>
                Giỏ hàng của bạn
            </h2>
            <p className='text-center text-sm mt-2'>
                Có <span className='font-semibold'>3 sản phẩm</span> trong giỏ
                hàng
            </p>
            <div className='table-container mt-16'>
                <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                    <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                            <tr>
                                <th scope='col' className='px-6 py-3'>
                                    Thông tin sản phẩm
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Số lượng
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Đơn giá
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Thành tiền
                                </th>
                            </tr>
                        </thead>
                        <TableProductInCart />
                        <TableProductInCart />
                        <TableProductInCart />
                    </table>
                </div>
                <div className='mt-6 flex justify-end'>
                    <div className='text-right '>
                        <div className=' flex items-baseline gap-60'>
                            <p className='font-semibold text-gray-900'>
                                Tổng tiền:
                            </p>
                            <span className='text-red-500 font-semibold text-xl'>
                                1.650.000đ
                            </span>
                        </div>
                        <button className='font-semibold bg-gray-900 py-3 w-full text-white mt-4 '>
                            Thanh toán
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
