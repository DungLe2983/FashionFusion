"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

// const colors = ["Đen", "Trắng", "Vàng", "Nâu", "Đỏ", "Hồng"];
// const sizes = ["S", "M", "L", "XL"];
// const sortingOrder = [
//     "Áo thun",
//     "Áo Polo",
//     "Baby Tee",
//     "Áo sơ mi",
//     "Hoodie",
//     "Quần",
//     "Phụ kiện",
// ];

// const filterOptions = [
//     {
//         id: "sort",
//         title: "Bộ lọc tìm kiếm",
//         options: sortingOrder,
//         type: "checkbox",
//     },
//     {
//         id: "colors",
//         title: "Màu sắc",
//         options: colors,
//         type: "checkbox",
//     },
//     {
//         id: "sizes",
//         title: "Sizes",
//         options: sizes,
//         type: "checkbox",
//     },
// ];

const FilterSection = () => {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filterOptions, setFilterOptions] = useState();

    async function handleFilter(filter) {
        try {
            const res = await fetch("/api/products/filter", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(filter),
            });

            const data = await res.json();
            console.log("fetch data:", data);
        } catch (error) {
            console.error("error", error.message);
        }
    }

    async function getFilterOptions() {
        try {
            const res = await fetch(`/api/filter`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            if (!res.ok) {
                console.log("loi fetch");
                return;
            }
            const data = await res.json();
            console.log("filter options", data);
            setFilterOptions(data);
        } catch (error) {
            console.error("error:", error.message);
        }
    }

    const handleOptionChange = (filterName, optionName, isChecked, type) => {
        setSelectedFilters((prevSelectedFilters) => {
            // Kiểm tra xem filterName đã tồn tại trong mảng chưa
            const existingFilterIndex = prevSelectedFilters.findIndex(
                (filter) => filter.name === filterName
            );

            if (existingFilterIndex !== -1) {
                // Nếu filterName đã tồn tại, cập nhật options
                let updatedOptions = [
                    ...prevSelectedFilters[existingFilterIndex].options,
                ];

                if (isChecked) {
                    // Nếu người dùng chọn, thêm optionName vào mảng
                    if (type === "checkbox") {
                        updatedOptions.push(optionName);
                    } else if (type === "radio") {
                        // Với radio button, chỉ cập nhật option đầu tiên
                        updatedOptions = [optionName];
                    }
                } else {
                    // Nếu người dùng bỏ chọn, xóa optionName khỏi mảng
                    updatedOptions = updatedOptions.filter(
                        (name) => name !== optionName
                    );
                }

                // Trả về mảng đã cập nhật
                return prevSelectedFilters.map((filter) =>
                    filter.name === filterName
                        ? { ...filter, options: updatedOptions }
                        : filter
                );
            } else {
                // Nếu filterName chưa tồn tại, thêm filter mới vào mảng
                return [
                    ...prevSelectedFilters,
                    {
                        name: filterName,
                        options: isChecked ? [optionName] : [],
                    },
                ];
            }
        });
    };

    useEffect(() => {
        console.log("Updated filters:", selectedFilters);
        handleFilter(selectedFilters);
    }, [selectedFilters]);

    useEffect(() => {
        getFilterOptions();
    }, []);

    return (
        <div className="col-span-2 space-y-6 h-fit top-12 sticky">
            {filterOptions?.map((filter) => (
                <div className="border-b pb-4" key={filter.name}>
                    <h3 className="font-bold mb-2 text-sm md:text-base ">
                        {filter.name}
                    </h3>
                    {filter.options?.map((option) => (
                        <label
                            key={option}
                            className="flex items-center space-x-2 text-sm md:text-base text-gray-600 cursor-pointer"
                        >
                            <div className="flex gap-2 items-center mt-2">
                                <input
                                    type={filter.type}
                                    value={option.name}
                                    name={filter.name}
                                    // checked={selectedFilters.some(
                                    //     (selectedFilter) =>
                                    //         selectedFilter.id === filter.id &&
                                    //         selectedFilter.options.includes(
                                    //             option
                                    //         )
                                    // )}
                                    // onChange={(e) =>
                                    //     handleFilterChange(filter.id, e.target)
                                    // }
                                    onChange={(e) =>
                                        handleOptionChange(
                                            filter.name,
                                            option._id,
                                            e.target.checked,
                                            filter.type
                                        )
                                    }
                                    className="form-checkbox focus:ring-white h-4 w-4 text-gray-600 border-gray-300 rounded"
                                />
                                <span>{option.name}</span>
                            </div>
                        </label>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default FilterSection;
