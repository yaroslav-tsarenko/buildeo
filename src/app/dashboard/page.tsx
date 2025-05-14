"use client";

import {AllUsersProvider} from "@/context/AllUsersContext";

export const dynamic = 'force-dynamic';

import React from 'react';
import BuildeoDashboard from "@/components/dashboard/BuildeoDashboard";

const Page = () => {
    return (
        <AllUsersProvider>
            <BuildeoDashboard/>
        </AllUsersProvider>
    );
};

export default Page;