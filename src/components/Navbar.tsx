"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { WhatsAppIcon } from "./Icons";

const navItems = [
    { name: "الرئيسية", path: "/", match: (p: string) => p === "/" },
    { name: "الأعمال", path: "/#work", match: () => false },
    { name: "نبذة", path: "/#about", match: (p: string) => p.startsWith("/about") },
    { name: "المقالات", path: "/articles", match: (p: string) => p.startsWith("/articles") },
    { name: "تحديث المشاريع", path: "/migration", match: (p: string) => p.startsWith("/migration") },
];

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <header dir="rtl" lang="ar" className="ar relative z-50 border-b border-[#1B2030] bg-[#0B0D12]">
            <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-4 px-4 md:px-20 py-[22px]">
                <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
                    <span className="w-10 h-10 rounded-xl bg-[#F0801A] flex items-center justify-center">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="شعار سيد إسماعيل">
                            <path d="M8 7 3 12l5 5" /><path d="m16 7 5 5-5 5" /><path d="m13.5 5-3 14" />
                        </svg>
                    </span>
                    <strong className="text-lg font-extrabold tracking-[.5px] text-[#F3F4F6]">SAYED.DEV</strong>
                </Link>

                <nav aria-label="التنقل الرئيسي" className="hidden md:flex items-center gap-7">
                    {navItems.map((item) => {
                        const active = item.match(pathname);
                        return (
                            <Link
                                key={item.name}
                                href={item.path}
                                aria-current={active ? "page" : undefined}
                                className={`text-sm font-semibold pb-1 border-b-2 ${active ? "text-[#F0801A] border-[#F0801A]" : "text-[#9AA3B2] border-transparent hover:text-[#F3F4F6]"}`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-3">
                    <a
                        href="/Sayed_Esmail_Portfolio.pdf"
                        download="Sayed_Esmail_Portfolio.pdf"
                        className="hidden lg:inline-flex text-[13px] font-semibold text-[#9AA3B2] border border-[#2A3040] rounded-[10px] px-3.5 py-2 hover:text-[#F3F4F6]"
                    >
                        Portfolio PDF
                    </a>
                    <a href="https://wa.me/201066293366" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366] text-white px-4 md:px-[18px] py-2.5 rounded-[10px] font-bold text-sm">
                        <WhatsAppIcon size={18} />واتساب
                    </a>
                    <button
                        onClick={() => setOpen(!open)}
                        aria-label="القائمة"
                        aria-expanded={open}
                        aria-controls="mobile-navigation"
                        className="md:hidden flex items-center justify-center w-10 h-10 rounded-[10px] border border-[#2A3040] text-[#9AA3B2]"
                    >
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                            {open ? <path strokeLinecap="round" d="M6 18 18 6M6 6l12 12" /> : <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />}
                        </svg>
                    </button>
                </div>
            </div>

            {open && (
                <div id="mobile-navigation" className="md:hidden absolute top-full inset-x-0 bg-[#0B0D12] border-b border-[#1B2030] shadow-xl">
                    <div className="px-4 py-4 flex flex-col">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                onClick={() => setOpen(false)}
                                className={`py-3 text-[15px] font-semibold border-b border-[#1B2030] ${item.match(pathname) ? "text-[#F0801A]" : "text-[#9AA3B2]"}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <a href="/Sayed_Esmail_Portfolio.pdf" download="Sayed_Esmail_Portfolio.pdf" className="py-3 text-[15px] font-semibold text-[#9AA3B2]">
                            Portfolio PDF
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
