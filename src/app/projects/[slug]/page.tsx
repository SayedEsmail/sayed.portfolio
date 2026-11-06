import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";
import FadeIn from "@/components/FadeIn";
import Glow from "@/components/Glow";
import { wrap, bandBase, bandAlt, card, panel, eyebrow, h1Cls, btnPrimary, btnSecondary, tagCls } from "@/components/ui";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata(
    { params }: PageProps
): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: `${project.title} | Case Study`,
        description: project.subtitle,
        openGraph: {
            title: `${project.title} | Case Study`,
            description: project.subtitle,
            type: "website",
            images: [{ url: project.heroImage }],
        },
    };
}

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    const h2 = "m-0 text-2xl font-extrabold text-[#F3F4F6]";
    const para = "text-base sm:text-[17px] leading-[1.9] text-[#C9D0DC]";

    return (
        <>
            {/* Project Header */}
            <header className={bandBase} aria-labelledby="project-title">
                <Glow className="-top-48 end-[-160px]" />
                <div className={`${wrap} pt-[56px] pb-[72px] flex flex-col gap-8`}>
                    <FadeIn delay={100}>
                        <Link href="/projects" className="group inline-flex items-center gap-2 text-sm font-bold text-[#F0801A]">
                            <span aria-hidden="true" className="motion-safe:transition-transform motion-safe:duration-200 group-hover:-translate-x-1">←</span>
                            Back to all work
                        </Link>
                    </FadeIn>
                    <div className="flex flex-col gap-4 max-w-[900px]">
                        <FadeIn delay={200}>
                            <p className={`m-0 ${eyebrow}`}>{project.role}</p>
                        </FadeIn>
                        <FadeIn delay={300}>
                            <h1 id="project-title" className={h1Cls}>{project.title}</h1>
                        </FadeIn>
                        <FadeIn delay={400}>
                            <p className="m-0 text-lg sm:text-xl leading-[1.8] text-[#C9D0DC]">{project.subtitle}</p>
                        </FadeIn>
                        {(project.period || project.team) && (
                            <FadeIn delay={420}>
                                <dl className="m-0 flex flex-wrap gap-x-8 gap-y-2 text-sm text-[#9AA3B2]">
                                    {project.period && (
                                        <div className="flex gap-2"><dt className="font-bold text-[#F3F4F6]">When</dt><dd className="m-0">{project.period}</dd></div>
                                    )}
                                    {project.team && (
                                        <div className="flex gap-2"><dt className="font-bold text-[#F3F4F6]">Team</dt><dd className="m-0">{project.team}</dd></div>
                                    )}
                                </dl>
                            </FadeIn>
                        )}
                        <FadeIn delay={430}>
                            <ul className="m-0 p-0 list-none flex flex-wrap gap-2" aria-label="Technologies">
                                {project.tags.map((tag) => <li key={tag} className={tagCls}>{tag}</li>)}
                            </ul>
                        </FadeIn>
                    </div>

                    {/* External Action Links */}
                    {(project.liveUrl || project.githubUrl) && (
                        <FadeIn delay={450}>
                            <div className="flex flex-wrap items-center gap-4">
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                                        Visit the product <span aria-hidden="true">↗</span>
                                    </a>
                                )}
                                {project.githubUrl && (
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={btnSecondary}>
                                        Source on GitHub <span aria-hidden="true">↗</span>
                                    </a>
                                )}
                            </div>
                        </FadeIn>
                    )}

                    {/* Hero Banner Screenshot */}
                    <FadeIn delay={500}>
                        <div className="relative aspect-[16/9] w-full rounded-[20px] overflow-hidden border border-[#232836] bg-[#12151C]">
                            <Image
                                src={project.heroImage}
                                alt={`${project.title} Hero View`}
                                fill
                                sizes="(max-width: 1280px) 100vw, 1120px"
                                className="object-cover object-top"
                                preload
                            />
                        </div>
                    </FadeIn>
                </div>
            </header>

            {/* Case Study Body */}
            <div className={bandAlt}>
                <div className={`${wrap} pt-[72px] pb-[72px] grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-14 items-start`}>
                    {/* Main Content Column */}
                    <div className="lg:col-span-2 flex flex-col gap-14">
                        {/* Summary */}
                        {project.summary && (
                            <FadeIn>
                                <section aria-labelledby="summary-heading" className="scroll-mt-24 flex flex-col gap-4">
                                    <h2 id="summary-heading" className={h2}>In short</h2>
                                    <p className={`m-0 ${para}`}>{project.summary}</p>
                                </section>
                            </FadeIn>
                        )}

                        {/* My role */}
                        {project.scope && (
                            <FadeIn>
                                <section aria-labelledby="scope-heading" className="scroll-mt-24 flex flex-col gap-4">
                                    <h2 id="scope-heading" className={h2}>My role and scope</h2>
                                    <p className={`m-0 ${para}`}>{project.scope}</p>
                                    {project.leadership && <p className={`m-0 ${para}`}>{project.leadership}</p>}
                                </section>
                            </FadeIn>
                        )}

                        {/* The Problem */}
                        <FadeIn>
                            <section aria-labelledby="problem-heading" className="scroll-mt-24 flex flex-col gap-4">
                                <h2 id="problem-heading" className={h2}>The problem</h2>
                                <div className={`${para} space-y-6`}>
                                    {project.problem.split('\n\n').map((p, i) => (
                                        <p key={i} className="m-0">{p}</p>
                                    ))}
                                </div>
                            </section>
                        </FadeIn>

                        {/* System Architecture */}
                        <FadeIn>
                            <section aria-labelledby="architecture-heading" className="scroll-mt-24 flex flex-col gap-4">
                                <h2 id="architecture-heading" className={h2}>How it is built</h2>
                                <div className={`${para} space-y-6`}>
                                    {project.architecture.split('\n\n').map((p, i) => (
                                        <p key={i} className="m-0 whitespace-pre-line">{p}</p>
                                    ))}

                                    {/* ASCII Architecture Diagram */}
                                    {project.architectureDiagram && (
                                        <div className="mt-8 p-6 bg-[#0B0D12] rounded-[20px] border border-[#232836] overflow-x-auto select-none">
                                            <pre className="m-0 font-mono text-[11px] sm:text-xs leading-5 text-[#F0801A] antialiased font-medium">{project.architectureDiagram}</pre>
                                        </div>
                                    )}
                                </div>
                            </section>
                        </FadeIn>

                        {/* Key Technical Decisions */}
                        <FadeIn>
                            <section aria-labelledby="decisions-heading" className="scroll-mt-24 flex flex-col gap-5">
                                <h2 id="decisions-heading" className={h2}>Key decisions</h2>
                                <div className="grid sm:grid-cols-2 gap-5">
                                    {project.keyDecisions.map((dec, i) => (
                                        <div key={i} className={`${card} p-6 flex flex-col gap-3`}>
                                            <h3 className="m-0 text-base font-extrabold text-[#F3F4F6] flex items-start gap-2">
                                                <span aria-hidden="true" className="mt-2 w-1.5 h-1.5 shrink-0 bg-[#F0801A] rounded-full"></span>
                                                {dec.decision}
                                            </h3>
                                            <p className="m-0 text-sm leading-[1.8] text-[#9AA3B2]">{dec.justification}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </FadeIn>

                        {/* Business & Product Outcomes */}
                        <FadeIn>
                            <section aria-labelledby="business-impact-heading" className="scroll-mt-24 flex flex-col gap-4">
                                <h2 id="business-impact-heading" className={h2}>What it changed for the product</h2>
                                <div className={`${panel} p-6 flex flex-col gap-4`}>
                                    <ul className="contribution-list m-0 !text-base">
                                        {project.businessImpact.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </section>
                        </FadeIn>

                        {/* Engineering Challenges & Solutions */}
                        <FadeIn>
                            <section aria-labelledby="challenges-heading" className="scroll-mt-24 flex flex-col gap-5">
                                <h2 id="challenges-heading" className={h2}>Hard parts and how I solved them</h2>
                                <div className="flex flex-col gap-5">
                                    {project.challenges.map((c, i) => (
                                        <div key={i} className={`${panel} p-6 flex flex-col gap-4`}>
                                            <div className="flex items-start gap-3">
                                                <span aria-hidden="true" className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#F0801A]/10 border border-[#F0801A]/30 text-[#F0801A] text-xs font-bold mt-0.5">
                                                    !
                                                </span>
                                                <h3 className="m-0 text-lg font-extrabold leading-[1.6] text-[#F3F4F6]">{c.title}</h3>
                                            </div>
                                            <div className="ms-3 ps-6 border-s border-[#232836] text-[15px] leading-[1.8] text-[#C9D0DC]">
                                                <span className="block mb-1.5 text-[11px] font-bold uppercase tracking-[.14em] text-[#F0801A]">What I did</span>
                                                {c.solution}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </FadeIn>

                        {/* Reflection */}
                        {project.reflection && (
                            <FadeIn>
                                <section aria-labelledby="reflection-heading" className="scroll-mt-24 flex flex-col gap-4">
                                    <h2 id="reflection-heading" className={h2}>What I would do differently</h2>
                                    <p className={`m-0 ${para}`}>{project.reflection}</p>
                                </section>
                            </FadeIn>
                        )}
                    </div>

                    {/* Sidebar Column */}
                    <div className="flex flex-col gap-8 lg:sticky lg:top-6">
                        {/* Tech Stack Visual Breakdown */}
                        <FadeIn>
                            <section aria-labelledby="stack-heading" className={`${panel} p-6`}>
                                <h2 id="stack-heading" className={`m-0 mb-4 ${eyebrow}`}>Stack and what each part does</h2>
                                <ul className="m-0 p-0 list-none flex flex-col gap-4">
                                    {project.stack.map((item, i) => (
                                        <li key={i} className="flex flex-col gap-1 pb-4 border-b border-[#232836] last:border-b-0 last:pb-0">
                                            <span className="text-sm font-bold text-[#F3F4F6] flex items-center gap-2">
                                                <span aria-hidden="true" className="w-1.5 h-1.5 bg-[#F0801A] rounded-full"></span>
                                                {item.name}
                                            </span>
                                            <span className="text-xs leading-[1.7] text-[#9AA3B2] ps-3.5">{item.role}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </FadeIn>

                        {/* Impact & Performance Metrics */}
                        <FadeIn>
                            <section aria-labelledby="impact-heading" className={`${panel} p-6`}>
                                <h2 id="impact-heading" className={`m-0 mb-4 ${eyebrow}`}>Highlights</h2>
                                <div className="flex flex-col gap-3">
                                    {project.impact.map((metric, i) => (
                                        <div key={i} className="p-4 rounded-xl border border-[#232836] bg-[#0F1218] flex flex-col gap-1">
                                            <span className="text-base font-extrabold text-[#F0801A]">{metric.value}</span>
                                            <span className="text-xs text-[#9AA3B2]">{metric.metric}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </FadeIn>
                    </div>
                </div>
            </div>

            {/* Screenshots Gallery Section */}
            {project.screenshots.length > 0 && (
                <section aria-labelledby="gallery-heading" className={`${bandBase} scroll-mt-24`}>
                    <div className={`${wrap} pt-[72px] pb-[72px] flex flex-col gap-8`}>
                        <FadeIn>
                            <h2 id="gallery-heading" className="m-0 text-3xl sm:text-4xl font-extrabold text-[#F3F4F6]">Screens</h2>
                            {project.screenshotNote && <p className="m-0 mt-3 text-sm leading-[1.8] text-[#9AA3B2] max-w-[760px]">{project.screenshotNote}</p>}
                        </FadeIn>
                        <div className="grid md:grid-cols-2 gap-5">
                            {project.screenshots.map((screen, i) => (
                                <FadeIn key={i} delay={100 * (i + 1)} className="flex">
                                    <figure className={`${card} group m-0 w-full overflow-hidden flex flex-col`}>
                                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-[20px] bg-[#0F1218]">
                                            <Image
                                                src={screen.src}
                                                alt={screen.alt}
                                                fill
                                                sizes="(max-width: 767px) 100vw, 50vw"
                                                className="object-cover object-top motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.03]"
                                            />
                                            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#12151C] to-transparent" />
                                        </div>
                                        <figcaption className="p-5 text-xs leading-[1.8] text-[#9AA3B2]">{screen.alt}</figcaption>
                                    </figure>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Connect Section */}
            <section aria-labelledby="cta-heading" className={bandAlt}>
                <div className={`${wrap} pt-[72px] pb-[72px]`}>
                    <FadeIn>
                        <div className={`${panel} p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6`}>
                            <div className="flex flex-col gap-2">
                                <h2 id="cta-heading" className="m-0 text-xl md:text-2xl font-extrabold text-[#F3F4F6]">
                                    Working on a similar product?
                                </h2>
                                <p className="m-0 text-sm leading-[1.8] text-[#9AA3B2] max-w-xl">
                                    If you need someone to own a product frontend, lead a frontend team, or ship an Arabic and English interface, let&apos;s talk.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
                                <a href="mailto:5atab.work@gmail.com" className={`${btnPrimary} text-center`}>Email me</a>
                                <a href="https://www.linkedin.com/in/sayed-esmail-khattab" target="_blank" rel="noopener noreferrer" className={`${btnSecondary} text-center`}>LinkedIn</a>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
