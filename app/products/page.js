import Image from 'next/image';
import FilterSection from '../components/layout/FilterSection';
import ProductSection from '../components/menu/ProductSection';

export default function ProductPage() {
    return (
        <main className='max-w-6xl mx-auto '>
            <img
                src={'/banner2.png'}
                alt='banner'
                className='w-full h-[300px] object-cover rounded'
            />
            <div className='grid grid-cols-8 py-8 gap-10'>
                <FilterSection />
                <div className='col-span-6'>
                    <ProductSection />
                </div>
            </div>
        </main>
    );
}
