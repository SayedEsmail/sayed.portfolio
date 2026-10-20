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
    image?: { src: string; alt: string };
    imageCaption?: string;
    caseStudy?: string;
    liveUrl?: string;
}

export const work: WorkItem[] = [
    {
        slug: "schoolz-routz",
        title: "Routz",
        category: "company",
        employer: "Schoolz (Routz Platform)",
        period: "Jan 2025–Present",
        role: "Senior Frontend Engineer",
        description:
            "A fleet-management and school-transportation SaaS platform with admin and client dashboards.",
        contributions: [
            "Built the real-time layer end to end: live GPS tracking of active trips and an in-app chat (web backend and frontend plus the mobile apps) connecting operators, passengers, and drivers over custom Node.js socket services.",
            "Shipped the passenger self-service subscription flow: in-app registration, package selection, and online payment through PayTabs, plus operator workflows for drivers, trips, and billing.",
            "Integrated mapping and geocoding APIs for route planning, location search, and map interactions.",
            "Established shared Vue components and composables for a bilingual Arabic and English interface.",
        ],
        tags: ["Vue 3", "Node.js sockets", "Live chat", "GPS tracking", "PayTabs", "Arabic/English"],
        image: {
            src: "/projects/routz/live-tracking.png",
            alt: "Routz live fleet tracking map",
        },
        caseStudy: "/projects/routz",
        liveUrl: "https://routz.me",
    },
    {
        slug: "untap",
        title: "Untap",
        category: "company",
        employer: "Untap",
        period: "Dec 2022–Apr 2026",
        role: "Senior Frontend Engineer / Frontend Team Lead",
        description:
            "A multi-tenant SaaS platform for competitions, innovation programs, and grant management, bringing admin, customer portal, and public-site experiences into one Vue codebase.",
        contributions: [
            "Led frontend architecture, code reviews, and engineer mentoring.",
            "Designed the multi-tenant foundation for client theming, permission roles, and runtime configuration.",
            "Delivered a schema-driven form builder and drag-and-drop page builder on SurveyJS and GrapesJS, then added an AI layer so clients generate forms and pages from a prompt and run AI screening of submissions before judge review.",
            "Integrated Stripe so clients can charge participants for submissions.",
            "Improved initial dashboard load time by 40% through Vite build optimization, route-level code splitting, and state-management refactoring.",
            "Owned frontend security remediation during the ISO 27001:2022 certification: moved auth tokens from localStorage to HTTP-only cookies and replaced vulnerable dependencies until the certificate was granted.",
        ],
        tags: ["Vue 3", "Multi-tenant SaaS", "SurveyJS", "GrapesJS", "AI screening", "Stripe", "ISO 27001"],
        image: {
            src: "/projects/untap/dashboard-overview.png",
            alt: "Untap platform dashboard overview",
        },
        caseStudy: "/projects/untap",
        liveUrl: "https://untap.tech",
    },
    {
        slug: "autotager",
        title: "AutoTager",
        category: "company",
        employer: "AutoTager",
        period: "Jan 2022–Dec 2022",
        role: "Frontend Engineer",
        description:
            "An automotive B2B marketplace with admin, client, and dealer dashboards for analytics, inventory, and multi-tenant listings.",
        contributions: [
            "Built data-dense dashboards for administrators, clients, and dealers.",
            "Developed a vehicle-inspection workflow for photo uploads, condition scoring, and structured reports before publication.",
            "Turned Figma designs into a reusable React component library.",
        ],
        tags: ["React", "B2B marketplace", "Dashboards", "Vehicle inspection"],
    },
    {
        slug: "botme",
        title: "Botme",
        category: "company",
        employer: "Botme",
        period: "Jan 2018–Jan 2022",
        role: "Frontend Engineer",
        description:
            "An omnichannel chatbot builder with workflow automation, live chat, and commerce experiences.",
        contributions: [
            "Built and improved chatbot-building, workflow automation, live-chat, and commerce features using Vue.js and Angular.",
            "Contributed to Botme Shops, an automated e-commerce module featured at Facebook F8 Refresh 2021.",
            "Designed user flows for visual automation and interactive forms.",
        ],
        tags: ["Vue.js", "Angular", "Chatbots", "Workflow automation", "E-commerce"],
    },
    {
        slug: "earlier-agency-work",
        title: "Earlier Agency Work",
        category: "company",
        employer: "MoreCreative, Enjaz (KSA), MTC (Qatar), and Webdivs",
        period: "2014–2018",
        role: "Frontend / Web Developer",
        description:
            "Custom website and storefront work for clients across the MENA region.",
        contributions: [
            "Designed and built WordPress, WooCommerce, and Shopify websites and storefronts.",
            "Integrated third-party APIs for client projects.",
        ],
        tags: ["WordPress", "WooCommerce", "Shopify", "API integration"],
    },
    {
        slug: "zads",
        title: "Zads",
        category: "freelance",
        employer: "Personal project",
        period: "2024–Present",
        role: "Founder & Full-Stack Engineer",
        description:
            "A learning marketplace connecting families and learners with nearby teachers. Migrated from Nuxt 3 to Next.js 16 App Router; source is public on GitHub.",
        contributions: [
            "Built the backend using Node.js, Express, Prisma ORM, and PostgreSQL, with HTTP integration tests that run in CI before every deploy.",
            "Developed geo-proximity search to match learners with nearby teachers using location mapping and distance routing.",
            "Implemented dynamic pricing and automated tutor requests from parent sign-ups.",
            "Migrated the product from Nuxt 3/Vuetify to a unified Next.js 16 App Router app: 42 routes, Arabic/English RTL via next-intl, Auth.js v5, CASL role-based access, Server Components on the public pages, deployed on Vercel.",
        ],
        tags: ["Next.js 16", "React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Open source"],
        image: {
            src: "/projects/zads/landing-page.png",
            alt: "Zads education platform landing page",
        },
        caseStudy: "/projects/zads",
        liveUrl: "https://zads.app",
    },
    {
        slug: "fleet-billing",
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
            src: "/projects/fleet-billing/operator-dashboard.png",
            alt: "Fleet Billing operator dashboard with revenue, seat utilization, and the bus list",
        },
        caseStudy: "/projects/fleet-billing",
        liveUrl: "https://fleet-billing.vercel.app",
    },
    {
        slug: "yanfaa",
        title: "Yanfaa",
        category: "freelance",
        employer: "Freelance client project",
        role: "Frontend Developer",
        description:
            "A full UI redesign implemented as a responsive HTML and CSS experience.",
        contributions: [
            "Redesigned the user interface across the experience.",
            "Implemented responsive layouts with HTML and CSS.",
            "Addressed frontend performance as part of the redesign work.",
        ],
        tags: ["HTML", "CSS", "Responsive design", "Performance"],
        image: {
            src: "/projects/yanfaa/current-site.png",
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
            "A custom Sylius storefront focused on the customer shopping experience.",
        contributions: [
            "Aligned the storefront interface with UX research and business goals.",
            "Built a custom frontend experience for the Sylius commerce platform.",
        ],
        tags: ["Sylius", "E-commerce", "Storefront UX"],
        image: {
            src: "/projects/wellpal/current-site.png",
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
            "Marketing websites and a secure investor dashboard, with attention to performance and scalability.",
        contributions: [
            "Built marketing website experiences.",
            "Developed a secure dashboard for investors.",
            "Worked on frontend performance and scalability for the product experience.",
        ],
        tags: ["Marketing websites", "Investor dashboard", "Security", "Performance", "Scalability"],
    },
    {
        slug: "kadouscope",
        title: "Kadouscope",
        category: "freelance",
        employer: "Freelance client project",
        role: "Frontend Developer",
        description:
            "A React frontend for analytics workflows, built with attention to rendering, responsive behavior, and visual consistency.",
        contributions: [
            "Overhauled the frontend of a complex analytics dashboard in React.",
            "Optimized rendering speed, responsive usability, and visual consistency.",
        ],
        tags: ["React", "Analytics", "Responsive design", "Rendering"],
    },
    {
        slug: "movex",
        title: "Movex",
        category: "freelance",
        employer: "Freelance client project",
        period: "2020",
        role: "Frontend Developer",
        description:
            "A logistics experience for shipment tracking, with responsive interfaces connected to a tracking API.",
        contributions: [
            "Built responsive frontend views for shipment tracking.",
            "Integrated the shipment-tracking API into the interface.",
        ],
        tags: ["Logistics", "Shipment tracking", "API integration", "Responsive design"],
    },
];
