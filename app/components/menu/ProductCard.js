'use client';
import Link from 'next/link';
import { useState } from 'react';
const ProductCard = ({ image, hoverImage, name, subtitle, price }) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div className='border relative overflow-hidden group transition '>
            <div
                className='max-w-xs rounded overflow-hidden shadow-lg'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    className='w-full h-96 object-cover cursor-pointer'
                    src={isHovered ? hoverImage : image}
                    alt={name}
                    onMouseEnter={handleMouseEnter}
                />
                <div className='px-6 py-4'>
                    <Link
                        href={'/products/id'}
                        className='font-bold text-base mb-2 cursor-pointer'
                    >
                        {name}
                    </Link>
                    <p className='text-gray-600 text-sm mt-2'>{subtitle}</p>
                </div>
                <div className='px-6 py-4'>
                    <p className='text-gray-900 font-semibold text-base'>
                        {price}
                    </p>
                </div>
            </div>
            <div className='absolute top-6 -right-11 group-hover:right-0 md:group-hover:right-3 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                <button>
                    <div className='h-8 w-8 md:h-12 md:w-12 flex justify-center items-center text-white bg-primary'>
                        <i className='ri-shopping-cart-2-line text-sm md:text-xl '></i>
                    </div>
                </button>
                <Link
                    href={'/productDetail'}
                    className='bg-white h-8 w-8 md:h-12 md:w-12 flex justify-center items-center text-black drop-shadow-xl'
                >
                    <i className='ri-eye-fill text-sm md:text-xl'></i>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
