import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../menu/ProductCard";
// const RelatedProducts = [
//     {
//         image: "https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/February2024/vunarttrai11_19.jpg",
//         hoverImage:
//             "https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/February2024/vunarttrang4_22.jpg",
//         name: "Áo thun Cotton Compact In Lụa VỤN ART Logo Trái V1",
//         subtitle: "100% Cotton / Đen",
//         price: "399.000đ",
//         rate: "5",
//     },
//     {
//         image: "https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/February2024/vunartqyay2_72.jpg",
//         name: "Áo thun Cotton Compact In Lụa VỤN ART Chơi Quay",
//         hoverImage:
//             "https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/February2024/vunarttrang7_23.jpg",
//         subtitle: "Care & Share / Đen Trắng",
//         price: "399.000đ",
//         rate: "4",
//     },
//     {
//         image: "https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/February2024/oantuti1_2.jpg",
//         hoverImage:
//             "https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/February2024/vunarttrang3_40.jpg",
//         name: "Áo thun Cotton Compact In Lụa VỤN ART Oẳn Tù Tì",
//         subtitle: "Care & Share / Trắng",
//         price: "299.000đ",
//         rate: "4",
//     },
//     {
//         image: "https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/February2024/vunarttrai11_19.jpg",
//         hoverImage:
//             "https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/February2024/vunarttrang4_22.jpg",
//         name: "Áo thun Cotton Compact In Lụa VỤN ART Logo Trái V1",
//         subtitle: "100% Cotton / Đen",
//         price: "399.000đ",
//         rate: "4",
//     },
// ];
const RelatedProduct = (props) => {
    const [products, setProducts] = useState();

    async function getProducts(ids) {
        try {
            const requests = ids.map(async (id) => {
                const res = await fetch(`/api/products/${id}`, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                });
                if (!res.ok) throw new Error(res.statusText);
                const productData = await res.json();
                return productData; // Trả về dữ liệu sản phẩm
            });

            const results = await Promise.all(requests);
            console.log("results", results);
            setProducts(results); // Cập nhật trạng thái với kết quả từ tất cả các yêu cầu
        } catch (error) {
            console.error("Error in fetching products:", error);
        }
    }

    useEffect(() => {
        getProducts(props.data);
    }, [props]);

    return (
        <div className="mt-16">
            <h2 className="text-2xl my-10 text-primary text-center font-semibold ">
                Các sản phẩm tương tự:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-[20px] gap-y-10 p-4 ">
                {/* {products?.map((product, index) => (
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
                        rate={"5"}
                    />)
                ))} */}

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
                                    ? `${product.description.substring(
                                          0,
                                          70
                                      )}...`
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
        </div>
    );
};

export default RelatedProduct;
