import React, { useEffect, useState } from "react";

const ProductInCart = (props) => {
    const [cartItems, setCartItems] = useState([]);
    // tìm các cartItem có cartId đã lấy được
    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await fetch(`/api/cart-item/${props.cartId}`);
                if (!response.ok) {
                    throw new Error(`HTTP error status: ${response.status}`);
                }
                const data = await response.json();
                setCartItems(data);
            } catch (error) {
                console.error("Failed to fetch cart items:", error);
            }
        };

        fetchCartItems();
    }, [props]);
    return (
        <div className="flex gap-2">
            <img
                className="w-32 h-32"
                src={cartItems[0].product_item_id.product_id.image[0]}
                alt="productInCartImg"
            />
            <div className="flex flex-col gap-2 justify-center text-sm">
                <p className=" cursor-pointer hover:text-primary font-semibold">
                    {cartItems[0].product_item_id.product_id.name}
                </p>
                <p>
                    {cartItems[0].product_item_id.color_id.name} /{" "}
                    {cartItems[0].product_item_id.size_id.name}
                </p>
            </div>
        </div>
    );
};

export default ProductInCart;
