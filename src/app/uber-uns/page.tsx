import React from 'react';
import PageWrapper from '@/components/page-wrapper/PageWrapper';
import Section from '@/constructor/section/Section';
import Text from '@/constructor/text/Text';
import Media from '@/constructor/image/Media';
import { media } from '@/recources/media';
import type { Metadata } from "next";
import {metadataByRoute} from "@/recources/metadata";

export const metadata: Metadata = metadataByRoute["/uber-uns"];

const Page = () => {
    return (
        <PageWrapper>
            <Text
                centerTitle
                title="Unsere Mission bei Buildeo"
                description={`Wir glauben an eine digitale, transparente und zugängliche Immobilienwelt für alle. Buildeo wurde gegründet, um den Zugang zu Immobilienangeboten und wohnnahen Dienstleistungen für Privatpersonen, Eigentümer, Vermieter, Käufer und Dienstleister zu revolutionieren.

Unsere Plattform vereint alle Akteure des Immobilienmarkts – ob Privatperson, Immobilienprofi oder Serviceanbieter – auf einer zentralen, benutzerfreundlichen und datengestützten Plattform. Dabei ermöglichen wir nicht nur die klassische Immobilienvermittlung, sondern auch die digitale Abwicklung aller Schritte: von der Veröffentlichung eines Inserats über die Kommunikation mit Interessenten bis hin zum digitalen Vertragsabschluss.

Buildeo ist mehr als nur ein Immobilienportal – wir sind ein technologiebasierter Marktplatz, auf dem Nutzer Wohnungen vermieten, Häuser verkaufen, Gewerbeobjekte inserieren oder ihre Dienstleistungen wie Renovierung, Reinigung, Umzug oder Handwerksarbeiten zielgerichtet anbieten können. Unser Ziel ist es, Prozesse zu vereinfachen, Zeit zu sparen und eine vertrauensvolle Umgebung zu schaffen – vollständig online, mobiloptimiert und effizient.

Wir setzen auf Innovation, Nachhaltigkeit und faire Bedingungen für alle Marktteilnehmer – und bauen damit die Immobilienwelt von morgen. Willkommen bei Buildeo.`}
            />
            <Section
                left={
                    <Text
                        title="Unsere Mission bei Buildeo"
                        description="Wir glauben an eine digitale, transparente und zugängliche Immobilienwelt für alle. Buildeo wurde gegründet, um den Zugang zu Immobilienangeboten und wohnnahen Dienstleistungen für Privatpersonen und Unternehmen zu revolutionieren."
                    />
                }
                right={
                    <Media
                        src={media.image2}
                        type="image"
                        width="100%"
                        height="400px"
                        alt="Unsere Mission"
                    />
                }
            />
            <Section
                right={
                    <Text
                        title="Werte, auf die Sie bauen können"
                        description="Vertrauen, Transparenz und Einfachheit stehen im Zentrum unseres Handelns. Unser Team arbeitet tagtäglich daran, die Erfahrung für Anbieter, Mieter, Käufer und Dienstleister gleichermaßen zu verbessern – von der Anzeige bis zum digitalen Vertragsabschluss."
                    />
                }
                left={
                    <Media
                        src={media.image3}
                        type="image"
                        width="100%"
                        height="400px"
                        alt="Unsere Werte"
                    />
                }
            />

            <Section
                left={
                    <Text
                        title="Technologie trifft auf Benutzerfreundlichkeit"
                        description="Unsere Plattform kombiniert leistungsstarke Funktionen mit einer intuitiven Benutzeroberfläche. Ob Sie eine Wohnung vermieten, ein Haus verkaufen oder einen Handwerker buchen möchten – Buildeo macht es schnell, einfach und sicher."
                    />
                }
                right={
                    <Media
                        src={media.image4}
                        type="image"
                        width="100%"
                        height="400px"
                        alt="Immobilien einfach verwalten"
                    />
                }
            />

            <Section
                right={
                    <Text
                        title="Unser Team"
                        description="Buildeo wird von einem interdisziplinären Team aus Tech-Enthusiasten, Immobilienprofis und Designern betrieben. Gemeinsam verfolgen wir das Ziel, den Immobilienmarkt benutzerzentriert, offen und effizient zu gestalten."
                    />
                }
                left={
                    <Media
                        src={media.image6}
                        type="image"
                        width="100%"
                        height="400px"
                        alt="Team Buildeo"
                    />
                }
            />

            <Section
                left={
                    <Text
                        title="Nachhaltig. Digital. Zukunftsorientiert."
                        description="Wir denken Immobilienvermittlung und Services neu – papierlos, automatisiert, mit Fokus auf Nachhaltigkeit und faire Prozesse. Ob Vertragsabschlüsse, digitale Unterschrift oder Online-Bewertung: Buildeo bietet moderne Lösungen für moderne Zeiten."
                    />
                }
                right={
                    <Media
                        src={media.image7}
                        type="image"
                        width="100%"
                        height="400px"
                        alt="Zukunft der Immobilien"
                    />
                }
            />

            <Section
                right={
                    <Text
                        title="Erleben Sie Buildeo in Aktion"
                        description="In unserem kurzen Video zeigen wir, wie Sie in wenigen Schritten eine Anzeige erstellen, Verträge digital abschließen und Ihre Immobilie sicher vermitteln – ganz ohne Maklergebühren."
                    />
                }
                left={
                    <Media
                        src={media.video3}
                        type="video"
                        autoPlay
                        loop
                        controls={false}
                        width="100%"
                        height="400px"
                        alt="Video Buildeo Plattform"
                    />
                }
            />
        </PageWrapper>
    );
};

export default Page;
