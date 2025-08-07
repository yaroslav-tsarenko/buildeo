import React from 'react';
import Text from "@/constructor/text/Text";
import PageWrapper from '@/components/page-wrapper/PageWrapper';
import type { Metadata } from "next";
import {metadataByRoute} from "@/recources/metadata";

export const metadata: Metadata = metadataByRoute["/datenschutz"];

const Page = () => {
    return (
        <PageWrapper>
            <Text
                title="Datenschutzerklärung"
                centerTitle
                description="Der Schutz Ihrer personenbezogenen Daten ist uns bei Buildeo besonders wichtig. In dieser Datenschutzerklärung informieren wir Sie umfassend über die Art, den Umfang und den Zweck der Erhebung, Verarbeitung und Nutzung Ihrer Daten im Rahmen der Nutzung unserer Plattform."
                numberedBullets={[
                    {
                        title: "Verantwortliche Stelle",
                        description: "Verantwortlich für die Datenverarbeitung im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:\n\nBuildeo UG (haftungsbeschränkt)\nMusterstraße 12, 10115 Berlin, Deutschland\nE-Mail: support@buildeo.com\nTelefon: +49 30 12345678"
                    },
                    {
                        title: "Grundlagen der Datenverarbeitung",
                        description: "Die Verarbeitung Ihrer Daten erfolgt gemäß den Bestimmungen der DSGVO, des Bundesdatenschutzgesetzes (BDSG) sowie weiterer relevanter Datenschutzvorschriften. Wir erheben nur die Daten, die für die Bereitstellung unserer Services notwendig sind."
                    },
                    {
                        title: "Erhebung personenbezogener Daten",
                        description: "Wir erheben personenbezogene Daten wie Name, E-Mail-Adresse, Telefonnummer, IP-Adresse, Zahlungsdaten, Standortdaten und Kommunikationsinhalte bei:\n- Registrierung eines Kontos\n- Nutzung unserer Plattform\n- Buchung oder Veröffentlichung von Angeboten\n- Kontaktaufnahme mit unserem Support-Team"
                    },
                    {
                        title: "Zwecke der Datenverarbeitung",
                        description: "Ihre Daten werden verarbeitet, um:\n- unsere Plattform bereitzustellen\n- Verträge abzuwickeln\n- Benutzerkonten zu verwalten\n- Anfragen zu beantworten\n- Sicherheit und Missbrauchsschutz zu gewährleisten\n- gesetzliche Vorgaben zu erfüllen"
                    },
                    {
                        title: "Cookies & Tracking",
                        description: "Wir setzen Cookies, Tracking-Pixel und ähnliche Technologien ein, um die Nutzererfahrung zu verbessern, Statistiken zu erfassen und ggf. Werbung zu personalisieren. Details finden Sie in unserer separaten Cookie-Richtlinie."
                    },
                    {
                        title: "Weitergabe an Dritte",
                        description: "Eine Weitergabe Ihrer Daten erfolgt nur, wenn:\n- sie gesetzlich vorgeschrieben ist\n- sie zur Vertragserfüllung erforderlich ist\n- Sie ausdrücklich eingewilligt haben\n\nBeispiele: Zahlungsanbieter (Stripe, PayPal), Hosting-Provider, Analyse-Tools (z. B. Google Analytics), Supportsysteme"
                    },
                    {
                        title: "Speicherdauer",
                        description: "Ihre Daten werden nur so lange gespeichert, wie dies für die Erfüllung der jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen. Danach werden die Daten gelöscht oder anonymisiert."
                    },
                    {
                        title: "Datensicherheit",
                        description: "Wir setzen technische und organisatorische Maßnahmen (z. B. TLS-Verschlüsselung, Firewalls, Zugriffsbeschränkungen) ein, um Ihre Daten vor Verlust, Manipulation und unbefugtem Zugriff zu schützen."
                    },
                    {
                        title: "Ihre Rechte laut DSGVO",
                        description: "Sie haben jederzeit das Recht auf:\n- Auskunft über gespeicherte Daten\n- Berichtigung unrichtiger Daten\n- Löschung ('Recht auf Vergessenwerden')\n- Einschränkung der Verarbeitung\n- Datenübertragbarkeit\n- Widerspruch gegen bestimmte Verarbeitungen\n- Beschwerde bei einer Datenschutzaufsichtsbehörde"
                    },
                    {
                        title: "Einwilligung und Widerruf",
                        description: "Sofern wir Ihre Daten auf Basis einer Einwilligung verarbeiten (z. B. für Newsletter oder Marketing), können Sie diese Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen."
                    },
                    {
                        title: "Externe Links",
                        description: "Unsere Plattform kann Links zu externen Webseiten enthalten. Für deren Inhalte und Datenschutzpraktiken übernehmen wir keine Verantwortung."
                    },
                    {
                        title: "Änderungen dieser Datenschutzerklärung",
                        description: "Wir behalten uns das Recht vor, diese Erklärung jederzeit zu ändern, z. B. bei rechtlichen Änderungen oder technischen Weiterentwicklungen. Die jeweils aktuelle Version ist jederzeit auf unserer Website einsehbar."
                    },
                    {
                        title: "Kontakt bei Datenschutzanfragen",
                        description: "Wenn Sie Fragen zur Verarbeitung Ihrer personenbezogenen Daten oder zu Ihren Rechten haben, wenden Sie sich bitte an unseren Datenschutzbeauftragten unter:\n\nE-Mail: datenschutz@buildeo.com"
                    }
                ]}
            />
        </PageWrapper>
    );
};

export default Page;
