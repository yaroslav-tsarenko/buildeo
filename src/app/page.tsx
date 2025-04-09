import React from 'react';
import Main from "@/sections/main/Main";
import {ServicesProvider} from "@/context/ServicesContext";
import ServicesContent from "@/components/services-content/ServicesContent";

const Page = () => {
    return (
        <>
            <ServicesProvider>
                <Main/>
                <ServicesContent/>
            </ServicesProvider>
        </>
    );
};

export default Page;