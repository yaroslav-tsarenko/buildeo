"use client"

import React from 'react';
import styles from './Main.module.scss';
import Header from "@/components/header/Header";
import { Autocomplete } from "@mui/joy";
import { useServices } from '@/context/ServicesContext';
import { Badge, Button, FormControlLabel, Switch } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import { heroContent } from "@/assets/config/content";

const Main = () => {
    const { services } = useServices();
    const serviceTitles = services.map((service) => service.title);

    const [isToggled, setIsToggled] = React.useState(false);
    const [inputValue, setInputValue] = React.useState("");

    const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsToggled(event.target.checked);

        if (event.target.checked) {
            const randomTitle = sanitizeTitle(
                serviceTitles[Math.floor(Math.random() * serviceTitles.length)]
            );
            simulateTyping(randomTitle);
        } else {
            setInputValue("");
        }
    };

    const sanitizeTitle = (title: string) => {
        return title.replace(/\s+/g, " ").trim(); // Remove extra spaces
    };

    const simulateTyping = (text: string) => {
        let index = 0;
        setInputValue("");

        const typingInterval = setInterval(() => {
            if (index < text.length) {
                setInputValue((prev) => prev + text[index]);
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100);
    };
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.section}>
                <h1>{heroContent.title}</h1>
                <div className={styles.searchbarWrapper}>
                    <div className={styles.searchbar}>
                        <Autocomplete
                            placeholder="Search for a service"
                            options={serviceTitles}
                            value={inputValue}
                            onInputChange={(event, newValue) => setInputValue(newValue)}
                            sx={{ maxWidth: 800, width: "100%", height: 60, borderRadius: "15px" }}
                        />
                        <Button
                            startIcon={<CiSearch />}
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                borderRadius: "15px",
                                lineHeight: "0",
                                boxShadow: "none",
                                backgroundColor: "#0ABAB5",
                                padding: "5px 25px",
                                color: "white",
                                "&:hover": {
                                    backgroundColor: "#099E9A"
                                }
                            }}
                        >
                            {heroContent.buttonText}
                        </Button>
                    </div>
                    <div className={styles.aiFeature}>
                        <Badge badgeContent="BETA" color="error">
                            <h4>KI-Suche</h4>
                        </Badge>
                        <h4>- Jetzt mit KI-unterstützter Suche</h4>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={isToggled}
                                    onChange={handleToggle}
                                    color="success"
                                />
                            }
                            label="Toggle Feature"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;