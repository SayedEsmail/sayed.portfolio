/**
 * Content for the /migration offer page.
 * Prices per Sayed's decision of 2026-11-01: audit USD 250 launch price (normally 490), credited to the migration.
 */
export const CAL_LINK = "https://cal.com/sayedesmail/migration-call";
export const GITHUB_URL = "https://github.com/SayedEsmail";
export const ZADS_REPO_URL = "https://github.com/SayedEsmail/zads";
export const CONTACT_EMAIL = "5atab.work@gmail.com";

export const AUDIT_PRICE = "$250";
export const AUDIT_REGULAR_PRICE = "$490";

export const eolTable = [
    { stack: "Vue 2", eol: "31 Dec 2023", target: "Vue 3" },
    { stack: "Nuxt 2", eol: "30 Jun 2024", target: "Nuxt 4" },
    { stack: "Vuetify 2", eol: "25 Jan 2025", target: "Vuetify 3" },
    { stack: "Nuxt 3", eol: "31 Jul 2026", target: "Nuxt 4" },
] as const;

export const problems = [
    {
        title: "Security findings with no fix",
        text: "New CVEs in Vue 2, Nuxt 2, Vuetify 2 and Nuxt 3 stay open forever unless you buy extended support, and those contracts run into tens of thousands of dollars per year.",
    },
    {
        title: "Compliance",
        text: "SOC 2, ISO 27001, PCI DSS, NIS2, DORA and the EU Cyber Resilience Act treat an unsupported framework in production as an audit finding. Enterprise security questionnaires ask about it directly.",
    },
    {
        title: "Hiring and velocity",
        text: "Senior Vue engineers do not want to work in Options API + Vuex + Webpack 4. Every month on the old stack makes the eventual migration bigger.",
    },
    {
        title: "Ecosystem drift",
        text: "Vite, TypeScript, Pinia, VueUse, Vuetify, Nuxt modules and test tooling no longer target Vue 2 or Nuxt 2. Dependency upgrades start failing one by one.",
    },
] as const;

export const auditDeliverables = [
    { title: "Inventory", text: "Every component, page, store, plugin, mixin and directive, counted and classified by migration effort: trivial, mechanical, or needs redesign. The count sets the migration price." },
    { title: "Dependency matrix", text: "Each package with its Vue 3 / Nuxt 4 status (compatible, drop-in replacement, rewrite, remove) and the known CVEs in your current lockfile." },
    { title: "Risk register", text: "The things that bite on your codebase: filters, event bus, $listeners, Vue.observable, global mixins, Vuex modules, asyncData/fetch, Nuxt modules without a Nuxt 4 equivalent, Vuetify 2 breaking changes, SSR edge cases." },
    { title: "Test coverage reality check", text: "What exists, what runs, what the migration can rely on, and the minimum tests to add before touching code." },
    { title: "Phased migration plan", text: "Ordered steps with shippable checkpoints (tooling, compat build, stores, routing, components by module, UI kit, cleanup), so you are never stuck on a long-lived branch." },
    { title: "Fixed-price quote", text: "A quote and timeline for the migration, valid 30 days. The audit fee is deducted from it." },
] as const;

export const MIGRATION_FROM_PRICE = "$1,500";

export const migrationIncludes = [
    "The migration itself, delivered in reviewable pull requests per module, not one giant drop.",
    "Vue 3 / Nuxt 4 idioms where they pay off (Composition API, script setup, Pinia, typed routes, Nitro), compat shims where they do not.",
    "Build tooling move (Webpack to Vite or Nuxt's built-in), lint and TypeScript config.",
    "Test suite running green: existing tests migrated, plus smoke and e2e tests (Vitest + Playwright) on the critical flows we agree on.",
    "Dependency and CVE cleanup with a before/after lockfile diff for your compliance file.",
    "Deployment to your staging and production (Vercel, Netlify, Node, Docker-based hosts, Cloudflare).",
    "30 days of post-launch support for regressions.",
    "A short write-up you can hand to auditors: what changed, versions before and after, open items.",
] as const;

export const proofPoints = [
    { title: "Done in public", text: "My own product Zads moved from Nuxt 3 to Next.js 16 with the migration documented commit by commit, tests in CI, Arabic/RTL throughout.", link: ZADS_REPO_URL, linkLabel: "Zads on GitHub" },
    { title: "10+ years of Vue in production", text: "Vue 2 and 3, Nuxt 3, Vuetify 2 and 3, Vuex to Pinia, multi-tenant SaaS and real-time dashboards at Schoolz/Routz, Untap and Botme." },
    { title: "ISO 27001:2022, hands on", text: "At Untap I owned the frontend remediation for the certification: vulnerable packages replaced, auth tokens moved to HTTP-only cookies, every audit finding closed until the certificate was granted." },
    { title: "Fixed price, written scope", text: "You know the number before work starts. Changes outside the agreed scope are written change requests with their own price, so the quote does not move." },
] as const;

export const entryPoints = [
    {
        id: "vue2",
        label: "Vue 2 → Vue 3",
        eol: "EOL 31 Dec 2023",
        text: "The Composition API is optional, but Vuex to Pinia, Vue Router 3 to 4, Vuetify 2 to 3 (or another UI kit) and the Vue CLI to Vite move are not. The audit measures how much of your component tree is mechanical versus how much needs a redesign, so the fixed price covers the real work, with @vue/compat as a bridge when it makes the cutover safer.",
        price: "From $1,500, fixed after the audit",
    },
    {
        id: "nuxt2",
        label: "Nuxt 2 → Nuxt 4",
        eol: "EOL 30 Jun 2024",
        text: "Nuxt Bridge only gets you halfway. The real work is asyncData/fetch to useAsyncData/useFetch, Vuex to Pinia, the module ecosystem (auth, i18n, image, PWA, sitemap) and the server side (serverMiddleware to Nitro routes). Since Nuxt 3 is itself end-of-life, I migrate straight to Nuxt 4 so you do not pay for the same project twice.",
        price: "From $1,500, fixed after the audit",
    },
    {
        id: "nuxt3",
        label: "Nuxt 3 → Nuxt 4",
        eol: "EOL 31 Jul 2026",
        text: "The smallest of the three: the new app/ directory structure, data-fetching defaults (shallowRef, dedupe, key changes), compatibilityVersion, module updates and TypeScript project references. The October 2026 security advisories were fixed only in 4.6.x. For most apps the audit is a day and the migration one to two weeks.",
        price: "Also offered as a fixed package on Upwork",
    },
] as const;

export const faq = [
    { q: "How fast can we start?", a: "The audit starts within a week of signing and takes five working days. Migration start depends on scope; typical lead time is one to two weeks after the audit call." },
    { q: "Do you need production access?", a: "No. Read access to the repository and a way to run the app locally (or a staging environment) is enough for the audit. For the migration I deploy to staging; production deploys happen with your team or under your review." },
    { q: "Will the app be down during the migration?", a: "No. Work lands in reviewable PRs behind your normal release process, and the plan is built so the old and new stacks can coexist until cutover where needed." },
    { q: "What if the audit says \"don't migrate\"?", a: "You keep the report, the dependency and CVE matrix, and a clear recommendation (extended support, partial upgrade, or rewrite). The audit fee is still earned; no further obligation." },
    { q: "Why is the audit only $250?", a: "Launch price for the first three audits while I collect public case studies. After that it returns to $490. Either way it is credited to the migration." },
    { q: "What about our backend?", a: "Untouched unless it is a Nuxt server (serverMiddleware / Nitro). I work with any API; backend changes are quoted separately if you want them." },
    { q: "Do you work with our in-house team?", a: "Yes, that is the usual setup. I do the migration, your team reviews and keeps shipping features; or I pair with one of your engineers so the knowledge stays in-house." },
    { q: "How do you charge?", a: "USD via bank transfer, Wise or Payoneer. Audit: paid up front. Migration: 50% to start, 50% on delivery. EU companies get a proper invoice." },
    { q: "Can we start with Vue 2.7 as an intermediate step?", a: "Yes. Vue 2.7 (Composition API + script setup) is a legitimate first step if you need to ship features while migrating. The audit says whether it is worth the detour for your app." },
] as const;
