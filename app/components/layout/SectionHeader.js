import React from 'react';
import Link from 'next/link';

const SectionHeader = ({ url, subHeader }) => {
    return (
        <div className='flex flex-row items-baseline justify-between pt-8 p-4'>
            <h2 className='text-primary font-bold text-xl md:text-2xl mb-2 '>{subHeader}</h2>
            <Link
                href={url}
                className='text-black font-semibold text-[12px] hover:underline cursor-pointer'
            >
                Show All
            </Link>
        </div>
    );
};

export default SectionHeader;
