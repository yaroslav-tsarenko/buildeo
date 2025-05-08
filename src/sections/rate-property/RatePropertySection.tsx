"use client";

import React from 'react';
import styles from "./RatePropertySection.module.scss"
import PropertyItem from "@/components/property-item/PropertyItem";
import {FaHouseChimney} from "react-icons/fa6";
import {Chip} from "@mui/joy";
import CheckmarkPoint from "@/components/checkmark-point/CheckmarkPoint";
import {FaBuilding, FaCity, FaStore, FaUmbrellaBeach} from 'react-icons/fa';

const RatePropertySection = () => {
    return (
        <div className={styles.wrapper}>
            <Chip sx={{backgroundColor: "#00ffd0"}}>Kostenlos</Chip>
            <h2>Jetzt Immobilie bewerten</h2>

            <div className={styles.flex}>
                <PropertyItem title="Einfamilienhaus" description="Perfekt für Familien – komfortabel und privat."
                              icon={<FaHouseChimney/>}/>
                <PropertyItem title="Mehrfamilienhaus" description="Ideal für Investoren – mehrere Wohneinheiten."
                              icon={<FaBuilding/>}/>
                <PropertyItem title="Gewerbeimmobilie" description="Optimal für Unternehmen und Geschäftsräume."
                              icon={<FaStore/>}/>
                <PropertyItem title="Ferienhaus" description="Entspannen Sie in Ihrem eigenen Urlaubsdomizil."
                              icon={<FaUmbrellaBeach/>}/>
                <PropertyItem title="Wohnung" description="Praktisch und modern – ideal für Singles oder Paare."
                              icon={<FaCity/>}/>
            </div>
            <div className={styles.flexText}>
                <CheckmarkPoint title="Vielfältige Gebäudetypen"/>
                <CheckmarkPoint title="Detaillierte Infos"/>
                <CheckmarkPoint title="Schnelle Bewertung"/>
                <CheckmarkPoint title="Optimale Lösungen"/>
            </div>
        </div>
    );
};

export default RatePropertySection;