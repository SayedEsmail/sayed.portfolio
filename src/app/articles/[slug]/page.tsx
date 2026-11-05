import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/data/articles";
import FadeIn from "@/components/FadeIn";
import Glow from "@/components/Glow";
import { wrap, bandBase, bandAlt, panel, eyebrow, btnPrimary, btnSecondary } from "@/components/ui";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata(
    { params }: PageProps
): Promise<Metadata> {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (!article) {
        return {
            title: "Article Not Found",
        };
    }

    return {
        title: `${article.title} | Engineering Guide`,
        description: article.subtitle,
        openGraph: {
            title: `${article.title} | Engineering Guide`,
            description: article.subtitle,
            type: "article",
            publishedTime: new Date(article.date).toISOString(),
            authors: ["Sayed Esmail"],
        },
    };
}

export default async function ArticlePage({ params }: PageProps) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    return (
        <>
            <header className={bandBase}>
                <Glow className="-top-48 end-[-160px]" />
                <div className={`${wrap} max-w-[1000px] pt-[56px] pb-[64px] flex flex-col gap-6`}>
                    {/* Back Navigation */}
                    <FadeIn delay={100}>
                        <Link href="/articles" className="group inline-flex items-center gap-2 text-sm font-bold text-[#F0801A]">
                            <span aria-hidden="true" className="motion-safe:transition-transform motion-safe:duration-200 group-hover:-translate-x-1">←</span>
                            Back to Articles
                        </Link>
                    </FadeIn>
                    <FadeIn delay={200}>
                        <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.14em] text-[#9AA3B2]">
                            <span>{article.date}</span>
                            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-[#F0801A]"></span>
                            <span>{article.readTime}</span>
                        </div>
                    </FadeIn>
                    <FadeIn delay={300}>
                        <h1 className="m-0 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.15] tracking-[-.02em] text-[#F3F4F6]">
                            {article.title}
                        </h1>
                    </FadeIn>
                    <FadeIn delay={300}>
                        <p className="m-0 text-base sm:text-lg leading-[1.8] text-[#F0801A]">
                            {article.subtitle}
                        </p>
                    </FadeIn>
                </div>
            </header>

            {/* Article Prose Body */}
            <section className={bandAlt} aria-label="Article">
                <div className={`${wrap} max-w-[1000px] pt-[56px] pb-[72px]`}>
                    <article className="max-w-none text-[#C9D0DC] text-[15px] sm:text-base leading-[1.9] flex flex-col gap-6">
                        <div
                            className="space-y-6 whitespace-pre-wrap select-text selection:bg-[#F0801A]/25"
                            dangerouslySetInnerHTML={{
                                __html: formatMarkdownContent(article.content)
                            }}
                        />
                    </article>
                </div>
            </section>

            {/* Bottom Connect CTA */}
            <section aria-labelledby="author-heading" className={bandBase}>
                <div className={`${wrap} max-w-[1000px] pt-[56px] pb-[72px]`}>
                    <div className={`${panel} p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6`}>
                        <div className="flex flex-col gap-2">
                            <p className={`m-0 ${eyebrow}`}>About the author</p>
                            <h2 id="author-heading" className="m-0 text-xl font-extrabold text-[#F3F4F6]">
                                Written by Sayed Esmail
                            </h2>
                            <p className="m-0 text-sm text-[#9AA3B2]">
                                Senior Frontend Engineer specializing in Vue &amp; React SaaS architectures.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                            <a href="mailto:5atab.work@gmail.com" className={`${btnPrimary} text-sm`}>
                                5atab.work@gmail.com
                            </a>
                            <a
                                href="https://www.linkedin.com/in/sayed-esmail-khattab"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${btnSecondary} text-sm`}
                            >
                                LinkedIn <span aria-hidden="true">↗</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

// Lightweight manual markdown formatter to support simple markdown elements safely
function formatMarkdownContent(markdown: string): string {
    let html = markdown;

    // Headings
    html = html.replace(/^### (.*?)$/gm, '<h3 class="text-xl font-extrabold text-[#F3F4F6] mt-6 mb-3">$1</h3>');
    html = html.replace(/^#### (.*?)$/gm, '<h4 class="text-lg font-bold text-[#F3F4F6] mt-4 mb-2">$1</h4>');

    // Code Blocks (```)
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)\n```/g;
    html = html.replace(codeBlockRegex, (_, lang, code) => {
        const escapedCode = code
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
        return `<pre class="p-5 rounded-xl border border-[#232836] bg-[#0B0D12] text-xs sm:text-sm font-mono text-[#C9D0DC] overflow-x-auto my-5 select-text leading-5">${escapedCode}</pre>`;
    });

    // Inline Code (`)
    html = html.replace(/`([^`]+)`/g, '<code class="text-xs font-mono text-[#F0801A] bg-[#F0801A]/10 border border-[#F0801A]/20 px-1.5 py-0.5 rounded">$1</code>');

    // Bold text (**)
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-[#F3F4F6]">$1</strong>');

    return html;
}
