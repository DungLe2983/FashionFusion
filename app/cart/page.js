'use client';
import React, { useEffect, useState } from 'react';
import { TableProductInCart } from '../components/layout/TableProductInCart';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Loader from '../components/Loader';

const TEMP = 5;

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [countProduct, setCountProduct] = useState(0);

    const session = useSession();
    const { status } = session;
    const userEmail = session.data?.session.user.email;

    const fetchCartItems = async () => {
        try {
            const response = await fetch(`/api/cart-item/${userEmail}`);
            if (!response.ok) {
                throw new Error(`HTTP error status: ${response.status}`);
            }
            const data = await response.json();
            console.log('data', data);
            setCountProduct(data.length);
            setCartItems(data);
        } catch (error) {
            console.error('Failed to fetch cart items:', error);
        }
    };

    useEffect(() => {
        if (userEmail) {
            fetchCartItems();
        }
    }, [userEmail]);

    useEffect(() => {
        const calculateTotalPrice = () => {
            const total = cartItems.reduce((sum, item) => {
                return sum + item.product_item_id.price * item.item_quantity;
            }, 0);
            setTotalPrice(total);
        };

        if (cartItems.length > 0) {
            calculateTotalPrice();
        } else {
            setTotalPrice(0);
        }
    }, [cartItems]);

    const handleQuantityChange = async (id, e) => {
        // let newQuantity = Number(e.target.value);
        let newQuantity = e.target.value === '' ? 1 : Number(e.target.value);

        const currentItem = cartItems.find((item) => item._id === id);

        if (currentItem) {
            const currentQuantity = currentItem.product_item_id.quantity;

            if (newQuantity < 1) {
                newQuantity = 0;
            }

            if (newQuantity > currentQuantity) {
                console.log('newQuantity', newQuantity);
                newQuantity = currentQuantity;
                console.log('Chỉ còn lại ', currentQuantity, ' sản phẩm');
            }

            // Cập nhật cartItems
            const updatedCartItems = cartItems.map((item) =>
                item._id === id ? { ...item, item_quantity: newQuantity } : item
            );

            setCartItems(updatedCartItems);

            // Gửi yêu cầu PUT tới API
            await fetch(`/api/cart-item`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ newQuantity: newQuantity, id: id }),
            });
        }
    };

    async function handleDeleteCartItem(id) {
        try {
            const res = await fetch(`/api/cart-item/`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: id }),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(
                    errorData.error || 'Failed to delete cart item'
                );
            }

            // Cập nhật state giỏ hàng ngay lập tức bằng cách lọc bỏ mục đã xóa
            setCartItems(cartItems.filter((item) => item._id !== id));
            setCountProduct((prev) => prev - 1);

            alert('Xóa thành công');
        } catch (error) {
            alert('Xóa không thành công');
            console.log('Error deleting cart item:', error.message);
        }
    }

    // Check authenticated
    if (status === 'loading') {
        return <Loader/>;
    }

    if (status === 'unauthenticated') {
        return redirect('/login');
    }

    return (
        <div>
            <h2 className='text-center font-bold text-3xl mt-8'>
                Giỏ hàng của bạn
            </h2>
            <p className='text-center text-sm mt-2'>
                Có{' '}
                <span className='font-semibold'>{countProduct} sản phẩm</span>{' '}
                trong giỏ hàng
            </p>
            <div className='table-container mt-16'>
                <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                    <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                            <tr>
                                <th scope='col' className='px-6 py-3'>
                                    Thông tin sản phẩm
                                </th>
                                <th scope='col' className='pl-16 md:px-6 py-3'>
                                    Số lượng
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Đơn giá
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Thành tiền
                                </th>
                            </tr>
                        </thead>
                        {/* <TableProductInCart /> */}
                        {cartItems.map((item, index) => (
                            // <TableProductInCart key={index} item={item} />
                            <tbody>
                                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                                    <td className='p-4'>
                                        <div className='flex gap-2'>
                                            <img
                                                className='w-32 h-32 object-cover'
                                                src={
                                                    item.product_item_id
                                                        .product_id.image[0]
                                                }
                                                alt='productInCartImg'
                                            />
                                            <div className='flex flex-col gap-2 justify-center text-sm'>
                                                <p className=' cursor-pointer hover:text-primary font-semibold'>
                                                    {
                                                        item.product_item_id
                                                            .product_id.name
                                                    }
                                                </p>
                                                <p>
                                                    {
                                                        item.product_item_id
                                                            .color_id.name
                                                    }{' '}
                                                    /{' '}
                                                    {
                                                        item.product_item_id
                                                            .size_id.name
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='pl-16 md:px-6 py-4'>
                                        <div className='flex items-center gap-0'>
                                            <input
                                                id='quantity'
                                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm block h-6 w-12  text-center appearance-none'
                                                required
                                                value={item.item_quantity}
                                                onChange={(e) =>
                                                    handleQuantityChange(
                                                        item._id,
                                                        e
                                                    )
                                                }
                                                min='1'
                                                type='number'
                                            />
                                        </div>
                                    </td>
                                    <td className='px-6 py-4 font-semibold text-gray-900'>
                                        {item.product_item_id.price.toLocaleString()}{' '}
                                        đ
                                    </td>
                                    <td className='px-6 py-4 font-semibold text-gray-900'>
                                        {(
                                            item.product_item_id.price *
                                            item.item_quantity
                                        ).toLocaleString()}{' '}
                                        đ
                                    </td>
                                    <td className='px-6 py-4'>
                                        <i
                                            className='ri-delete-bin-fill text-red-500 hover:text-red-400 text-xl cursor-pointer'
                                            onClick={() => {
                                                handleDeleteCartItem(item._id);
                                            }}
                                        ></i>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
                <div className='mt-6 flex md:justify-end'>
                    <div className='text-right flex flex-col gap-4 '>
                        <div className=' flex flex-col md:flex-row items-baseline md:gap-60'>
                            <p className='font-semibold text-gray-900'>
                                Tổng tiền:
                            </p>
                            <span className='text-red-500 font-semibold text-xl'>
                                {totalPrice.toLocaleString()}đ
                            </span>
                        </div>
                        <Link
                            href={'/checkout'}
                            className=' text-center bg-primary font-bold py-3 w-full px-2 text-white '
                        >
                            Thanh toán
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
