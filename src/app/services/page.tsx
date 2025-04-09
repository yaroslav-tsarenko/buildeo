import React from 'react';
import {ServicesProvider} from "@/context/ServicesContext";
import ServicesPage from "@/components/services-page/ServicesPage";

const Page = () => {
    return (
        <ServicesProvider>
            <ServicesPage/>
        </ServicesProvider>
    );
};

export default Page;