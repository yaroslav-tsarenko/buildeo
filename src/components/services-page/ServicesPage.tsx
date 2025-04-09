"use client";

import React, { useEffect, useState } from "react";
import { useServices } from "@/context/ServicesContext";
import ProductCard from "@/components/product-card/ProductCard";
import styles from "./ServicesPage.module.scss";

interface Service {
    _id: string;
    title: string;
    price: number;
    photo?: string;
}

const ServicesPage = () => {
    const { services } = useServices();
    const [filteredServices, setFilteredServices] = useState<Service[]>([]);

    useEffect(() => {
        const keyword = localStorage.getItem("service") || "";
        const filtered = services.filter((service: Service) =>
            service.title.toLowerCase().includes(keyword.toLowerCase())
        );
        setFilteredServices(filtered);
    }, [services]);

    return (
        <div className={styles.wrapper}>
            <h2>Result of Searching</h2>
            <div className={styles.inner}>
                {filteredServices.length > 0 ? (
                    filteredServices.map((service) => (
                        <ProductCard
                            key={service._id}
                            title={service.title || "No title available"}
                            price={service.price}
                            serviceId={service._id}
                            image={service.photo || "/default-image.png"}
                        />
                    ))
                ) : (
                    <p>No services found for the selected keyword.</p>
                )}
            </div>
        </div>
    );
};

export default ServicesPage;