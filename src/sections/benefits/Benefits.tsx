import React from 'react';
import styles from "./Benefits.module.scss";
import Benefit from "@/components/benefit-item/Benefit";
import {
    FaShieldAlt,
    FaChartLine,
    FaUsers,
    FaHome,
    FaRegHandshake, FaLightbulb
} from "react-icons/fa";

const Benefits = () => {
    return (
        <div className={styles.wrapper}>
            <h2>
                Wenn’s drauf ankommt
                <span className={styles.subtitle}>Entdecke die passenden Services, um jede Situation zu meistern.</span>
            </h2>
            <div className={styles.inner}>
                <Benefit
                    icon={<FaHome />}
                    title="Immobilien verkaufen leicht gemacht"
                    subtitle="Präsentiere deine Immobilien und finde schnell Käufer."
                    badgeContent="NEU!"
                />
                <Benefit
                    icon={<FaUsers />}
                    title="Dienstleistungen anbieten"
                    subtitle="Erreiche Menschen, die deine Fähigkeiten und Services benötigen."
                    badgeContent="BELIEBT"
                />
                <Benefit
                    icon={<FaChartLine />}
                    title="Maximale Reichweite"
                    subtitle="Nutze unsere Plattform, um deine Angebote optimal zu präsentieren."
                    badgeContent="TOP!"
                />
                <Benefit
                    icon={<FaShieldAlt />}
                    title="Sichere Transaktionen"
                    subtitle="Vertraue auf unsere sicheren Zahlungs- und Kommunikationslösungen."
                />
                <Benefit
                    icon={<FaRegHandshake />}
                    title="Direkter Kontakt"
                    subtitle="Tritt direkt mit Käufern und Verkäufern in Kontakt, ohne Umwege."
                />
                <Benefit
                    icon={<FaLightbulb />}
                    title="Innovative Lösungen"
                    subtitle="Profitiere von modernen Technologien, die dir den Verkauf erleichtern."
                />
            </div>
        </div>
    );
};

export default Benefits;