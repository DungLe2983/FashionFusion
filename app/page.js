'use client';
import { useState } from 'react';
import Hero from './components/layout/Hero';
import SectionHeader from './components/layout/SectionHeader';

export default function Home() {
    return (
        <div>
            <Hero />
            <SectionHeader url={'/'} subHeader={'New Arrivals'} />
        </div>
    );
}
