"use client";
import { useEffect, useState } from "react";
import FilterSection from "../components/layout/FilterSection";
import ProductSection from "../components/menu/ProductSection";
import AppPagination from "../components/Pagination";
import Loader from "../components/Loader";

const ProductPage = () => {
    const [products, setProducts] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [count, setCount] = useState();

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
    };

    const handleFilterChange = (filterName, optionName, isChecked, type) => {
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

    async function handleFilter(filter) {
        try {
            const res = await fetch(
                `/api/products/filter?page=${currentPage}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(filter),
                }
            );

            const data = await res.json();

            if (data) {
                // console.log("fetch data:", data);
                setProducts(data);
            } else {
                console.error("User not found or response is empty.");
            }
        } catch (error) {
            console.error("error", error.message);
        }
    }

    useEffect(() => {
        // console.log("Updated filters:", selectedFilters);
        setCurrentPage(1);
        handleFilter(selectedFilters);
    }, [selectedFilters]);

    useEffect(() => {
        // console.log("Current page:", currentPage);
        handleFilter(selectedFilters);
    }, [currentPage]);

    return loading ? (
        <Loader />
    ) : (
        <main className="max-w-7xl mx-auto ">
            <img
                src={"/banner2.png"}
                alt="banner"
                className="w-full h-[300px] object-cover md:object-cover rounded"
            />
            <p className="font-semibold text-xl md:text-3xl text-primary mt-8">
                Tất cả sản phẩm:
            </p>
            <div className="grid grid-cols-8 py-8 gap-10">
                <FilterSection filterChange={handleFilterChange} />
                <div className="col-span-6">
                    <ProductSection products={products} />
                    <AppPagination
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                        count={count}
                    />
                </div>
            </div>
        </main>
    );
};
export default ProductPage;
