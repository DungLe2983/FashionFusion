'use client';

import { useState } from 'react';
import ProductCard from '../components/menu/ProductCard';
import RelatedProduct from '../components/layout/RelatedProduct';

const ProductDetailPage = () => {
    const [selectedSize, setSelectedSize] = useState(null);
    const sizes = [
        {
            size: 'S',
            description: 'S(1m55 - 1m59 | 48kg - 54kg)',
        },
        {
            size: 'M',
            description: 'M(1m60 - 1m65 | 55kg - 61kg)',
        },
        {
            size: 'L',
            description: 'L(1m66 - 1m72 | 62kg - 68kg)',
        },
        {
            size: 'XL',
            description: 'XL(1m72 - 1m77 | 69kg - 75kg)',
        },
        {
            size: '2XL',
            description: '2XL(1m77 - 1m83 | 76kg - 82kg)',
        },
        {
            size: '3XL',
            description: '3XL(1m84 - 1m88 | 83kg - 87kg)',
        },
    ];
    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };
    return (
        <section className='pt-12 pb-12 lg:py-4 h-full flex flex-col items-center'>
            <div className='container mx-auto'>
                <div className='flex flex-col gap-6 md:flex-row '>
                    <div className='flex justify-start md:justify-center items-center mb-8 lg:mb-0'>
                        <img
                            className='max-w-[screen] md:max-w-sm lg:max-w-xl h-[38rem] w-[38rem] object-cover'
                            src='https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/February2024/vunarttrai11_19.jpg'
                            alt='img'
                        />

                    </div>
                    <div className='text-left '>
                        <h2 className='text-xl md:text-2xl font-medium mb-2  max-w-[450px] mx-auto lg:mx-0'>
                            Áo thun Cotton Compact In Lụa VỤN ART Logo Trái V1
                        </h2>
                        <div className='my-2 text-xl text-yellow-400 flex  items-center gap-1'>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                        </div>
                        <div className='text-xl md:text-3xl text-red-500 font-medium my-6'>
                            399.000đ
                        </div>
                        <p className='font-semibold text-sm'>Mô tả:</p>
                        <p className='my-2'>100% Cotton / Trắng</p>
                        <div className=''>
                            <p className='font-semibold text-sm mt-6'>
                                Kích thước:{' '}
                                <span className='text-gray-500 '>
                                    {selectedSize &&
                                        sizes.find(
                                            (s) => s.size === selectedSize
                                        ).description}
                                </span>
                            </p>
                            <div className='mt-4 flex gap-2 text-sm flex-wrap '>
                                {sizes.map((size) => (
                                    <button
                                        key={size.size}
                                        className={`px-10 py-2 ${
                                            selectedSize === size.size
                                                ? 'bg-primary text-white'
                                                : 'bg-slate-200'
                                        } text-center rounded-xl`}
                                        onClick={() =>
                                            handleSizeClick(size.size)
                                        }
                                    >
                                        {size.size}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <p className='mt-6 font-semibold text-sm'>Số lượng :</p>
                        <div className='flex gap-6'></div>
                        <div className='flex flex-row items-center my-2'>
                            <button className='inline-flex items-center justify-center border-r-0 text-sm font-medium h-8 w-8 text-gray-500 bg-white border border-gray-300'>
                                -
                            </button>
                            <input
                                id='first_product'
                                defaultValue={1}
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm block h-8 w-10  text-center outline-none'
                                required
                            />
                            <button className='inline-flex items-center justify-center h-8 w-8 border-l-0 text-sm font-medium text-gray-500 bg-white border border-gray-300'>
                                +
                            </button>
                        </div>
                        <button className='bg-primary rounded py-4 px-8 text-white mt-6 flex gap-2 text-sm'>
                            <i class='ri-shopping-cart-2-fill '></i>
                            <span>Add to Cart</span>
                        </button>
                    </div>
                </div>
                <div className='bg-slate-200 max-w-7xl mx-auto mt-8 px-4 py-6  flex justify-end flex-col  gap-2 text-sm rounded-lg'>
                    <p className='font-semibold'>
                        Miễn phí giao hàng nhanh toàn quốc cho đơn hàng trên
                        200.000đ
                    </p>
                    <div className='flex gap-2 items-center'>
                        <i className='ri-building-fill text-primary text-xl'></i>
                        <span>
                            Nội thành Hà Nội và HCM nhận hàng trong 1-2 ngày
                        </span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <i className='ri-shield-star-fill text-primary text-xl'></i>
                        <span>Ở tỉnh thành khác nhận hàng từ 2-5 ngày</span>
                    </div>
                </div>
            </div>
            <RelatedProduct/>
        </section>
    );
};

export default ProductDetailPage;
