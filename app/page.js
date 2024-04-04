'use client';

import BranchVoice from './components/layout/BranchVoice';
import { Contact } from './components/layout/Contact';
import Hero from './components/layout/Hero';
import SectionHeader from './components/layout/SectionHeader';
import ProductCard from './components/menu/ProductCard';

export default function Home() {
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
    return (
        <div>
            <Hero />
            <BranchVoice/>
            <SectionHeader url={'/'} subHeader={'New Arrivals'} />
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
            <Contact/>
        </div>
    );
}
