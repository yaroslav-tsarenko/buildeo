"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import { newRequest } from "@/utils/newRequest";

interface Property {
    _id: string;
    title: string;
    description: string;
    photos: string[];
}

interface PropertiesContextProps {
    properties: Property[];
}

const PropertiesContext = createContext<PropertiesContextProps | undefined>(undefined);

export const useProperties = () => {
    const context = useContext(PropertiesContext);
    if (!context) {
        throw new Error("useProperties must be used within a PropertiesProvider");
    }
    return context;
};

export const PropertiesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProperties = async () => {
            setLoading(true);
            try {
                const response = await newRequest.get("/property/get-all");
                setProperties(response.data);
            } catch (error) {
                console.error("Failed to fetch properties:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, []);

    return (
        <PropertiesContext.Provider value={{ properties }}>
            {children}
            <Backdrop open={loading} style={{ zIndex: 1300 }}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </PropertiesContext.Provider>
    );
};