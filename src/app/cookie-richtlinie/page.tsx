import React from 'react';
import Text from "@/constructor/text/Text";
import PageWrapper from "@/components/page-wrapper/PageWrapper";
import type { Metadata } from "next";
import {metadataByRoute} from "@/recources/metadata";

export const metadata: Metadata = metadataByRoute["/cookie-richtlinie"];

const Page = () => {
    return (
        <PageWrapper>
            <Text
                title="Cookie-Richtlinie"
                centerTitle
                description="Diese Cookie-Richtlinie erklärt, wie Buildeo Cookies und ähnliche Technologien verwendet, um Ihre Nutzererfahrung zu verbessern und unsere Dienste sicherer, effizienter und individueller zu gestalten."
                numberedBullets={[
                    {
                        title: "Was sind Cookies?",
                        description:
                            "Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Gerät gespeichert werden. Sie ermöglichen es der Website, Informationen über Ihre Sitzung zu speichern und Sie bei einem erneuten Besuch wiederzuerkennen."
                    },
                    {
                        title: "Welche Arten von Cookies verwenden wir?",
                        description:
                            "Buildeo verwendet sowohl temporäre (Session-Cookies) als auch permanente Cookies. Diese werden wie folgt kategorisiert:\n\n- Notwendige Cookies: Für den Betrieb der Seite technisch erforderlich\n- Funktionale Cookies: Zur Speicherung von Nutzerpräferenzen\n- Analyse-Cookies: Zur Erhebung statistischer Daten\n- Marketing-Cookies: Für personalisierte Werbung (nur mit Einwilligung)"
                    },
                    {
                        title: "Warum verwenden wir Cookies?",
                        description:
                            "Wir verwenden Cookies, um:\n- die Funktionalität unserer Website sicherzustellen,\n- Ihre Spracheinstellungen zu speichern,\n- das Nutzerverhalten anonym zu analysieren,\n- gezielte Werbung anzuzeigen (nur mit Einwilligung),\n- den Inhalt unserer Plattform zu personalisieren."
                    },
                    {
                        title: "Rechtsgrundlage für den Einsatz von Cookies",
                        description:
                            "Notwendige Cookies basieren auf unserem berechtigten Interesse gemäß Art. 6 Abs. 1 lit. f DSGVO. Für alle anderen Cookies holen wir gemäß Art. 6 Abs. 1 lit. a DSGVO Ihre ausdrückliche Einwilligung ein (z. B. über das Cookie-Banner)."
                    },
                    {
                        title: "Wie kann ich Cookies kontrollieren oder löschen?",
                        description:
                            "Sie können Ihre Cookie-Einstellungen jederzeit über unseren Cookie-Banner oder Ihre Browsereinstellungen anpassen. Bereits gesetzte Cookies können über den Browser gelöscht werden. Beachten Sie, dass die Deaktivierung einiger Cookies die Funktionalität der Website einschränken kann."
                    },
                    {
                        title: "Drittanbieter-Cookies",
                        description:
                            "Wir verwenden Drittanbieter-Tools wie Google Analytics oder Facebook Pixel. Diese Anbieter setzen eigene Cookies und verarbeiten Daten ggf. außerhalb der EU. Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung und unter Einhaltung entsprechender Datenschutzvereinbarungen."
                    },
                    {
                        title: "Speicherdauer von Cookies",
                        description:
                            "Die Speicherdauer variiert je nach Art des Cookies:\n- Session-Cookies: werden nach Beendigung der Sitzung gelöscht\n- Permanente Cookies: bleiben bis zum Ablaufdatum oder bis zur manuellen Löschung erhalten"
                    },
                    {
                        title: "Ihre Rechte als Nutzer",
                        description:
                            "Sie haben das Recht, Ihre Einwilligung jederzeit zu widerrufen, Auskunft über gespeicherte Daten zu verlangen, sowie unzulässige Datenverarbeitungen zu melden. Weitere Informationen finden Sie in unserer Datenschutzerklärung."
                    },
                    {
                        title: "Kontakt",
                        description:
                            "Bei Fragen zur Cookie-Richtlinie oder zum Datenschutz wenden Sie sich bitte an: \n\nBuildeo UG (haftungsbeschränkt) \nAdresse: Musterstraße 12, 10115 Berlin, Deutschland \nTelefon: +49 30 12345678 \nE-Mail: support@buildeo.com"
                    }
                ]}
            />
        </PageWrapper>
    );
};

export default Page;
