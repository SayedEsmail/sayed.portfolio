"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { WhatsAppIcon } from "./Icons";
import { useLang } from "./LangProvider";
import { ui } from "@/data/i18n";

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const { lang, setLang, canToggle } = useLang();
    const t = ui[lang].nav;
    const isAr = lang === "ar";

    const navItems = [
        { name: t.home, path: "/", match: (p: string) => p === "/" },
        { name: t.work, path: "/#work", match: (p: string) => p.startsWith("/projects") || p.startsWith("/portfolio") },
        { name: t.experience, path: "/#experience", match: () => false },
        { name: t.articles, path: "/#articles", match: (p: string) => p.startsWith("/articles") },
        { name: t.about, path: "/#about", match: (p: string) => p.startsWith("/about") },
        { name: t.migration, path: "/migration", match: (p: string) => p.startsWith("/migration") },
    ];

    return (
        <header dir={isAr ? "rtl" : "ltr"} lang={lang} className={`${isAr ? "ar" : ""} relative z-50 border-b border-[#1B2030] bg-[#0B0D12] text-[#F3F4F6]`}>
            <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-3 px-4 min-[900px]:px-10 xl:px-20 py-[18px]">
                <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5 shrink-0">
                    <span className="w-10 h-10 rounded-xl bg-[#F0801A] flex items-center justify-center">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label={t.logo}>
                            <path d="M8 7 3 12l5 5" /><path d="m16 7 5 5-5 5" /><path d="m13.5 5-3 14" />
                        </svg>
                    </span>
                    <strong className="text-lg font-extrabold tracking-[.5px] text-[#F3F4F6]">SAYED.DEV</strong>
                </Link>

                <nav aria-label={t.label} className="hidden min-[900px]:flex items-center gap-5 xl:gap-7">
                    {navItems.map((item) => {
                        const active = item.match(pathname);
                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                aria-current={active ? "page" : undefined}
                                className={`text-sm font-semibold pb-1 border-b-2 whitespace-nowrap ${active ? "text-[#F0801A] border-[#F0801A]" : "text-[#9AA3B2] border-transparent hover:text-[#F3F4F6]"}`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-2 sm:gap-3">
                    <a
                        href="/Sayed_Esmail_Portfolio.pdf"
                        download="Sayed_Esmail_Portfolio.pdf"
                        className="hidden xl:inline-flex text-[13px] font-semibold text-[#9AA3B2] border border-[#2A3040] rounded-[10px] px-3.5 py-2 hover:text-[#F3F4F6] whitespace-nowrap"
                    >
                        {t.pdf}
                    </a>
                    {canToggle && (
                        <button
                            type="button"
                            onClick={() => setLang(isAr ? "en" : "ar")}
                            aria-label={t.switchTo}
                            className="h-10 min-w-10 px-3 rounded-[10px] border border-[#2A3040] text-[13px] font-bold text-[#F3F4F6] hover:border-[#F0801A]"
                        >
                            <span className={isAr ? "text-[#9AA3B2]" : "text-[#F0801A]"}>EN</span>
                            <span className="text-[#9AA3B2]"> / </span>
                            <span className={isAr ? "text-[#F0801A]" : "text-[#9AA3B2]"}>AR</span>
                        </button>
                    )}
                    <a href="https://wa.me/201141688252" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366] text-white px-3 sm:px-[18px] py-2.5 rounded-[10px] font-bold text-sm">
                        <WhatsAppIcon size={18} /><span className="hidden sm:inline">{t.whatsapp}</span><span className="sm:hidden sr-only">{t.whatsapp}</span>
                    </a>
                    <button
                        onClick={() => setOpen(!open)}
                        aria-label={t.menu}
                        aria-expanded={open}
                        aria-controls="mobile-navigation"
                        className="min-[900px]:hidden flex items-center justify-center w-10 h-10 rounded-[10px] border border-[#2A3040] text-[#9AA3B2]"
                    >
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                            {open ? <path strokeLinecap="round" d="M6 18 18 6M6 6l12 12" /> : <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />}
                        </svg>
                    </button>
                </div>
            </div>

            {open && (
                <div id="mobile-navigation" className="min-[900px]:hidden absolute top-full inset-x-0 bg-[#0B0D12] border-b border-[#1B2030] shadow-xl">
                    <div className="px-4 py-4 flex flex-col">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                onClick={() => setOpen(false)}
                                className={`py-3 text-[15px] font-semibold border-b border-[#1B2030] ${item.match(pathname) ? "text-[#F0801A]" : "text-[#9AA3B2]"}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <a href="/Sayed_Esmail_Portfolio.pdf" download="Sayed_Esmail_Portfolio.pdf" className="py-3 text-[15px] font-semibold text-[#9AA3B2]">
                            {t.pdf}
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
