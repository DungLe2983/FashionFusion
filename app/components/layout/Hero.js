import { useState } from 'react';
import { GoDotFill } from 'react-icons/go';
export default function Hero() {
    const slides = [
        {
            url: 'https://bizweb.dktcdn.net/100/415/697/themes/902041/assets/slider_3.jpg?1710226595388',
        },
        {
            url: 'https://mcdn.coolmate.me/image/October2021/BANNER_HERO-020.jpg',
        },
        {
            url: '/banner1.png',
        },
        {
            url: 'https://bizweb.dktcdn.net/100/415/697/themes/902041/assets/slider_5.jpg?1710226595388',
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
        <section className='max-w-[1400px] h-[780px] w-full m-auto pb-16 px-4 relative group'>
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
                            className={` text-sm md:text-2xl cursor-pointer ${
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
