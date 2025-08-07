import React from 'react';
import PageWrapper from '@/components/page-wrapper/PageWrapper';
import Section from '@/constructor/section/Section';
import Text from '@/constructor/text/Text';
import Media from '@/constructor/image/Media';
import { media } from '@/recources/media';
import { Metadata } from 'next';
import { metadataByRoute } from '@/recources/metadata';

export const metadata: Metadata = metadataByRoute["/sicherheit"];

const Page = () => {
    return (
        <PageWrapper>
            <Text
                centerTitle
                centerDescription
                title="Sicherheit bei Buildeo – Ihre Daten und Transaktionen sind geschützt"
                description="Bei Buildeo steht Sicherheit an erster Stelle. Unsere Plattform ist darauf ausgelegt, Ihre Daten, Ihre Kommunikation und Ihre Zahlungen optimal zu schützen – gemäß DSGVO, mit modernster Verschlüsselung und geprüften Prozessen."
            />

            <Media
                type="image"
                src={media.image6}
                alt="Datenschutz auf Buildeo"
                width="100%"
                height="400px"
            />

            <Text
                title="Datenschutz nach DSGVO"
                description="Wir halten uns strikt an die europäische Datenschutz-Grundverordnung (DSGVO). Alle Ihre Daten – ob bei der Registrierung, Inseraterstellung oder Buchung von Dienstleistungen – werden nur für die notwendigen Zwecke erhoben, verschlüsselt gespeichert und niemals ohne Ihre Zustimmung weitergegeben."
            />

            <Text
                title="Verschlüsselte Kommunikation"
                description="Ihre gesamte Kommunikation über Buildeo – von Nachrichten bis zu Vertragsabschlüssen – erfolgt SSL-verschlüsselt. So schützen wir Ihre sensiblen Daten vor unbefugtem Zugriff und Missbrauch."
            />

            <Media
                type="video"
                src={media.video4}
                alt="Sichere Kommunikation"
                width="100%"
                height="400px"
                autoPlay
                loop
                controls={false}
            />

            <Section
                left={
                    <Text
                        title="Verifizierte Anbieter & Nutzer"
                        description="Um Vertrauen zu schaffen, bieten wir die Möglichkeit zur Verifizierung von Dienstleistern und privaten Anbietern. Verifizierte Profile erhalten ein Kennzeichen, sodass Sie auf Buildeo nur mit geprüften und seriösen Nutzern interagieren."
                    />
                }
                right={
                    <Media
                        src={media.image2}
                        type="image"
                        width="100%"
                        height="400px"
                        alt="Verifizierung auf Buildeo"
                    />
                }
            />
            <Text
                title="Sichere Zahlungen & Transaktionen"
                description="Zahlungen, die über Buildeo abgewickelt werden, laufen über zertifizierte Drittanbieter mit PCI-DSS-konformen Zahlungsprozessen. Das bedeutet für Sie: Kein Risiko, keine versteckten Gebühren, höchste Sicherheit bei jeder Buchung."
            />
            <Media
                type="image"
                src={media.image4}
                alt="Zahlungssicherheit"
                width="100%"
                height="400px"
            />
            <Text
                title="Digitale Vertragsabschlüsse mit eSignature"
                description="Mit der digitalen Unterschrift (eSignature) können Verträge rechtssicher, digital und papierlos unterzeichnet werden – ohne Ausdruck, Scan oder Postversand. Die Unterlagen werden revisionssicher archiviert und sind jederzeit abrufbar."
            />
            <Media
                type="video"
                src={media.video3}
                alt="eSignature Buildeo"
                width="100%"
                height="400px"
                autoPlay
                loop
                controls={false}
            />
            <Text
                title="Regelmäßige Sicherheitsprüfungen & Updates"
                description="Unsere Plattform wird regelmäßig auf Sicherheitslücken geprüft und auf dem neuesten technischen Stand gehalten. Wir arbeiten mit IT-Sicherheitsexperten zusammen, um Ihre Daten und Ihre Nutzungserfahrung jederzeit zu schützen."
            />
        </PageWrapper>
    );
};

export default Page;
