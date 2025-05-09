export const baseURL = "buildeo.vercel.app";

const person = {
    firstName: "Yaroslav",
    lastName: "Tsarenko",
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: "Full-Stack Developer",
    avatar: "/images/avatar.jpg",
    location: "Europe/Kyiv", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ["English", "Ukrainian", "Russian", "Polish", "German", "French"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}&apos s Newsletter</>,
    description: (
        <>
            I occasionally write about frontend, technology, and share thoughts on the intersection of
            creativity and engineering.
        </>
    ),
};

const social = [

    {
        name: "GitHub",
        icon: "github",
        link: "https://github.com/yaroslav-tsarenko?tab=repositories",
    },
    {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/in/yaroslav-tsarenko-/",
    },
    {
        name: "X",
        icon: "x",
        link: "",
    },
    {
        name: "Email",
        icon: "email",
        link: "mailto:yaroslavtsarenkodev@gmail.com",
    },
];

const home = {
    label: "Home",
    title: `${person.name}'s Portfolio`,
    description: `A portfolio website showcasing my work as a ${person.role}`,
    headline: <>Full-Stack Developer Creating High-Performance Web Apps</>,
    subline: (
        <>
            I&aposm Yaroslav Tsarenko, a Full-Stack Developer who bring interfaces to life
            <br /> using modern tools like Next, React, TypeScript, and Tailwind. In my free time, I craft side projects to sharpen my skills.
        </>
    ),
};

const about = {
    label: "About",
    title: "About me",
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false,
    },
    avatar: {
        display: true,
    },
    calendar: {
        display: true,
        link: "https://cal.com/yaroslav-tsarenko/45-min-meeting",
    },
    intro: {
        display: true,
        title: "Introduction",
        description: (
            <>
                Yaroslav is a Ukraine-based frontend developer
                with a passion for turning complex ideas into clean,
                responsive, and user-friendly digital experiences.
                His work focuses on modern web interfaces, interactive components,
                and the seamless fusion of design and technology.
            </>
        ),
    },
    work: {
        display: true,
        title: "Work Experience",
        experiences: [
            {
                company: "Tresor.tech",
                timeframe: "09/2024 – 02/2025",
                role: "Front-End Developer",
                achievements: [
                    <>
                        Implemented a micro-frontend architecture for an e-SIM marketplace, resulting in a 35% increase in user engagement.
                    </>,
                    <>
                        Focused on SEO optimization and a modular component-based approach using React, Next.js, and Tailwind.
                    </>,
                ],
                images: [],
            },
            {
                company: "allship.ai",
                timeframe: "08/2023 – 08/2024",
                role: "Full-Stack Developer",
                achievements: [
                    <>
                        Effectively showcased the MVP to the client, which led to a 20% increase in project investments.
                    </>,
                    <>
                        Worked across the stack using Node.js, Zustand, WebSockets, MongoDB, and JWT to deliver scalable logistics solutions.
                    </>,
                ],
                images: [],
            },
            {
                company: "StreamGenix",
                timeframe: "05/2021 – 07/2023",
                role: "Front-End Developer",
                achievements: [
                    <>
                        Optimized front-end performance and reduced load times, saving the company $2,000 annually in hosting costs.
                    </>,
                    <>
                        Built a no-code platform using TypeScript, PostgreSQL, CI/CD, Jenkins, Docker, and RESTful APIs.
                    </>,
                ],
                images: [],
            },
        ],
    },
    studies: {
        display: true,
        title: "Studies",
        institutions: [
            {
                name: "National Khmelnytskyi University",
                description: <>Studied Computer Science with a focus on modern web development and software engineering.</>,
            },
            {
                name: "IBM",
                description: (
                    <>
                        Completed the certificate <strong>Web Development with HTML, CSS, JavaScript</strong> in October 2024.
                        <br />
                        Credential ID: IW0YYY47OD27
                    </>
                ),
            },
        ],
    },
    technical: {
        display: true,
        title: "Technical Skills",
        skills: [
            {
                title: "Next.js",
                description: <>Building next-gen apps with SSR, ISR, SEO optimization, and performance tuning.</>,
            },
            {
                title: "React & React Native",
                description: <>Creating modern UI/UX with hooks, state management, and reusable component design.</>,
            },
            {
                title: "TypeScript & JavaScript",
                description: <>Proficient in modern ES standards (ES12+), strong type safety, and scalable application structure.</>,
            },
            {
                title: "Node.js",
                description: <>Building scalable backend APIs, services, and microservices.</>,
            },
            {
                title: "Redux / Zustand / Redux Toolkit",
                description: <>Efficient and scalable state management in complex applications.</>,
            },
            {
                title: "HTML5 & CSS3",
                description: <>Building semantic, responsive, and accessible web interfaces.</>,
            },
            {
                title: "Tailwind CSS / Material UI / Bootstrap",
                description: <>Crafting visually appealing and consistent designs using utility-first and component-based UI libraries.</>,
            },
            {
                title: "PostgreSQL / MySQL / MongoDB",
                description: <>Working with both relational and NoSQL databases, schema design, and query optimization.</>,
            },
            {
                title: "JWT / OAuth",
                description: <>Implementing secure authentication and authorization flows.</>,
            },
            {
                title: "Stripe",
                description: <>Payment processing, subscriptions, and secure transaction handling.</>,
            },
            {
                title: "Jest",
                description: <>Writing unit and integration tests for frontend and backend systems.</>,
            },
            {
                title: "Webpack / Vite / npm",
                description: <>Optimizing builds, managing dependencies, and bundling modern JavaScript applications.</>,
            },
            {
                title: "CI/CD: Docker / Jenkins / Vercel / Heroku / Render",
                description: <>Automating deployment pipelines and managing cloud infrastructure.</>,
            },
            {
                title: "Microservices & Monolithic Architecture",
                description: <>Designing and maintaining scalable, maintainable backend systems.</>,
            },
            {
                title: "Agile / Scrum / Kanban",
                description: <>Working efficiently in cross-functional teams with iterative development methodologies.</>,
            },
        ],
    },
};

const blog = {
    label: "Blog",
    title: "Writing about design and tech...",
    description: `Read what ${person.name} has been up to recently`,
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
};

const work = {
    label: "Work",
    title: "My projects",
    description: `Design and dev projects by ${person.name}`,
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
};

const contactMe = {
    label: "Contact Me",
    title: "Get in touch",
    description: `Get in touch with ${person.name}`,
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
};

const gallery = {
    label: "Gallery",
    title: "My photo gallery",
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        {
            src: "/images/gallery/img-01.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/img-02.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-03.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/img-04.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-05.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-06.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/img-07.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-08.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/img-09.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-10.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-11.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/img-12.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-13.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-14.jpg",
            alt: "image",
            orientation: "horizontal",
        },
    ],
};

export { person, social, newsletter, home, about, blog, work, gallery, contactMe };


export const headerContent = {
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

export const heroContent = {
    title: "Dein Marktplatz für Immobilien und Dienstleistungen.",
    subtitle: "Finden Sie die besten Angebote für Ihre Bauprojekte",
    buttonText: "Suchen",
};

export const footerContent = {
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

