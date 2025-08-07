import React from 'react';
import PageWrapper from '@/components/page-wrapper/PageWrapper';
import Text from '@/constructor/text/Text';
import { metadataByRoute } from '@/recources/metadata';
import { Metadata } from 'next';

export const metadata: Metadata = metadataByRoute["/newsletter"];

const Page = () => {
    return (
        <PageWrapper>
            <Text
                centerTitle
                centerDescription
                title="Buildeo Newsletter – Bleiben Sie immer informiert"
                description="Unser kostenloser Newsletter versorgt Sie regelmäßig mit aktuellen Informationen rund um Immobilien, digitale Dienstleistungen und moderne Wohnlösungen in Deutschland, Österreich und der Schweiz. Ob Sie eine Immobilie vermieten, kaufen oder Dienstleistungen wie Umzug, Reinigung oder Renovierung anbieten – mit dem Buildeo Newsletter sind Sie immer einen Schritt voraus."
                numberedBullets={[
                    {
                        title: "Was erwartet Sie im Buildeo Newsletter?",
                        description:
                            "Unser Newsletter ist mehr als nur Werbung – er ist ein digitaler Begleiter für alle, die im Immobilienmarkt aktiv sind. Sie erhalten:\n" +
                            "• Exklusive Immobilienangebote und Neubauprojekte\n" +
                            "• Fundierte Marktanalysen mit Preisentwicklungen in Ihrer Region\n" +
                            "• Wöchentliche Tipps für private und gewerbliche Anbieter\n" +
                            "• Einblicke in neue Tools und Plattform-Funktionen\n" +
                            "• Frühzugang zu Aktionen, Rabatten und Events\n" +
                            "• Hintergrundwissen zur Digitalisierung im Immobilienbereich"
                    },
                    {
                        title: "Wer profitiert vom Newsletter?",
                        description:
                            "Der Newsletter richtet sich an:\n" +
                            "• Privatpersonen, die Immobilien suchen oder anbieten\n" +
                            "• Vermieter:innen, Hausverwalter:innen und Makler:innen\n" +
                            "• Handwerksbetriebe und Serviceanbieter (Reinigung, Umzug, etc.)\n" +
                            "• Unternehmen, die ihre Objekte effektiv vermarkten möchten\n" +
                            "• Alle, die mehr über PropTech, Smart Contracts und eSignaturen erfahren möchten"
                    },
                    {
                        title: "Datenschutz & Sicherheit",
                        description:
                            "Datenschutz hat bei uns höchste Priorität. Ihre E-Mail-Adresse wird ausschließlich zum Versand unseres Newsletters genutzt und nicht an Dritte weitergegeben. Unsere Datenverarbeitung erfolgt streng nach der DSGVO. Jeder Newsletter enthält einen Abmeldelink – Sie können sich jederzeit mit einem Klick austragen."
                    },
                    {
                        title: "So funktioniert die Anmeldung",
                        description:
                            "Die Anmeldung ist unkompliziert:\n" +
                            "1. Geben Sie Ihre E-Mail-Adresse im vorgesehenen Feld ein.\n" +
                            "2. Bestätigen Sie die Anmeldung über den Link in der Bestätigungs-E-Mail.\n" +
                            "3. Ab sofort erhalten Sie regelmäßig relevante Inhalte direkt in Ihr Postfach.\n" +
                            "Verpassen Sie keine Trends, Preisentwicklungen oder neuen Funktionen – melden Sie sich noch heute an!"
                    },
                    {
                        title: "Warum sich der Buildeo Newsletter lohnt",
                        description:
                            "• Immer up-to-date: Sie erhalten News, bevor sie auf der Plattform veröffentlicht werden.\n" +
                            "• Lokal & relevant: Wir personalisieren Inhalte nach Ihrer Region.\n" +
                            "• Zeitersparnis: Keine lange Suche – wir liefern Ihnen alles Wichtige kompakt.\n" +
                            "• Inspiration für Ihr Business: Erfolgsbeispiele, Trends und Tools zur Effizienzsteigerung."
                    }
                ]}
            />
        </PageWrapper>
    );
};

export default Page;
