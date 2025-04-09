"use client"

import React from 'react';
import { useServices } from '@/context/ServicesContext';
import ServiceWrapper from '@/sections/product-wrapper/ServiceWrapper';
import ProductCard from '@/components/product-card/ProductCard';
import image from '@/assets/images/firstService.png';

const ServicesPage: React.FC = () => {
    const { services } = useServices();

    const categories: { title: string; description: string; color: "blue" | "white" | "peach" }[] = [
        { title: 'Floor Layers', description: 'Enjoy a home with beautiful floors', color: 'peach' },
        { title: 'Painter', description: 'Beautiful wall beautiful smile', color: 'blue' },
        { title: 'Architect', description: 'Plans and coordinates the construction as well as the necessary approvals.', color: 'white' },
        { title: 'Flooring Adhesive', description: 'Make your floor great again', color: 'white' },
    ];

    return (
        <>
            {categories.map((category) => {
                const filteredServices = services.filter(
                    (service) => service.category.toLowerCase() === category.title.toLowerCase().replace(/\s+/g, '')
                );

                if (filteredServices.length === 0) return null;
                return (
                    <ServiceWrapper
                        key={category.title}
                        title={category.title}
                        description={category.description}
                        color={category.color}>
                        {filteredServices.map((service, index) => (
                            <ProductCard
                                key={index}
                                title={service.title || 'No title available'}
                                price={service.price}
                                serviceId={service._id}
                                image={service?.photo || image}/>
                        ))}
                    </ServiceWrapper>
                );
            })}
        </>
    );
};

export default ServicesPage;