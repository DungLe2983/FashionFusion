'use client';
import { useState } from 'react';
import ProductInCart from '../menu/ProductInCart';

export const TableProductInCart = () => {
    const [quantity, setQuantity] = useState(1);

    const handleInputChange = (e) => {
        const quantity = e.target.value.replace(/[^0-9]/g, '');
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
    const unitPrice = 179000; // Đơn giá sản phẩm
    const totalPrice = unitPrice * quantity; // Tính tổng thành tiền
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(amount);
    };

    return (
        <tbody>
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                <td className='p-4'>
                    <ProductInCart />
                </td>
                <td className='px-6 py-4'>
                    <div className='flex items-center gap-0'>
                        <button
                            className='inline-flex items-center justify-center border-r-0 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300'
                            onClick={handleDecreaseQuantity}
                        >
                            -
                        </button>
                        <input
                            id='first_product'
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm block h-6 w-8  text-center appearance-none'
                            required
                            value={quantity}
                            onChange={handleInputChange}
                        />
                        <button
                            className='inline-flex items-center justify-center h-6 w-6 border-l-0 text-sm font-medium text-gray-500 bg-white border border-gray-300'
                            onClick={handleIncreaseQuantity}
                        >
                            +
                        </button>
                    </div>
                </td>
                <td className='px-6 py-4 font-semibold text-gray-900'>
                    {formatCurrency(unitPrice)}
                </td>
                <td className='px-6 py-4 font-semibold text-gray-900'>
                    {formatCurrency(totalPrice)}
                </td>
                <td className='px-6 py-4'>
                    <i className='ri-delete-bin-fill text-red-500 hover:text-red-400 text-xl cursor-pointer'></i>
                </td>
            </tr>
        </tbody>
    );
};
