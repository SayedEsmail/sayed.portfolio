export interface StackItem {
    name: string;
    role: string;
}

export interface Challenge {
    title: string;
    solution: string;
}

export interface Impact {
    metric: string;
    value: string;
}

export interface Project {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    heroImage: string;
    screenshots: { src: string; alt: string }[];
    problem: string;
    architecture: string;
    architectureDiagram?: string;
    stack: StackItem[];
    challenges: Challenge[];
    impact: Impact[];
    businessImpact: string[];
    keyDecisions: { decision: string; justification: string }[];
    role: string;
    /** When the work happened, e.g. "Jan 2025 – present". */
    period?: string;
    /** One line on team context: who else was involved, what I owned. */
    team?: string;
    /** Three to five sentences: product, my role, headline result. Shown before the problem statement. */
    summary?: string;
    /** What I personally owned versus the rest of the team. */
    scope?: string;
    /** Leadership and team impact, for lead roles. */
    leadership?: string;
    /** What I would do differently. */
    reflection?: string;
    /** Provenance of the screenshots (demo tenant, public site, sample data). */
    screenshotNote?: string;
    featured: boolean;
    order: number;
    liveUrl?: string;
    githubUrl?: string;
}

export const projects: Project[] = [
    {
        slug: "routz",
        title: "Routz",
        subtitle: "Fleet management and school transportation for operators, drivers, and families",
        description:
            "Schoolz's cloud platform for school and corporate transport: trips, routes, live vehicle tracking, passenger subscriptions, and operator-to-driver-to-passenger communication. I built the Vue 3 web application from the ground up and own its frontend delivery and real-time layer.",
        tags: ["Vue 3", "Node.js sockets", "GPS tracking", "In-app chat", "PayTabs", "Arabic/English"],
        heroImage: "/projects/routz/dashboard-overview.jpg",
        screenshots: [
            {
                src: "/projects/routz/dashboard-overview.jpg",
                alt: "Operator dashboard: today's trips, passengers, subscriptions and invoices, a priority queue, and the live map",
            },
            {
                src: "/projects/routz/live-tracking.jpg",
                alt: "Live tracking: active trips list with the socket status, filters by school, government and direction, and the vehicle map",
            },
            {
                src: "/projects/routz/manage-operations.jpg",
                alt: "Manage operations: daily trips with captain, vehicle, status and schedule, plus unassigned passengers and requests queues",
            },
            {
                src: "/projects/routz/subscriptions.jpg",
                alt: "Subscriptions: package, billing period, amount, approval status and end date per family",
            },
            {
                src: "/projects/routz/payment-methods.jpg",
                alt: "Payment methods: offline methods that require approval next to PayTabs gateways for cards, wallets and installments",
            },
            {
                src: "/projects/routz/pay-link-settings.jpg",
                alt: "Pay link settings: each operator gets a public pay portal URL and can require a verification code",
            },
            {
                src: "/projects/routz/pay-portal.jpg",
                alt: "The public pay portal where a parent opens their balance with a phone number and pays online",
            },
            {
                src: "/projects/routz/dashboard-arabic.jpg",
                alt: "The same dashboard in Arabic, fully mirrored for right-to-left reading",
            },
            {
                src: "/projects/routz/mobile-apps.png",
                alt: "The passenger app with today's trips and the captain app after a completed trip, from routz.me",
            },
        ],
        screenshotNote:
            "Dashboard screens are from the production operator app of a live tenant, captured in November 2026 outside school hours. Parent, child and driver names and plate numbers are pixelated. The mobile screens are from the public site at routz.me.",
        role: "Senior Full-Stack Engineer at Schoolz",
        period: "Jan 2025 – present",
        team: "Part-time consultant until Apr 2026, full-time since May 2026. I own the web frontend and the real-time services.",
        summary:
            "Routz is Schoolz's cloud platform for school and corporate transport in Egypt and the region. Operators plan routes and trips, follow vehicles live, and sell subscriptions to families; drivers and passengers use the Routz and Routz Captain mobile apps. I joined in January 2025 and built the Vue 3 web application from the first screen: the admin and client dashboards, the live tracking and chat layer over custom Node.js socket services, and the passenger subscription flow with online payment.",
        featured: true,
        order: 1,
        problem:
            "A school or company transport team runs dozens of daily trips with drivers, assistants, stops, and passengers that change every week. The control room needs one live view of every active vehicle, families want to know where the bus is and to pay for their seat without calling the office, and drivers need clear instructions trip by trip. All of this has to work in Arabic and English, because the operators and families are in Egypt and the Gulf.\n\nWhen I joined, the web application did not exist yet. The brief was to build the operator dashboards from the ground up while the real-time features were designed at the same time.",
        architecture:
            "The web application is a Vue 3 single-page app with two surfaces: an admin dashboard for Schoolz and a client dashboard for each operator. Both are built from one shared component library and a set of composables, so every screen works in Arabic (right-to-left) and English.\n\nLive data comes from custom Node.js socket services that I built end to end: the driver app pushes GPS positions, the services fan them out to the dashboards and the passenger app, and the same channel carries the in-app chat between operators, passengers, and drivers on web and mobile. Mapping and geocoding APIs provide route planning, stop search, and the live map. Passenger subscriptions run through an in-app flow (registration, package selection, PayTabs online payment) that feeds the operator's billing screens.",
        architectureDiagram: `Routz web app (Vue 3, Arabic/English)
        ├── Admin dashboard (Schoolz) · Client dashboard (operators)
        ├── Shared components and composables (RTL-first)
        └── Mapping and geocoding APIs (routes, stops, live map)
                    │  socket events
                    ▼
Custom Node.js socket services (built end to end)
        ├── Live GPS positions: driver app → dashboards and passenger app
        └── In-app chat: operators ↔ passengers ↔ drivers (web and mobile)
                    │
                    ▼
Subscriptions: in-app registration → package → PayTabs payment → billing`,
        stack: [
            { name: "Vue 3", role: "Admin and client dashboards, built from the ground up" },
            { name: "Node.js socket services", role: "Live trip and driver-location updates, in-app chat" },
            { name: "Mapping and geocoding APIs", role: "Route planning, stop search, live map" },
            { name: "PayTabs", role: "Online payment in the passenger subscription flow" },
            { name: "Arabic and English", role: "Right-to-left first, shared components and composables" },
        ],
        scope:
            "I own the web frontend: the admin and client dashboards from the first commit, the shared component library, and the frontend workflows for drivers, trips, billing, and subscriptions. I also built the real-time layer across the stack: the socket services and the tracking and chat features that run in the dashboards and inside the mobile apps. The native mobile apps themselves are built by the mobile team.",
        challenges: [
            {
                title: "A live view of every active trip",
                solution:
                    "Built the live tracking map on top of custom Node.js socket services, so operators follow vehicles and driver locations as they move instead of refreshing a list.",
            },
            {
                title: "Chat between operators, passengers, and drivers",
                solution:
                    "Delivered the in-app chat end to end, backend and web frontend plus the mobile apps, over the same socket layer as tracking, so a question about a late bus reaches the driver and the office at once.",
            },
            {
                title: "Families paying without the office",
                solution:
                    "Shipped the passenger self-service flow: registration, package selection, and online payment through PayTabs, connected to the operator's subscription and billing workflows.",
            },
            {
                title: "Routes and stops on a map",
                solution:
                    "Integrated mapping and geocoding APIs for route planning, location search, and map interactions in the trip and destination workflows.",
            },
            {
                title: "One interface in two directions",
                solution:
                    "Established shared Vue components and composables that handle right-to-left layout and translation, so every new screen is bilingual by default.",
            },
        ],
        impact: [
            { metric: "Live operations", value: "GPS visibility into active trips and driver locations" },
            { metric: "Communication", value: "In-app chat between operators, passengers, and drivers" },
            { metric: "Payments", value: "Self-service subscriptions paid online through PayTabs" },
            { metric: "Shared frontend", value: "One bilingual component library behind both dashboards" },
        ],
        businessImpact: [
            "Gives the control room a live view of active trips and driver locations.",
            "Lets families register, choose a package, and pay online instead of calling the office.",
            "Puts operators, passengers, and drivers in one chat thread per trip.",
            "Serves operators and families in Arabic or English from the same code.",
        ],
        keyDecisions: [
            {
                decision: "Custom socket services instead of polling",
                justification:
                    "Live positions and chat are the core of the operator experience; a push channel keeps the map current without hammering the API.",
            },
            {
                decision: "One shared component library for both dashboards",
                justification:
                    "Admin and client screens share tables, forms, and map widgets, so right-to-left and translation are solved once.",
            },
            {
                decision: "PayTabs for passenger payments",
                justification:
                    "A gateway used across Egypt and the Gulf lets families pay with local cards inside the app.",
            },
            {
                decision: "Mapping and geocoding APIs rather than a custom map stack",
                justification:
                    "Route planning and stop search depend on accurate geocoding; the APIs let the team focus on the workflows around the map.",
            },
        ],
        liveUrl: "https://routz.me",
    },
    {
        slug: "untap",
        title: "Untap",
        subtitle: "Multi-tenant platform for hiring, innovation programs, competitions, and grants",
        description:
            "A multi-tenant SaaS platform that runs hiring campaigns, innovation challenges, awards, and grant programs. I led the Vue 3 frontend that serves the admin, customer portal, and public-site experiences, first as the main contributor and from January 2025 as Frontend Team Lead.",
        tags: ["Vue 3", "Multi-tenant SaaS", "SurveyJS", "GrapesJS", "AI screening", "Stripe", "ISO 27001"],
        heroImage: "/projects/untap/tour-admin-overview.png",
        screenshots: [
            {
                src: "/projects/untap/tour-admin-overview.png",
                alt: "Platform overview for one client: users, participants, programs, submissions, and traffic sources",
            },
            {
                src: "/projects/untap/form-builder.png",
                alt: "The customized SurveyJS submission-form builder inside a program round, from the production admin",
            },
            {
                src: "/projects/untap/tour-site-builder.png",
                alt: "Page builder on GrapesJS with the AI page builder that drafts a public page from a prompt",
            },
            {
                src: "/projects/untap/tour-submissions.png",
                alt: "Submissions in a hackathon round with progress, average score, and rank per entry",
            },
            {
                src: "/projects/untap/tour-judge-view.png",
                alt: "Judge view: scoring a submission against the evaluation form next to the entry preview",
            },
            {
                src: "/projects/untap/tour-rounds-evaluation.png",
                alt: "Program rounds with submission, evaluation, qualification, screening, and proctor settings",
            },
            {
                src: "/projects/untap/tour-round-analysis.png",
                alt: "Round analysis: exportable charts across submission answers",
            },
            {
                src: "/projects/untap/tour-participant-view.png",
                alt: "A client's public portal on its own subdomain, themed per client",
            },
            {
                src: "/projects/untap/tour-applying.png",
                alt: "Participant view: applying to a program through the configured submission form",
            },
            {
                src: "/projects/untap/tour-spin-up-platform.png",
                alt: "Creating a new client platform: title, language, timezone, and subdomain or custom domain",
            },
        ],
        screenshotNote:
            "The form builder screenshot is from the production admin. The other screens are from Untap's public product tour at untap.tech and show sample data.",
        role: "Senior Frontend Engineer / Frontend Team Lead at Untap",
        period: "Dec 2022 – Apr 2026",
        team: "Frontend Team Lead from Jan 2025: architecture decisions, code reviews, and mentoring.",
        summary:
            "Untap gives organizations one platform to run hiring campaigns, innovation challenges, awards, and grant programs; its site reports more than 400 programs, one million participants, and 100 customers. Each client gets its own branded platform on a subdomain or custom domain. I joined in December 2022, became the main frontend contributor, and led the frontend team from January 2025 until I left in April 2026. The work ranged from the multi-tenant foundation to the AI layer, payments, performance, and the security remediation behind the company's ISO 27001 certificate.",
        featured: true,
        order: 2,
        problem:
            "A hiring team, an innovation office, and a national award run very different programs, yet all of them need the same building blocks: a branded public site, a submission form, rounds of evaluation with judges and rubrics, and reporting. Untap had to serve dozens of clients, each with its own theme, roles, domain, and configuration, from one product.\n\nOn the frontend that meant one codebase for three experiences (admin, customer dashboard, public portal), builders that program teams could use without developers, and dashboards that stayed fast as the data grew.",
        architecture:
            "One Vue 3 codebase serves the three experiences. At boot the app reads the subdomain and routes into the admin, the client dashboard, or the public portal; per-client theme, permission roles, and runtime configuration are loaded for that tenant, so dozens of distinct client deployments run from the same build.\n\nProgram teams configure their programs through two builders I customized heavily: a schema-driven submission and evaluation form builder on SurveyJS, and a drag-and-drop page builder on GrapesJS. On top of them I added an AI layer that generates forms and pages from a prompt and screens participant submissions before judge review. Stripe lets clients charge participants for submissions.\n\nInitial dashboard load dropped by 40% after Vite build optimization, route-level code splitting, and a state-management refactor. During the ISO 27001:2022 certification I owned the frontend remediation: auth tokens moved from localStorage to HTTP-only cookies and vulnerable dependencies were replaced until the audit passed.",
        architectureDiagram: `One Vue 3 codebase, routed by subdomain at boot
        ├── Admin (Untap staff)
        ├── Client dashboard (per tenant: theme · roles · runtime config)
        └── Public portal (program sites on client subdomains or custom domains)
                    │
        ┌───────────┴───────────┐
   SurveyJS form builder    GrapesJS page builder
   (submission · evaluation)  (public pages)
        └───────────┬───────────┘
          AI layer: generate from a prompt · screen submissions
                    │
   Stripe (paid submissions) · HTTP-only cookie auth (ISO 27001)`,
        stack: [
            { name: "Vue 3 + Vite", role: "One codebase for admin, customer, and public experiences; route-level code splitting" },
            { name: "SurveyJS", role: "Customized schema-driven form builder for submissions and evaluation" },
            { name: "GrapesJS", role: "Customized drag-and-drop page builder for public program pages" },
            { name: "AI layer", role: "Forms and pages generated from a prompt; screening of submissions before judges" },
            { name: "Stripe", role: "Paid submissions for client programs" },
            { name: "Access control", role: "Permission roles per tenant, HTTP-only cookie sessions" },
        ],
        scope:
            "I owned the frontend architecture: the multi-tenant foundation, the builders and the AI layer on top of them, the Stripe integration, the performance work, and the security remediation. As Frontend Team Lead from January 2025 I made the architecture decisions, ran code reviews, and mentored the frontend engineers. Backend services and the AI models were built by other teams; I integrated them.",
        leadership:
            "Promoted to Frontend Team Lead in January 2025 after becoming the primary frontend contributor. I set the frontend standards, reviewed the team's pull requests, and paired with engineers on the harder pieces: tenant configuration, the builders, and the performance work.",
        challenges: [
            {
                title: "Dozens of clients from one codebase",
                solution:
                    "Designed the multi-tenant foundation: subdomain-based routing into the three experiences, per-client theming, permission roles, and runtime configuration loaded per tenant.",
            },
            {
                title: "Builders that non-developers can use",
                solution:
                    "Integrated and extensively customized SurveyJS and GrapesJS, then added an AI layer so program teams generate a form or a public page from a prompt and let AI screen submissions before judges see them.",
            },
            {
                title: "Dashboards that got slower as clients grew",
                solution:
                    "Cut initial dashboard load time by 40% with Vite build optimization, route-level code splitting, and a state-management refactor.",
            },
            {
                title: "Passing the ISO 27001:2022 audit on the frontend",
                solution:
                    "Moved auth tokens from localStorage to HTTP-only cookies and replaced vulnerable dependencies, iterating with the auditors until the certificate was granted.",
            },
            {
                title: "Charging participants",
                solution:
                    "Integrated Stripe so clients can charge participants for submissions as part of the program setup.",
            },
        ],
        impact: [
            { metric: "Initial dashboard load", value: "40% faster after build, routing, and state changes" },
            { metric: "Client deployments", value: "Dozens of branded platforms from one codebase" },
            { metric: "Security", value: "Frontend remediation accepted for ISO 27001:2022" },
            { metric: "Program authoring", value: "Form and page builders with AI generation and screening" },
        ],
        businessImpact: [
            "Lets Untap onboard a new client as configuration, not a new deployment.",
            "Lets program teams build forms and public pages themselves, with AI drafting the first version.",
            "Opened paid submissions as a revenue option for clients through Stripe.",
            "Contributed the frontend part of the company's ISO 27001:2022 certification.",
        ],
        keyDecisions: [
            {
                decision: "One codebase, routed by subdomain",
                justification:
                    "Admin, customer, and public experiences share components and tenant configuration; three apps would have tripled the work on every feature.",
            },
            {
                decision: "Customize established builders instead of writing our own",
                justification:
                    "SurveyJS and GrapesJS already solve schema editing and drag-and-drop layout; our effort went into tenant theming, program logic, and the AI layer on top.",
            },
            {
                decision: "HTTP-only cookies over localStorage for auth",
                justification:
                    "Tokens in localStorage are readable by any injected script; cookies the browser controls closed the finding raised in the ISO audit.",
            },
            {
                decision: "Measure load before and after",
                justification:
                    "The 40% figure comes from comparing initial dashboard load before and after the Vite, routing, and state changes, not from an estimate.",
            },
        ],
        reflection:
            "Auth tokens lived in localStorage for the first years and the ISO audit forced the move to HTTP-only cookies. I would make that the default on day one, together with a dependency-audit step in CI, so security work is routine instead of a certification sprint.",
        liveUrl: "https://untap.tech",
    },
    {
        slug: "zads",
        title: "Zads",
        subtitle: "Personal education platform",
        description:
            "A personal education project connecting families with teachers. The platform combines teacher discovery, location-aware search, flexible lesson pricing, and parent-to-tutor request workflows.",
        tags: ["Next.js 16", "React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Geolocation"],
        heroImage: "/projects/zads/landing-page.png",
        screenshots: [
            {
                src: "/projects/zads/landing-page.png",
                alt: "Zads education platform landing page",
            },
            {
                src: "/projects/zads/teacher-dashboard.png",
                alt: "Zads teacher dashboard",
            },
            {
                src: "/projects/zads/parent-dashboard.png",
                alt: "Zads parent dashboard in Arabic",
            },
            {
                src: "/projects/zads/parent-requests.png",
                alt: "Zads parent tutoring requests",
            },
            {
                src: "/projects/zads/dependents-list.png",
                alt: "Zads parent student profiles",
            },
        ],
        role: "Founder & Full-Stack Engineer (Personal project)",
        featured: true,
        order: 3,
        problem:
            "Families need a way to find nearby teachers and request tutoring, while teachers need a place to present their subjects and pricing. Zads brings teacher discovery, location-aware search, lesson pricing, and parent requests into one product.",
        architecture:
            "Built the backend with Node.js, Express, Prisma ORM, and PostgreSQL, covered by HTTP integration tests that run in GitHub Actions before each Vercel deploy. The web app started on Nuxt 3 and Vuetify and was migrated to a single Next.js 16 App Router app: 42 routes under /[locale], Arabic/English RTL via next-intl, Auth.js v5, CASL role-based access, Server Components on the public pages with a Server Action for contact requests. The full source, including the archived Nuxt apps, is public at github.com/SayedEsmail/zads.",
        architectureDiagram: `Web app (Next.js 16 App Router on Vercel)
        ├── /[locale]/public · client · teacher · admin
        └── Auth.js v5 · CASL · next-intl (ar/en RTL)
                    │
                    ▼
        Node.js and Express backend
                    │
                    ▼
        Prisma ORM and PostgreSQL`,
        stack: [
            { name: "Node.js and Express", role: "Backend API" },
            { name: "Prisma ORM", role: "Database access" },
            { name: "PostgreSQL", role: "Application database" },
            { name: "Nuxt 3 and Vue 3", role: "Customer web app and admin dashboards" },
            { name: "CASL", role: "Access control" },
            { name: "Firebase", role: "Push notifications" },
            { name: "Next.js and React", role: "Target for the frontend migration in progress" },
        ],
        challenges: [
            {
                title: "Finding nearby teachers",
                solution:
                    "Built geo-proximity search to match learners with nearby teachers using location mapping and distance routing.",
            },
            {
                title: "Flexible lesson pricing",
                solution:
                    "Implemented dynamic pricing so teachers can offer different lesson arrangements.",
            },
            {
                title: "Parent-to-tutor requests",
                solution:
                    "Automated tutor requests from parent sign-ups to connect registration with the tutoring workflow.",
            },
            {
                title: "Frontend migration",
                solution:
                    "Began moving the Nuxt 3 and Vue 3 frontend toward a unified Next.js and React stack.",
            },
        ],
        impact: [
            { metric: "Teacher discovery", value: "Location-aware search for nearby teachers" },
            { metric: "Lesson options", value: "Dynamic pricing and tutoring arrangements" },
            { metric: "Parent workflow", value: "Tutor requests created from parent sign-ups" },
            { metric: "Platform development", value: "Full-stack product with a frontend migration in progress" },
        ],
        businessImpact: [
            "Connects families with nearby teachers through location-aware discovery.",
            "Gives teachers flexible pricing options for their lessons.",
            "Links parent sign-ups to tutor request workflows.",
        ],
        keyDecisions: [
            {
                decision: "Build the backend with Node.js, Express, Prisma, and PostgreSQL",
                justification:
                    "These technologies form the backend and data layer for the multi-app product.",
            },
            {
                decision: "Use location-aware teacher discovery",
                justification:
                    "Families need to find teachers near them, so search uses location mapping and distance routing.",
            },
            {
                decision: "Move toward a unified Next.js and React frontend",
                justification:
                    "The migration is intended to bring the customer app and admin dashboards toward one frontend stack.",
            },
        ],
        liveUrl: "https://zads.app",
    },
    {
        slug: "fleet-billing",
        title: "Fleet Billing (lite)",
        subtitle: "Subscriptions and billing for a school-bus operator",
        description:
            "A portfolio project where operators manage buses and trips and see revenue and seat utilization, and parents pick a plan, pay through Stripe Checkout, and see their subscription become active once the webhook confirms the payment. Arabic and English with full right-to-left support. All data is synthetic and Stripe runs in test mode.",
        tags: ["Next.js 16", "NestJS", "Prisma", "Supabase RLS", "Stripe", "Vitest", "Playwright", "Arabic/English"],
        heroImage: "/projects/fleet-billing/operator-dashboard.png",
        screenshots: [
            {
                src: "/projects/fleet-billing/operator-dashboard.png",
                alt: "Fleet Billing operator dashboard with revenue, seat utilization, and the bus list",
            },
            {
                src: "/projects/fleet-billing/parent-plan.png",
                alt: "Fleet Billing parent plan picker with sibling discount and price preview",
            },
            {
                src: "/projects/fleet-billing/parent-plan-ar.png",
                alt: "Fleet Billing parent plan picker in Arabic with right-to-left layout",
            },
            {
                src: "/projects/fleet-billing/login.png",
                alt: "Fleet Billing login page with Operator and Parent demo buttons",
            },
        ],
        role: "Full-Stack Engineer (Personal project)",
        featured: false,
        order: 4,
        problem:
            "A school-bus operator needs to manage buses and trips, see revenue and seat utilization, and collect subscription payments from parents without handling card data. Parents need to pick a plan for one or more children, pay online, and see when their subscription is active.\n\nThis is a portfolio project: the data is generated by a seed script, Stripe runs in test mode, and the demo signs in with one click as Operator or Parent (test card 4242 4242 4242 4242).",
        architecture:
            "Two apps in a pnpm workspace. The web app is Next.js 16 App Router on Vercel: a proxy handles locale and session refresh, Server Components render the operator stats, tables, and the parent's subscriptions, a Server Action starts checkout, and client components cover the fleet editor, the plan picker with its price preview, and login. The API is NestJS 12 deployed as a Vercel function, with an auth guard that verifies Supabase access tokens against the project's JWKS, a roles guard, class-validator DTOs, and modules for buses, trips, children, subscriptions, stats, plans, and the Stripe webhook. Data lives in Supabase Postgres through Prisma 7, with Row Level Security on subscriptions.\n\nCheckout: the Server Action asks the API to check that the children belong to the caller, price the order, store a PENDING subscription, and create a Checkout Session with an idempotency key; the browser is redirected to Stripe. On checkout.session.completed the webhook verifies the signature against the raw body, checks that the charged amount and currency match, and marks the subscription ACTIVE for one month or one term, storing the event id in the same transaction so retries do nothing.",
        architectureDiagram: `Browser (client components: login · fleet editor · plan picker)
        │
        ▼
Web app (Next.js 16 App Router on Vercel)
        ├── proxy.ts: locale + session refresh
        ├── Server Components: stats · tables · my subscription
        └── Server Action: startCheckout ──► Stripe Checkout
                    │                              │
                    ▼ Bearer JWT                   │ signed event
API (NestJS 12 as a Vercel function)               │
        ├── AuthGuard (JWKS) → RolesGuard           │
        ├── buses · trips · children · stats · plans│
        ├── pricing.ts (pure, unit-tested)          │
        └── POST /stripe/webhook ◄──────────────────┘
                    │
                    ▼
Supabase (Auth + Postgres + RLS via Prisma 7)`,
        stack: [
            { name: "Next.js 16 App Router, React 19", role: "Web app with Server Components, a Server Action, and client components" },
            { name: "next-intl", role: "Arabic and English with right-to-left layout" },
            { name: "NestJS 12", role: "API with global auth and role guards and class-validator DTOs" },
            { name: "Prisma 7 on Supabase Postgres", role: "Data layer with Row Level Security on subscriptions" },
            { name: "Supabase Auth", role: "Sign-in; the API verifies tokens against the project's JWKS" },
            { name: "Stripe Checkout and webhook", role: "Payments in test mode with signed, idempotent activation" },
            { name: "Vitest and Playwright", role: "Pricing, webhook, and HTTP e2e tests plus web smoke tests" },
            { name: "GitHub Actions, Docker, Vercel", role: "CI with migrations and seed on Postgres, docker compose build, and deploys" },
        ],
        challenges: [
            {
                title: "Payments without trusting the browser",
                solution:
                    "Checkout runs through a Server Action, so the amount calculation and Stripe calls never reach the browser. The webhook verifies the signature against the raw body, cross-checks amount and currency, and records each event id so Stripe retries are no-ops.",
            },
            {
                title: "Pricing that is easy to verify",
                solution:
                    "Pure functions in integer cents: monthly €89 and term €320 per child, sibling discounts of 10% for the second child and 15% from the third, and calendar-month period ends with month-end clamping, all covered by Vitest.",
            },
            {
                title: "Keeping parents inside their own data",
                solution:
                    "The parent's subscription query has no WHERE clause for the parent id. It runs as the Postgres authenticated role with the caller's claims set, so the Row Level Security policy does the filtering; other tables are revoked from the anon and authenticated roles.",
            },
            {
                title: "Server or client for each piece",
                solution:
                    "Read-only aggregates and tables are Server Components streamed behind Suspense, with the status filter as a shareable query link. The fleet editor and plan picker are client components that call the API with the user's token and then refresh the server parts.",
            },
        ],
        impact: [
            { metric: "Payments", value: "Stripe Checkout with a signed, idempotent webhook that activates subscriptions" },
            { metric: "Pricing", value: "Monthly and term plans with sibling discounts in unit-tested integer-cent code" },
            { metric: "Data access", value: "Row Level Security enforces parent-scoped subscription reads" },
            { metric: "Delivery", value: "CI runs lint, typecheck, Vitest, Playwright, migrations, seed, and a Docker build" },
        ],
        businessImpact: [
            "Gives an operator a live view of revenue, active and pending subscriptions, and seat utilization per trip.",
            "Lets parents subscribe one or more children and pay online without the product handling card data.",
            "Serves Arabic- and English-speaking families with a right-to-left layout.",
        ],
        keyDecisions: [
            {
                decision: "Prepaid periods instead of Stripe Subscriptions",
                justification:
                    "Checkout runs in payment mode for one month or one term, which keeps all pricing, including sibling discounts, in tested code. Auto-renewal and the Customer Portal are left out on purpose.",
            },
            {
                decision: "Roles from a profiles table, not user metadata",
                justification:
                    "The JWT proves who the caller is; the role is read from the database, new sign-ups always get Parent, and operators exist only through the seed.",
            },
            {
                decision: "API as a serverless function",
                justification:
                    "Free and simple to host, at the cost of a cold start on the first request after idle, which the Suspense skeletons on the operator page cover.",
            },
        ],
        liveUrl: "https://fleet-billing.vercel.app",
        githubUrl: "https://github.com/SayedEsmail/fleet-billing",
    },
];

// ─────────────────────────────────────────────
// Helper functions
// ─────────────────────────────────────────────

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
    return projects
        .filter((p) => p.featured)
        .sort((a, b) => a.order - b.order);
}

export function getAllSlugs(): string[] {
    return projects.map((p) => p.slug);
}
