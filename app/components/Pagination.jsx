'use client';
import { Box, Pagination } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function AppPagination() {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPageNumber, setCurrentPageNumber] = useState(currentPage);

    useEffect(() => {
        const searchParams = new URLSearchParams();
        searchParams.set('page', currentPage.toString());
        const queryString = searchParams.toString()
            ? `?${searchParams.toString()}`
            : '';
        const url = `${window.location.pathname}${queryString}`;
        router.push(url);
    }, [currentPage, router]);

    useEffect(() => {
        setCurrentPageNumber(currentPage);
    }, [currentPage]);

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <Box
            justifyContent={'center'}
            alignItems={'center'}
            display={'flex'}
            sx={{
                marginTop: '30px',
            }}
        >
            <Pagination
                count={6}
                page={currentPageNumber}
                onChange={handlePageChange}
            />
        </Box>
    );
}
