import React from 'react';

const ProductDetailPage = () => {
    return (
        <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row '>
                    <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
                        <img
                            className='max-w-[200px] md:max-w-sm lg:max-w-xl'
                            src='/productImg.jpg'
                            alt='img'
                        />
                    </div>
                    <div className='flex-1 text-center lg:text-left'>
                        <h2 className='text-2xl font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>
                            Áo thun Cotton Compact In Lụa VỤN ART Logo Trái V1
                        </h2>
                        <span className='my-2 text-xl text-yellow-500 flex items-center gap-1'>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                        </span>
                        <div className='text-xl text-red-500 font-medium mb-6'>
                            399.000đ
                        </div>
                        <p className='mb-8'>100% Cotton / Trắng</p>
                        <p>Số lượng :</p>
                        <div className='flex flex-row items-center my-2'>
                            <button className='inline-flex items-center justify-center border-r-0 text-sm font-medium h-8 w-8 text-gray-500 bg-white border border-gray-300'>
                                -
                            </button>
                            <input
                                id='first_product'
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm block h-8 w-10  text-center appearance-none'
                                required
                                value='1'
                            />
                            <button className='inline-flex items-center justify-center h-8 w-8 border-l-0 text-sm font-medium text-gray-500 bg-white border border-gray-300'>
                                +
                            </button>
                        </div>
                        <button className='bg-primary py-4 px-8 text-white'>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetailPage;
