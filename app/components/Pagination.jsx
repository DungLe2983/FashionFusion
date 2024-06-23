"use client";
import { Box, Pagination } from "@mui/material";
import { useState, useEffect } from "react";

export default function AppPagination({ currentPage, onPageChange, count }) {
    const [totalCount, setTotalCount] = useState(0);

    const handlePageChange = (event, newPage) => {
        onPageChange(event, newPage);
    };

    async function getTotalProducts() {
        try {
            const res = await fetch(`/api/products/getlength`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });

            if (res.ok) {
                const data = await res.json();
                if (data) {
                    setTotalCount(data.length);
                } else {
                    console.error("User not found or response is empty.");
                }
            } else {
                console.error("Error fetching user:", res.statusText);
            }
        } catch (error) {
            console.error("Error in fetch:", error);
        }
    }

    useEffect(() => {
        getTotalProducts();
        // setTotalCount(count);
    });
    return (
        <Box
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
            sx={{
                marginTop: "30px",
            }}
        >
            <Pagination
                count={Math.ceil(totalCount / 6)} // Tổng số trang
                page={currentPage}
                onChange={handlePageChange}
            />
        </Box>
    );
}
