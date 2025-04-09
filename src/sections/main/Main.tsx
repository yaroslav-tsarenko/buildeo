"use client"

import React from 'react';
import styles from './Main.module.scss';
import Header from "@/components/header/Header";
import { Autocomplete } from "@mui/joy";
import { useServices } from '@/context/ServicesContext';

const Main = () => {
    const { services } = useServices();

    const serviceTitles = services.map((service) => service.title);

    return (
        <div className={styles.wrapper}>
            <Header />
            <section className={styles.section}>
                <h1>
                    We are looking for builders who want to save money
                </h1>
                <Autocomplete
                    placeholder="Search for a service"
                    options={serviceTitles}
                    sx={{ maxWidth: 800, width: "100%",height: 60 }}
                />
            </section>
        </div>
    );
};

export default Main;