import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-white mt-40'>
            <div className='mx-auto w-full max-w-screen-xl'>
                <div className='grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4'>
                    <div>
                        <h2 className='mb-6 text-base font-semibold text-gray-900 '>
                            Về chúng tôi
                        </h2>
                        <p className='text-gray-500 dark:text-gray-400 font-medium text-sm leading-7'>
                            Website chính thức và duy nhất của FashionFusion.
                            Hiện tại chúng mình chỉ nhận đơn hàng trên website
                            chứ không nhận bất kỳ nơi nào khác nhé!
                        </p>
                    </div>
                    <div>
                        <h2 className='mb-6  text-base font-semibold text-gray-900 '>
                            Danh mục sản phẩm
                        </h2>
                        <ul className='text-gray-500 dark:text-gray-400 font-medium list-disc pl-6 text-sm '>
                            <li className='mb-4'>
                                <a href='#' className='hover:underline'>
                                    Áo T-shirt
                                </a>
                            </li>
                            <li className='mb-4'>
                                <a href='#' className='hover:underline'>
                                    Áo Polo
                                </a>
                            </li>
                            <li className='mb-4'>
                                <a href='#' className='hover:underline'>
                                    Áo thể thao
                                </a>
                            </li>
                            <li className='mb-4'>
                                <a href='#' className='hover:underline'>
                                    Đồ lưu niệm
                                </a>
                            </li>
                            <li className='mb-4'>
                                <a href='#' className='hover:underline'>
                                    Áo ba lỗ
                                </a>
                            </li>
                            <li className='mb-4'>
                                <a href='#' className='hover:underline'>
                                    Áo khoác
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='mb-6  text-base font-semibold text-gray-900 '>
                            Thông tin
                        </h2>
                        <ul className='text-gray-500 dark:text-gray-400 font-medium text-sm list-disc pl-4'>
                            <li className='mb-4'>
                                <a
                                    href='/profile/faq'
                                    className='hover:underline'
                                >
                                    Giới thiệu
                                </a>
                            </li>
                            <li className='mb-4'>
                                <a
                                    href='/profile/faq'
                                    className='hover:underline'
                                >
                                    Chính sách bảo mật
                                </a>
                            </li>
                            <li className='mb-4'>
                                <a
                                    href='/profile/faq'
                                    className='hover:underline'
                                >
                                    Điều khoản
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='mb-6  text-base font-semibold text-gray-900 '>
                            Hỗ trợ
                        </h2>
                        <ul className='text-gray-500 dark:text-gray-400 font-medium text-sm '>
                            <li className='mb-4'>
                                <p>
                                    Mọi thắc mắc và góp ý cần hỗ trợ xin vui
                                    lòng liên hệ Fanpage và Instagram
                                </p>
                            </li>
                            <li className='mb-4 flex gap-2'>
                                <i className='ri-facebook-circle-fill text-xl'></i>
                                <i className='ri-instagram-fill text-xl'></i>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between'>
                    <span className='text-sm text-gray-500 dark:text-gray-300 sm:text-center'>
                        © 2024 <a href='https://flowbite.com/'>FashionFusion</a>
                        . All Rights Reserved.
                    </span>
                    <div className='flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse'>
                        <a
                            href='#'
                            className='text-gray-400 hover:text-gray-900 dark:hover:text-white'
                        >
                            <i className='ri-twitter-line'></i>
                            <span className='sr-only'>Facebook page</span>
                        </a>
                        <a
                            href='#'
                            className='text-gray-400 hover:text-gray-900 dark:hover:text-white'
                        >
                            <i class='ri-store-2-line'></i>
                            <span className='sr-only'>Twitter page</span>
                        </a>
                        <a
                            href='#'
                            className='text-gray-400 hover:text-gray-900 dark:hover:text-white'
                        >
                            <i className='ri-tiktok-fill'></i>
                            <span className='sr-only'>GitHub account</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
