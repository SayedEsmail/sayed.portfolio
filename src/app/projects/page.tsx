import type { Metadata } from "next";
import { work } from "@/data/work";
import WorkCard from "@/components/WorkCard";
import DownloadLinks from "@/components/DownloadLinks";
import Glow from "@/components/Glow";
import { wrap, bandBase, bandAlt, card, eyebrow, h1Cls, h2Cls, lead } from "@/components/ui";

export const metadata: Metadata = {
    title: "Company & Freelance Projects",
    description: "Explore Sayed Esmail’s company and freelance work: Routz, Untap, AutoTager, Botme, Yanfaa, Wellpal, FundSeer, Kadouscope, Movex, and his own projects Zads and Fleet Billing.",
};

const sections = [
    { id: "company", label: "01 / Company work", title: "Products built with teams.", description: "Frontend engineering, product delivery, and technical leadership across SaaS, logistics, commerce, and automation.", band: bandAlt },
    { id: "freelance", label: "02 / Freelance projects", title: "Focused work. Lasting improvements.", description: "UI redesigns, storefronts, dashboards, and API integrations across independent products and client engagements.", band: bandBase },
] as const;

export default function ProjectsPage() {
    return (
        <>
            <header className={bandBase}>
                <Glow className="-top-48 end-[-160px]" />
                <div className={`${wrap} pt-[72px] pb-[72px] flex flex-col gap-6`}>
                    <p className={`m-0 ${eyebrow}`}>The work behind the experience</p>
                    <h1 className={h1Cls}>Company teams.<br /><span className="text-[#F0801A]">Independent projects.</span></h1>
                    <p className={`${lead} max-w-[650px] text-[17px]`}>A selection of what I’ve built, the problems I worked on, and my contribution to each product.</p>
                    <DownloadLinks />
                    <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4" aria-label="Project categories">
                        {sections.map(section => (
                            <a key={section.id} href={`#${section.id}`} className={`${card} flex items-center justify-between gap-3 px-6 py-5 font-bold text-[#F3F4F6]`}>
                                <span>{section.id === "company" ? "Company work" : "Freelance projects"}</span>
                                <span className="text-[#F0801A] text-sm">{work.filter(item => item.category === section.id).length.toString().padStart(2, "0")}</span>
                            </a>
                        ))}
                    </nav>
                </div>
            </header>
            {sections.map(section => (
                <section key={section.id} id={section.id} className={`${section.band} scroll-mt-24`} aria-labelledby={`${section.id}-heading`}>
                    <div className={`${wrap} pt-[72px] pb-[72px] flex flex-col gap-8`}>
                        <div className="flex flex-col gap-3 max-w-[760px]">
                            <p className={`m-0 ${eyebrow}`}>{section.label}</p>
                            <h2 id={`${section.id}-heading`} className={h2Cls}>{section.title}</h2>
                            <p className={lead}>{section.description}</p>
                        </div>
                        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-5 items-stretch">
                            {work.filter(item => item.category === section.id).map(item => <WorkCard key={item.slug} item={item} />)}
                        </div>
                    </div>
                </section>
            ))}
            <aside className={bandAlt} aria-labelledby="contact-heading">
                <div className={`${wrap} pt-[72px] pb-[72px] flex flex-col gap-3`}>
                    <h2 id="contact-heading" className={h2Cls}>Have a product in mind?</h2>
                    <p className={lead}>Let’s talk about the interface, the users, and what needs to work better.</p>
                    <a href="mailto:5atab.work@gmail.com" className="self-start font-bold text-[#F0801A]">5atab.work@gmail.com ↗</a>
                </div>
            </aside>
        </>
    );
}
