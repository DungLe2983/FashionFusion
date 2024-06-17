"use client";

import ProductCard from "../components/menu/ProductCard";
import RelatedProduct from "../components/layout/RelatedProduct";
import ProductImages from "../components/ProductImages";
import CustomizeProducts from "../components/CustomizeProducts";
import Add from "../components/Add";
import { useEffect, useState } from "react";

const ProductDetailPage = ({ params }) => {
    const { id } = params;

    const [product, setProduct] = useState(null);
    const [price, setPrice] = useState(0);

    const getProduct = async () => {
        try {
            const res = await fetch(`/api/products/${id}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            if (!res.ok) throw new Error(res.statusText);
            const productData = await res.json();
            setProduct(productData);
            setPrice(productData.product_item_id[0].price);
            console.log("Get Product successful", productData.product_item_id);
        } catch (error) {
            console.error("Error in fetch:", error);
        }
    };

    useEffect(() => {
        getProduct();
    }, []);

    const handlePriceUpdate = (newPrice) => {
        setPrice(newPrice);
    };

    return (
        <section className="pt-12 pb-12 lg:py-8 h-full flex flex-col items-center">
            <div className="container mx-auto">
                <div className="flex flex-col gap-8 md:flex-row ">
                    <ProductImages image={product?.image} />
                    <div className="text-left ">
                        <h2 className="text-xl md:text-2xl font-medium ">
                            {product?.name}
                        </h2>
                        <div className="my-2 text-xl text-yellow-400 flex  items-center gap-1">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                        </div>
                        <div className="text-xl md:text-3xl text-red-500 font-medium my-6">
                            {price.toLocaleString()}đ
                        </div>
                        <p className="font-semibold text-sm">Mô tả:</p>
                        <p className="my-2 md:max-w-xl">
                            {product?.description}
                        </p>

                        {product && (
                            <>
                                <CustomizeProducts
                                    data={product?.product_item_id}
                                    id={id}
                                    onPriceChange={handlePriceUpdate}
                                />
                            </>
                        )}
                    </div>
                </div>

                <div className="bg-slate-200 max-w-7xl mx-auto mt-8 px-4 py-6  flex justify-end flex-col  gap-2 text-sm rounded-lg">
                    <p className="font-semibold">
                        Miễn phí giao hàng nhanh toàn quốc cho đơn hàng trên
                        200.000đ
                    </p>
                    <div className="flex gap-2 items-center">
                        <i className="ri-building-fill text-primary text-xl"></i>
                        <span>
                            Nội thành Hà Nội và HCM nhận hàng trong 1-2 ngày
                        </span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <i className="ri-shield-star-fill text-primary text-xl"></i>
                        <span>Ở tỉnh thành khác nhận hàng từ 2-5 ngày</span>
                    </div>
                </div>
            </div>
            <RelatedProduct />
        </section>
    );
};

export default ProductDetailPage;
