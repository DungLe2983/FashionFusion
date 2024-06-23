"use client";
import { useEffect, useState } from "react";
import ProductInCart from "../menu/ProductInCart";

export const TableProductInCart = (props) => {
    const [quantity, setQuantity] = useState(1);

    const handleInputChange = (e) => {
        const quantity = e.target.value.replace(/[^0-9]/g, "");
        setQuantity(quantity);
    };
    const handleIncreaseQuantity = () => {
        setQuantity((prevQuantity) => parseInt(prevQuantity) + 1);
    };

    const handleDecreaseQuantity = () => {
        setQuantity((prevQuantity) => {
            const newQuantity = parseInt(prevQuantity) - 1;
            return newQuantity >= 1 ? newQuantity : 1;
        });
    };

    return (
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4">
                    <div className="flex gap-2">
                        <img
                            className="w-32 h-32"
                            src={props.item.product_item_id.product_id.image[0]}
                            alt="productInCartImg"
                        />
                        <div className="flex flex-col gap-2 justify-center text-sm">
                            <p className=" cursor-pointer hover:text-primary font-semibold">
                                {props.item.product_item_id.product_id.name}
                            </p>
                            <p>
                                {props.item.product_item_id.color_id.name} /{" "}
                                {props.item.product_item_id.size_id.name}
                            </p>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center gap-0">
                        <button
                            className="inline-flex items-center justify-center border-r-0 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300"
                            onClick={handleDecreaseQuantity}
                        >
                            -
                        </button>
                        <input
                            id="first_product"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block h-6 w-8  text-center appearance-none"
                            required
                            value={props.item.item_quantity}
                            onChange={handleInputChange}
                        />
                        <button
                            className="inline-flex items-center justify-center h-6 w-6 border-l-0 text-sm font-medium text-gray-500 bg-white border border-gray-300"
                            onClick={handleIncreaseQuantity}
                        >
                            +
                        </button>
                    </div>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900">
                    {props.item.product_item_id.price.toLocaleString()} đ
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900">
                    {(
                        props.item.product_item_id.price *
                        props.item.item_quantity
                    ).toLocaleString()}{" "}
                    đ
                </td>
                <td className="px-6 py-4">
                    <i
                        className="ri-delete-bin-fill text-red-500 hover:text-red-400 text-xl cursor-pointer"
                        onClick={() => {
                            alert("Xoa", props.item._id);
                        }}
                    ></i>
                </td>
            </tr>
        </tbody>
    );
};
