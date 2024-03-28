'use client';
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
                <div className='font-bold text-base mb-2 cursor-pointer'>
                    {name}
                </div>
                <p className='text-gray-600 text-sm'>{subtitle}</p>
            </div>
            <div className='px-6 py-4'>
                <p className='text-gray-900 font-semibold text-base'>{price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
