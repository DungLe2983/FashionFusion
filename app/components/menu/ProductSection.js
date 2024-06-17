import React from 'react';
import ProductCard from './ProductCard';
import dbConnect from '../../utils/db';
import Product from '../../models/product';
import ProductItem from '../../models/product-item';
import { headers } from 'next/headers';

const ProductSection = async () => {
    const headersList = headers();
    const fullUrl = headersList.get('referer') || '';

    const url = new URL(fullUrl);
    const page = url.searchParams.get('page');

    console.log('page========', page); // Kết quả: "1"

    await dbConnect();
    const products = await Product.find().populate('product_item_id');

    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12'>
            {products.map((product, index) => {
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
                        rate={'1*'}
                        id={product.id}
                    />
                );
            })}
        </div>
    );
};

export default ProductSection;
