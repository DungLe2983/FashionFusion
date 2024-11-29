'use client';

import React, { useEffect, useState } from 'react';
import NotFoundResult from '../components/menu/NotFoundResult';
import ProductCard from '../components/menu/ProductCard';

const SearchPage = () => {
  //   const [products, setProducts] = useState();
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const query = urlParams.get('query');
  //   const decodedQuery = decodeURIComponent(query);

  const [products, setProducts] = useState();
  const [decodedQuery, setDecodedQuery] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const query = urlParams.get('query');
      setDecodedQuery(decodeURIComponent(query));
    }
  }, []);

  async function getSearchProducts(input) {
    try {
      const res = await fetch(`/api/products/search?query=${input}`);
      if (res.ok) {
        const data = await res.json();
        // console.log("search data:", data);

        if (data) {
          setProducts(data);
        } else {
          console.error('User not found or response is empty.');
        }
      } else {
        console.error('Error fetching user:', res.statusText);
      }
    } catch (error) {
      console.error('Fail fetch', error.message);
    }
  }

  //   useEffect(() => {
  //     getSearchProducts(decodedQuery);
  //   }, [decodedQuery]);
  useEffect(() => {
    if (decodedQuery) {
      getSearchProducts(decodedQuery);
    }
  }, [decodedQuery]);

  return (
    <div>
      {products?.length === 0 ? (
        <NotFoundResult searchInput={decodedQuery} />
      ) : (
        <>
          <p className='text-xl font-semibold text-gray-800 my-10'>
            Kết quả từ khóa "{decodedQuery}"
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-[20px] gap-y-10'>
            {products?.map((product, index) => {
              const productItems = product.product_item_id;
              let minPrice = 1;

              if (productItems || Array.isArray(productItems)) {
                minPrice = Math.min(...productItems.map((item) => item.price));
              }

              return (
                <ProductCard
                  key={index}
                  image={product.image}
                  hoverImage={product.image}
                  name={product.name}
                  subtitle={
                    product.description.length > 20
                      ? `${product.description.substring(0, 70)}...`
                      : product.description
                  }
                  price={
                    <span>
                      {minPrice === Infinity
                        ? '0₫'
                        : `${minPrice.toLocaleString()} ₫`}
                    </span>
                  }
                  rate={'5'}
                  id={product._id}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchPage;
