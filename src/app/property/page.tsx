import React from 'react';
import PropertyPage from "@/components/property-page/PropertyPage";
import { PropertyItemProvider } from '@/context/PropertyItemContext';

const Page = () => {
    return (
        <PropertyItemProvider>
            <PropertyPage/>
        </PropertyItemProvider>
    );
};

export default Page;