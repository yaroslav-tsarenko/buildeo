import React from 'react';
import Text from '@/constructor/text/Text';
import PageWrapper from '@/components/page-wrapper/PageWrapper';
import type { Metadata } from 'next';
import {metadataByRoute} from "@/recources/metadata";

export const metadata: Metadata = metadataByRoute["/blog"];

const Page = () => {
    return (
        <PageWrapper>
            <Text
                title="5 Tipps für eine erfolgreiche Immobilienvermietung im digitalen Zeitalter"
                centerTitle
                description={`Die Immobilienwelt verändert sich – und mit ihr die Art, wie wir vermieten, verkaufen und Services anbieten. In diesem Artikel teilen wir fünf bewährte Tipps, wie Sie Ihre Immobilie schneller, transparenter und effizienter vermieten – komplett digital mit Buildeo.`}
                numberedBullets={[
                    {
                        title: "Professionelle Fotos & vollständige Inserate",
                        description:
                            "Der erste Eindruck zählt. Hochwertige Bilder und vollständige Informationen wie Grundriss, Ausstattung, Lagebeschreibung und Preis erhöhen die Klickrate und das Vertrauen potenzieller Mieter."
                    },
                    {
                        title: "Online-Terminvereinbarung & Kalenderintegration",
                        description:
                            "Sparen Sie Zeit mit unserer integrierten Terminplanung. Interessenten können direkt online Besichtigungstermine buchen, ohne dass E-Mails oder Telefonate notwendig sind."
                    },
                    {
                        title: "Digitale Kommunikation & schnelle Reaktion",
                        description:
                            "Antworten Sie zeitnah auf Anfragen über unser Nachrichtensystem. Schnelle Kommunikation signalisiert Seriosität und erhöht die Abschlusswahrscheinlichkeit."
                    },
                    {
                        title: "Einsatz digitaler Verträge & eSignature",
                        description:
                            "Vergessen Sie Papierkram. Mit Buildeo können Sie rechtssichere Mietverträge digital vorbereiten und unterzeichnen – einfach, sicher und effizient."
                    },
                    {
                        title: "Bewertungen & Vertrauen durch Transparenz",
                        description:
                            "Zeigen Sie positive Bewertungen von früheren Mietern oder Dienstleistungskunden. Vertrauen spielt eine entscheidende Rolle bei der Wahl des richtigen Angebots."
                    }
                ]}
            />
        </PageWrapper>
    );
};

export default Page;
