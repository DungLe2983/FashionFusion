import React from 'react';

const ProductInCart = () => {
    return (
        <div className='flex gap-2'>
            <img
                className='w-32 h-32'
                src='https://bizweb.dktcdn.net/thumb/compact/100/415/697/products/img-9367-1-56fef4f6-017a-4b12-96d8-fd10130f041b.jpg'
                alt='productInCartImg'
            />
            <div className='flex flex-col gap-2 justify-center text-sm'>
                <p className=' cursor-pointer hover:text-primary font-semibold'>
                    Áo Thun Teelab Local Brand Unisex Holiday special " Lướt
                    sóng " Tshirt TS237
                </p>
                <p>Kem / M</p>
            </div>
        </div>
    );
};

export default ProductInCart;
