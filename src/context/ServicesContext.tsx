"use client"

import React, { createContext, useContext, useEffect, useState } from 'react';
import { newRequest } from '@/utils/newRequest';

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

export const ServicesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchServices = async () => {
            setLoading(true);
            try {
                const response = await newRequest.get('/service/get-all');
                setServices(response.data);
            } catch (error) {
                console.error('Error fetching services:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    return (
        <ServicesContext.Provider value={{ services }}>
            {loading ?
                <>Loading...</>
                :
                <>{children}</>
            }
        </ServicesContext.Provider>
    );
};

export const useServices = () => {
    const context = useContext(ServicesContext);
    if (!context) {
        throw new Error('useServices must be used within a ServicesProvider');
    }
    return context;
};