"use client";

import React from "react";
import styles from "./Properties.module.scss";
import {useProperties} from "@/context/PropertyContext";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import Link from "next/link";

const PropertiesPage = () => {
    const {properties} = useProperties();

    const handleCardClick = (propertyId: string) => {
        localStorage.setItem("propertyId", propertyId);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.titles}>
                    <h2>Find Best Properties</h2>
                    <p>With Best prices</p>
                </div>
                <div className={styles.propertiesContent}>
                    {properties.map((property) => (
                        <Link key={property._id} onClick={() => handleCardClick(property._id)} href="/property">
                            <Card
                                sx={{
                                    minHeight: "280px",
                                    width: 320,
                                    cursor: "pointer",
                                    transition: "transform 0.2s cubic-bezier(.4,2,.6,1)",
                                    '&:hover': {
                                        transform: 'scale(1.04)',
                                        zIndex: 2,
                                    },
                                }}>
                                <CardCover>
                                    <img
                                        src={property.photos[0] || "/placeholder.jpg"}
                                        alt={property.title}
                                        loading="lazy"
                                    />
                                </CardCover>
                                <CardCover
                                    sx={{
                                        background:
                                            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                                    }}
                                />
                                <CardContent sx={{justifyContent: "flex-end"}}>
                                    <Typography level="title-lg" textColor="#fff">
                                        {property.title}
                                    </Typography>
                                    <Typography
                                        startDecorator={<LocationOnRoundedIcon/>}
                                        textColor="neutral.300">
                                        {property.location}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default PropertiesPage;