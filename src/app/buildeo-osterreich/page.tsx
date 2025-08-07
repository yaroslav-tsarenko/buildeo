import React from 'react';
import PageWrapper from '@/components/page-wrapper/PageWrapper';
import Section from '@/constructor/section/Section';
import Text from '@/constructor/text/Text';
import Media from '@/constructor/image/Media';
import { media } from '@/recources/media';
import type {Metadata} from "next";
import {metadataByRoute} from "@/recources/metadata";

export const metadata: Metadata = metadataByRoute["/buildeo-osterreich"];

const Page = () => {
    return (
        <PageWrapper>
            <Section
                left={
                    <Text
                        centerTitle
                        centerDescription
                        title="Buildeo Österreich – Ihre Plattform für Immobilien & Services"
                        description="Ob Sie eine Wohnung in Wien vermieten, ein Haus in Graz verkaufen oder wohnbezogene Dienstleistungen in Linz anbieten möchten – Buildeo Österreich bringt Anbieter und Suchende auf einer digitalen Plattform zusammen. Transparent, schnell und unkompliziert."
                    />
                }
                right={<Media src={media.image3} type="image" width="100%" height="400px" alt="Immobilienplattform Österreich" />}
            />
            <Section
                right={
                    <Text
                        title="Warum Buildeo in Österreich?"
                        description="Der österreichische Immobilienmarkt ist dynamisch und regional sehr unterschiedlich. Mit Buildeo finden Sie genau das, was Sie brauchen: von Mietwohnungen in Wien bis hin zu Häusern in Tirol. Durch regionale Filter, ein benutzerfreundliches Interface und digitale Vertragsoptionen sparen Sie Zeit und Geld."
                    />
                }
                left={<Media src={media.image5} type="image" width="100%" height="400px" alt="Warum Buildeo Österreich" />}
            />

            <Section
                left={
                    <Text
                        title="Digitale Vermietung & Verkauf"
                        description="Erstellen Sie in wenigen Minuten ein Inserat mit Beschreibung, Fotos, Preisangabe und Verfügbarkeiten. Unsere Plattform optimiert Ihre Anzeige für maximale Sichtbarkeit – ideal für Privatpersonen, Makler und Bauträger."
                    />
                }
                right={<Media src={media.image7} type="image" width="100%" height="400px" alt="Immobilieninserat erstellen" />}
            />
            <Section
                right={
                    <Text
                        title="Dienstleistungen & Handwerker in Österreich"
                        description="Sie bieten Reinigungsservice, Umzüge, Gartenarbeit oder Reparaturen an? Mit Buildeo können Dienstleister ihr Angebot digital präsentieren, Bewertungen erhalten und direkt gebucht werden – in ganz Österreich."
                    />
                }
                left={<Media src={media.image8} type="image" width="100%" height="400px" alt="Dienstleistungen Österreich" />}
            />
            <Section
                left={
                    <Text
                        title="Immobilienpreise & Marktanalyse"
                        description="Unser Preisatlas liefert aktuelle Daten zu Miet- und Kaufpreisen in Österreich. Entdecken Sie Trends in Wien, Linz, Salzburg, Innsbruck oder Graz und nutzen Sie diese für eine bessere Entscheidungsgrundlage."
                    />
                }
                right={<Media src={media.image6} type="image" width="100%" height="400px" alt="Preisatlas Österreich" />}
            />
            <Section
                right={
                    <Text
                        title="Sicherheit & Recht in Österreich"
                        description="Verträge können direkt über die Plattform abgeschlossen werden – mit eSignature und rechtlich geprüften Templates. Ihre Daten werden DSGVO-konform verarbeitet und sicher gespeichert."
                    />
                }
                left={<Media src={media.image10} type="image" width="100%" height="400px" alt="Vertragssicherheit Österreich" />}
            />
            <Section
                left={
                    <Text
                        title="So funktioniert Buildeo Österreich"
                        description="Sehen Sie in unserem Video, wie einfach Sie Ihre Immobilie inserieren, Services anbieten und Anfragen verwalten können. Alles digital, papierlos und intuitiv – für Anbieter und Suchende in ganz Österreich."
                    />
                }
                right={<Media src={media.video5} type="video" width="100%" height="400px" autoPlay loop controls={false} alt="Video Buildeo Österreich" />}
            />
        </PageWrapper>
    );
};

export default Page;
