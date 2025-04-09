"use client"

import React, { createContext, useContext, useEffect, useState } from 'react';
import { newRequest } from '@/utils/newRequest';

interface Service {
    _id: string;
    category: string;
    description: string;
    title: string;
    price: number;
    photo: string;
    userId: string;
    clientPhoneNumber: string;
    serviceType: string[];
    offerings: string;
    reviews: {
        _id: string;
        firstName: string;
        lastName: string;
        rating: number;
        comment: string;
        avatar: string;
    }[];
    createdAt: string;
}

interface ServiceContextProps {
    service: Service | null;
    setServiceId: (id: string) => void;
}

const ServiceContext = createContext<ServiceContextProps | undefined>(undefined);

export const ServiceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [service, setService] = useState<Service | null>(null);
    const [serviceId, setServiceId] = useState<string | null>(localStorage.getItem('serviceId'));

    useEffect(() => {
        const fetchService = async () => {
            if (serviceId) {
                try {
                    const response = await newRequest.get(`service/get-service`, {
                        params: { serviceId },
                    });
                    setService(response.data);
                } catch (error) {
                    console.error('Error fetching service:', error);
                }
            }
        };

        fetchService();
    }, [serviceId]);

    useEffect(() => {
        if (serviceId) {
            localStorage.setItem('serviceId', serviceId);
        }
    }, [serviceId]);

    return (
        <ServiceContext.Provider value={{ service, setServiceId }}>
            {children}
        </ServiceContext.Provider>
    );
};

export const useService = () => {
    const context = useContext(ServiceContext);
    if (!context) {
        throw new Error('useService must be used within a ServiceProvider');
    }
    return context;
};