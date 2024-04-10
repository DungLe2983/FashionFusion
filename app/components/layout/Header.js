'use client';
import { useContext, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div>
            <nav className='bg-white border-gray-200 dark:bg-gray-900 '>
                <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                    <a
                        href='/'
                        className='flex items-center  rtl:space-x-reverse'
                    >
                        <img
                            src={'/logo.png'}
                            className=' w-10 h-10 md:w-20 md:h-20'
                            alt='Flowbite Logo'
                        />
                        <span className='self-center text-sm md:text-2xl font-semibold whitespace-nowrap text-primary'>
                            Fashion Fusion
                        </span>
                    </a>
                    <div className='flex md:order-2 '>
                        <Link
                            href={'/login'}
                            type='button'
                            data-collapse-toggle='navbar-search'
                            aria-controls='navbar-search'
                            aria-expanded='false'
                            className='md:order-3 text-black font-bold ml-0 md:ml-4 px-4 md:px-6 focus:outline-none  bg-primary rounded-3xl text-xs md:text-sm p-2.5 me-1'
                        >
                            Login
                            <span className='sr-only'>Login</span>
                        </Link>
                        <div className='relative hidden md:block'>
                            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                                <span className='sr-only'>Search icon</span>
                                <i
                                    className='ri-search-line text-gray-500
                                dark:text-gray-400'
                                ></i>
                            </div>
                            <input
                                type='text'
                                id='search-navbar'
                                className='block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 '
                                placeholder='Search...'
                            />
                        </div>
                        <div className='btnCart cursor-pointer hover:text-primary mt-1 md:mt-0 ml-0 md:ml-2'>
                            <a href='/cart'>
                                <i className='ri-shopping-cart-fill text-2xl md:text-3xl mx-2 '></i>
                            </a>
                        </div>
                        <button
                            data-collapse-toggle='navbar-search'
                            type='button'
                            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                            aria-controls='navbar-search'
                            aria-expanded='false'
                            onClick={toggleMobileMenu}
                        >
                            <span className='sr-only'>Open main menu</span>
                            <i className='ri-menu-line text-base '></i>
                        </button>
                    </div>
                    <div
                        className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                            isMobileMenuOpen ? 'block' : 'hidden'
                        }`}
                        id='navbar-search'
                    >
                        <div className='relative mt-3 md:hidden'>
                            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                                <i
                                    className='ri-search-line text-gray-500
                                dark:text-gray-400'
                                ></i>
                            </div>
                            <input
                                type='text'
                                id='search-navbar'
                                className='block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                placeholder='Search...'
                            />
                        </div>
                        <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white'>
                            <li>
                                <a
                                    href='/sale'
                                    className='block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0'
                                    aria-current='page'
                                >
                                    Sale
                                </a>
                            </li>
                            <li>
                                <a
                                    href='/products'
                                    className='block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0'
                                >
                                    Products
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0'
                                >
                                    Male
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0'
                                >
                                    Female
                                </a>
                            </li>
                            <li>
                                <a
                                    href='/contact'
                                    className='block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0'
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
