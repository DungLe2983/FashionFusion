import React from 'react';

const ContactPage = () => {
    return (
        <div>
            <div className='font-sans text-base text-gray-900 sm:px-10'>
                <div className='text-base text-gray-900'>
                    <div className='mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl'>
                        <div className='mx-2 pt-12 text-center md:mx-auto md:w-2/3 md:pb-12'>
                            <h2 className='mb-4 text-2xl font-black sm:text-3xl xl:text-4xl'>
                                Liên hệ với Chúng tôi
                            </h2>
                            <div className='text-sm sm:text-base xl:text-lg'>
                                <div className='text-gray-900'>
                                    <p className='mb-4'>
                                        Đừng ngần ngại, chúng tôi mong muốn nghe
                                        từ bạn! Hãy đặt câu hỏi, chia sẻ ý kiến
                                        hoặc yêu cầu của bạn ngay bây giờ. Chúng
                                        tôi luôn sẵn lòng hỗ trợ bạn!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mx-auto mb-20 flex w-full max-w-screen-lg flex-col overflow-hidden rounded-xl text-gray-900 md:flex-row md:border md:shadow-lg'>
                    <form className='mx-auto w-full max-w-xl border-gray-200 px-10 py-8 md:px-8'>
                        <div className='mb-4'>
                            <label
                                className='text mb-2 block font-medium'
                                for='email'
                            >
                                E-mail:
                            </label>
                            <input
                                className='bg-gray-50 border border-gray-300
                            text-gray-900 sm:text-sm rounded
                            focus:ring-gray-500 focus:border-gray-500 block
                            w-full p-2.5 '
                                id='email'
                                type='email'
                                required=''
                            />
                        </div>
                        <div className='mb-4'>
                            <label
                                className='text mb-2 block font-medium'
                                for='subject'
                            >
                                Tiêu đề:
                            </label>
                            <input
                                className='bg-gray-50 border border-gray-300
                            text-gray-900 sm:text-sm rounded
                            focus:ring-gray-500 focus:border-gray-500 block
                            w-full p-2.5 '
                                id='subject'
                                type='subject'
                                required=''
                            />
                        </div>
                        <div className='mb-4'>
                            <label
                                className='text mb-2 block font-medium'
                                for='message'
                            >
                                Nội dung:
                            </label>
                            <textarea
                                className='bg-gray-50 h-52 border border-gray-300
                            text-gray-900 sm:text-sm rounded
                            focus:ring-gray-500 focus:border-gray-500 block
                            w-full p-2.5 '
                                id='message'
                                required=''
                            ></textarea>
                        </div>
                        <div className='flex items-center'>
                            <div className='flex-1'></div>
                            <button
                                className='flex items-center gap-2 rounded-lg bg-primary px-6 py-2 text-center font-bold text-white '
                                type='submit'
                            >
                                <i className='ri-send-plane-fill'></i>
                                <p className='text-base'>Gửi</p>
                            </button>
                        </div>
                    </form>
                    <div className='mt-10 bg-primary px-10 py-8 text-gray-100 md:mt-0 md:ml-auto'>
                        <div className=''>
                            <p className='mb-4 font-semibold border-b  pb-2'>
                                GIỜ LÀM VIỆC
                            </p>
                            <p className='mb-4'>Thứ 3 – Thứ 7: 08:00 – 20:00</p>
                            <p className='mb-4'>Chủ Nhật: 08:00 - 22:00</p>
                            <p className='mb-4'>Thứ 2: Closed</p>
                            <p className='mb-4'>
                                Email:
                                <a href='' className='font-semibold underline'>
                                    {' '}
                                    supportFashionFusion@gmail.com
                                </a>
                            </p>
                            <p className='mb-4'>
                                Phone:
                                <a
                                    href='tel:+84914666888'
                                    className='font-semibold underline'
                                >
                                    {' '}
                                    +84 (0) 10-32 32 322
                                </a>
                            </p>
                            <hr className='my-2 h-0 border-t border-r-0 border-b-0 border-l-0 border-gray-300' />
                            <p className='mb-4'>Org.no: 63452-2832</p>
                            <p className='mb-4'>VAT no: 32353</p>
                           
                            <p className='mb-4 font-semibold border-b  pb-2'>
                                ĐỊA CHỈ:
                            </p>
                            <p>
                                Tầng 17 Saigon Centre 2, 67 Lê Lợi, Phường Bến
                                Nghé, Quận 1, TP. Hồ Chí Minh
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
