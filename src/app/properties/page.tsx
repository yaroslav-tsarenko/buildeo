import React from 'react';
import PropertiesPage from "@/components/properties/PropertiesPage";
import {PropertiesProvider} from "@/context/PropertyContext";

const Page = () => {
    return (
        <PropertiesProvider>
            <PropertiesPage/>
        </PropertiesProvider>
    );
};

export default Page;