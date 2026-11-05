import Image from "next/image";
import Link from "next/link";
import type { WorkItem } from "@/data/work";
import { card, tagCls } from "./ui";

const fade = "absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#12151C] to-transparent";

export default function WorkCard({ item }: { item: WorkItem }) {
    return (
        <article id={item.slug} className={`${card} group overflow-hidden flex flex-col scroll-mt-24`}>
            {item.image ? (
                <figure className="m-0">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-t-[20px] bg-[#0F1218]">
                        <Image src={item.image.src} alt={item.image.alt} unoptimized={item.image.src.endsWith(".svg")} fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover object-top motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.03]" />
                        <div aria-hidden="true" className={fade} />
                    </div>
                    {item.imageCaption && <figcaption className="px-6 pt-3 text-[11px] leading-[1.7] text-[#9AA3B2]">{item.imageCaption}</figcaption>}
                </figure>
            ) : (
                <div className="relative aspect-[16/9] flex flex-col justify-center gap-2 p-8 rounded-t-[20px] bg-[#0F1218]" aria-hidden="true">
                    <span className="text-3xl font-extrabold text-[#F3F4F6]">{item.title}</span>
                    <span className="text-xs text-[#9AA3B2]">{item.tags.slice(0, 2).join(" / ")}</span>
                    <div className={fade} />
                </div>
            )}
            <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 text-[11px] text-[#9AA3B2]">
                    <span className="text-[#F0801A] font-bold uppercase tracking-[.08em]">{item.category === "company" ? "Company work" : "Freelance"}</span>
                    {item.period && <span>{item.period}</span>}
                </div>
                <h3 className="m-0 text-2xl font-extrabold text-[#F3F4F6]">{item.title}</h3>
                <p className="m-0 text-xs text-[#9AA3B2] leading-[1.7]">{item.role}{item.category === "company" && item.employer !== item.title ? ` · ${item.employer}` : ""}</p>
                <p className="m-0 text-sm leading-[1.8] text-[#C9D0DC]">{item.description}</p>
                <h4 className="m-0 mt-2 text-[11px] font-bold uppercase tracking-[.14em] text-[#F0801A]">My contribution</h4>
                <ul className="contribution-list m-0">{item.contributions.map(text => <li key={text}>{text}</li>)}</ul>
                <div className="flex flex-wrap gap-2 pt-2 mt-auto">{item.tags.map(tag => <span key={tag} className={tagCls}>{tag}</span>)}</div>
                {(item.caseStudy || item.liveUrl) && <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-[#232836] pt-4 text-sm">
                    {item.caseStudy && <Link className="text-link !text-sm" href={item.caseStudy}>Read case study <span aria-hidden="true">→</span></Link>}
                    {item.liveUrl && <a className="text-link !text-sm" href={item.liveUrl} target="_blank" rel="noopener noreferrer">Visit website <span aria-hidden="true">↗</span></a>}
                </div>}
            </div>
        </article>
    );
}
