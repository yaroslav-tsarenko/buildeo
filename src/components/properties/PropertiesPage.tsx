"use client";

import React from "react";
import { Grid } from "@mui/material";
import styles from "./Properties.module.scss";
import { useProperties } from "@/context/PropertyContext";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

const PropertiesPage = () => {
    const { properties } = useProperties();

    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.titles}>
                    <h2>Find Best Properties</h2>
                    <p>With Best prices</p>
                </div>
                <Grid container spacing={3}>
                    {properties.map((property) => (
                        <div className={styles.grid} key={property._id}>
                            <Card sx={{minHeight: "280px", width: 320}}>
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
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </Grid>
            </div>
        </div>
    );
};

export default PropertiesPage;