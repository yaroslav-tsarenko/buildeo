import React from 'react';
import AuthLayout from "@/components/auth-layout/AuthLayout";
import SignUpAuth from "@/components/sign-up/SignUpAuth";

const Page = () => {
    return (
        <AuthLayout>
            <SignUpAuth/>
        </AuthLayout>
    );
};

export default Page;