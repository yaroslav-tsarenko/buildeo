import "./globals.css";
import Footer from "@/components/footer/Footer";
import React from "react";
import { authWrapper } from "@/utils/AuthWrapper";
import { AlertProvider } from "@/context/AlertContext";
import MainHeader from "@/components/main-header/MainHeader";
import { DialogAlertProvider } from "@/context/DialogAlertContext";
import { ServicesProvider } from "@/context/ServicesContext";
import { baseURL } from "@/assets/config/content";

type RootLayoutProps = {
    children: React.ReactNode;
};

export async function generateMetadata() {
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent("BUILDEO")}`;

    return {
        metadataBase: new URL(`https://${baseURL}`),
        title: "BUILDEO",
        description: "BEST services provider",
        keywords: [
            "Frontend Developer", "Fullstack Developer", "Web Developer", "JavaScript Developer",
            "React Developer", "Next.js Developer", "Node.js Developer", "MongoDB Developer",
            "Freelance Frontend Developer", "Hire Fullstack Developer", "Remote Web Developer",
            "Responsive Website Developer", "Professional Developer Portfolio", "Yaroslav Tsarenko Developer",
            "Portfolio with React", "Next.js Projects", "Modern Web Developer", "SCSS Tailwind Developer",
            "Zustand State Management", "Stripe Checkout Integration", "JWT Auth Developer",
            "React Frontend Engineer", "Fullstack Engineer", "Ukraine Web Developer",
            "Top Web Developer 2025", "Experienced React Developer", "Express.js Backend Developer",
            "JavaScript Developer Portfolio", "Web App Developer", "Software Engineer Portfolio"
        ],
        openGraph: {
            title: `buildeo Portfolio`,
            description: "Portfolio website showcasing my work.",
            url: baseURL,
            siteName: `buildeo's Portfolio`,
            locale: "en_US",
            type: "website",
            images: [
                {
                    url: ogImage,
                    alt: "BUILDEO",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "BUILDEO",
            description: "BEST services provider",
            images: [ogImage],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
    };
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="en">
        <body>
        <DialogAlertProvider>
            <AlertProvider>
                <ServicesProvider>
                    <MainHeader />
                    {children}
                    <Footer />
                </ServicesProvider>
            </AlertProvider>
        </DialogAlertProvider>
        </body>
        </html>
    );
};

export default authWrapper(RootLayout);