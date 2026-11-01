import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import ContactLinks from "@/components/ContactLinks";
import {
    AUDIT_PRICE,
    AUDIT_REGULAR_PRICE,
    CAL_LINK,
    CONTACT_EMAIL,
    GITHUB_URL,
    ZADS_REPO_URL,
    auditDeliverables,
    entryPoints,
    eolTable,
    faq,
    migrationIncludes,
    problems,
    proofPoints,
    MIGRATION_FROM_PRICE,
} from "@/data/migration";

export const metadata: Metadata = {
    title: "Vue 2 → 3 and Nuxt 2/3 → 4 Migration Service",
    description: `Fixed-price Vue and Nuxt migrations with a ${AUDIT_PRICE} readiness audit credited to the project. Vue 2, Nuxt 2 and Nuxt 3 are end-of-life; move before the compliance audit flags it.`,
    keywords: ["Vue 2 to Vue 3 migration", "Nuxt 2 to Nuxt 3 migration", "Nuxt 3 to Nuxt 4 upgrade", "Vuetify 2 to 3", "Vue migration consultant", "Nuxt end of life"],
    openGraph: {
        title: "Vue & Nuxt Migration Service | Sayed Esmail",
        description: `Fixed-price Vue and Nuxt migrations, starting with a ${AUDIT_PRICE} readiness audit credited to the migration.`,
        type: "website",
    },
};

const primaryButton = "inline-flex items-center justify-center gap-2 font-mono text-xs tracking-tight font-medium text-[#0a0a0a] bg-accent hover:bg-accent-hover px-6 py-3.5 rounded-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 select-none shadow-[0_0_20px_rgba(0,212,170,0.15)] hover:shadow-[0_0_25px_rgba(0,212,170,0.3)] text-center";
const secondaryButton = "inline-flex items-center justify-center gap-2 font-mono text-xs tracking-tight font-medium text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-700 bg-neutral-950/20 px-6 py-3.5 rounded-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center";

function BookCallButton({ label = "Book a free 20-min call" }: { label?: string }) {
    return (
        <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className={primaryButton}>
            {label}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </a>
    );
}

function GitHubButton({ href, label }: { href: string; label: string }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={secondaryButton}>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
            </svg>
            {label}
        </a>
    );
}

export default function MigrationPage() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-24 md:gap-32">
            {/* Hero */}
            <section aria-labelledby="migration-title" className="max-w-3xl">
                <FadeIn delay={100}>
                    <span className="font-mono text-xs text-accent tracking-widest uppercase font-semibold mb-3 block">
                        Vue 2 · Nuxt 2 · Nuxt 3 → audited, migrated, supported
                    </span>
                </FadeIn>
                <FadeIn delay={200}>
                    <h1 id="migration-title" className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
                        Migrate your Vue or Nuxt app before the audit flags it.
                    </h1>
                </FadeIn>
                <FadeIn delay={300}>
                    <p className="text-base sm:text-lg font-mono tracking-tight text-neutral-300 leading-relaxed mb-8">
                        Vue 2 and Nuxt 2 have been end-of-life for years. Nuxt 3 joined them on 31 July 2026. I move production apps to Vue 3 and Nuxt 4 on a fixed price, starting with a {AUDIT_PRICE} readiness audit (launch price) that is credited to the migration.
                    </p>
                </FadeIn>
                <FadeIn delay={400}>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                        <BookCallButton />
                        <GitHubButton href={ZADS_REPO_URL} label="See the Zads migration on GitHub" />
                    </div>
                </FadeIn>
            </section>

            {/* EOL table */}
            <section aria-labelledby="eol-title">
                <FadeIn>
                    <SectionHeading id="eol-title" title="The clock already ran out" subtitle="Official end-of-life dates. After these dates no security patches are published for the version you are running." />
                </FadeIn>
                <FadeIn delay={100}>
                    <div className="overflow-x-auto rounded-xl border border-neutral-900 bg-neutral-950/30">
                        <table className="w-full text-left font-mono text-sm">
                            <thead className="text-[11px] uppercase tracking-wider text-neutral-500 border-b border-neutral-900">
                                <tr>
                                    <th scope="col" className="px-5 py-3 font-semibold">Stack</th>
                                    <th scope="col" className="px-5 py-3 font-semibold">End of life</th>
                                    <th scope="col" className="px-5 py-3 font-semibold">Supported target</th>
                                </tr>
                            </thead>
                            <tbody>
                                {eolTable.map((row) => (
                                    <tr key={row.stack} className="border-b border-neutral-900/60 last:border-0">
                                        <td className="px-5 py-3 text-white">{row.stack}</td>
                                        <td className="px-5 py-3 text-neutral-300">{row.eol}</td>
                                        <td className="px-5 py-3 text-accent">{row.target}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </FadeIn>
            </section>

            {/* Problem */}
            <section aria-labelledby="problem-title">
                <FadeIn>
                    <SectionHeading id="problem-title" title="Your app still works. That is the problem." subtitle="Nobody budgets for the upgrade until one of these happens." />
                </FadeIn>
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {problems.map((item, index) => (
                        <FadeIn key={item.title} delay={100 * (index + 1)}>
                            <div className="p-6 rounded-xl border border-neutral-900 bg-neutral-950/30 flex flex-col gap-3 hover:border-accent/30 transition-colors duration-300 h-full">
                                <h3 className="text-base font-bold text-white font-mono tracking-tight">{item.title}</h3>
                                <p className="text-neutral-400 text-sm font-mono leading-relaxed">{item.text}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* Two phases */}
            <section aria-labelledby="phases-title">
                <FadeIn>
                    <SectionHeading id="phases-title" title="How it works: two phases, no surprises" subtitle="A paid audit that tells you the real scope, then a fixed-price migration with the audit fee deducted." />
                </FadeIn>

                <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
                    <FadeIn delay={100}>
                        <article className="about-panel h-full flex flex-col">
                            <p className="eyebrow">Phase 1</p>
                            <h2>Migration Readiness Audit</h2>
                            <p className="!mb-2">
                                <span className="text-3xl font-bold text-white tracking-tight">{AUDIT_PRICE}</span>
                                <span className="text-neutral-500 font-mono text-xs ml-3">launch price · normally {AUDIT_REGULAR_PRICE} · credited to the migration</span>
                            </p>
                            <p>Five working days from repo access. A written report and a one-hour walkthrough call. If the honest answer is &ldquo;don&apos;t migrate yet&rdquo;, the report says so.</p>
                            <ul className="contribution-list">
                                {auditDeliverables.map((item) => (
                                    <li key={item.title}><strong className="text-white">{item.title}.</strong> {item.text}</li>
                                ))}
                            </ul>
                            <div className="mt-auto pt-6">
                                <BookCallButton label="Start with the audit" />
                            </div>
                        </article>
                    </FadeIn>

                    <FadeIn delay={200}>
                        <article className="about-panel h-full flex flex-col">
                            <p className="eyebrow">Phase 2</p>
                            <h2>Fixed-price Migration</h2>
                            <p className="!mb-2">
                                <span className="text-3xl font-bold text-white tracking-tight">from {MIGRATION_FROM_PRICE}</span>
                                <span className="text-neutral-500 font-mono text-xs ml-3">fixed price, set by the audit · audit fee deducted</span>
                            </p>
                            <p>The final price depends on the component count, the UI kit, SSR and test coverage, and it does not move once agreed. Payment 50% to start, 50% on delivery. Anything outside the written scope is a change request with its own price.</p>
                            <h4 className="text-[11px] uppercase tracking-[.1em] text-neutral-400 mb-3">Included</h4>
                            <ul className="contribution-list">
                                {migrationIncludes.map((text) => <li key={text}>{text}</li>)}
                            </ul>
                        </article>
                    </FadeIn>
                </div>
            </section>

            {/* Entry points */}
            <section aria-labelledby="entry-title">
                <FadeIn>
                    <SectionHeading id="entry-title" title="Pick your starting point" subtitle="Three migrations, one process. The audit is the same; the work differs." />
                </FadeIn>
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {entryPoints.map((entry, index) => (
                        <FadeIn key={entry.id} delay={100 * (index + 1)}>
                            <article id={entry.id} className="p-6 rounded-xl border border-neutral-900 bg-neutral-950/30 flex flex-col gap-3 hover:border-accent/30 transition-colors duration-300 h-full scroll-mt-28">
                                <span className="font-mono text-[10px] text-accent uppercase tracking-wider font-semibold">{entry.eol}</span>
                                <h3 className="text-lg font-bold text-white font-mono tracking-tight">{entry.label}</h3>
                                <p className="text-neutral-400 text-sm font-mono leading-relaxed flex-grow">{entry.text}</p>
                                <p className="text-xs font-mono text-neutral-300 border-t border-neutral-900/60 pt-3">{entry.price}</p>
                            </article>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* Proof */}
            <section aria-labelledby="proof-title">
                <FadeIn>
                    <SectionHeading id="proof-title" title="Why me" subtitle="Public code, production Vue since 2016, and a compliance audit I actually sat through." />
                </FadeIn>
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {proofPoints.map((item, index) => (
                        <FadeIn key={item.title} delay={100 * (index + 1)}>
                            <div className="p-6 rounded-xl border border-neutral-900 bg-neutral-950/30 flex flex-col gap-3 hover:border-accent/30 transition-colors duration-300 h-full">
                                <h3 className="text-base font-bold text-white font-mono tracking-tight">{item.title}</h3>
                                <p className="text-neutral-400 text-sm font-mono leading-relaxed flex-grow">{item.text}</p>
                                {"link" in item && (
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-link">
                                        {item.linkLabel} <span aria-hidden="true">↗</span>
                                    </a>
                                )}
                            </div>
                        </FadeIn>
                    ))}
                </div>
                <FadeIn delay={300}>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <GitHubButton href={GITHUB_URL} label="github.com/SayedEsmail" />
                        <a href="https://www.linkedin.com/in/sayed-esmail-khattab" target="_blank" rel="noopener noreferrer" className={secondaryButton}>LinkedIn profile</a>
                    </div>
                </FadeIn>
            </section>

            {/* FAQ */}
            <section aria-labelledby="faq-title">
                <FadeIn>
                    <SectionHeading id="faq-title" title="Questions I get asked" />
                </FadeIn>
                <div className="flex flex-col divide-y divide-neutral-900 border-y border-neutral-900">
                    {faq.map((item) => (
                        <details key={item.q} className="group py-4">
                            <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-mono text-sm text-white hover:text-accent transition-colors">
                                {item.q}
                                <span aria-hidden="true" className="text-neutral-500 group-open:rotate-45 transition-transform text-lg leading-none">+</span>
                            </summary>
                            <p className="mt-3 text-neutral-400 text-sm font-mono leading-relaxed max-w-3xl">{item.a}</p>
                        </details>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section aria-labelledby="cta-title" className="border-t border-neutral-900 pt-16 pb-8">
                <FadeIn className="grid md:grid-cols-3 gap-10 items-center">
                    <div className="md:col-span-2">
                        <h2 id="cta-title" className="text-2xl font-bold tracking-tight text-white mb-3">
                            Find out what your migration really costs: in five days, for {AUDIT_PRICE}.
                        </h2>
                        <p className="text-neutral-300 text-sm sm:text-base font-mono leading-relaxed max-w-xl">
                            Book a free 20-minute call. I will look at your public app before the call and tell you what I already see.
                        </p>
                    </div>
                    <div className="flex flex-col items-stretch md:items-end gap-4">
                        <BookCallButton label="Book the call" />
                        <a href={`mailto:${CONTACT_EMAIL}`} className="font-mono text-xs font-semibold text-center text-accent border border-accent/20 hover:border-accent bg-accent/5 px-6 py-4 rounded-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,170,0.1)]">
                            {CONTACT_EMAIL}
                        </a>
                        <ContactLinks className="justify-center md:justify-end" iconClassName="w-11 h-11" />
                    </div>
                </FadeIn>
            </section>
        </div>
    );
}
