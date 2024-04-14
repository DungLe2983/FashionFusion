import React from 'react';
import Link from 'next/link';
const UserAddressPage = () => {
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
                        Thông tin tài khoản{' '}
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
                            Lịch sử đơn hàng
                        </li>
                        <li className='cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-primary hover:text-white'>
                            Sổ địa chỉ
                        </li>
                        <li className='cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-primary hover:text-white'>
                            Đánh giá và phản hồi
                        </li>
                        <li className='cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-primary hover:text-white'>
                            Chính sách và câu hỏi thường gặp
                        </li>
                        <li className='cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-primary hover:text-white'>
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
                        <li className='mt-5 cursor-pointer border-l-2   px-2 py-2 font-semibold transition hover:border-l-primary hover:text-primary border-transparent '>
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
                        <li className='mt-5 cursor-pointer border-l-2  px-2 py-2 font-semibold transition hover:border-l-primary hover:text-primary border-l-primary text-primary '>
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
                            <div className='flex gap-4 items-center'>
                                <i className='ri-logout-box-r-fill'></i>
                                <p>Đăng xuất</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className='col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow'>
                    <div className='pt-4'>
                        <div className='flex items-center justify-between'>
                            <h1 className='py-2 text-2xl font-semibold'>
                                Địa chỉ giao hàng
                            </h1>
                            <button className='bg-slate-800 px-6 rounded-3xl text-white py-3'>
                                Thêm địa chỉ mới
                            </button>
                        </div>
                    </div>
                    <hr className='mt-4 mb-8' />
                    <h2 className='font-semibold text-xl'>Sổ địa chỉ:</h2>
                    <div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between mt-4'>
                                <p className=' font-medium text-lg'>
                                    Dung Le Quoc
                                </p>
                                <div className='flex gap-2 text-sm text-primary '>
                                    <button className=' border-r-2 border-gray-300 pr-2 hover:text-hoverColor'>
                                        Cập nhật
                                    </button>
                                    <button>Xóa</button>
                                </div>
                            </div>
                            <p className='text-gray-600 text-sm'>0914700123</p>
                            <p className='text-gray-600 text-sm'>
                                115A , đường D2, huyện Củ Chi, Hồ Chí Minh
                            </p>
                        </div>
                        <hr className='mt-4' />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UserAddressPage;
