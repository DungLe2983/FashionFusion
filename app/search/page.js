import React from 'react'
import NotFoundResult from '../components/menu/NotFoundResult'
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
        image: 'https://media2.coolmate.me/cdn-cgi/image/width=672…ty=85,format=auto/uploads/March2023/blue_copy.jpg',
        hoverImage:
            'https://media2.coolmate.me/cdn-cgi/image/width=672…ormat=auto/uploads/November2021/1426x2100_(3).jpg',
        name: 'Áo thun nam Cotton Compact  ',
        subtitle: 'Xanh Navy',
        price: '209.000đ',
        rate: '5',
    },
    {
        image: 'https://media2.coolmate.me/cdn-cgi/image/width=672…=auto/uploads/March2024/3dchaybov2esenv2.1_12.jpg',
        hoverImage:
            '	https://media2.coolmate.me/cdn-cgi/image/width=672…ormat=auto/uploads/March2024/ATS.RN.EFM.26_53.jpg',
        name: 'Áo Thun Nam chạy bộ Essential',
        subtitle: 'Xanh Amparo',
        price: '169.000đ',
        rate: '4',
    },
    {
        image: 'https://media2.coolmate.me/cdn-cgi/image/width=672…ty=85,format=auto/uploads/January2022/2recyw2.jpg',
        hoverImage:
            'https://media2.coolmate.me/cdn-cgi/image/width=672…lity=85,format=auto/uploads/March2023/15-2_56.jpg',
        name: ' Áo Thun Nam Thể Thao Coolmate Basics',
        subtitle: 'Xanh đen',
        price: '149.000đ',
        rate: '4',
    },
    {
        image: 'https://mcdn2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2023/denn3-(2)_copys_62.jpg',
        hoverImage:
            'https://mcdn2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2023/coaoo4.jpg',
        name: 'Áo Thun Nam Cotton Team Whales',
        subtitle: 'Mềm mại / Đen',
        price: '199.000đ',
        rate: '4',
    },
];
const SearchPage = () => {
  return (
      <div>
          {/* if not found result */}
          {/* <NotFoundResult searchInput="aaaaaa"/> */}

          <p className='text-xl font-semibold text-gray-800 my-10'>
              Kết quả với từ khóa "thun"
          </p>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-[20px] gap-y-10  '>
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
  );
}

export default SearchPage
