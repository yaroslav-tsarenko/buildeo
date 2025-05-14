"use client";

import React from 'react';
import BuildeoDashboard from "@/components/dashboard/BuildeoDashboard";
import Main from "@/sections/main/Main";
import Benefits from "@/sections/benefits/Benefits";
import RatePropertySection from "@/sections/rate-property/RatePropertySection";
import NumberOneAtMarket from "@/sections/number-one-at-market/NumberOneAtMarket";
import {useUser} from "@/context/UserContext";

const MainPage = () => {
    const user = useUser();
    const role = user?.role;
    return (
        <div>
            {role === 'admin' ?
                <>
                    <BuildeoDashboard/>
                </> :
                <>
                    <Main/>
                    <Benefits/>
                    <RatePropertySection/>
                    <NumberOneAtMarket/>
                </>}
        </div>
    );
};

export default MainPage;