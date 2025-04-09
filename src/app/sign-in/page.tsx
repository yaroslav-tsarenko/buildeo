import AuthLayout from '@/components/auth-layout/AuthLayout';
import React from 'react';
import SignInAuth from "@/components/sign-in/SignInAuth";

const Page = () => {
    return (
        <AuthLayout>
            <SignInAuth/>
        </AuthLayout>
    );
};

export default Page;