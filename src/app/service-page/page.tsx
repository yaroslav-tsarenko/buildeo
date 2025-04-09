import React from 'react';
import {ServiceProvider} from "@/context/ServiceContext";
import CurrentService from "@/components/current-service/CurrentService";

const Page = () => {
    return (
        <>
            <ServiceProvider>
                <CurrentService/>
            </ServiceProvider>
        </>
    );
};

export default Page;