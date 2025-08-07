"use client";

import React from "react";
import styles from "./RatePropertySection.module.scss";
import PropertyItem from "@/components/property-item/PropertyItem";
import { Chip } from "@mui/joy";
import CheckmarkPoint from "@/components/checkmark-point/CheckmarkPoint";

export interface PropertyItemData {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export interface RatePropertySectionProps {
    chipLabel?: string;
    chipColor?: string;
    sectionTitle?: string;
    properties?: PropertyItemData[];
    checkmarks?: string[];
}

const RatePropertySection: React.FC<RatePropertySectionProps> = ({
                                                                     chipLabel = "Kostenlos",
                                                                     chipColor = "#00ffd0",
                                                                     sectionTitle = "Jetzt Immobilie bewerten",
                                                                     properties = [],
                                                                     checkmarks = [],
                                                                 }) => {
    return (
        <div className={styles.wrapper}>
            {chipLabel && (
                <Chip sx={{ backgroundColor: chipColor }}>{chipLabel}</Chip>
            )}
            {sectionTitle && <h2>{sectionTitle}</h2>}

            {properties.length > 0 && (
                <div className={styles.flex}>
                    {properties.map((item, idx) => (
                        <PropertyItem
                            key={idx}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                        />
                    ))}
                </div>
            )}

            {checkmarks.length > 0 && (
                <div className={styles.flexText}>
                    {checkmarks.map((title, idx) => (
                        <CheckmarkPoint key={idx} title={title} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default RatePropertySection;