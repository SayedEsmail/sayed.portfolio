"use client";

import Image from "next/image";
import Link from "next/link";
import { WhatsAppIcon } from "./Icons";
import { useLang } from "./LangProvider";
import { ui, workAr, articlesAr } from "@/data/i18n";
import { work, type WorkItem } from "@/data/work";
import { articles } from "@/data/articles";

const WA = "https://wa.me/201066293366";
const DEVTO = "https://dev.to/sayedesmail/what-migrating-a-vuetify-2-dashboard-to-vue-3-actually-took-2nih";

// Technologies named in the existing work and project data.
const skills = [
    "Vue 3", "Nuxt 3", "Vuetify", "Pinia", "React", "Next.js 16", "TypeScript", "Angular", "Node.js", "Express", "NestJS",
    "Prisma", "PostgreSQL", "Stripe", "SurveyJS", "GrapesJS", "CASL", "next-intl", "Arabic/English RTL", "Vitest", "Playwright",
    "GitHub Actions", "Docker", "WordPress", "Shopify", "Sylius",
];

const card = "pf-card bg-[#12151C] border border-[#232836] rounded-[20px]";
const wrap = "relative max-w-[1280px] mx-auto px-4 min-[900px]:px-20";
const eyebrow = "font-mono text-[11px] font-semibold tracking-[.14em] uppercase text-[#F0801A]";
const tagCls = "text-[11px] text-[#C9D0DC] border border-[#2A3040] bg-[#0F1218] px-2.5 py-1 rounded-full";

const svg = { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;

const focusIcons = [
    <svg key="a" {...svg} stroke="#F0801A"><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></svg>,
    <svg key="b" {...svg} stroke="#17A36A"><circle cx="12" cy="12" r="3" /><path d="M5 12a7 7 0 0 1 7-7M19 12a7 7 0 0 1-7 7M2 12a10 10 0 0 1 10-10M22 12a10 10 0 0 1-10 10" /></svg>,
    <svg key="c" {...svg} stroke="#2F7CF6"><path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z" /></svg>,
    <svg key="d" {...svg} stroke="#7C4DFF"><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /></svg>,
];

const focusMotifs = [
    <path key="a" d="M10 90h30V60h30V35h30V10M10 70h20V50h20V30h20" />,
    <g key="b"><circle cx="75" cy="45" r="34" /><circle cx="75" cy="45" r="20" /><circle cx="75" cy="45" r="6" /></g>,
    <path key="c" d="M10 80c20-50 40 20 60-30s30-30 40-30M10 95c20-50 40 20 60-30s30-30 40-30" />,
    <g key="d"><path d="m60 10 40 22-40 22-40-22 40-22Z" /><path d="m20 52 40 22 40-22M20 72l40 22 40-22" /></g>,
];

const serviceMeta = [
    { href: "https://sayed-hub.vercel.app/store-check", color: "#2F7CF6", external: true, icon: <svg {...svg} stroke="#2F7CF6"><path d="M3 9h18l-1.5 11h-15L3 9Z" /><path d="M8 9V6a4 4 0 0 1 8 0v3" /><path d="m9 14 2 2 4-4" /></svg> },
    { href: "https://maqru.vercel.app", color: "#17A36A", external: true, icon: <svg {...svg} stroke="#17A36A"><circle cx="12" cy="12" r="3" /><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" /></svg> },
    { href: "/migration", color: "#F0801A", external: false, icon: <svg {...svg} stroke="#F0801A"><path d="M21 12a9 9 0 0 1-15.5 6.2M3 12a9 9 0 0 1 15.5-6.2" /><path d="M21 4v5h-5M3 20v-5h5" /></svg> },
    { href: "https://namu-nursery.vercel.app", color: "#7C4DFF", external: true, icon: <svg {...svg} stroke="#7C4DFF"><path d="M12 22V12M12 12c-4 0-7-3-7-7 4 0 7 3 7 7Zm0 0c4 0 7-3 7-7-4 0-7 3-7 7Z" /></svg> },
];

type View = WorkItem & { contributions: string[] };

export default function Home() {
    const { lang } = useLang();
    const isAr = lang === "ar";
    const t = ui[lang];

    const localize = (item: WorkItem): View => (isAr ? { ...item, ...workAr[item.slug] } as View : item);
    const company = work.filter((w) => w.category === "company").map(localize);
    const freelance = work.filter((w) => w.category === "freelance").map(localize);
    const featuredCompany = company.filter((w) => w.featured);
    const featuredFreelance = freelance.filter((w) => w.featured);
    const stats = [
        { n: "10+", t: t.stats.years },
        { n: String(company.length), t: t.stats.companies },
        { n: String(freelance.length), t: t.stats.freelance },
        { n: String(articles.length), t: t.stats.articles },
    ];

    const renderGrid = (items: View[], label: string) => (
        <div className="grid grid-cols-1 min-[620px]:grid-cols-2 min-[1024px]:grid-cols-3 gap-5 items-stretch">
            {items.map((item, idx) => {
                const wide = idx === 0;
                return (
                <article key={item.slug} id={item.slug} className={`${card} group overflow-hidden flex flex-col scroll-mt-4 ${wide ? "min-[1024px]:col-span-2" : ""}`}>
                    <div className={`relative overflow-hidden rounded-t-[20px] bg-[#0F1218] aspect-[16/10] ${wide ? "min-[1024px]:aspect-[2.6/1]" : ""}`}>
                        {item.image && (
                            <Image
                                src={item.image.src}
                                alt={item.image.alt}
                                fill
                                unoptimized={item.image.src.endsWith(".svg")}
                                sizes={wide ? "(max-width: 619px) 100vw, (max-width: 1023px) 50vw, 66vw" : "(max-width: 619px) 100vw, (max-width: 1023px) 50vw, 33vw"}
                                className="object-cover object-top motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.03]"
                            />
                        )}
                        <div aria-hidden="true" className="absolute inset-0 opacity-0 motion-safe:transition-opacity motion-safe:duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(circle at 50% 45%, rgba(240,128,26,.22), transparent 65%)" }} />
                        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#12151C] to-transparent" />
                    </div>
                    <div className="p-6 flex flex-col gap-3 flex-1">
                        <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 text-[11px] text-[#9AA3B2]">
                            <span className="text-[#F0801A] font-bold uppercase tracking-[.08em]">{label}</span>
                            {item.period && <span dir="ltr">{item.period}</span>}
                        </div>
                        <h3 className="m-0 text-2xl font-extrabold">{item.title}</h3>
                        <p className="m-0 text-xs text-[#9AA3B2] leading-[1.7]">{item.role}{item.category === "company" && item.employer !== item.title ? ` · ${item.employer}` : ""}</p>
                        <p className="m-0 text-sm leading-[1.8] text-[#C9D0DC]">{item.description}</p>
                        <div className="flex flex-wrap gap-2 pt-2" dir="ltr">
                            {item.tags.map((tag) => <span key={tag} className={tagCls}>{tag}</span>)}
                        </div>
                        {(item.caseStudy || item.liveUrl) ? (
                            <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 border-t border-[#232836] pt-4 text-sm font-bold text-[#F0801A]">
                                {item.caseStudy && <Link href={item.caseStudy}>{t.work.caseStudy} <span aria-hidden="true">{isAr ? "←" : "→"}</span></Link>}
                                {item.liveUrl && <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">{t.work.visit} <span aria-hidden="true">↗</span></a>}
                            </div>
                        ) : <div className="mt-auto" />}
                    </div>
                </article>
                );
            })}
        </div>
    );

    const articleCards = articles.map((a) => {
        const ar = articlesAr[a.slug];
        const mins = a.readTime.match(/\d+/)?.[0] ?? "";
        return {
            slug: a.slug,
            title: isAr && ar ? ar.title : a.title,
            excerpt: isAr && ar ? ar.excerpt : a.excerpt,
            date: isAr && ar ? ar.date : a.date,
            readTime: isAr ? `${mins} دقائق قراءة` : a.readTime,
        };
    });

    return (
        <div dir={isAr ? "rtl" : "ltr"} lang={lang} className={`${isAr ? "ar" : ""} relative overflow-hidden bg-[#0B0D12] text-[#F3F4F6]`}>
            <div aria-hidden="true" className="absolute -top-[120px] -left-20 w-[520px] h-[520px] rounded-full opacity-35" style={{ background: "radial-gradient(circle,#F0801A 0%,transparent 65%)", animation: "glow 6s infinite" }} />
            <div aria-hidden="true" className="absolute top-[420px] -right-40 w-[480px] h-[480px] rounded-full opacity-25" style={{ background: "radial-gradient(circle,#7C4DFF 0%,transparent 65%)" }} />

            {/* Hero */}
            <section className={`${wrap} pt-12 min-[900px]:pt-[72px] pb-14 grid grid-cols-1 min-[900px]:grid-cols-[1.1fr_1fr] gap-10 min-[900px]:gap-14 items-center`}>
                <div className="rise flex flex-col gap-5 min-w-0">
                    <span className="self-start bg-[#1B2030] border border-[#2A3040] text-[#F0801A] px-3.5 py-1.5 rounded-full text-[13px] font-bold">{t.hero.pill}</span>
                    <p className={`m-0 ${eyebrow}`}>{t.hero.kicker}</p>
                    <h1 className="m-0 text-[38px] sm:text-5xl min-[900px]:text-[56px] xl:text-[64px] leading-[1.2] font-extrabold">
                        {t.hero.h1[0]}<span className="text-[#F0801A]">{t.hero.h1[1]}</span>{t.hero.h1[2]}
                        <span className="inline-block border-b-[6px] border-[#F0801A] leading-none">{t.hero.h1[3]}</span>
                    </h1>
                    <p className="m-0 text-base sm:text-[17px] leading-[1.9] text-[#9AA3B2] max-w-[560px]">{t.hero.sub}</p>
                    <div className="flex flex-wrap gap-3.5 mt-2">
                        <a href="#work" className="bg-[#F0801A] text-white px-7 py-3.5 rounded-xl font-bold">{t.hero.seeWork}</a>
                        <a href="/Sayed_Esmail_Resume.pdf" download className="flex items-center gap-2 border-[1.5px] border-[#2A3040] px-6 py-[13px] rounded-xl font-bold">{t.about.cv}</a>
                        <a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border-[1.5px] border-[#2A3040] px-6 py-[13px] rounded-xl font-bold">
                            <WhatsAppIcon size={18} />{t.hero.talk}
                        </a>
                    </div>
                </div>

                <div className="hero-art rise">
                    <div aria-hidden="true" className="hero-circle" />
                    <div className="hero-photo">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/me.jpg" alt={t.hero.photoAlt} className="w-full h-full object-cover" style={{ objectPosition: "50% 12%", filter: "none" }} />
                    </div>
                    <div className="absolute top-5 right-0 bg-[#F0801A] text-white px-[18px] py-3 rounded-[14px] font-extrabold shadow-[0_12px_30px_rgba(240,128,26,.4)]" style={{ animation: "floaty 4s infinite" }}>Vue 3 ✓</div>
                    <div className="hero-badge-b bg-[#1B2030] border border-[#2A3040] px-[18px] py-3 rounded-[14px] font-extrabold" style={{ animation: "floaty 5s infinite .8s" }}>React ⚛</div>
                    <div aria-hidden="true" className="hero-code bg-[#12151C]/90 border border-[#232836] rounded-2xl px-4 py-3.5 shadow-[0_20px_50px_rgba(0,0,0,.5)]" style={{ animation: "floaty 6s infinite .3s" }}>
                        <div dir="ltr" className="text-left font-mono text-[13px] leading-[2] text-[#C9D0DC]">
                            <div><span className="text-[#7C4DFF]">const</span> sayed = {"{"}</div>
                            <div className="pl-5">role: <span className="text-[#17A36A]">&quot;Senior Frontend Engineer&quot;</span>,</div>
                            <div className="pl-5">stack: [<span className="text-[#17A36A]">&quot;Vue&quot;</span>, <span className="text-[#17A36A]">&quot;React&quot;</span>, <span className="text-[#17A36A]">&quot;Next&quot;</span>],</div>
                            <div className="pl-5">experience: <span className="text-[#17A36A]">&quot;10+ years&quot;</span>,</div>
                            <div className="pl-5">available: <span className="text-[#F0801A]">true</span><span className="inline-block w-2 h-4 bg-[#F0801A] ml-1 align-middle" style={{ animation: "blink 1s infinite" }} /></div>
                            <div>{"}"}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Marquee */}
            <section aria-label={t.marqueeLabel} className="relative border-y border-[#232836] bg-[#0F1218] overflow-hidden py-[22px]">
                <div className="marquee-track">
                    {[...skills, ...skills].map((s, i) => (
                        <span key={i} aria-hidden={i >= skills.length ? true : undefined} className="px-[22px] py-2.5 border border-[#232836] rounded-full font-bold text-[#C9D0DC] whitespace-nowrap">{s}</span>
                    ))}
                </div>
            </section>

            {/* Stats */}
            <section className={`${wrap} mt-14`}>
                <div className="grid grid-cols-2 min-[900px]:grid-cols-4 gap-px bg-[#232836] border border-[#232836] rounded-[20px] overflow-hidden">
                    {stats.map((s) => (
                        <div key={s.t} className="bg-[#12151C] text-center px-3 py-7">
                            <div dir="ltr" className="text-[34px] sm:text-[44px] font-extrabold text-[#F0801A]">{s.n}</div>
                            <div className="text-sm text-[#9AA3B2] mt-1">{s.t}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Work */}
            <section id="work" aria-labelledby="work-title" className={`${wrap} pt-[72px] flex flex-col gap-12 scroll-mt-4`}>
                <h2 id="work-title" className="m-0 text-3xl sm:text-4xl font-extrabold">{t.work.title}</h2>

                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2 max-w-[720px]">
                        <p className={`m-0 ${eyebrow}`}>{t.work.companyEyebrow}</p>
                        <h3 className="m-0 text-2xl font-extrabold">{t.work.companyTitle}</h3>
                        <p className="m-0 leading-[1.9] text-[#9AA3B2]">{t.work.companyText}</p>
                    </div>
                    {renderGrid(featuredCompany, t.work.companyTag)}
                    <Link href="/projects#company" className="self-start font-bold text-[#F0801A]">{t.work.companyLink}</Link>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2 max-w-[720px]">
                        <p className={`m-0 ${eyebrow}`}>{t.work.freelanceEyebrow}</p>
                        <h3 className="m-0 text-2xl font-extrabold">{t.work.freelanceTitle}</h3>
                        <p className="m-0 leading-[1.9] text-[#9AA3B2]">{t.work.freelanceText}</p>
                    </div>
                    {renderGrid(featuredFreelance, t.work.freelanceTag)}
                    <Link href="/projects#freelance" className="self-start font-bold text-[#F0801A]">{t.work.freelanceLink}</Link>
                </div>

                <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-[#232836] pt-6 font-bold">
                    <Link href="/projects" className="text-[#F0801A]">{t.work.all}</Link>
                    <Link href="/portfolio" className="text-[#F0801A]">{t.work.preview}</Link>
                </div>
            </section>

            {/* Experience */}
            <section id="experience" aria-labelledby="experience-title" className={`${wrap} pt-[72px] flex flex-col gap-8 scroll-mt-4`}>
                <div className="flex flex-col gap-2 max-w-[720px]">
                    <p className={`m-0 ${eyebrow}`}>{t.experience.eyebrow}</p>
                    <h2 id="experience-title" className="m-0 text-3xl sm:text-4xl font-extrabold">{t.experience.title}</h2>
                    <p className="m-0 leading-[1.9] text-[#9AA3B2]">{t.experience.text}</p>
                </div>
                <ol className="m-0 p-0 list-none border-s-2 border-[#232836] ms-2 flex flex-col gap-6">
                    {company.map((item) => (
                        <li key={item.slug} className="relative ps-7 min-[900px]:ps-9">
                            <span aria-hidden="true" className="absolute top-7 -start-[9px] w-4 h-4 rounded-full bg-[#F0801A] border-4 border-[#0B0D12]" />
                            <div className={`${card} p-6 flex flex-col gap-3 max-w-[900px]`}>
                                {item.period && <p className={`m-0 ${eyebrow}`} dir="ltr" style={isAr ? { textAlign: "right" } : undefined}>{item.period}</p>}
                                <h3 className="m-0 text-xl font-extrabold">{item.employer}</h3>
                                <p className="m-0 text-sm text-[#9AA3B2]">{item.role}</p>
                                <ul className="m-0 ps-5 list-disc marker:text-[#F0801A] text-sm leading-[1.9] text-[#C9D0DC] flex flex-col gap-1.5">
                                    {item.contributions.map((c) => <li key={c}>{c}</li>)}
                                </ul>
                                <a href={`#${item.slug}`} className="self-start text-sm font-bold text-[#F0801A]">{t.experience.view}</a>
                            </div>
                        </li>
                    ))}
                </ol>
            </section>

            {/* Focus */}
            <section id="focus" aria-labelledby="focus-title" className={`${wrap} pt-[72px] flex flex-col gap-7 scroll-mt-4`}>
                <div className="flex flex-col gap-3 max-w-[680px]">
                    <h2 id="focus-title" className="m-0 text-3xl sm:text-4xl font-extrabold">{t.focus.title}</h2>
                    <p className="m-0 leading-[1.9] text-[#9AA3B2]">{t.focus.subtitle}</p>
                </div>
                <div className="grid grid-cols-1 min-[620px]:grid-cols-2 gap-5">
                    {t.focus.cards.map((c, i) => (
                        <div key={c.title} className={`${card} relative overflow-hidden p-7 flex flex-col gap-3`}>
                            <svg aria-hidden="true" viewBox="0 0 120 100" fill="none" stroke="#F0801A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none absolute top-0 end-0 w-32 h-28 opacity-15">{focusMotifs[i]}</svg>
                            <div className="relative flex items-center gap-3">
                                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#1A1F2B] shrink-0">{focusIcons[i]}</div>
                                <h3 className="m-0 text-xl font-extrabold">{c.title}</h3>
                            </div>
                            <p className="relative m-0 text-sm leading-[1.9] text-[#9AA3B2]">{c.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Articles */}
            <section id="articles" aria-labelledby="articles-title" className={`${wrap} pt-[72px] flex flex-col gap-7 scroll-mt-4`}>
                <div className="flex flex-col gap-3 max-w-[760px]">
                    <h2 id="articles-title" className="m-0 text-3xl sm:text-4xl font-extrabold">{t.articles.title}</h2>
                    <p className="m-0 leading-[1.9] text-[#9AA3B2]">{t.articles.subtitle}</p>
                </div>
                <div className="grid grid-cols-1 min-[620px]:grid-cols-2 min-[1024px]:grid-cols-4 gap-5">
                    {articleCards.map((a) => (
                        <Link key={a.slug} href={`/articles/${a.slug}`} className={`${card} p-6 flex flex-col gap-3`}>
                            <div className="flex justify-between text-[11px] text-[#9AA3B2]"><span>{a.date}</span><span>{a.readTime}</span></div>
                            <h3 className="m-0 text-base font-extrabold leading-[1.6]">{a.title}</h3>
                            <p className="m-0 text-sm leading-[1.8] text-[#9AA3B2] line-clamp-4">{a.excerpt}</p>
                            <span className="mt-auto pt-2 text-sm font-bold text-[#F0801A]">{t.articles.read} <span aria-hidden="true">{isAr ? "←" : "→"}</span></span>
                        </Link>
                    ))}
                    <a href={DEVTO} target="_blank" rel="noopener noreferrer" className={`${card} p-6 flex flex-col gap-3`}>
                        <div className="flex justify-between text-[11px] text-[#9AA3B2]"><span dir="ltr">{t.articles.devtoMeta}</span></div>
                        <h3 className="m-0 text-base font-extrabold leading-[1.6]">{t.articles.devto}</h3>
                        <span className="mt-auto pt-2 text-sm font-bold text-[#F0801A]">{t.articles.read} <span aria-hidden="true">↗</span></span>
                    </a>
                </div>
                <Link href="/articles" className="self-start font-bold text-[#F0801A]">{t.articles.all}</Link>
            </section>

            {/* About */}
            <section id="about" aria-labelledby="about-title" className={`${wrap} pt-[72px] flex flex-col gap-6 scroll-mt-4`}>
                <div className={`${card} p-8 flex flex-col gap-4`}>
                    <p className={`m-0 ${eyebrow}`}>{t.about.eyebrow}</p>
                    <h2 id="about-title" className="m-0 text-3xl sm:text-4xl font-extrabold">{t.about.tagline}</h2>
                    <p className="m-0 leading-[2] text-[#9AA3B2] max-w-[800px]">{t.about.bio}</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-3 font-bold text-sm text-[#F0801A]">
                        <a href="/Sayed_Esmail_Resume.pdf" download>{t.about.cv}</a>
                        <a href="/Sayed_Esmail_Portfolio.pdf" download>{t.about.pdf}</a>
                        <Link href="/about">{t.about.more}</Link>
                        <a href="https://github.com/SayedEsmail" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                        <a href="https://www.linkedin.com/in/sayed-esmail-khattab" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
                    </div>
                </div>
                <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-6">
                    <div className={`${card} p-8 flex flex-col gap-3`}>
                        <p className={`m-0 ${eyebrow}`}>{t.about.indepEyebrow}</p>
                        <h3 className="m-0 text-2xl font-extrabold">{t.about.indepTitle}</h3>
                        <p className="m-0 leading-[1.9] text-[#9AA3B2]">{t.about.indepText}</p>
                        <Link href="/projects#freelance" className="font-bold text-[#F0801A]">{t.about.indepLink}</Link>
                    </div>
                    <div className={`${card} p-8 flex flex-col gap-3`}>
                        <p className={`m-0 ${eyebrow}`}>{t.about.eduEyebrow}</p>
                        <h3 className="m-0 text-2xl font-extrabold">{t.about.eduTitle}</h3>
                        <p className="m-0 leading-[1.9] text-[#9AA3B2]">{t.about.edu[0]}<br />{t.about.edu[1]}</p>
                        <p className="m-0 leading-[1.9] text-[#9AA3B2]">{t.about.langs[0]}<br />{t.about.langs[1]}</p>
                    </div>
                </div>
                <div className="border-t border-[#232836] pt-8 flex flex-col gap-2">
                    <h3 className="m-0 text-2xl font-extrabold">{t.about.contactTitle}</h3>
                    <p className="m-0 text-[#9AA3B2]">{t.about.contactText}</p>
                    <a href="mailto:5atab.work@gmail.com" dir="ltr" className="self-start font-bold text-[#F0801A]">5atab.work@gmail.com ↗</a>
                </div>
            </section>

            {/* Services */}
            <section id="services" aria-labelledby="services-title" className={`${wrap} pt-[72px] pb-[72px] flex flex-col gap-6 scroll-mt-4`}>
                <h2 id="services-title" className="m-0 text-2xl sm:text-3xl font-extrabold">{t.services.title}</h2>
                <div className="grid grid-cols-1 min-[560px]:grid-cols-2 min-[1024px]:grid-cols-4 gap-5">
                    {serviceMeta.map((s, i) => {
                        const inner = (
                            <>
                                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: `${s.color}22` }}>{s.icon}</div>
                                <h3 className="m-0 text-[18px] font-extrabold">{t.services.items[i]}</h3>
                                <span className="font-bold text-sm" style={{ color: s.color }}>{t.services.more}</span>
                            </>
                        );
                        const cls = `${card} p-6 flex flex-col gap-4`;
                        return s.external ? (
                            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
                        ) : (
                            <Link key={s.href} href={s.href} className={cls}>{inner}</Link>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
