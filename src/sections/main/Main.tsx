import React, {useState} from 'react';
import styles from './Main.module.scss';
import Header from "@/components/header/Header";
import { Autocomplete } from "@mui/joy";
import {Service, useServices} from '@/context/ServicesContext';
import { Badge, Button, FormControlLabel, Switch } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import { heroContent } from "@/assets/config/content";
import { useRouter } from 'next/navigation';

const Main = () => {
    const router = useRouter();
    const { services } = useServices();
    const [isToggled, setIsToggled] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const typingIntervalRef = React.useRef<NodeJS.Timeout | null>(null);

    const sanitizeTitle = (title: string) => title.replace(/\s+/g, " ").trim();

    const getRandomTitle = () => {
        if (services.length === 0) return "";
        let filtered = services.filter(s => s.title !== inputValue);
        if (filtered.length === 0) filtered = services;
        return sanitizeTitle(filtered[Math.floor(Math.random() * filtered.length)].title);
    };

    const simulateTyping = (text: string) => {
        setInputValue("");
        if (typingIntervalRef.current) clearTimeout(typingIntervalRef.current);
        let index = 0;
        const typeChar = () => {
            setInputValue((prev) => prev + text[index]);
            index++;
            if (index < text.length) {
                typingIntervalRef.current = setTimeout(typeChar, 100);
            }
        };
        typeChar();
    };

    const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
        const checked = event.target.checked;
        setIsToggled(checked);
        if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
        if (checked) {
            const randomTitle = getRandomTitle();
            simulateTyping(randomTitle);
        } else {
            setInputValue("");
        }
    };

    const handleSearch = () => {
        if (selectedService) {
            window.localStorage.setItem('serviceId', selectedService._id);
        }
        router.push('/services');
    };

    React.useEffect(() => {
        return () => {
            if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
        };
    }, []);

    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.section}>
                <h1>{heroContent.title}</h1>
                <div className={styles.searchbarWrapper}>
                    <div className={styles.searchbar}>
                        <Autocomplete
                            placeholder="Dienstleistung suchen"
                            options={services}
                            getOptionLabel={(option) => option.title}
                            value={selectedService}
                            inputValue={inputValue}
                            onInputChange={(event, newValue) => setInputValue(newValue)}
                            onChange={(event, newValue) => {
                                setSelectedService(newValue);
                                setInputValue(newValue ? newValue.title : "");
                            }}
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
                            onClick={handleSearch}
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
                            label="Funktion umschalten"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;