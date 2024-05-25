'use client';
import React, { useState } from 'react';

const Page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            <button
                data-modal-target='crud-modal'
                data-modal-toggle='crud-modal'
                className='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                type='button'
                onClick={toggleModal}
            >
                Toggle modal
            </button>

            {isModalOpen && (
                <div className='fixed top-0 right-0 bottom-0 left-0 bg-black opacity-50 z-40'></div>
            )}

            <div
                id='crud-modal'
                tabIndex='-1'
                aria-hidden='true'
                className={`${
                    isModalOpen ? 'fixed' : 'hidden'
                } overflow-y-auto overflow-x-hidden top-0 right-0 bottom-0 left-0 flex items-center justify-center z-50`}
            >
                <div className='relative p-4 w-full max-w-md'>
                    <div className='relative bg-gray-100 rounded-lg shadow-md'>
                        <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t'>
                            <h3 className='text-lg font-semibold text-gray-900'>
                                Create New Product
                            </h3>
                            <button
                                type='button'
                                className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center'
                                data-modal-toggle='crud-modal'
                                onClick={toggleModal}
                            >
                                <svg
                                    className='w-3 h-3'
                                    aria-hidden='true'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 14 14'
                                >
                                    <path
                                        stroke='currentColor'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                                    />
                                </svg>
                                <span className='sr-only'>Close modal</span>
                            </button>
                        </div>

                        <form className='p-4 md:p-5'>
                            <div className='grid gap-4 mb-4 grid-cols-2'>
                                <div className='col-span-2'>
                                    <label
                                        htmlFor='name'
                                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                                    >
                                        Tỉnh/Thành phố
                                    </label>
                                    <input
                                        type='text'
                                        name='name'
                                        id='name'
                                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                                        placeholder='Nhập tên tỉnh/thành phố'
                                        required
                                    />
                                </div>
                                <div className='col-span-2 sm:col-span-1'>
                                    <label
                                        htmlFor='price'
                                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                                    >
                                        Quận/Huyện
                                    </label>
                                    <input
                                        type='number'
                                        name='price'
                                        id='price'
                                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                                        placeholder='$2999'
                                        required
                                    />
                                </div>
                                <div className='col-span-2 sm:col-span-1'>
                                    <label
                                        htmlFor='category'
                                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                                    >
                                        Category
                                    </label>
                                    <select
                                        id='category'
                                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                                    >
                                        <option value=''>
                                            Select category
                                        </option>
                                        <option value='TV'>TV/Monitors</option>
                                        <option value='PC'>PC</option>
                                        <option value='GA'>
                                            Gaming/Console
                                        </option>
                                        <option value='PH'>Phones</option>
                                    </select>
                                </div>
                                <div className='col-span-2'>
                                    <label
                                        htmlFor='description'
                                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                                    >
                                        Product Description
                                    </label>
                                    <textarea
                                        id='description'
                                        rows='4'
                                        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                        placeholder='Write product description here'
                                    ></textarea>
                                </div>
                            </div>
                            <button
                                type='submit'
                                className='text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                            >
                                <svg
                                    className='me-1 -ms-1 w-5 h-5'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
                                        clipRule='evenodd'
                                    ></path>
                                </svg>
                                Add new product
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
