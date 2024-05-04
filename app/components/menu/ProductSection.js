import Image from 'next/image';
import React from 'react';
import ProductCard from './ProductCard';

const filterProducts = [
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
        rate: '5',
    },
    {
        image: 'https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/February2024/oantuti1_2.jpg',
        hoverImage:
            'https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/February2024/vunarttrang3_40.jpg',
        name: 'Áo thun Cotton Compact In Lụa VỤN ART Oẳn Tù Tì',
        subtitle: 'Care & Share / Trắng',
        price: '299.000đ',
        rate: '5',
    },
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
        rate: '5',
    },
    {
        image: 'https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/February2024/oantuti1_2.jpg',
        hoverImage:
            'https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/February2024/vunarttrang3_40.jpg',
        name: 'Áo thun Cotton Compact In Lụa VỤN ART Oẳn Tù Tì',
        subtitle: 'Care & Share / Trắng',
        price: '299.000đ',
        rate: '5',
    },
    {
        image: 'https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/February2024/vunartqyay2_72.jpg',
        name: 'Áo thun Cotton Compact In Lụa VỤN ART Chơi Quay',
        hoverImage:
            'https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/February2024/vunarttrang7_23.jpg',
        subtitle: 'Care & Share / Đen Trắng',
        price: '399.000đ',
        rate: '5',
    },
    {
        image: 'https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/February2024/oantuti1_2.jpg',
        hoverImage:
            'https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/February2024/vunarttrang3_40.jpg',
        name: 'Áo thun Cotton Compact In Lụa VỤN ART Oẳn Tù Tì',
        subtitle: 'Care & Share / Trắng',
        price: '299.000đ',
        rate: '5',
    },
    //...
];
const ProductSection = () => {
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12'>
            {filterProducts.map((product, index) => (
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
    );
};

export default ProductSection;
