import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
    title: "Buildeo – Immobilien einfach vermieten & Services anbieten",
    description:
        "Buildeo ist Ihre Plattform für Immobilienanzeigen, Wohnungsvermietung, Hausverkauf, Handwerker-Services und digitale Abwicklung. Ideal für Eigentümer, Käufer, Mieter & Dienstleister.",
    keywords: [
        "Immobilienplattform",
        "Wohnung vermieten",
        "Haus verkaufen",
        "Dienstleistungen anbieten",
        "Immobilien inserieren",
        "digitale Immobilienvermittlung",
        "Mietverträge online",
        "Maklerfrei verkaufen",
        "Umzugsservice buchen",
        "Immobilienbewertung",
        "Handwerker finden",
        "Buildeo Plattform"
    ]
};

export const metadataByRoute: Record<string, Metadata> = {
    "/": {
        title: "Startseite – Buildeo",
        description:
            "Immobilien vermieten oder Dienstleistungen rund ums Wohnen anbieten – einfach, professionell und digital mit Buildeo.",
        keywords: [
            "Immobilienplattform",
            "Wohnung anbieten",
            "Service verkaufen",
            "Online Immobilienmarkt",
            "Immobilien für Privatpersonen"
        ]
    },
    "/preisatlas": {
        title: "Preisatlas – Immobilienpreise & Mietentwicklung in Ihrer Region | Buildeo",
        description: "Der Buildeo Preisatlas zeigt Ihnen aktuelle Immobilienpreise, Mietspiegel, Markttrends und Prognosen – datenbasiert, regional und kostenlos einsehbar.",
        keywords: [
            "Preisatlas",
            "Immobilienpreise",
            "Mietpreise",
            "Marktanalyse",
            "Immobilienbewertung",
            "Preisentwicklung",
            "Immobilienkarte",
            "Buildeo Preisvergleich",
            "Mietspiegel",
            "Immobilienprognose"
        ]
    },
    "/uber-uns": {
        title: "Über Uns – Buildeo",
        description: "Erfahren Sie mehr über die Vision, das Team und die Werte von Buildeo – der Plattform für digitale Immobilienvermittlung und wohnnahe Dienstleistungen.",
        keywords: [
            "Über Buildeo",
            "Wer wir sind",
            "Team Buildeo",
            "Digitale Immobilienplattform",
            "Vision Immobilienmarkt",
            "Immobilien einfach online",
            "Dienstleister finden",
            "Wohnung vermieten",
            "Haus verkaufen",
            "digitale Services"
        ]
    },
    "/datenschutz": {
        title: "Datenschutzerklärung – Buildeo",
        description: "Erfahren Sie, wie Buildeo mit personenbezogenen Daten umgeht. Alles zur Datenverarbeitung, Sicherheit, Rechte der Nutzer und DSGVO-Konformität.",
        keywords: [
            "Datenschutz",
            "Datenschutzerklärung",
            "DSGVO",
            "personenbezogene Daten",
            "Datenverarbeitung",
            "Nutzerrechte",
            "Datensicherheit",
            "Cookies",
            "Tracking",
            "Einwilligung",
            "Löschrecht",
            "Transparenz",
            "Buildeo Datenschutz"
        ]
    },
    "/cookie-richtlinie": {
        title: "Cookie-Richtlinie – Buildeo",
        description: "Erfahren Sie, wie Buildeo Cookies verwendet, um die Nutzererfahrung zu verbessern, Inhalte zu personalisieren und statistische Daten zu erfassen.",
        keywords: [
            "Cookie-Richtlinie",
            "Cookies Buildeo",
            "Tracking-Technologien",
            "Datenschutz",
            "Nutzungsanalyse",
            "Cookie-Einstellungen",
            "Website-Cookies",
            "Recht auf Widerspruch"
        ]
    },
    "/about": {
        title: "Über Uns – Buildeo",
        description:
            "Erfahren Sie mehr über die Mission von Buildeo, unser Team und wie wir die Immobilienwelt digitalisieren.",
        keywords: ["Über Buildeo", "Plattform Infos", "Team", "Vision", "Mission"]
    },
    "/blog": {
        title: "Blog – Tipps & News rund um Immobilien | Buildeo",
        description:
            "Aktuelle Ratgeber, Tipps zur Immobilienvermietung, Tools für Dienstleister und digitale Lösungen auf unserem Blog.",
        keywords: [
            "Immobilienblog",
            "Vermietungstipps",
            "Service-Ratgeber",
            "Immobilienrecht",
            "digitale Vermarktung"
        ]
    },
    "/presse": {
        title: "Pressebereich – Aktuelle Nachrichten & Medieninformationen von Buildeo",
        description: "Hier finden Sie Pressemitteilungen, Medienkits, Zahlen und Fakten über Buildeo. Für Journalist:innen, Blogger:innen und Medienvertreter.",
        keywords: [
            "Presse Buildeo",
            "Buildeo Medien",
            "Pressemitteilungen",
            "Medienkit Buildeo",
            "Pressekontakt",
            "PropTech Presse",
            "Immobilien Plattform Presse",
            "Startup Nachrichten",
            "Buildeo Pressebereich",
            "Presseinformationen Buildeo"
        ]
    },
    "/buildeo-osterreich": {
        title: "Buildeo Österreich – Immobilien & Services digital anbieten und finden",
        description:
            "Buildeo Österreich bietet eine moderne Plattform für die Vermietung, den Verkauf und die Vermittlung von wohnnahen Dienstleistungen in ganz Österreich – inklusive Wien, Graz, Linz und mehr.",
        keywords: [
            "Buildeo Österreich",
            "Immobilienplattform Österreich",
            "Wohnung vermieten Wien",
            "Haus verkaufen Graz",
            "Dienstleistungen Linz",
            "digitale Immobilienvermittlung",
            "Preisatlas Österreich",
            "Immobilienportal",
            "Wohnung mieten Österreich",
            "Immobilien Österreich digital"
        ]
    },
    "/newsletter": {
        title: "Buildeo Newsletter – Immer informiert über Immobilien und Services",
        description: "Abonnieren Sie den kostenlosen Newsletter von Buildeo und erhalten Sie aktuelle Tipps, Markttrends, exklusive Angebote und Produktneuheiten rund um Immobilien und wohnnahe Services.",
        keywords: [
            "Buildeo Newsletter",
            "Immobilien News",
            "Wohnungstipps",
            "Markttrends Immobilien",
            "Immobilienangebote",
            "PropTech Newsletter",
            "Digitale Vermietung",
            "Immobilienplattform News",
            "Services rund ums Wohnen",
            "Buildeo Neuigkeiten"
        ]
    },
    "/karriere": {
        title: "Karriere bei Buildeo – Werde Teil unseres Teams",
        description: "Starte deine Karriere bei Buildeo! Entdecke offene Positionen im Bereich Entwicklung, Marketing, Design und Kundenservice. Remote, flexibel & innovativ.",
        keywords: [
            "Karriere Buildeo",
            "Jobs bei Buildeo",
            "Remote Jobs Immobilien",
            "PropTech Jobs",
            "Stellenangebote Tech Startup",
            "Arbeiten bei Buildeo",
            "Buildeo Team",
            "Frontend Entwickler Job",
            "Marketing Job Remote",
            "Bewerbung Buildeo"
        ]
    },
    "/sicherheit": {
        title: "Sicherheit bei Buildeo – DSGVO, eSignature & geprüfte Transaktionen",
        description: "Erfahren Sie, wie Buildeo Ihre Daten, Kommunikation und Zahlungen schützt. DSGVO-konform, SSL-verschlüsselt, mit verifizierten Nutzern und sicheren Vertragsabschlüssen.",
        keywords: [
            "Sicherheit Buildeo",
            "DSGVO Immobilienplattform",
            "eSignature Mietvertrag",
            "SSL verschlüsselte Kommunikation",
            "verifizierte Dienstleister",
            "sichere Online-Zahlung",
            "digitale Vertragsunterzeichnung",
            "Immobilienplattform Datenschutz"
        ]
    },
    "/sign-in": {
        title: "Anmelden – Buildeo",
        description: "Melden Sie sich bei Buildeo an, um Ihre Immobilienangebote zu verwalten oder Dienstleistungen anzubieten.",
        keywords: ["Login", "Benutzerkonto", "Immobilien verwalten", "Buildeo Login"]
    },
    "/sign-up": {
        title: "Registrieren – Buildeo",
        description: "Jetzt kostenlos registrieren und sofort Immobilien inserieren oder Dienstleistungen präsentieren.",
        keywords: ["Registrierung", "Konto erstellen", "Jetzt starten", "Immobilien inserieren", "Serviceanbieter"]
    },
    "/agb_and_rechtliche_hinweise": {
        title: "AGB & Rechtliche Hinweise – Buildeo",
        description:
            "Lesen Sie die Allgemeinen Geschäftsbedingungen und rechtlichen Hinweise für die Nutzung der Buildeo Plattform zur Immobilienvermittlung und Dienstleistungsbuchung.",
        keywords: [
            "AGB",
            "rechtliche Hinweise",
            "Nutzungsbedingungen",
            "Bedingungen für Anbieter",
            "Immobilienplattform Regeln",
            "Dienstleistungsrichtlinien",
            "Rechtsinformationen Buildeo"
        ]
    }
};
