import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { articles } from "@/data/articles";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import Glow from "@/components/Glow";
import { wrap, bandBase, bandAlt, card, eyebrow } from "@/components/ui";

export const metadata: Metadata = {
    title: "Technical Writing & Core Guidelines",
    description: "Read technical write-ups and architectural guidelines regarding real-time systems, multi-tenant B2B SaaS structure, and Vue 3 frontend performance optimization.",
};

export default function ArticlesPage() {
    return (
        <>
            <header className={bandBase}>
                <Glow className="-top-48 end-[-160px]" />
                <div className={`${wrap} pt-[72px] pb-[72px] flex flex-col gap-4`}>
                    <FadeIn delay={100}>
                        <p className={`m-0 ${eyebrow}`}>Technical Writing</p>
                    </FadeIn>
                    <FadeIn delay={200}>
                        <SectionHeading
                            level={1}
                            title="Engineering Guides &amp; Lessons"
                            subtitle="A small catalog of technical guides authored to capture system architecture decisions, performance optimization bottlenecks, and frontend standards established on production apps."
                        />
                    </FadeIn>
                </div>
            </header>
            <section className={bandAlt} aria-label="Articles">
                <div className={`${wrap} pt-[72px] pb-[72px]`}>
                    <div className="grid grid-cols-1 min-[620px]:grid-cols-2 min-[1024px]:grid-cols-3 gap-5">
                        {articles.map((article, index) => (
                            <FadeIn key={article.slug} delay={100 * (index + 1)} className="flex">
                                <article className={`${card} group relative overflow-hidden flex flex-col w-full`}>
                                    {article.cover && (
                                        <div className="relative aspect-[16/9] overflow-hidden rounded-t-[20px] bg-[#0F1218]">
                                            <Image src={article.cover} alt="" fill unoptimized sizes="(max-width: 619px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.03]" />
                                            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#12151C] to-transparent" />
                                        </div>
                                    )}
                                    <div className="p-6 flex flex-col gap-3 flex-1">
                                        <div className="flex justify-between text-[11px] text-[#9AA3B2]"><span>{article.date}</span><span>{article.readTime}</span></div>
                                        <h2 className="m-0 text-base font-extrabold leading-[1.6] text-[#F3F4F6]">
                                            <Link href={`/articles/${article.slug}`}>
                                                <span className="absolute inset-0" aria-hidden="true" />
                                                {article.title}
                                            </Link>
                                        </h2>
                                        <p className="m-0 text-sm leading-[1.8] text-[#9AA3B2]">{article.subtitle}</p>
                                        <span className="mt-auto pt-2 text-sm font-bold text-[#F0801A]">Read Article <span aria-hidden="true">→</span></span>
                                    </div>
                                </article>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
