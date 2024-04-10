import React from 'react'
import HotSaleCard from '../components/menu/HotSaleCard';
import ProductCard from '../components/menu/ProductCard';

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
];
const RunningClothesData = [
    {
        image: 'https://media2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/January2024/23CMAW.AT003.3D.2.jpg',
        hoverImage:
            '	https://media2.coolmate.me/cdn-cgi/image/width=672…=auto/uploads/January2024/thumb23CMAW.AT003.3.jpg',
        name: 'Áo Thun Nam Chạy Bộ Graphic Heartbeat',
        subtitle: 'Hồng',
        price: '169.000đ',
        rate: '5',
    },
    {
        image: 'https://media2.coolmate.me/cdn-cgi/image/width=672…format=auto/uploads/March2024/jungle3dthumb.1.jpg',
        hoverImage:
            '	https://media2.coolmate.me/cdn-cgi/image/width=672…t=auto/uploads/March2024/thumb24CMAW.AT015.24.jpg',
        name: 'Áo Thun Nam Chạy Bộ Graphic Jungle',
        subtitle: 'Xanh lá',
        price: '169.000đ',
        rate: '4',
    },
    {
        image: 'https://media2.coolmate.me/cdn-cgi/image/width=672…lity=85,format=auto/uploads/March2023/ss6.917.jpg',
        hoverImage:
            'https://media2.coolmate.me/cdn-cgi/image/width=672…mat=auto/uploads/February2023/ultra_fast_navy.jpg',
        name: ' Quần Shorts Nam chạy bộ Ultra',
        subtitle: 'Xanh đen',
        price: '149.000đ',
        rate: '4',
    },
    {
        image: 'https://media2.coolmate.me/cdn-cgi/image/width=672…to/uploads/March2023/thumb_quan_promax_den_97.jpg',
        hoverImage:
            '	https://media2.coolmate.me/cdn-cgi/image/width=672…85,format=auto/uploads/April2022/quanpromax_6.jpg',
        name: 'Quần Short Nam Thể Thao Promax-S1',
        subtitle: 'Đen',
        price: '149.000đ',
        rate: '5',
    },
];
const SalePage = () => {

  return (
      <section className='max-w-7xl mx-auto'>
          <img
              src='https://media2.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/April2024/QUAN_BOI-desktop.png'
              alt='banner'
              className='w-full h-[500px] object-cover rounded'
          />
          <div className='text-primary my-10 flex gap-2 font-semibold'>
              <i className='ri-price-tag-3-fill'></i>
              <p className='text-2xl'>Hàng HOT giá xịn</p>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-[20px] gap-y-10  '>
              {products.map((product, index) => (
                  <HotSaleCard
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
          <div className='relative'>
              <img
                  src='https://media2.coolmate.me/cdn-cgi/image/width=1800,height=1200,quality=80,format=auto/uploads/March2024/mceclip8_45.png'
                  alt='banner'
                  className='w-full h-[400px] mt-20 object-cover rounded'
              />
              <div className='flex flex-col gap-4 absolute top-1/2 left-5 md:left-20 transform -translate-y-1/2'>
                  <p className=' text-white text-2xl md:text-6xl font-bold'>
                      ĐỒ CHẠY BỘ
                  </p>
                  <div className='flex w-32 text-xs md:text-base md:w-48 rounded items-center bg-blue-500 hover:bg-blue-600 text-white'>
                      <button className='font-bold py-2 px-1 md:px-4 '>
                          Khám phá ngay
                      </button>
                      <i class='ri-arrow-right-circle-line text-base md:text-xl'></i>
                  </div>
              </div>
          </div>
          <p className='text-2xl text-primary font-semibold my-10'>
              SẢN PHẨM CHẠY BỘ
          </p>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-[20px] gap-y-10  '>
              {RunningClothesData.slice(0, 4).map((product, index) => (
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
      </section>
  );
}

export default SalePage
