import React from 'react';
import {home} from '@/assets/config/content';
import {baseURL} from '@/assets/config/content';
import MainPage from "@/sections/main-page/MainPage";

export async function generateMetadata() {
    const title = home.title;
    const description = home.description;
    const ogImage = `https://buildeo.vercel.app/images/avatar.jpg`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `https://${baseURL}`,
            type: 'website',
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    };
}


const Page = () => {


    return (
        <>
           <MainPage/>
        </>
    );
};

export default Page;