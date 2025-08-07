import React from 'react';
import Text from "@/constructor/text/Text";
import PageWrapper from '@/components/page-wrapper/PageWrapper';
import {metadataByRoute} from "@/recources/metadata";
import {Metadata} from "next";

export const metadata: Metadata = metadataByRoute["/agb_and_rechtliche_hinweise"];

const Page = () => {
    return (
        <PageWrapper>
            <Text
                title="Allgemeine Geschäftsbedingungen (AGB) & Rechtliche Hinweise"
                centerTitle
                description="Willkommen bei Buildeo – Ihrer digitalen Plattform für die Vermittlung, Präsentation und Abwicklung von Immobilienangeboten sowie wohnnahen Dienstleistungen in Deutschland. Diese AGB regeln die Bedingungen der Nutzung für alle Nutzergruppen: Eigentümer, Käufer, Vermieter, Mieter sowie professionelle Dienstleister wie Handwerker, Umzugsunternehmen, Fotografen und andere Anbieter wohnbezogener Services."
                numberedBullets={[
                    {
                        title: "Geltungsbereich",
                        description: "Diese AGB gelten für sämtliche Nutzer der Plattform Buildeo, unabhängig davon, ob sie als private oder gewerbliche Anbieter agieren. Dazu zählen Anbieter von Immobilien zum Kauf oder zur Miete, Dienstleister rund ums Wohnen sowie Interessenten und Endkunden. Durch Nutzung unserer Plattform erklären sich Nutzer mit den hier beschriebenen Bedingungen einverstanden."
                    },
                    {
                        title: "Leistungen von Buildeo",
                        description: "Buildeo bietet eine zentrale Online-Plattform zur digitalen Präsentation, Vermarktung und Vermittlung von Immobilien und wohnbezogenen Dienstleistungen. Wir ermöglichen Inserate für Wohnungen, Häuser, Gewerbeeinheiten, Ferienimmobilien sowie die Buchung von Dienstleistungen rund um Haus, Garten, Umzug, Reinigung und mehr. Buildeo ist selbst kein Makler und wird nicht Vertragspartner zwischen den Nutzern."
                    },
                    {
                        title: "Registrierung & Nutzerkonto",
                        description: "Für die aktive Nutzung (z. B. Inserate erstellen, Angebote buchen) ist eine Registrierung erforderlich. Die dabei gemachten Angaben müssen korrekt, aktuell und vollständig sein. Der Nutzer verpflichtet sich, Zugangsdaten vertraulich zu behandeln. Eine Mehrfachregistrierung oder missbräuchliche Nutzung von Nutzerkonten ist untersagt."
                    },
                    {
                        title: "Pflichten der Nutzer",
                        description: "Alle Nutzer verpflichten sich, keine rechtswidrigen, betrügerischen oder diskriminierenden Inhalte zu veröffentlichen. Es ist untersagt, falsche Informationen anzugeben, Scheinangebote einzustellen oder Rechte Dritter (z. B. Urheberrechte, Markenrechte, Datenschutz) zu verletzen. Bei Verstößen behält sich Buildeo vor, Inhalte zu löschen und Konten zu sperren."
                    },
                    {
                        title: "Inhalte & Inserate",
                        description: "Alle Inserate, Dienstleistungsangebote und Inhalte (Texte, Bilder, Preise, Verfügbarkeiten etc.) werden eigenverantwortlich durch den Nutzer erstellt. Buildeo übernimmt keine Verantwortung für deren Richtigkeit oder rechtliche Zulässigkeit. Wir behalten uns das Recht vor, Inhalte ohne Vorankündigung zu entfernen, wenn sie gegen diese AGB oder geltendes Recht verstoßen."
                    },
                    {
                        title: "Vertragsverhältnisse",
                        description: "Verträge über Immobilien oder Dienstleistungen kommen ausschließlich zwischen den jeweiligen Nutzern zustande. Buildeo ist nicht Vertragspartei, nicht haftbar für die Vertragserfüllung und nicht verantwortlich für Zahlungen, Gewährleistung, Streitigkeiten oder sonstige Ansprüche aus diesen Verträgen."
                    },
                    {
                        title: "Zahlungsabwicklung (optional)",
                        description: "Bei kostenpflichtigen Buchungen oder Services kann Buildeo externe Zahlungsanbieter (z. B. Stripe, PayPal) einsetzen. Die Zahlungen erfolgen sicher über verschlüsselte Schnittstellen. Buildeo haftet nicht für technische Störungen, Rückbuchungen, Verzögerungen oder Fehler in der Abwicklung durch Drittanbieter."
                    },
                    {
                        title: "Bewertungen & Kommunikation",
                        description: "Nutzer haben die Möglichkeit, sich gegenseitig zu bewerten und über integrierte Nachrichtensysteme zu kommunizieren. Bewertungen müssen wahrheitsgemäß, sachlich und respektvoll sein. Verleumdende, beleidigende oder diskriminierende Aussagen werden gelöscht. Buildeo kann bei Missbrauch einschreiten oder Inhalte moderieren."
                    },
                    {
                        title: "Geistiges Eigentum",
                        description: "Alle auf der Plattform verwendeten Texte, Logos, Designs, Marken, Quellcodes und Bilder sind urheberrechtlich geschützt. Jegliche Nutzung, Vervielfältigung oder Verbreitung – ob kommerziell oder privat – ist ohne schriftliche Genehmigung untersagt."
                    },
                    {
                        title: "Haftungsausschluss",
                        description: "Buildeo übernimmt keine Haftung für die Verfügbarkeit der Plattform, technische Ausfälle, Datenverluste oder Schäden durch fehlerhafte Inhalte Dritter. Eine Haftung besteht nur im Falle von Vorsatz oder grober Fahrlässigkeit seitens Buildeo."
                    },
                    {
                        title: "Datenschutz",
                        description: "Buildeo verarbeitet personenbezogene Daten ausschließlich im Rahmen der EU-Datenschutzgrundverordnung (DSGVO) sowie des BDSG. Die Datenschutzrichtlinie informiert detailliert über Art, Umfang und Zweck der Datenverarbeitung."
                    },
                    {
                        title: "Laufzeit & Kündigung",
                        description: "Nutzer können ihre Konten jederzeit selbstständig löschen. Bei Verstößen gegen die AGB oder missbräuchlicher Nutzung kann Buildeo Konten ohne Vorwarnung deaktivieren oder löschen. Eine erneute Registrierung kann gesperrt werden."
                    },
                    {
                        title: "Änderungen der AGB",
                        description: "Buildeo behält sich das Recht vor, diese AGB jederzeit anzupassen, z. B. bei Gesetzesänderungen, neuen Funktionen oder Sicherheitsgründen. Nutzer werden bei wesentlichen Änderungen rechtzeitig informiert. Die weitere Nutzung gilt als Zustimmung zu den geänderten Bedingungen."
                    },
                    {
                        title: "Gerichtsstand & anwendbares Recht",
                        description: "Es gilt ausschließlich deutsches Recht. Der Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesen AGB ist – sofern gesetzlich zulässig – Berlin, Deutschland, der Sitz von Buildeo UG (haftungsbeschränkt)."
                    },
                    {
                        title: "Kontakt",
                        description: "Buildeo UG (haftungsbeschränkt), Adresse: Musterstraße 12, 10115 Berlin, Deutschland. Telefon: +49 30 12345678, E-Mail: support@buildeo.com. Stand: August 2025."
                    }
                ]}
            />
        </PageWrapper>
    );
};

export default Page;
