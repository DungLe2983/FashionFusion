import Image from 'next/image';
import React from 'react';
const filteredProducts = [
    {
        id: 1,
        title: 'Product 1',
        desc: 'Description of Product 1',
        price: 10.99,
        image: '/productImg.jpg',
        rate: 4,
    },
    {
        id: 2,
        title: 'Product 2',
        desc: 'Description of Product 2',
        price: 19.99,
        image: '/productImg.jpg',
        rate: 4.5,
    },
    {
        id: 3,
        title: 'Product 3',
        desc: 'Description of Product 3',
        price: 8.99,
        image: '/productImg.jpg',
        rate: 5,
    },
    {
        id: 4,
        title: 'Product 4',
        desc: 'Description of Product 4',
        price: 12.99,
        image: '/productImg.jpg',
        rate: 3.8,
    },
    {
        id: 5,
        title: 'Product 5',
        desc: 'Description of Product 5',
        price: 15.99,
        image: '/productImg.jpg',
        rate: 5,
    },
    {
        id: 6,
        title: 'Product 6',
        desc: 'Description of Product 6',
        price: 9.99,
        image: '/productImg.jpg',
        rate: 5,
    },
    {
        id: 7,
        title: 'Product 7',
        desc: 'Description of Produ aaa',
        price: 14.99,
        image: '/productImg.jpg',
        rate: 5,
    },
    {
        id: 8,
        title: 'Product 8',
        desc: 'Description of Product 8',
        price: 11.99,
        image: '/productImg.jpg',
        rate: 5,
    },
    {
        id: 9,
        title: 'Product 9',
        desc: 'Description of Product 9',
        price: 13.99,
        image: '/productImg.jpg',
        rate: 5,
    },
    {
        id: 10,
        title: 'Product 10',
        desc: 'Description of Product 10',
        price: 7.99,
        image: '/productImg.jpg',
        rate: 5,
    },
];
const ProductSection = () => {
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12'>
            {filteredProducts.map((product) => (
                <div key={product.id}>
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={400}
                        height={400}
                        className='rounded-md shadow-sm  aspect-[4/5] object-cover object-top cursor-pointer'
                    />
                    <div className='space-y-1'>
                        <div>
                            <p className='mt-4 font-medium truncate cursor-pointer'>
                                {' '}
                                {product.title}
                            </p>
                        </div>
                        <p className=' line-clamp-2 text-slate-500 text-sm '>
                            {product.desc}
                        </p>
                        <div className='flex justify-between items-center'>
                            <p className='font-semibold'>Rs: {product.price}</p>
                            <p className='flex gap-2 items-center mr-2 text-sm'>
                                <i className='ri-star-fill text-yellow-400'></i>
                                <span className='font-semibold'>{product.rate}</span>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
            ;
        </div>
    );
};

export default ProductSection;
