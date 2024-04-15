import React from 'react'

const NotFoundResult = ({ searchInput }) => {
    return (
        <div>
            <div className='py-40 max-w-screen-xl  mx-auto px-4 text-center '>
                <p className='font-bold text-xl'>
                    Không tìm thấy sản phẩm phù hợp với từ khóa: "{searchInput}
                    ”.
                </p>
                <p className='text-base text-gray-400 mt-2'>
                    Vui lòng <a href='/' className='font-bold underline text-black'>quay lại</a> để tiếp tục mua sắm bạn
                    nhé!
                </p>
            </div>
        </div>
    );
};

export default NotFoundResult
