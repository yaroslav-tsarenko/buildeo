import "./globals.css";
import Footer from "@/components/footer/Footer";
import React from "react";
import type {Metadata} from "next";
import {authWrapper} from "@/utils/AuthWrapper";
import {AlertProvider} from "@/context/AlertContext";
import MainHeader from "@/components/main-header/MainHeader";
import {DialogAlertProvider} from "@/context/DialogAlertContext";
import {ServicesProvider} from "@/context/ServicesContext";

type RootLayoutProps = {
    children: React.ReactNode;
};

export const metadata: Metadata = {
    title: "BUILDEO - Find the best service for your needs",
    description: "Building a better future with technology",
    authors: [{name: "Premiant LTD"}],
};

const RootLayout: React.FC<RootLayoutProps> = ({children}) => {
    return (
        <html lang="en">
        <DialogAlertProvider>
            <AlertProvider>
                <ServicesProvider>
                    <MainHeader/>
                </ServicesProvider>
                <body>
                {children}
                <Footer/>
                </body>
            </AlertProvider>
        </DialogAlertProvider>
        </html>
    );
};

export default authWrapper(RootLayout);
