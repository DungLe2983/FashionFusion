'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import Address from '../../components/Address';
// import Address from '@/app/components/Address';
import toast from 'react-hot-toast';

const UserAddressPage = () => {
    const [userData, setUserData] = useState(null);

    const session = useSession();
    const email = session.data?.session.user.email;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [formData, setFormData] = useState({
        city: '',
        district: '',
        ward: '',
        address: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Hàm xử lý khi submit form
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newAddress =
            formData.address.toString() +
            ', ' +
            formData.ward.toString() +
            ', ' +
            formData.district.toString() +
            ', ' +
            formData.city.toString();
        console.log(newAddress);

        try {
            const res = await fetch(`/api/users/${email}/addresses`, {
                method: 'POST',
                body: JSON.stringify({ address: newAddress }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (res.ok) {
                toast.success('Thêm mới địa chỉ thành công!');
                setFormData({
                    city: '',
                    district: '',
                    ward: '',
                    address: '',
                });
            } else {
                toast.error('Lỗi thêm mới');
            }
        } catch (err) {
            toast.error(err);
        }
        setIsModalOpen(false);
        getAddress(email);
    };

    async function getAddress(email) {
        if (!email) {
            console.log('No email:', email);
        }
        try {
            const res = await fetch(`/api/users/${email}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            const user = await res.json();
            if (res.ok) {
                setUserData(user);
                console.log('Get data successful:', user.address);
            } else {
                console.error('Error fetching user:', res.statusText);
            }
        } catch (error) {
            console.error('Error in fetch:', error);
        }
    }

    const deleteAddress = (address) => {
        // Xử lý logic xóa địa chỉ
        getAddress(email);
    };

    function changeAddress() {
        //using API to change Address
        console.log('change Address!!', email);
        toast.success('Cập nhật thành công!');
    }

    function addNewAddress() {
        setIsModalOpen(!isModalOpen);
        //using API to add new Address
        // console.log('add new Address!!', email);
        // toast.success('Thêm mới thành công!');
    }

    useEffect(() => {
        getAddress(email);
    }, [session]);

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
                        Sổ địa chỉ{' '}
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
                            <Link href={'/profile/orders'}>
                                Lịch sử đơn hàng
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
                            <div
                                onClick={() => signOut({ callbackUrl: '/' })}
                                className='flex gap-4 items-center'
                            >
                                <i className='ri-logout-box-r-fill'></i>
                                <p>Đăng xuất</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className='col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow'>
                    <div className='pt-4'>
                        <div className='flex items-center justify-between'>
                            <h1 className='py-2 text-xl font-semibold'>
                                Địa chỉ giao hàng
                            </h1>
                            <button
                                data-modal-target='crud-modal'
                                data-modal-toggle='crud-modal'
                                className='bg-slate-800 px-2 text-xs md:text-base md:px-6 rounded-3xl text-white py-3'
                                onClick={addNewAddress}
                            >
                                Thêm địa chỉ mới
                            </button>
                        </div>
                    </div>
                    <hr className='mt-4 mb-8' />
                    <h2 className='font-semibold text-xl'>Sổ địa chỉ:</h2>
                    <div>
                        <div className='flex flex-col gap-2'>
                            {userData && (
                                <div>
                                    {userData.address.map((addr, index) => (
                                        <Address
                                            key={index}
                                            address={addr}
                                            onChange={changeAddress}
                                            email={email}
                                            onDeleteSuccess={deleteAddress}
                                            // onDelete={deleteAddress}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
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
                <div className='relative p-4 w-full max-w-lg'>
                    <div className='relative bg-gray-100 rounded-lg shadow-md'>
                        <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t'>
                            <h3 className='text-lg font-semibold text-primary'>
                                Thêm địa chỉ mới
                            </h3>
                            <button
                                type='button'
                                className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center'
                                data-modal-toggle='crud-modal'
                                onClick={() => setIsModalOpen(false)}
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
                        <form className='p-4 md:p-5' onSubmit={handleSubmit}>
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
                                        name='city'
                                        value={formData.city}
                                        onChange={handleChange}
                                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5 '
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
                                        type='text'
                                        name='district'
                                        value={formData.district}
                                        onChange={handleChange}
                                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
                                        placeholder=''
                                        required
                                    />
                                </div>
                                <div className='col-span-2 sm:col-span-1'>
                                    <label
                                        htmlFor='category'
                                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                                    >
                                        Phường/Xã
                                    </label>
                                    <input
                                        type='text'
                                        name='ward'
                                        value={formData.ward}
                                        onChange={handleChange}
                                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
                                        placeholder=''
                                        required
                                    />
                                </div>
                                <div className='col-span-2'>
                                    <label
                                        htmlFor='description'
                                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                                    >
                                        Địa chỉ cụ thể
                                    </label>
                                    <textarea
                                        id='address'
                                        name='address'
                                        value={formData.address}
                                        onChange={handleChange}
                                        rows='4'
                                        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 '
                                        placeholder='Nhập địa chỉ cụ thể'
                                    ></textarea>
                                </div>
                            </div>
                            <div className='flex justify-end'>
                                <button
                                    type='submit'
                                    className='text-white inline-flex items-center bg-primary hover:bg-hoverColor focus:ring-4 focus:outline-none focus:ring-transparent font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-auto gap-2'
                                >
                                    <i className='ri-add-line'></i>
                                    Thêm mới
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserAddressPage;
