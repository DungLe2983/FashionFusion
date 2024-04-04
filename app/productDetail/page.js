'use client';

import { useState } from 'react';
import ProductCard from '../components/menu/ProductCard';

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
    const products = [
        {
            image: 'https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/February2024/vunarttrai11_19.jpg',
            hoverImage:
                'https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/February2024/vunarttrang4_22.jpg',
            name: 'Áo thun Cotton Compact In Lụa VỤN ART Logo Trái V1',
            subtitle: '100% Cotton / Đen',
            price: '399.000đ',
            rate: '5',
        },
        {
            image: 'https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/February2024/vunartqyay2_72.jpg',
            name: 'Áo thun Cotton Compact In Lụa VỤN ART Chơi Quay',
            hoverImage:
                'https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/February2024/vunarttrang7_23.jpg',
            subtitle: 'Care & Share / Đen Trắng',
            price: '399.000đ',
            rate: '4',
        },
        {
            image: 'https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/February2024/oantuti1_2.jpg',
            hoverImage:
                'https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/February2024/vunarttrang3_40.jpg',
            name: 'Áo thun Cotton Compact In Lụa VỤN ART Oẳn Tù Tì',
            subtitle: 'Care & Share / Trắng',
            price: '299.000đ',
            rate: '4',
        },
        {
            image: 'https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/February2024/vunarttrai11_19.jpg',
            hoverImage:
                'https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/February2024/vunarttrang4_22.jpg',
            name: 'Áo thun Cotton Compact In Lụa VỤN ART Logo Trái V1',
            subtitle: '100% Cotton / Đen',
            price: '399.000đ',
            rate: '4',
        },
        {
            image: 'https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/February2024/vunartqyay2_72.jpg',
            name: 'Áo thun Cotton Compact In Lụa VỤN ART Chơi Quay',
            hoverImage:
                'https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/February2024/vunarttrang7_23.jpg',
            subtitle: 'Care & Share / Đen Trắng',
            price: '399.000đ',
            rate: '4',
        },
        {
            image: 'https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/February2024/oantuti1_2.jpg',
            hoverImage:
                'https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/February2024/vunarttrang3_40.jpg',
            name: 'Áo thun Cotton Compact In Lụa VỤN ART Oẳn Tù Tì',
            subtitle: 'Care & Share / Trắng',
            price: '299.000đ',
            rate: '4',
        },
        {
            image: 'https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/February2024/vunartqyay2_72.jpg',
            name: 'Áo thun Cotton Compact In Lụa VỤN ART Chơi Quay',
            hoverImage:
                'https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/February2024/vunarttrang7_23.jpg',
            subtitle: 'Care & Share / Đen Trắng',
            price: '399.000đ',
            rate: '4',
        },
        {
            image: 'https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/February2024/oantuti1_2.jpg',
            hoverImage:
                'https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/February2024/vunarttrang3_40.jpg',
            name: 'Áo thun Cotton Compact In Lụa VỤN ART Oẳn Tù Tì',
            subtitle: 'Care & Share / Trắng',
            price: '299.000đ',
            rate: '4',
        },
        //...
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
                        {/* <img
                            className='max-w-[screen] md:max-w-sm lg:max-w-xl '
                            src='/productImg.jpg'
                            alt='img'
                        /> */}
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
            <div className='mt-16'>
                <h2 className='text-2xl my-10 text-primary text-center font-semibold '>
                    Các sản phẩm tương tự:
                </h2>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-[20px] gap-y-10 p-4 '>
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            image={product.image}
                            hoverImage={product.hoverImage}
                            name={product.name}
                            subtitle={product.subtitle}
                            price={product.price}
                            rate={product.rate}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductDetailPage;
