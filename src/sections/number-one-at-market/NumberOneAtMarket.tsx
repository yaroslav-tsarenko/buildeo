import React from 'react';
import styles from "./NumberOneAtMarket.module.scss";
import CheckmarkPoint from "@/components/checkmark-point/CheckmarkPoint";

const NumberOneAtMarket = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.leftSide}>
                    <h3>Die Nr. 1 für Immobilien und Dienstleistungen</h3>
                    <p>Buildeo ist die führende Plattform für den Kauf und Verkauf von Immobilien sowie das Anbieten von Dienstleistungen.
                        Entdecke eine Vielzahl von Angeboten, vergleiche Preise und finde die besten Lösungen für deine Bedürfnisse –
                        alles an einem Ort.</p>
                    <div className={styles.grid}>
                        <CheckmarkPoint title="Marktführer für Immobilien und Services"/>
                        <CheckmarkPoint title="Innovative Plattform für Käufer und Verkäufer"/>
                        <CheckmarkPoint title="Schnelle und einfache Transaktionen"/>
                        <CheckmarkPoint title="Sichere und zuverlässige Lösungen"/>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <video className={styles.video} controls={false} autoPlay={true} loop={true} muted>
                        <source src={"https://cdn.allship.ai/video-1-buildeo.mp4"} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
};

export default NumberOneAtMarket;