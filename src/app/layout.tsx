export const dynamic = "force-dynamic";

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
        title: "BUILDEO – Immobilien & Services digital verwalten",
        description:
            "Buildeo ist Ihre Plattform für digitale Immobilienvermittlung, Serviceangebote und moderne Wohnlösungen in Deutschland und Österreich. Inserieren, finden und verwalten Sie alles online.",
        keywords: [
            "Immobilienplattform", "Wohnung mieten", "Haus verkaufen", "digitale Immobilienvermittlung",
            "Immobiliensuche Deutschland", "Immobiliensuche Österreich", "Immobilien digital inserieren",
            "Umzugsservice buchen", "Handwerker finden", "Immobilienanzeigen erstellen",
            "Mietwohnungen online", "Haus mieten Graz", "Wohnung Wien", "Bauträger digital",
            "Services für Vermieter", "Plattform für Immobilien und Services", "Immobilienpreise Österreich",
            "Preisatlas Deutschland", "Digitale Vertragsabwicklung", "DSGVO-konforme Plattform",
            "Immobilienservice 2025", "Innovative Immobilienlösung", "Immobilienportal",
            "Transparente Wohnungsvermittlung", "Sichere digitale Immobilienplattform"
        ],
        openGraph: {
            title: "BUILDEO – Ihre Plattform für Immobilien & Services",
            description:
                "Finden, vermieten und verwalten Sie Immobilien und wohnnahe Dienstleistungen bequem online mit Buildeo.",
            url: baseURL,
            siteName: "BUILDEO",
            locale: "de_DE",
            type: "website",
            images: [
                {
                    url: ogImage,
                    alt: "BUILDEO – Digitale Immobilienplattform",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "BUILDEO – Immobilien & Services digital verwalten",
            description: "Digitale Lösungen für Immobilien und Services in Deutschland & Österreich.",
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