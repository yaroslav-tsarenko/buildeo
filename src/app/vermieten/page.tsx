"use client";

import React from "react";
import Section from "@/constructor/section/Section";
import Text from "@/constructor/text/Text";
import Media from "@/constructor/image/Media";
import Benefits from "@/sections/benefits/Benefits";
import { FaStore, FaUserTie, FaCalendarAlt, FaCheckCircle, FaComments, FaLightbulb, FaHandshake, FaBullhorn } from "react-icons/fa";
import { media } from "@/recources/media";
import PageWrapper from "@/components/page-wrapper/PageWrapper";

const benefitsData = [
    {
        icon: <FaStore />, title: "Anzeigen einfach erstellen",
        subtitle: "Erstellen Sie professionelle Inserate für Ihre Immobilien oder Dienstleistungen.", badgeContent: "NEU",
    },
    {
        icon: <FaUserTie />, title: "Vertrauensvolle Kommunikation",
        subtitle: "Sicherer Kontakt zwischen Mietern, Käufern und Anbietern.",
    },
    {
        icon: <FaCalendarAlt />, title: "Flexible Laufzeiten",
        subtitle: "Bestimmen Sie, wann und wie lange Sie vermieten oder arbeiten möchten.",
    },
    {
        icon: <FaCheckCircle />, title: "Schnelle Erfolgschancen",
        subtitle: "Höchste Sichtbarkeit Ihrer Anzeigen durch unsere Plattform.", badgeContent: "TOP!",
    },
    {
        icon: <FaComments />, title: "Support rund um die Uhr",
        subtitle: "Unser Team ist jederzeit für Sie da.",
    },
    {
        icon: <FaLightbulb />, title: "Innovative Tools",
        subtitle: "Nutzen Sie moderne Werkzeuge zur Optimierung Ihrer Anzeigen.",
    },
    {
        icon: <FaHandshake />, title: "Faire Vertragsbedingungen",
        subtitle: "Verträge nach Ihren Regeln mit voller Transparenz.",
    },
    {
        icon: <FaBullhorn />, title: "Gezielte Werbung",
        subtitle: "Erreichen Sie Ihre Zielgruppe ohne Umwege.",
    },
    {
        icon: <FaUserTie />,
        title: "Professionelles Netzwerk",
        subtitle: "Knüpfen Sie wertvolle Kontakte mit anderen Anbietern und Dienstleistern.",
    },
];

const Page = () => {
    return (
        <PageWrapper>
            <Section
                align="center"
                gap="3rem"
                left={
                    <Text
                        title="Ihre digitale Schaltzentrale für Vermietung & Service"
                        description="Verwalten Sie all Ihre Objekte, Kontakte und Nachrichten in einem zentralen Dashboard. Buildeo sorgt dafür, dass Sie den Überblick behalten, keine Anfrage verpassen und jederzeit bereit sind, neue Kunden zu gewinnen oder Verträge abzuschließen – ganz ohne Papierkram."
                    />
                }
            />
            <Media
                src={media.image1}
                type="image"
                width="100%"
                height="500px"
                controls={false}
                loop
                autoPlay
                muted
            />
            <Section
                left={<Text
                    title="Immobilien erfolgreich vermieten"
                    description="Buildeo bietet eine umfassende Plattform für alle, die ihre Immobilien professionell vermieten möchten. Egal ob Einfamilienhaus, Wohnung, Gewerbeimmobilie oder Ferienhaus – unsere digitale Lösung macht den gesamten Prozess effizient, transparent und bequem. Sie möchten Ihre Immobilie schnell und ohne Umwege vermarkten? Mit unserer leistungsstarken Suchfunktion, den smarten Filteroptionen und einem breiten Netzwerk potenzieller Mieter garantieren wir maximale Sichtbarkeit und hohe Erfolgsquoten."
                    bullets={[
                        "Volle Kontrolle über Preis und Laufzeit",
                        "Erreichen Sie gezielt Mieter in Ihrer Region",
                        "Einbindung hochwertiger Medien und Texte"
                    ]}
                />}
                right={<Media src={media.image1} type="image" width="100%" height="400px" alt="Vermietung leicht gemacht" />}
            />
            <Section
                left={<Media src={media.image2} type="image" width="100%" height="400px" alt="Dienstleistungen verkaufen" />}
                right={<Text
                    title="Eigene Dienstleistungen bewerben"
                    description="Nicht nur Immobilien, auch Ihre handwerklichen oder beratenden Dienstleistungen finden über Buildeo ihre Kunden. Ob Sie Elektriker, Immobilienberater, Innenarchitekt oder Reinigungskraft sind – präsentieren Sie Ihre Expertise und gewinnen Sie neue Aufträge. Mit Buildeo erreichen Sie Ihre Zielgruppe punktgenau, zeigen Referenzen, Kundenbewertungen und bieten sofortige Kontaktmöglichkeiten."
                    bullets={[
                        "Individuelle Serviceprofile",
                        "Bewertungssystem für Vertrauen",
                        "Sofortige Buchungsmöglichkeit"
                    ]}
                />}
            />
            <Section
                left={<Text
                    title="Automatisierte Verwaltung & Kalenderintegration"
                    description="Mit unserer Kalenderfunktion können Sie Termine einfach verwalten, automatisierte Erinnerungen verschicken und Doppelbuchungen vermeiden. Egal ob Besichtigungstermine, Serviceeinsätze oder Vertragsverlängerungen: Alles läuft organisiert, strukturiert und fehlerfrei."
                    bullets={[
                        "iCal & Google Kalender Integration",
                        "Echtzeit-Benachrichtigungen",
                        "Effiziente Planung und Nachverfolgung"
                    ]}
                />}
                right={<Media src={media.image3} type="image" width="100%" height="400px" alt="Kalenderfunktion" />}
            />
            <Benefits
                sectionTitle="Ihre Vorteile mit Buildeo"
                sectionSubtitle="Unsere Plattform macht das Vermieten und Verkaufen so einfach wie nie zuvor."
                items={benefitsData}
                centerText
                gap="2.5rem"
            />
            <Section
                left={<Media src={media.image4} type="image" width="100%" height="400px" alt="Kundenerfolg" />}
                right={<Text
                    title="Erfolgsgeschichten unserer Nutzer"
                    description="Tausende Nutzer vertrauen auf Buildeo, um ihre Immobilien zu vermieten oder eigene Services anzubieten. Lesen Sie echte Erfahrungsberichte, sehen Sie Fallstudien erfolgreicher Projekte und lassen Sie sich inspirieren, wie einfach es sein kann, selbst aktiv zu werden."
                    bullets={[
                        "Verifizierte Nutzerbewertungen",
                        "Interaktive Story-Highlights",
                        "Transparente Statistiken und Ergebnisse"
                    ]}
                />}
            />
            <Section
                align="center"
                gap="4rem"
                left={<Text
                    title="Jetzt kostenlos starten"
                    description="Veröffentlichen Sie Ihre erste Anzeige noch heute. Keine versteckten Kosten, keine langen Wartezeiten – einfach loslegen. Erstellen Sie Inserate, verwalten Sie Ihre Angebote, kommunizieren Sie direkt mit Interessenten und profitieren Sie von unserem umfassenden Support."
                    centerTitle
                    centerDescription
                />}
            />

        </PageWrapper>
    );
};

export default Page;
