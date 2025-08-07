import React from 'react';
import PageWrapper from '@/components/page-wrapper/PageWrapper';
import Text from '@/constructor/text/Text';
import { metadataByRoute } from '@/recources/metadata';
import { Metadata } from 'next';

export const metadata: Metadata = metadataByRoute["/karriere"];

const Page = () => {
    return (
        <PageWrapper>
            <Text
                centerTitle
                centerDescription
                title="Karriere bei Buildeo – Gestalte die Zukunft der Immobilienwelt"
                description={`Bei Buildeo glauben wir daran, dass Innovation durch Menschen entsteht – Menschen, die neugierig, kreativ und engagiert sind. Als schnell wachsendes PropTech-Unternehmen bieten wir motivierten Talenten die Möglichkeit, gemeinsam mit uns die Immobilienbranche zu digitalisieren und nachhaltiger zu gestalten.

Ob in der Softwareentwicklung, im Kundenservice, im Marketing oder im Vertrieb – bei Buildeo findest du spannende Aufgabenbereiche, in denen du Verantwortung übernehmen und aktiv mitgestalten kannst. Unser Team arbeitet remote, flexibel und in flachen Hierarchien – wir setzen auf Vertrauen statt Kontrolle und fördern Eigeninitiative.

Was dich bei uns erwartet:
– Ein modernes, dynamisches Arbeitsumfeld mit agilen Prozessen
– Flexible Arbeitszeiten & Remote-First-Kultur
– Persönliche Weiterentwicklung und Zugang zu digitalen Tools & Schulungen
– Ein internationales, diverses Team mit starker Teamkultur
– Faire Vergütung und transparente Kommunikation

Wir suchen:
– Entwickler:innen (Frontend, Backend, Fullstack)
– UI/UX Designer:innen mit einem Gespür für digitale Produkte
– Marketing-Spezialist:innen für SEO, Performance & Content
– Customer Support Talente mit Empathie und Lösungsorientierung
– Vertriebspersönlichkeiten mit Drive und Digitalverständnis

Du musst nicht perfekt sein – aber motiviert, lernbereit und zuverlässig. Wenn du Lust hast, Teil einer zukunftsorientierten Plattform zu werden, auf der Nutzer:innen Immobilien mieten, kaufen und Services finden können, dann bewirb dich bei uns!

📩 Schreib uns einfach an jobs@buildeo.de oder fülle das Bewerbungsformular auf unserer Seite aus. Wir freuen uns auf deine Bewerbung!`}
            />
        </PageWrapper>
    );
};

export default Page;
