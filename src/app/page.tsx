import React from 'react';
import Benefits from '@/sections/benefits/Benefits';
import NumberOneAtMarket from "@/sections/number-one-at-market/NumberOneAtMarket";
import RatePropertySection from "@/sections/rate-property/RatePropertySection";
import Main from "@/sections/main/Main";

const Page = () => {
    return (
        <>
            <Main/>
            <Benefits/>
            <RatePropertySection/>
            <NumberOneAtMarket/>
        </>
    );
};

export default Page;