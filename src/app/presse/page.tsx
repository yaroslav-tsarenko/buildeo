import React from 'react';
import PageWrapper from '@/components/page-wrapper/PageWrapper';
import Text from '@/constructor/text/Text';
import { metadataByRoute } from '@/recources/metadata';
import { Metadata } from 'next';

export const metadata: Metadata = metadataByRoute["/presse"];

const Page = () => {
    return (
        <PageWrapper>
            <Text
                centerTitle
                centerDescription
                title="Pressebereich – Buildeo in den Medien"
                description={`Willkommen im Pressebereich von Buildeo. Hier finden Sie aktuelle Mitteilungen, Hintergrundinformationen, Pressebilder und Ansprechpartner rund um unsere Plattform. Als innovatives PropTech-Startup revolutionieren wir die Art und Weise, wie Immobilien und wohnnahe Dienstleistungen digital vermittelt werden.`}
                numberedBullets={[
                    {
                        title: "Über Buildeo",
                        description: `Buildeo ist eine digitale Plattform für Immobilien und Dienstleistungen in Deutschland, Österreich und der Schweiz. Unser Ziel ist es, Vermietung, Verkauf und Service-Buchungen zu vereinfachen – transparent, schnell und vollständig digital.`
                    },
                    {
                        title: "Pressemitteilungen & Neuigkeiten",
                        description: `Unsere aktuellen Pressemitteilungen informieren über neue Funktionen, Partnerschaften, Expansionen und Meilensteine. Journalist:innen erhalten auf Wunsch vorab Zugriff auf Releases und Dossiers.`
                    },
                    {
                        title: "Medienkit & Bildmaterial",
                        description: `Unser Medienpaket enthält Logos, Screenshots, Teamfotos und Infografiken in druckfähiger Qualität. Die Materialien dürfen unter Angabe der Quelle verwendet werden.`
                    },
                    {
                        title: "4. Zahlen & Fakten",
                        description: `– Gründung: 2024  
– Standorte: Berlin, Wien, Zürich  
– Nutzerbasis: > 40.000 monatliche Besucher  
– Kategorien: Immobilien, Handwerk, Reinigung, Umzug  
– Technologien: KI-gestützter Matching-Algorithmus, eSignatur, DSGVO-konforme Speicherung`
                    },
                    {
                        title: "Presseanfragen & Interviews",
                        description: `Für Interviews, Gastbeiträge oder Hintergrundgespräche steht unser Kommunikationsteam gerne zur Verfügung. Wir vermitteln Expert:innen aus den Bereichen Digitalisierung, Immobilien, urbane Mobilität und Tech-Innovation.`
                    },
                    {
                        title: "Kontakt",
                        description: `📩 presse@buildeo.de  
📞 +49 (0)30 123 456 789  
🏢 Presseteam, Buildeo GmbH, Berlin`
                    }
                ]}
            />
        </PageWrapper>
    );
};

export default Page;
