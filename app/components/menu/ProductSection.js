"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductSection = ({ products }) => {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {products?.map((product, index) => {
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
                                    ? "0₫"
                                    : `${minPrice.toLocaleString()} ₫`}
                            </span>
                        }
                        rate={"1*"}
                        id={product._id}
                    />
                );
            })}
        </div>
    );
};

export default ProductSection;
