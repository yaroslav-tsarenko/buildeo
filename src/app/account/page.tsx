
import Account from '@/components/account/Account';
import { ServicesProvider } from '@/context/ServicesContext';
import React from 'react';

const Page = () => {
    return (
        <ServicesProvider>
          <Account/>
        </ServicesProvider>
    );
};

export default Page;