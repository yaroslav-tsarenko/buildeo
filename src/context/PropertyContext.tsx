"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import { newRequest } from "@/utils/newRequest";

interface Property {
    _id: string;
    title: string;
    description: string;
    location: string;
    photos: string[];
    price: number;
    type: string;
}

type PropertyFilter = Partial<{
    price: number;
    type: string;
    location: string;
    rooms: number;
    floor: number;
    parking: boolean;
    petsAllowed: boolean;
}>;

interface PropertiesContextProps {
    properties: Property[];
    filteredProperties: Property[];
    setFilter: (filter: Partial<PropertyFilter>) => void;
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
    const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [filters, setFilters] = useState<Partial<PropertyFilter>>({});

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

    useEffect(() => {
        const filtered = properties.filter(property => {
            return Object.keys(filters).every(key => {
                const value = filters[key as keyof PropertyFilter];

                if (key === 'price') {
                    return property.price <= Number(value);
                }

                if (key === 'type') {
                    return property.type === value;
                }

                return property[key as keyof Property] === value;
            });
        });
        setFilteredProperties(filtered);
    }, [properties, filters]);

    const setFilter = (filter: Partial<Property>) => {
        setFilters(prev => ({ ...prev, ...filter }));
    };

    return (
        <PropertiesContext.Provider value={{ properties, filteredProperties, setFilter }}>
            {children}
            <Backdrop open={loading} style={{ zIndex: 1300 }}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </PropertiesContext.Provider>
    );
};
