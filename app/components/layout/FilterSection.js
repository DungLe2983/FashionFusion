"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";


export default function FilterSection({ filterChange }) {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filterOptions, setFilterOptions] = useState();

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
            // console.log("filter options", data);
            setFilterOptions(data);
        } catch (error) {
            console.error("error:", error.message);
        }
    }

    const handleOptionChange = (filterName, optionName, isChecked, type) => {
        filterChange(filterName, optionName, isChecked, type);
    };

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
                            className="flex items-center space-x-2 text-xs md:text-base text-gray-600 cursor-pointer"
                        >
                            <div className="flex gap-2 items-center mt-2">
                                <input
                                    type={filter.type}
                                    value={option.name}
                                    name={filter.name}
                                    onChange={(e) =>
                                        handleOptionChange(
                                            filter.name,
                                            option._id,
                                            e.target.checked,
                                            filter.type
                                        )
                                    }
                                    className="form-checkbox focus:ring-white h-2 w-2 md:h-4 md:w-4 text-gray-600 border-gray-300 rounded"
                                />
                                <span>{option.name}</span>
                            </div>
                        </label>
                    ))}
                </div>
            ))}
        </div>
    );
}
