import React from 'react';
import type { Metadata } from 'next';
import PageWrapper from '@/components/page-wrapper/PageWrapper';
import Section from '@/constructor/section/Section';
import Text from '@/constructor/text/Text';
import Media from '@/constructor/image/Media';
import { media } from '@/recources/media';
import { metadataByRoute } from '@/recources/metadata';

export const metadata: Metadata = metadataByRoute["/preisatlas"];

const Page = () => {
    return (
        <PageWrapper>
            <Section
                right={
                    <Media
                        src={media.video6}
                        type="video"
                        autoPlay
                        loop
                        controls={false}
                        width="100%"
                        height="400px"
                        alt="Video zur Preisanalyse"
                    />
                }
            />
            <Section
                left={
                    <Text
                        centerTitle
                        centerDescription
                        title="Buildeo Preisatlas: Regionale Markttransparenz für alle"
                        description={`Der Preisatlas von Buildeo liefert Ihnen tagesaktuelle Informationen zu Immobilienpreisen, Mieten, Angebot & Nachfrage sowie regionalen Markttrends. Ob Eigentümer, Käufer, Mieter oder Investor – mit unserem interaktiven Preisatlas erhalten Sie eine datenbasierte Entscheidungsgrundlage. Komplett kostenlos und ohne Registrierung.`}
                    />
                }
                right={
                    <Media
                        src={media.image8}
                        type="image"
                        width="100%"
                        height="400px"
                        alt="Immobilien Preisvergleich"
                    />
                }
            />

            <Section
                right={
                    <Text
                        title="Was bietet der Preisatlas?"
                        description={`• Regionale Immobilienpreise für Wohnungen & Häuser\n• Mietspiegel nach Stadt, PLZ oder Quartier\n• Prognosen zur Preisentwicklung\n• Analyse von Nachfrage & Angebotsdichte\n• Darstellung als interaktive Karte oder Tabelle`}
                    />
                }
                left={
                    <Media
                        src={media.image9}
                        type="image"
                        width="100%"
                        height="400px"
                        alt="Preisanalyse Features"
                    />
                }
            />

            <Section
                left={
                    <Text
                        title="Ideal für Eigentümer & Investoren"
                        description={`Möchten Sie Ihre Immobilie bewerten oder die ideale Preisstrategie entwickeln? Der Preisatlas hilft Ihnen dabei, aktuelle Marktwerte zu erkennen, Trends zu verstehen und fundierte Entscheidungen zu treffen – egal ob Sie verkaufen, vermieten oder investieren möchten.`}
                    />
                }
                right={
                    <Media
                        src={media.image11}
                        type="image"
                        width="100%"
                        height="400px"
                        alt="Immobilie bewerten"
                    />
                }
            />
            <Section
                right={
                    <Text
                        title="100% kostenlos & ohne Registrierung"
                        description="Unser Preisatlas steht allen Besuchern kostenlos zur Verfügung – ohne Login, ohne Verpflichtung. Einfach PLZ oder Stadt eingeben und sofort die Marktwerte abrufen."
                    />
                }
                left={
                    <Media
                        src={media.image10}
                        type="image"
                        width="100%"
                        height="400px"
                        alt="Kostenfreier Zugang"
                    />
                }
            />
        </PageWrapper>
    );
};

export default Page;
