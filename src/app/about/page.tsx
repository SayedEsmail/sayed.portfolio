import type { Metadata } from "next";
import Link from "next/link";
import { work } from "@/data/work";
import DownloadLinks from "@/components/DownloadLinks";
import ContactLinks from "@/components/ContactLinks";
import Glow from "@/components/Glow";
import { wrap, bandBase, bandAlt, card, panel, eyebrow, h1Cls, h2Cls, lead } from "@/components/ui";

export const metadata: Metadata = { title: "About & Experience", description: "Sayed Esmail, Senior Frontend Engineer based in Cairo. More than ten years building Vue, React, SaaS, and commerce experiences." };

export default function AboutPage() {
    return <>
        <header className={bandBase}>
            <Glow className="-top-48 end-[-160px]" />
            <div className={`${wrap} pt-[72px] pb-[72px] flex flex-col gap-6`}>
                <p className={`m-0 ${eyebrow}`}>Cairo, Egypt / Working since 2014</p>
                <h1 className={h1Cls}>Engineering interfaces.<br /><span className="text-[#F0801A]">Understanding products.</span></h1>
                <p className={`${lead} max-w-[650px] text-[17px]`}>I’m Sayed Esmail, a Senior Frontend / Full-Stack Engineer in Cairo. I started in 2014 building WordPress and Shopify sites for agencies in Egypt, Saudi Arabia, and Qatar, moved into product work at Botme and AutoTager, and have built and led the frontends of SaaS platforms since 2022: Untap, where I led the frontend team, and now Routz at Schoolz. I studied philosophy before I wrote code, which is probably why I care about naming things well.</p>
                <DownloadLinks />
            </div>
        </header>
        <section id="experience" className={`${bandAlt} scroll-mt-24`} aria-labelledby="experience-heading">
            <div className={`${wrap} pt-[72px] pb-[72px] flex flex-col gap-8`}>
                <div className="flex flex-col gap-3 max-w-[760px]">
                    <p className={`m-0 ${eyebrow}`}>Career</p>
                    <h2 id="experience-heading" className={h2Cls}>Professional experience</h2>
                    <p className={lead}>Company roles, from web and commerce development to SaaS architecture and team leadership.</p>
                </div>
                <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-5 items-stretch">
                    {work.filter(item => item.category === "company").map(item => <article key={item.slug} className={`${card} p-6 flex flex-col gap-3`}>
                        <p className={`m-0 ${eyebrow}`}>{item.period}</p>
                        <h3 className="m-0 text-xl font-extrabold text-[#F3F4F6]">{item.employer}</h3>
                        <p className="m-0 text-sm text-[#9AA3B2]">{item.role}</p>
                        <ul className="contribution-list m-0">{item.contributions.map(text => <li key={text}>{text}</li>)}</ul>
                        <Link className="text-link mt-auto self-start !text-sm" href={`/projects#${item.slug}`}>View work →</Link>
                    </article>)}
                </div>
            </div>
        </section>
        <section className={bandBase} aria-label="Independent work and background">
            <div className={`${wrap} pt-[72px] pb-[72px] grid grid-cols-1 min-[900px]:grid-cols-2 gap-5`}>
                <article className={`${panel} p-6 flex flex-col gap-3`}>
                    <p className={`m-0 ${eyebrow}`}>Alongside company work</p>
                    <h2 className="m-0 text-2xl font-extrabold text-[#F3F4F6]">Independent projects</h2>
                    <p className="m-0 text-sm leading-[1.8] text-[#C9D0DC]">I’m the founder and full-stack engineer behind Zads, a personal education product started in 2024. Explore Zads and Fleet Billing, a school-bus subscriptions and billing project, alongside Yanfaa, Wellpal, FundSeer, Kadouscope, and Movex in my freelance portfolio.</p>
                    <Link className="text-link mt-auto self-start !text-sm" href="/projects#freelance">Explore freelance work →</Link>
                </article>
                <article className={`${panel} p-6 flex flex-col gap-3`}>
                    <p className={`m-0 ${eyebrow}`}>Background</p>
                    <h2 className="m-0 text-2xl font-extrabold text-[#F3F4F6]">Education & languages</h2>
                    <p className="m-0 text-sm leading-[1.8] text-[#C9D0DC]">Bachelor of Arts, Philosophy<br />Damanhour University · 2009–2013</p>
                    <p className="m-0 text-sm leading-[1.8] text-[#C9D0DC]">Arabic — Native<br />English — Full professional proficiency</p>
                </article>
            </div>
        </section>
        <section className={bandAlt} aria-labelledby="contact-heading">
            <div className={`${wrap} pt-[72px] pb-[72px] flex flex-col gap-3`}>
                <h2 id="contact-heading" className={h2Cls}>Let’s work together.</h2>
                <p className={lead}>Senior or lead frontend roles, product frontends that need an owner, and Arabic and English interfaces done right.</p>
                <a className="self-start font-bold text-[#F0801A]" href="mailto:5atab.work@gmail.com">5atab.work@gmail.com ↗</a>
                <ContactLinks className="mt-4" />
            </div>
        </section>
    </>;
}
