export type WorkCategory = "company" | "freelance";

export interface WorkItem {
    slug: string;
    title: string;
    category: WorkCategory;
    employer?: string;
    period?: string;
    role?: string;
    description: string;
    contributions: string[];
    tags: string[];
    featured?: boolean;
    image?: { src: string; alt: string };
    imageCaption?: string;
    caseStudy?: string;
    liveUrl?: string;
}

export const work: WorkItem[] = [
    {
        slug: "schoolz-routz",
        featured: true,
        title: "Routz",
        category: "company",
        employer: "Schoolz (Routz Platform)",
        period: "Jan 2025–Present",
        role: "Senior Full-Stack Engineer",
        description:
            "Schoolz's fleet-management and school-transportation platform. I built the Vue 3 web application from the ground up, with admin and client dashboards, and own its real-time layer.",
        contributions: [
            "Built the real-time layer end to end: live GPS tracking of active trips and an in-app chat (web backend and frontend plus the mobile apps) connecting operators, passengers, and drivers over custom Node.js socket services.",
            "Shipped the passenger self-service subscription flow: in-app registration, package selection, and online payment through PayTabs, plus operator workflows for drivers, trips, and billing.",
            "Integrated mapping and geocoding APIs for route planning, location search, and map interactions.",
            "Established shared Vue components and composables for a bilingual Arabic and English interface.",
        ],
        tags: ["Vue 3", "Node.js sockets", "Live chat", "GPS tracking", "PayTabs", "Arabic/English"],
        image: {
            src: "/covers/schoolz-routz.svg",
            alt: "Routz live fleet tracking map",
        },
        caseStudy: "/projects/routz",
        liveUrl: "https://routz.me",
    },
    {
        slug: "untap",
        featured: true,
        title: "Untap",
        category: "company",
        employer: "Untap",
        period: "Dec 2022–Apr 2026",
        role: "Senior Frontend Engineer / Frontend Team Lead",
        description:
            "A multi-tenant SaaS platform for competitions, innovation programs, and grant management, bringing admin, customer portal, and public-site experiences into one Vue codebase.",
        contributions: [
            "Became the primary frontend contributor and was promoted to Frontend Team Lead in January 2025, owning architecture decisions, code reviews, and engineer mentoring.",
            "Designed the multi-tenant foundation for client theming, permission roles, and runtime configuration, supporting dozens of distinct client deployments from one codebase.",
            "Delivered a schema-driven form builder and drag-and-drop page builder on SurveyJS and GrapesJS, then added an AI layer so clients generate forms and pages from a prompt and run AI screening of submissions before judge review.",
            "Integrated Stripe so clients can charge participants for submissions.",
            "Improved initial dashboard load time by 40% through Vite build optimization, route-level code splitting, and state-management refactoring.",
            "Owned frontend security remediation during the ISO 27001:2022 certification: moved auth tokens from localStorage to HTTP-only cookies and replaced vulnerable dependencies until the certificate was granted.",
        ],
        tags: ["Vue 3", "Multi-tenant SaaS", "SurveyJS", "GrapesJS", "AI screening", "Stripe", "ISO 27001"],
        image: {
            src: "/covers/untap.svg",
            alt: "Untap platform dashboard overview",
        },
        caseStudy: "/projects/untap",
        liveUrl: "https://untap.tech",
    },
    {
        slug: "autotager",
        featured: true,
        title: "AutoTager",
        category: "company",
        employer: "AutoTager",
        period: "Jan 2022–Dec 2022",
        role: "Frontend Engineer",
        description:
            "A B2B automotive marketplace where dealers list inventory and admins and clients work from data-dense dashboards. I built the React frontend for all three.",
        contributions: [
            "Built the admin, client, and dealer dashboards in React: analytics, inventory, and multi-tenant listings.",
            "Developed the vehicle-inspection workflow: photo uploads, condition scoring, and a structured report that a listing has to pass before it goes live.",
            "Turned the Figma designs into a reusable React component library, which cut design-to-development handoff time by 50%.",
        ],
        tags: ["React", "B2B marketplace", "Dashboards", "Vehicle inspection"],
        image: {
            src: "/covers/autotager.svg",
            alt: "AutoTager automotive marketplace cover illustration",
        },
    },
    {
        slug: "botme",
        featured: true,
        title: "Botme",
        category: "company",
        employer: "Botme",
        period: "Jan 2018–Jan 2022",
        role: "Frontend Engineer",
        description:
            "An omnichannel chatbot builder used by 5,000+ active businesses a month, with workflow automation, live chat, and commerce. I spent four years on its frontend.",
        contributions: [
            "Built and improved the bot builder, workflow automation, live chat, and commerce features in Vue.js and Angular, for a product with 5,000+ active business users a month.",
            "Contributed to Botme Shops, the automated e-commerce module that Facebook featured at F8 Refresh 2021.",
            "Designed the user flows for the visual automation editor and the interactive forms.",
        ],
        tags: ["Vue.js", "Angular", "Chatbots", "Workflow automation", "E-commerce"],
        image: {
            src: "/covers/botme.svg",
            alt: "Botme chatbot builder cover illustration",
        },
    },
    {
        slug: "earlier-agency-work",
        title: "Earlier Agency Work",
        category: "company",
        employer: "MoreCreative, Enjaz (KSA), MTC (Qatar), and Webdivs",
        period: "2014–2018",
        role: "Frontend / Web Developer",
        description:
            "Where I started: client websites and storefronts at four agencies, including Enjaz in Saudi Arabia and MTC in Qatar, for customers across the MENA region.",
        contributions: [
            "Designed and built WordPress, WooCommerce, and Shopify websites and storefronts for agency clients.",
            "Integrated third-party APIs into client sites.",
        ],
        tags: ["WordPress", "WooCommerce", "Shopify", "API integration"],
        image: {
            src: "/covers/earlier-agency-work.svg",
            alt: "Storefront and browser window cover illustration for earlier agency work",
        },
    },
    {
        slug: "zads",
        featured: true,
        title: "Zads",
        category: "freelance",
        employer: "Personal project",
        period: "2024–Present",
        role: "Founder & Full-Stack Engineer",
        description:
            "My own learning marketplace: families and learners find nearby teachers and request lessons. Started on Nuxt 3, now on Next.js 16 App Router, with the source public on GitHub.",
        contributions: [
            "Built the backend using Node.js, Express, Prisma ORM, and PostgreSQL, with HTTP integration tests that run in CI before every deploy.",
            "Developed geo-proximity search to match learners with nearby teachers using location mapping and distance routing.",
            "Implemented dynamic pricing and automated tutor requests from parent sign-ups.",
            "Migrated the product from Nuxt 3/Vuetify to a unified Next.js 16 App Router app: 42 routes, Arabic/English RTL via next-intl, Auth.js v5, CASL role-based access, Server Components on the public pages, deployed on Vercel.",
        ],
        tags: ["Next.js 16", "React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Open source"],
        image: {
            src: "/covers/zads.svg",
            alt: "Zads education platform landing page",
        },
        caseStudy: "/projects/zads",
        liveUrl: "https://zads.app",
    },
    {
        slug: "fleet-billing",
        featured: true,
        title: "Fleet Billing (lite)",
        category: "freelance",
        employer: "Personal project",
        period: "2026",
        role: "Full-Stack Engineer",
        description:
            "Subscriptions and billing for a school-bus operator: operators manage buses and trips and see revenue and seat utilization, while parents pick a plan and pay through Stripe Checkout. A portfolio project with synthetic seed data and Stripe in test mode; source is public on GitHub.",
        contributions: [
            "Built the web app on Next.js 16 App Router: Server Components for stats, tables, and subscriptions, a Server Action for checkout, and client components for the fleet editor and plan picker, in Arabic and English with RTL via next-intl.",
            "Built the NestJS API with global auth and role guards, class-validator DTOs, and pure, unit-tested pricing in integer cents (monthly and term plans with sibling discounts).",
            "Modeled the data with Prisma on Supabase Postgres and used Row Level Security for parent-scoped subscription reads; roles come from a profiles table, never from user metadata.",
            "Integrated Stripe Checkout with a signed webhook that verifies the signature, cross-checks the charged amount, and activates the subscription once per event id.",
            "Covered pricing, the webhook, and HTTP e2e with Vitest and web smoke with Playwright; GitHub Actions runs lint, typecheck, tests, migrations, seed, and a Docker build before the Vercel deploys.",
        ],
        tags: ["Next.js 16", "NestJS", "Prisma", "Supabase RLS", "Stripe", "Vitest", "Playwright", "Arabic/English"],
        image: {
            src: "/covers/fleet-billing.svg",
            alt: "Fleet Billing operator dashboard with revenue, seat utilization, and the bus list",
        },
        caseStudy: "/projects/fleet-billing",
        liveUrl: "https://fleet-billing.vercel.app",
    },
    {
        slug: "yanfaa",
        featured: true,
        title: "Yanfaa",
        category: "freelance",
        employer: "Freelance client project",
        role: "Frontend Developer",
        description:
            "A full redesign of the Yanfaa website, which I implemented as responsive HTML and CSS.",
        contributions: [
            "Redesigned the interface across the site and implemented it as responsive HTML and CSS layouts for desktop and mobile.",
            "Kept frontend performance in scope throughout the redesign, not as an afterthought.",
        ],
        tags: ["HTML", "CSS", "Responsive design", "Performance"],
        image: {
            src: "/covers/yanfaa.svg",
            alt: "Current Yanfaa public website homepage in Arabic",
        },
        imageCaption:
            "Current public website captured in September 2026; it may differ from the UI redesign delivered for this project.",
        liveUrl: "https://yanfaa.com/",
    },
    {
        slug: "wellpal",
        title: "Wellpal",
        category: "freelance",
        employer: "Freelance client project",
        role: "Frontend Developer",
        description:
            "A custom storefront on the Sylius commerce platform, shaped around the customer's shopping journey.",
        contributions: [
            "Built the custom storefront frontend on Sylius.",
            "Shaped the storefront interface from UX research and the client's business goals.",
        ],
        tags: ["Sylius", "E-commerce", "Storefront UX"],
        image: {
            src: "/covers/wellpal.svg",
            alt: "Current WellPal Web SA storefront homepage",
        },
        imageCaption:
            "Current public storefront captured in September 2026; it may differ from the custom Sylius storefront UX delivered for this project.",
        liveUrl: "https://sa.wellpal.net/en/",
    },
    {
        slug: "fundseer",
        title: "FundSeer",
        category: "freelance",
        employer: "Freelance client project",
        role: "Frontend Developer",
        description:
            "Marketing websites and a secure investor dashboard for FundSeer, built with performance and scalability in mind.",
        contributions: [
            "Built the marketing websites.",
            "Developed the secure dashboard investors sign in to.",
            "Worked on frontend performance and scalability as the product grew.",
        ],
        tags: ["Marketing websites", "Investor dashboard", "Security", "Performance", "Scalability"],
        image: {
            src: "/covers/fundseer.svg",
            alt: "FundSeer growth chart cover illustration",
        },
    },
    {
        slug: "kadouscope",
        title: "Kadouscope",
        category: "freelance",
        employer: "Freelance client project",
        role: "Frontend Developer",
        description:
            "A frontend overhaul of a complex React analytics dashboard: faster rendering, responsive layouts, and one consistent look.",
        contributions: [
            "Overhauled the frontend of a complex analytics dashboard in React.",
            "Improved rendering speed, responsive behavior, and visual consistency across the dashboard.",
        ],
        tags: ["React", "Analytics", "Responsive design", "Rendering"],
        image: {
            src: "/covers/kadouscope.svg",
            alt: "Kadouscope analytics globe cover illustration",
        },
    },
    {
        slug: "movex",
        title: "Movex",
        category: "freelance",
        employer: "Freelance client project",
        period: "2020",
        role: "Frontend Developer",
        description:
            "A shipment-tracking interface for a logistics company, connected to its tracking API.",
        contributions: [
            "Built the responsive frontend views for shipment tracking.",
            "Integrated the shipment-tracking API into the interface.",
        ],
        tags: ["Logistics", "Shipment tracking", "API integration", "Responsive design"],
        image: {
            src: "/covers/movex.svg",
            alt: "Movex shipment route cover illustration",
        },
    },
];
