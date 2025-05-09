import React from 'react';
import Benefits from '@/sections/benefits/Benefits';
import NumberOneAtMarket from "@/sections/number-one-at-market/NumberOneAtMarket";
import RatePropertySection from "@/sections/rate-property/RatePropertySection";
import Main from "@/sections/main/Main";
import { home } from '@/assets/config/content';
import { baseURL } from '@/assets/config/content';

export async function generateMetadata() {
    const title = home.title;
    const description = home.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "website",
            url: `https://${baseURL}`,
            images: [
                {
                    url: ogImage,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImage],
        },
    };
}

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