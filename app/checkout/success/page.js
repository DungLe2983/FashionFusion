import Link from 'next/link';
import React from 'react';

const SuccessCheckout = () => {
    return (
        <div className='text-center flex flex-col gap-2 '>
            <i className='ri-shield-check-fill mt-8 text-4xl text-primary'></i>
            <p className='text-2xl font-semibold mt-4'>ĐẶT HÀNG THÀNH CÔNG</p>
            <p>
                Chúc mừng quý khách đã đặt hàng thành công tại{' '}
                <span className='text-primary italic font-semibold'>
                    FashionFusion
                </span>
            </p>
            <p className='px-20 text-gray-500 text-sm'>
                Chúng tôi rất vui khi thông báo rằng đơn hàng của quý khách đã
                được nhận và đang được xử lý. Đội ngũ của chúng tôi sẽ nhanh
                chóng xác nhận đơn hàng và liên hệ với quý khách hàng để cung
                cấp thông tin về việc xác nhận đơn hàng và quy trình vận chuyển.
            </p>
            <div className='flex justify-center mt-6'>
                <Link href='/' className='bg-primary rounded-lg text-white font-bold w-60 py-3'>
                    Về trang chủ
                </Link>
            </div>
        </div>
    );
};

export default SuccessCheckout;
