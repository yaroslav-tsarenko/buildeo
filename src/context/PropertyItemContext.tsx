"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { newRequest } from "@/utils/newRequest";

interface Property {
    _id: string;
    title: string;
    description: string;
    location: string;
    price?: number;
    type?: string;
    offerings: string;
    userId: string;
    reviews: {
        _id: string;
        firstName: string;
        lastName: string;
        rating: number;
        comment: string;
        avatar: string;
    }[];
    clientPhoneNumber?: string;
    photos: string[];
}

interface PropertyItemContextProps {
    property: Property | null;
    loading: boolean;
    error: string | null;
    fetchProperty: (propertyId: string) => void;
}

const PropertyItemContext = createContext<PropertyItemContextProps | undefined>(undefined);

export const usePropertyItem = () => {
    const context = useContext(PropertyItemContext);
    if (!context) {
        throw new Error("usePropertyItem must be used within a PropertyItemProvider");
    }
    return context;
};

export const PropertyItemProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [property, setProperty] = useState<Property | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchProperty = async (id: string) => {
        setLoading(true);
        setError(null);
        try {
            const response = await newRequest.get(`/property/get-property`, { params: { propertyId: id } });
            setProperty(response.data);
        } catch {
            setError("Failed to fetch property");
            setProperty(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const propertyId = localStorage.getItem("propertyId");
        if (propertyId) {
            fetchProperty(propertyId);
        }
    }, []);

    return (
        <PropertyItemContext.Provider value={{ property, loading, error, fetchProperty }}>
            {children}
        </PropertyItemContext.Provider>
    );
};