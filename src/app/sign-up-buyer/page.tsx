import React from 'react';
import AuthLayout from "@/components/auth-layout/AuthLayout";
import SignUpAuthBuyer from '@/components/sign-up-buyer/SignUpAuthBuyer';


const Page = () => {
    return (
        <AuthLayout>
            <SignUpAuthBuyer/>
        </AuthLayout>
    );
};

export default Page;