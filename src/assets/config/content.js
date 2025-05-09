const baseURL = "buildeo.vercel.app";

const headerContent = {
    logoAlt: "Logo",
    menuTooltip: "Menü",
    homeTooltip: "Zur Startseite",
    navLinks: [
        {href: "/", label: "Hauptseite", tooltip: "Startseite"},
        {
            href: "/favorable-offer",
            label: "Günstiges Angebot",
            tooltip: "Günstiges Angebot",
            conditionalLabel: {buyer: "Günstiges Angebot", other: "Dienst anbieten"}
        },
    ],
    userMenu: {
        account: "Mein Konto",
        chats: "Meine Chats",
        logout: "Abmelden",
        menuItems: [
            {href: "/account", label: "Persönliche Informationen"},
            {href: "/coming-soon", label: "Bestellungen"},
            {href: "/coming-soon", label: "Ausstehende Angebote"},
            {href: "/coming-soon", label: "Offene Anträge"},
            {href: "/coming-soon", label: "Anfrageformular"},
            {href: "/coming-soon", label: "Freunde werben"},
            {href: "/coming-soon", label: "Meine Bewertungen"},
        ],
    },
    auth: {
        register: "Registrieren",
        login: "Anmelden",
    },
    drawerLinks: [
        {href: "/suchen", label: "Suchen"},
        {href: "/verkaufen", label: "Verkaufen"},
        {href: "/vermieten", label: "Vermieten"},
        {href: "/modernisieren", label: "Modernisieren"},
        {href: "/finanzieren", label: "Finanzieren"},
        {href: "/umziehen", label: "Umziehen"},
    ],
};

const heroContent = {
    title: "Dein Marktplatz für Immobilien und Dienstleistungen.",
    subtitle: "Finden Sie die besten Angebote für Ihre Bauprojekte",
    buttonText: "Suchen",
};

const footerContent = {
    sections: [
        {
            title: "Über Buildeo",
            links: [
                { label: "Über uns", href: "/coming-soon" },
                { label: "Karriere", href: "/coming-soon" },
                { label: "Sitemap", href: "/coming-soon" },
                { label: "Impressum", href: "/coming-soon" },
            ],
        },
        {
            title: "Services",
            links: [
                { label: "Kontakt & Hilfe", href: "/coming-soon" },
                { label: "Presseservice", href: "/coming-soon" },
                { label: "Newsletter abonnieren", href: "/coming-soon" },
                { label: "Verträge hier kündigen", href: "/coming-soon" },
            ],
        },
        {
            title: "IT & Entwicklung",
            links: [
                { label: "Preisatlas", href: "/coming-soon" },
                { label: "Buildeo Österreich", href: "/coming-soon" },
                { label: "Sicherheit", href: "/coming-soon" },
            ],
        },
        {
            title: "AGB & Rechtliches",
            links: [
                { label: "AGB & Rechtliche Hinweise", href: "/coming-soon" },
                { label: "Verbraucherinformationen", href: "/coming-soon" },
                { label: "Datenschutz", href: "/coming-soon" },
                { label: "Zum Privacy-Manager", href: "/coming-soon" },
                { label: "Datenschutz-Kodex für Geodatendienste", href: "/coming-soon" },
                { label: "Sicherheit", href: "/coming-soon" },
            ],
        },
        {
            title: "Für Profis",
            links: [
                { label: "Produktübersicht", href: "/coming-soon" },
                { label: "Maklernetzwerk", href: "/coming-soon" },
                { label: "Eigentümeranfragen", href: "/coming-soon" },
                { label: "Finanzierungsanfragen", href: "/coming-soon" },
                { label: "Umzugsanfragen", href: "/coming-soon" },
                { label: "Werben mit uns", href: "/coming-soon" },
            ],
        },
    ],
    copyright: `© Copyright ${new Date().getFullYear()} Buildeo Inc. All rights reserved.`,
};

module.exports = {
    footerContent,
};


module.exports = {
    headerContent,
    footerContent,
    heroContent,
    baseURL
};