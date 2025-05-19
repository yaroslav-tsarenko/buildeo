"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { newRequest } from "@/utils/newRequest";
import Image from "next/image";
import { CSSProperties } from "react";
import logo from "@/assets/logos/buildeo-logo-dark.svg"

type Service = {
    _id: string;
    category: string;
    description: string;
    userId: string;
    photo: string;
    title: string;
    price: number;
    serviceType: string[];
    createdAt: string;
};

type ServicesContextType = {
    services: Service[];
};

const ServicesContext = createContext<ServicesContextType | undefined>(undefined);

const styles: { [key: string]: CSSProperties } = {
    loaderContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
        position: "relative",
        overflow: "hidden",
        transition: "opacity 0.5s ease-in-out",
    },
    bouncingLogo: {
        fontSize: "3rem",
        animation: "bounce 1.5s infinite ease-in-out",
    },
    content: {
        opacity: 1,
        transition: "opacity 0.5s ease-in-out",
    }
};

export const ServicesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchServices = async () => {
            setLoading(true);
            try {
                const response = await newRequest.get("/service/get-all");
                setServices(response.data);
            } catch (error) {
                console.error("Error fetching services:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    return (
        <ServicesContext.Provider value={{ services }}>
            {loading ? (
                <div style={styles.loaderContainer}>
                    <div style={styles.bouncingLogo}>
                        <Image src={logo} alt="BUILDEO" width={200} height={170} />
                    </div>
                </div>
            ) : (
                <div style={styles.content}>{children}</div>
            )}
        </ServicesContext.Provider>
    );
};

export const useServices = () => {
    const context = useContext(ServicesContext);
    if (!context) {
        throw new Error("useServices must be used within a ServicesProvider");
    }
    return context;
};