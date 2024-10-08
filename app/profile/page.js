'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import toast from 'react-hot-toast';

const ProfilePage = () => {
    //check authenticated
    const session = useSession();
    console.log(session);
    const { status } = session;
    const userEmail = session.data?.session.user.email;

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [sex, setSex] = useState();
    const [birthday, setBirthDay] = useState();

    async function getUser(email) {
        try {
            const res = await fetch(`/api/users/${email}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            if (res.ok) {
                const user = await res.json();

                if (user) {
                    const formattedDate = new Date(user.birthday)
                        .toISOString()
                        .slice(0, 10);

                    setName(user.name);
                    setPhoneNumber(user.phoneNumber);
                    setBirthDay(formattedDate);
                    setSex(user.sex);
                } else {
                    console.error('User not found or response is empty.');
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
            getUser(userEmail);
        }
    }, [userEmail]);

    async function handleClickSave(email) {
        if (!/^\d{10}$/.test(phoneNumber)) {
            toast.error('Số điện thoại phải có đủ 10 kí tự chữ số.');
            return;
        }

        try {
            const res = await fetch(`/api/users/${email}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, phoneNumber, sex, birthday }),
            });

            if (!res.ok) {
                console.error('Error fetching user:', res.statusText);
            }

            toast.success('Cập nhật thành công!');
        } catch (error) {
            console.error('Error in fetch:', error);
            toast.error(error);
        }
    }

    //check authenticated
    if (status === 'loading') {
        return 'Loading....';
    }

    if (status === 'unauthenticated') {
        return redirect('/login');
    }

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
                            <Link href={'/profile/orders'}>
                                Lịch sử đơn hàng
                            </Link>
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
                            onClick={() => {
                                signOut({ callbackUrl: '/' });
                            }}
                            className='cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-primary hover:text-white'
                        >
                            Đăng xuất
                        </li>
                    </ul>
                </div>

                <div className='col-span-2 hidden sm:block'>
                    <ul>
                        <li className='mt-5 cursor-pointer text-primary  border-l-primary border-l-2  px-2 py-2 font-semibold transition hover:border-l-primary hover:text-primary'>
                            <div className='flex gap-4 items-center'>
                                <i className='ri-user-fill '></i>
                                <p>Thông tin tài khoản</p>
                            </div>
                        </li>
                        <li className='mt-5 cursor-pointer border-l-2  border-transparent  px-2 py-2 font-semibold transition hover:border-l-primary hover:text-primary'>
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
                            <div>
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
                            Thông tin tài khoản
                        </h1>
                    </div>
                    <hr className='mt-4 mb-8' />
                    <p className='py-2 font-semibold text-sm'>Họ và tên</p>
                    <input
                        type='text'
                        id='userName'
                        className=' w-full md:w-1/3 flex-shrink  border border-gray-300 bg-transparent py-2 px-4 text-base text-gray-700  focus:border-gray-400 focus:ring-gray-400 rounded '
                        value={name}
                        onChange={(ev) => setName(ev.target.value)}
                    />
                    <div className='flex items-center my-2 w-full'>
                        <div className='flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3 w-full'>
                            <label for='PhoneNumber'>
                                <span className='font-semibold text-sm'>
                                    Số điện thoại
                                </span>
                                <div className='relative flex overflow-hidden rounded-md border-2 transition focus-within:border-gray-400'>
                                    <input
                                        id='PhoneNumber'
                                        className='w-full  border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none'
                                        value={phoneNumber}
                                        onChange={(ev) =>
                                            setPhoneNumber(ev.target.value)
                                        }
                                    />
                                </div>
                            </label>
                            <label for='Gender'>
                                <span className='font-semibold text-sm'>
                                    Giới tính
                                </span>
                                <div className='relative flex overflow-hidden rounded-md border-2 transition focus-within:border-gray-400'>
                                    <select
                                        id='gender'
                                        className='appearance-none w-full py-2 px-4 text-base text-gray-700 bg-white border-transparent focus:border-gray-300 focus:outline-none placeholder-gray-400 '
                                        onChange={(ev) =>
                                            setSex(ev.target.value)
                                        }
                                        value={sex}
                                    >
                                        <option value='' disabled selected>
                                            Chọn giới tính
                                        </option>
                                        <option value='nam'>Nam</option>
                                        <option value='nu'>Nữ</option>
                                    </select>
                                </div>
                            </label>
                        </div>
                    </div>
                    <p className='py-2 font-semibold text-sm'>
                        Ngày sinh{' '}
                        <span className=' italic text-xs text-gray-600'>
                            (ngày/tháng/năm)
                        </span>
                    </p>
                    <input
                        type='date'
                        className='w-full md:w-1/3 flex-shrink  border border-gray-300 bg-transparent py-2 px-4 text-base text-gray-700  focus:border-gray-400 focus:ring-gray-400 rounded '
                        onChange={(e) => setBirthDay(e.target.value)}
                        value={birthday}
                    />
                    <p className='mt-10 py-2 text-2xl font-semibold'>
                        Thông tin đăng nhập
                    </p>
                    <hr className='mt-4 mb-8' />
                    <p className='py-2 font-semibold text-sm'>Email</p>
                    <input
                        type='email'
                        id='email'
                        className='w-full md:w-1/3 flex-shrink  border border-gray-300 bg-transparent py-2 px-4 text-base text-gray-700  focus:border-gray-400 focus:ring-gray-400 rounded '
                        disabled
                        value={userEmail}
                    />

                    {/* Password */}
                    {/* <p className="py-2 font-semibold text-sm">Mật khẩu</p>
                    <div className="w-1/3 flex-shrink border border-gray-300 bg-transparent text-base text-gray-700 focus:border-gray-400 focus:ring-gray-400 rounded relative">
                        <input
                            type="password"
                            id="login-password"
                            className="border-transparent w-full focus:border-transparent focus:ring-gray-400 rounded"
                            defaultValue={"*********"}
                        />
                        {showPassword ? (
                            <i
                                className="ri-eye-off-fill absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                                onClick={() => setShowPassword(false)}
                            ></i>
                        ) : (
                            <i
                                className="ri-eye-fill absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                                onClick={() => setShowPassword(true)}
                            ></i>
                        )}
                    </div> */}
                    <div>
                        <button
                            className='my-8 rounded-lg bg-primary hover:bg-hoverColor px-4 py-2 text-white'
                            onClick={() => handleClickSave(userEmail)}
                        >
                            Lưu thông tin
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
