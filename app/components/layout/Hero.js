import { useState } from 'react';
import { GoDotFill } from 'react-icons/go';
export default function Hero() {
    const slides = [
        {
            url: 'https://mcdn.coolmate.me/uploads/March2022/Hero-Banner-Freeshipt7.3_23.jpg',
        },
        {
            url: 'https://mcdn.coolmate.me/image/October2021/BANNER_HERO-020.jpg',
        },
        {
            url: 'https://intphcm.com/data/upload/banner-thoi-trang-nu.jpg',
        },
        {
            url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/March2024/mceclip1_42.png',
        },
        {
            url: 'https://img3.thuthuatphanmem.vn/uploads/2019/10/14/banner-thoi-trang-nu-hien-dai_113857882.jpg',
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    return (
        <section className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
            <div
                className='h-full w-full rounded-2xl bg-center bg-cover duration-500'
                style={{
                    backgroundImage: `url(${slides[currentIndex].url})`,
                }}
            ></div>

            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                        <GoDotFill
                            className={`text-2xl cursor-pointer ${
                                slideIndex === currentIndex
                                    ? 'text-black'
                                    : 'text-gray-300'
                            }`}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
