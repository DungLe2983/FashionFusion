'use client';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const colors = ['Đen', 'Trắng', 'Vàng', 'Nâu', 'Đỏ', 'Hồng'];
const categories = ['Nam', 'Nữ'];
const sizes = ['S', 'M', 'L', 'XL'];
const sortingOrder = [
    'Áo thun',
    'Áo Polo',
    'Baby Tee',
    'Áo sơ mi',
    'Hoodie',
    'Quần',
    'Phụ kiện',
];

const filterOptions = [
    {
        id: 'sort',
        title: 'Bộ lọc tìm kiếm',
        options: sortingOrder,
        type: 'checkbox',
    },
    {
        id: 'categories',
        title: 'Giới tính',
        options: categories,
        type: 'checkbox',
    },
    {
        id: 'colors',
        title: 'Màu sắc',
        options: colors,
        type: 'checkbox',
    },
    {
        id: 'sizes',
        title: 'Sizes',
        options: sizes,
        type: 'checkbox',
    },
];

const FilterSection = () => {
    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleFilterChange = (filterId, option) => {
        setSelectedFilters((prevFilters) => {
            // Check if the filter is already selected
            const filterIndex = prevFilters.findIndex(
                (filter) => filter.id === filterId
            );

            if (filterIndex !== -1) {
                // Filter is already selected, update the options
                const updatedFilters = [...prevFilters];
                updatedFilters[filterIndex].options = option.checked
                    ? [...updatedFilters[filterIndex].options, option.value]
                    : updatedFilters[filterIndex].options.filter(
                          (value) => value !== option.value
                      );
                return updatedFilters;
            }

            // Filter is not selected, add a new filter
            return [
                ...prevFilters,
                {
                    id: filterId,
                    title: '',
                    options: [option.value],
                    type: '',
                },
            ];
        });
    };

    return (
        <div className='col-span-2 space-y-6 h-fit top-12 sticky'>
            {/* Render filter options */}
            {filterOptions.map((filter) => (
                <div className='border-b pb-4' key={filter.id}>
                    <h3 className='font-bold mb-2 text-sm md:text-base '>
                        {filter.title}
                    </h3>
                    {filter.options.map((option) => (
                        <label
                            key={option}
                            className='flex items-center space-x-2 text-sm md:text-base text-gray-600 cursor-pointer'
                        >
                            <div className='flex gap-2 items-center mt-2'>
                                <input
                                    type={filter.type}
                                    value={option}
                                    checked={selectedFilters.some(
                                        (selectedFilter) =>
                                            selectedFilter.id === filter.id &&
                                            selectedFilter.options.includes(
                                                option
                                            )
                                    )}
                                    onChange={(e) =>
                                        handleFilterChange(filter.id, e.target)
                                    }
                                    className='form-checkbox focus:ring-white h-4 w-4 text-gray-600 border-gray-300 rounded'
                                />
                                <span>{option}</span>
                            </div>
                        </label>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default FilterSection;
