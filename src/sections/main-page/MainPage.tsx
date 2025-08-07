"use client";

import React from 'react';
import Head from "next/head";
import BuildeoDashboard from "@/components/dashboard/BuildeoDashboard";
import Main from "@/sections/main/Main";
import Benefits from "@/sections/benefits/Benefits";
import RatePropertySection from "@/sections/rate-property/RatePropertySection";
import NumberOneAtMarket from "@/sections/number-one-at-market/NumberOneAtMarket";
import Section from "@/constructor/section/Section";
import Text from "@/constructor/text/Text";
import Media from "@/constructor/image/Media";
import PageWrapper from "@/components/page-wrapper/PageWrapper";
import { useUser } from "@/context/UserContext";
import { AllUsersProvider } from "@/context/AllUsersContext";
import { FaBuilding, FaHouseChimney, FaStore } from "react-icons/fa6";
import { FaCity, FaUmbrellaBeach, FaShieldAlt, FaChartLine, FaUsers, FaHome, FaRegHandshake, FaLightbulb } from "react-icons/fa";
import { media } from "@/recources/media";

const propertyItems = [
    { title: "Einfamilienhaus", description: "Perfekt für Familien – komfortabel und privat.", icon: <FaHouseChimney /> },
    { title: "Mehrfamilienhaus", description: "Ideal für Investoren – mehrere Wohneinheiten.", icon: <FaBuilding /> },
    { title: "Gewerbeimmobilie", description: "Optimal für Unternehmen und Geschäftsräume.", icon: <FaStore /> },
    { title: "Ferienhaus", description: "Entspannen Sie in Ihrem eigenen Urlaubsdomizil.", icon: <FaUmbrellaBeach /> },
    { title: "Wohnung", description: "Praktisch und modern – ideal für Singles oder Paare.", icon: <FaCity /> },
];

const checkmarkPoints = [
    "Vielfältige Gebäudetypen",
    "Detaillierte Infos",
    "Schnelle Bewertung",
    "Optimale Lösungen",
];

const benefitsData = [
    { icon: <FaHome />, title: "Immobilien verkaufen leicht gemacht", subtitle: "Präsentiere deine Immobilien und finde schnell Käufer.", badgeContent: "NEU!" },
    { icon: <FaUsers />, title: "Dienstleistungen anbieten", subtitle: "Erreiche Menschen, die deine Fähigkeiten und Services benötigen.", badgeContent: "BELIEBT" },
    { icon: <FaChartLine />, title: "Maximale Reichweite", subtitle: "Nutze unsere Plattform, um deine Angebote optimal zu präsentieren.", badgeContent: "TOP!" },
    { icon: <FaShieldAlt />, title: "Sichere Transaktionen", subtitle: "Vertraue auf unsere sicheren Zahlungs- und Kommunikationslösungen." },
    { icon: <FaRegHandshake />, title: "Direkter Kontakt", subtitle: "Tritt direkt mit Käufern und Verkäufern in Kontakt, ohne Umwege." },
    { icon: <FaLightbulb />, title: "Innovative Lösungen", subtitle: "Profitiere von modernen Technologien, die dir den Verkauf erleichtern." },
];

const MainPage = () => {
    const user = useUser();
    const role = user?.role;
    return (
        <>
            <Head>
                <title>Buildeo – Immobilien vermieten & Services verkaufen</title>
                <meta name="description" content="Vermieten Sie Immobilien oder bieten Sie Ihre Dienstleistungen mit Buildeo an. Erreichen Sie mehr Kunden, verwalten Sie Inserate einfach und effizient." />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <link rel="canonical" href="https://buildeo.de/vermieten" />
            </Head>
            {role === 'admin' ? (
                <AllUsersProvider>
                    <BuildeoDashboard />
                </AllUsersProvider>
            ) : (
                <>
                    <Main />
                    <PageWrapper>
                        <Section
                            left={<Text
                                title="Vermieten leicht gemacht mit Buildeo"
                                description="Ob Sie eine Wohnung, ein Haus oder eine Gewerbeimmobilie vermieten möchten – Buildeo bietet Ihnen die Plattform, um schnell und unkompliziert mit Interessenten in Kontakt zu treten. Nutzen Sie intelligente Filterfunktionen, moderne Medienintegration und transparente Kommunikation, um Ihre Immobilie professionell zu präsentieren."
                            />}
                            right={<Media src={media.image2} type="image" width="100%" height="400px" alt="Buildeo Vermietung" />}
                        />
                        <Section
                            right={<Text
                                title="Ihre Anzeige in Minuten online"
                                description="Mit unserem einfachen Schritt-für-Schritt-System erstellen Sie in wenigen Minuten ein vollständiges Inserat mit Fotos, Beschreibung und Preisangabe – alles optimiert für Suchmaschinen und maximale Sichtbarkeit."
                            />}
                            left={<Media src={media.image3} type="image" width="100%" height="400px" alt="Anzeige erstellen" />}
                        />
                        <Section
                            left={<Text
                                title="Sofortige Kommunikation mit Interessenten"
                                description="Dank integrierter Nachrichtenfunktion bleiben Sie immer in Kontakt mit potenziellen Mietern oder Käufern. Vereinbaren Sie Termine, beantworten Sie Fragen – alles ohne Drittanbieter."
                            />}
                            right={<Media src={media.image4} type="image" width="100%" height="400px" alt="Nachrichten" />}
                        />
                        <Section
                            right={<Text
                                title="Statistiken & Optimierung"
                                description="Behalten Sie den Überblick: Sehen Sie, wie oft Ihre Anzeige aufgerufen wurde, woher Ihre Besucher kommen und optimieren Sie Ihre Inhalte mit datenbasierten Empfehlungen."
                            />}
                            left={<Media src={media.image6} type="image" width="100%" height="400px" alt="Statistik" />}
                        />
                        <Section
                            left={<Text
                                title="Verträge digital abschließen"
                                description="Mit unserer optionalen eSignature-Lösung können Sie Mietverträge oder Verkaufsvereinbarungen direkt online abschließen – schnell, sicher und rechtlich gültig."
                            />}
                            right={<Media src={media.image7} type="image" width="100%" height="400px" alt="Digitale Verträge" />}
                        />
                        <Section
                            right={<Text
                                title="Zeit sparen mit Automatisierung"
                                description="Automatische Benachrichtigungen, Kalenderintegration und Vorlagen helfen Ihnen dabei, Ihre Immobiliengeschäfte effizient zu verwalten – ob als Makler, Privatperson oder Unternehmen."
                            />}
                            left={<Media src={media.image8} type="image" width="100%" height="400px" alt="Kalenderintegration" />}
                        />
                        <Benefits
                            sectionTitle="Wenn’s drauf ankommt"
                            sectionSubtitle="Entdecke die passenden Services, um jede Situation zu meistern."
                            items={benefitsData}
                            centerText={true}
                            gap="2.5rem"
                        />
                        <RatePropertySection
                            chipLabel="Kostenlos"
                            chipColor="#00ffd0"
                            sectionTitle="Jetzt Immobilie bewerten"
                            properties={propertyItems}
                            checkmarks={checkmarkPoints}
                        />
                        <NumberOneAtMarket />
                        <Section
                            left={<Text
                                title="Automatisierte Verwaltung & Kalenderintegration"
                                description={`Die Suche nach einer passenden Wohnung oder einem Haus kann mühsam, zeitaufwendig und frustrierend sein – vor allem, wenn man auf verschiedenen Plattformen suchen muss, unvollständige Inserate findet oder ständig dieselben Fragen an Vermieter stellen muss. Genau hier kommt Buildeo ins Spiel. Unsere Plattform wurde speziell entwickelt, um den gesamten Mietprozess zu vereinfachen und zu automatisieren – für Mieter wie für Vermieter.

Mit Buildeo findest du schnell und unkompliziert Wohnungen, Häuser oder Gewerbeimmobilien, die exakt deinen Kriterien entsprechen. Durch intelligente Filterfunktionen kannst du nach Lage, Preis, Größe, Ausstattung und vielen weiteren Merkmalen suchen – alles auf einen Blick, ohne ständiges Nachfragen oder Durchforsten unzähliger Anzeigen.

Was Buildeo besonders macht: Unsere Plattform ermöglicht eine transparente und direkte Kommunikation mit Vermietern, bietet eine integrierte Kalenderfunktion zur Terminvereinbarung (z. B. für Besichtigungen) und verschickt automatische Erinnerungen, sodass du nie wieder einen wichtigen Termin verpasst. Doppelbuchungen und unklare Absprachen gehören der Vergangenheit an.

Außerdem sorgt unser innovatives Bewertungssystem dafür, dass du nur mit verifizierten und vertrauenswürdigen Anbietern in Kontakt kommst. Jede Immobilie wird detailliert mit Fotos, Grundrissen, Ausstattung und genauen Informationen präsentiert – ohne böse Überraschungen bei der Besichtigung.

Buildeo spart dir nicht nur Zeit und Nerven, sondern gibt dir auch Kontrolle und Sicherheit über den gesamten Mietprozess. Egal ob du kurzfristig eine Wohnung suchst, langfristig umziehen möchtest oder einfach einen professionellen, digitalen Begleiter für deinen Wohnungswechsel brauchst – Buildeo ist die richtige Wahl.

Teste es selbst und überzeuge dich davon, wie einfach und stressfrei Wohnraumsuche heute sein kann.`}
                                centerTitle
                                centerDescription
                            />}
                        />
                        <Section
                            left={<Media src={media.video3} type="video" autoPlay loop controls={false} width="100%" height="400px" alt="Kalenderintegration" />}
                        />
                    </PageWrapper>
                </>
            )}
        </>
    );
};

export default MainPage;
