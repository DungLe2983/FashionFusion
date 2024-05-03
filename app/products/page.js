import Image from 'next/image';
import FilterSection from '../components/layout/FilterSection';
import ProductSection from '../components/menu/ProductSection';
import Pagination from '@mui/material/Pagination';
export default function ProductPage() {
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
                    <ProductSection />
                    <Pagination className='mt-8' shape='rounded' count={10} />
                </div>
            </div>
        </main>
    );
}
