'use client';
import { useEffect, useState } from 'react';
import FilterSection from '../components/layout/FilterSection';
import ProductSection from '../components/menu/ProductSection';
import AppPagination from '../components/Pagination';

const ProductPage = () => {
    const [products, setProducts] = useState();
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
    };

    async function getProducts() {
        try {
            const res = await fetch(`/api/products?page=${currentPage}`, {
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
    }, [currentPage]);

    return (
        <main className='max-w-7xl mx-auto '>
            <img
                src={'/banner2.png'}
                alt='banner'
                className='w-full h-[300px] object-fill md:object-cover rounded'
            />
            <p className='font-semibold text-xl md:text-3xl text-primary mt-8'>
                Tất cả sản phẩm:
            </p>
            <div className='grid grid-cols-8 py-8 gap-10'>
                <FilterSection />
                <div className='col-span-6'>
                    <ProductSection products={products} />
                    <AppPagination
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </main>
    );
};
export default ProductPage;
