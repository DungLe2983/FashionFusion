'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
const HistoryOrderPage = () => {
    const session = useSession();
    const userEmail = session.data?.session.user.email;
    const [historyBuy, setHistoryBuy] = useState([]);

    async function getOrderHistory(email) {
        try {
            const res = await fetch(`/api/orderhistory?email=${email}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            if (res.ok) {
                const data = await res.json();
                // console.log('Response history:', data);
                if (data) {
                    setHistoryBuy(data);
                } else {
                    console.error('Data not found or response is empty.');
                }
            } else {
                console.error('Error fetching user:', res.statusText);
            }
        } catch (error) {
            console.error('Error in fetch:', error);
        }
    }
    useEffect(() => {
        if (userEmail) {
            getOrderHistory(userEmail);
        }
    }, [userEmail]);

    return (
        <div className='py-8'>
            <h1 className='border-b py-6 text-3xl font-semibold'>
                Hồ sơ cá nhân{' '}
            </h1>
            <div className='grid grid-cols-8 pt-3 sm:grid-cols-10'>
                <div className='relative my-4 w-56 sm:hidden'>
                    <input
                        className='peer hidden'
                        type='checkbox'
                        name='select-1'
                        id='select-1'
                    />
                    <label
                        for='select-1'
                        className='flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-gray-700 ring-gray-300 peer-checked:ring'
                    >
                        Lịch sử đơn hàng{' '}
                    </label>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-slate-700 transition peer-checked:rotate-180'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        stroke-width='2'
                    >
                        <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M19 9l-7 7-7-7'
                        />
                    </svg>
                    <ul className='max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3'>
                        <li className='cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-primary hover:text-white'>
                            <Link href={'/profile'}>Thông tin tài khoản</Link>
                        </li>
                        <li className='cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-primary hover:text-white'>
                            <Link href={'/profile/user-address'}>
                                Sổ địa chỉ
                            </Link>
                        </li>
                        <li className='cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-primary hover:text-white'>
                            <Link href={'/profile/reviews'}>
                                Đánh giá và phản hồi
                            </Link>
                        </li>
                        <li className='cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-primary hover:text-white'>
                            <Link href={'/profile/faq'}>
                                Chính sách và câu hỏi thường gặp
                            </Link>
                        </li>
                        <li
                            onClick={() => signOut({ callbackUrl: '/' })}
                            className='cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-primary hover:text-white'
                        >
                            Đăng xuất
                        </li>
                    </ul>
                </div>

                <div className='col-span-2 hidden sm:block'>
                    <ul>
                        <li className='mt-5 cursor-pointer  border-l-2 border-transparent  px-2 py-2 font-semibold transition hover:border-l-primary hover:text-primary'>
                            <Link
                                href={'/profile'}
                                className='flex gap-4 items-center'
                            >
                                <i className='ri-user-fill '></i>
                                <p>Thông tin tài khoản</p>
                            </Link>
                        </li>
                        <li className='mt-5 cursor-pointer border-l-2   border-l-primary  px-2 py-2 font-semibold transition hover:border-l-primary hover:text-primary text-primary '>
                            <div>
                                <Link
                                    href={'/profile/orders'}
                                    className='flex gap-4 items-center'
                                >
                                    <i className='ri-shopping-bag-3-fill '></i>
                                    <p>Lịch sử đơn hàng</p>
                                </Link>
                            </div>
                        </li>
                        <li className='mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-primary hover:text-primary'>
                            <div className='flex gap-4 items-center'>
                                <Link
                                    href={'/profile/user-address'}
                                    className='flex gap-4 items-center'
                                >
                                    <i className='ri-map-pin-2-fill'></i>
                                    <p>Sổ địa chỉ</p>
                                </Link>
                            </div>
                        </li>
                        <li className='mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-primary hover:text-primary'>
                            <Link
                                href={'/profile/reviews'}
                                className='flex gap-4 items-center'
                            >
                                <i className='ri-shield-star-fill'></i>
                                <p>Đánh giá và phản hồi</p>
                            </Link>
                        </li>
                        <li className='mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-primary hover:text-primary'>
                            <Link href={'/profile/faq'} className='flex gap-4'>
                                <i className='ri-questionnaire-fill'></i>
                                <p>Chính sách và câu hỏi thường gặp</p>
                            </Link>
                        </li>
                        <li className='mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-primary hover:text-primary'>
                            <div
                                className='flex gap-4 items-center'
                                onClick={() => signOut({ callbackUrl: '/' })}
                            >
                                <i className='ri-logout-box-r-fill'></i>
                                <p>Đăng xuất</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className='col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow'>
                    <div className='pt-4'>
                        <h1 className='py-2 text-2xl font-semibold'>
                            Lịch sử đơn hàng
                        </h1>
                        <p
                            className='text-gray-600 mt-4 font-semibold
                        '
                        >
                            Đơn hàng của bạn
                        </p>
                    </div>
                    {historyBuy.length === 0 ? (
                        <p className='text-gray-600 text-center mt-8 text-sm font-bold'>
                            Bạn chưa có đơn hàng nào...
                        </p>
                    ) : (
                        <div className='relative overflow-x-auto shadow-md sm:rounded-lg my-8'>
                            <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                    <tr>
                                        <th scope='col' className=' py-3'>
                                            Thông tin sản phẩm
                                        </th>
                                        <th
                                            scope='col'
                                            className='pl-20 md:px-6 py-3 '
                                        >
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
                                <tbody>
                                    {historyBuy.map((item, index) => (
                                        <tr
                                            key={index}
                                            className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
                                        >
                                            <td className='p-4'>
                                                <div className='flex gap-2'>
                                                    <img
                                                        className='w-32 h-32 object-cover'
                                                        src={
                                                            item.product_item_id
                                                                ?.product_id
                                                                .image
                                                        }
                                                        alt='productInCartImg'
                                                    />
                                                    <div className='flex flex-col gap-2 justify-center text-sm'>
                                                        <p className='cursor-pointer font-semibold'>
                                                            {
                                                                item
                                                                    .product_item_id
                                                                    ?.product_id
                                                                    .name
                                                            }
                                                        </p>
                                                        <p>
                                                            {
                                                                item
                                                                    .product_item_id
                                                                    ?.color_id
                                                                    .name
                                                            }{' '}
                                                            /{' '}
                                                            {
                                                                item
                                                                    .product_item_id
                                                                    ?.size_id
                                                                    .name
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='pl-20 md:px-6 py-4 text-center'>
                                                <p className=''>
                                                    {item.quantity}
                                                </p>
                                            </td>
                                            <td className='px-6 py-4 font-semibold text-gray-900'>{`${item.product_item_id?.price} đ`}</td>
                                            <td className='px-6 py-4 font-semibold text-gray-900'>{`${item.price}đ`}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HistoryOrderPage;
