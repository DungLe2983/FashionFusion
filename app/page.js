'use client';

import { useEffect, useState } from 'react';
import BranchVoice from './components/layout/BranchVoice';
import { Contact } from './components/layout/Contact';
import Hero from './components/layout/Hero';
import SectionHeader from './components/layout/SectionHeader';
import ProductCard from './components/menu/ProductCard';

export default function Home() {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(false);

    async function getProducts() {
        try {
            const res = await fetch('/api/products/getlength', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            if (res.ok) {
                const data = await res.json();
                // console.log('data', data);
                if (data) {
                    setProducts(data);
                } else {
                    console.error('User not found or response is empty.');
                }
            } else {
                console.error('Error fetching user:', res.statusText);
            }
        } catch (error) {
            console.error('Error in fetch:', error);
        }
    }
    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <Hero />
            <BranchVoice />
            <SectionHeader url={'/products'} subHeader={'New Arrivals'} />
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-[20px] gap-y-10 p-4 '>
                {products?.slice(0, 8).map((product, index) => {
                    const productItems = product.product_item_id;
                    let minPrice = 1;

                    if (productItems || Array.isArray(productItems)) {
                        minPrice = Math.min(
                            ...productItems.map((item) => item.price)
                        );
                    }

                    return (
                        <ProductCard
                            key={index}
                            image={product.image}
                            hoverImage={product.image}
                            name={product.name}
                            subtitle={
                                product.description.length > 20
                                    ? `${product.description.substring(
                                          0,
                                          70
                                      )}...`
                                    : product.description
                            }
                            price={
                                <span>
                                    {minPrice === Infinity
                                        ? '0₫'
                                        : `${minPrice.toLocaleString()} ₫`}
                                </span>
                            }
                            rate={'1*'}
                            id={product._id}
                        />
                    );
                })}
            </div>
            <Contact />
        </div>
    );
}
