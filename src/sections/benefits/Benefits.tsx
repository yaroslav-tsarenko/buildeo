"use client";

import React from "react";
import styles from "./Benefits.module.scss";
import Benefit from "@/components/benefit-item/Benefit";

interface BenefitItem {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    badgeContent?: string;
}

interface BenefitsProps {
    sectionTitle?: string;
    sectionSubtitle?: string;
    items: BenefitItem[];
    centerText?: boolean;
    gap?: string;
}

const Benefits: React.FC<BenefitsProps> = ({
                                               sectionTitle = "Unsere Vorteile",
                                               sectionSubtitle = "Entdecke, was unsere Plattform für dich tun kann.",
                                               items,
                                               centerText = false,
                                               gap = "2rem",
                                           }) => {
    return (
        <div className={styles.wrapper}>
            <h2
                className={centerText ? styles.centerText : ""}
            >
                {sectionTitle}
                {sectionSubtitle && <span className={styles.subtitle}>{sectionSubtitle}</span>}
            </h2>

            <div className={styles.inner} style={{ gap }}>
                {items.map((item, idx) => (
                    <Benefit
                        key={idx}
                        icon={item.icon}
                        title={item.title}
                        subtitle={item.subtitle}
                        badgeContent={item.badgeContent}
                    />
                ))}
            </div>
        </div>
    );
};

export default Benefits;
