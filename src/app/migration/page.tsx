import type { Metadata } from "next";
import MigrationLeadForm from "@/components/MigrationLeadForm";
import {
    ARTICLE_URL,
    CONTACT_EMAIL,
    GITHUB_URL,
    INSTAGRAM_URL,
    LINKEDIN_URL,
    PROOF_REPO_URL,
    WHATSAPP_URL,
    eolChips,
    gets,
    heroPoints,
} from "@/data/migration";

export const metadata: Metadata = {
    title: "تحديث المواقع والأنظمة القديمة",
    description: "ننقل موقعك من فيو أو نكست القديم إلى أحدث إصدار دون توقف، بخطة واضحة وسعر ثابت يصلك في عرض قبل البدء.",
    openGraph: {
        title: "تحديث المواقع والأنظمة القديمة | Sayed Esmail",
        description: "ننقل موقعك من فيو أو نكست القديم إلى أحدث إصدار دون توقف، بخطة واضحة.",
        type: "website",
        locale: "ar_EG",
    },
};

const WA_PATH =
    "M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.5.3-.5c.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4ZM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Z";

function WhatsAppIcon({ size }: { size: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d={WA_PATH} />
        </svg>
    );
}

const svgProps = { width: 34, height: 34, viewBox: "0 0 24 24", fill: "none", stroke: "#F0801A", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;

function CardIcon({ name }: { name: string }) {
    switch (name) {
        case "shield":
            return <svg {...svgProps}><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" /><path d="M12 8v5M12 16v.01" /></svg>;
        case "doc":
            return <svg {...svgProps}><path d="M8 3h8l4 4v14H4V3h4Z" /><path d="M8 12h8M8 16h5" /></svg>;
        case "refresh":
            return <svg {...svgProps}><path d="M21 12a9 9 0 0 1-15.5 6.2M3 12a9 9 0 0 1 15.5-6.2" /><path d="M21 4v5h-5M3 20v-5h5" /></svg>;
        default:
            return <svg {...svgProps}><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>;
    }
}

const iconBtn = "w-12 h-12 rounded-full flex items-center justify-center bg-[#F3F5FA] text-[#1B2559]";
const strokeIcon = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, "aria-hidden": true } as const;

export default function MigrationPage() {
    return (
        <div dir="rtl" lang="ar" className="relative overflow-hidden bg-white text-[#1B2559]">
            <div className="relative max-w-[1280px] mx-auto bg-gradient-to-b from-[#F5F8FF] to-white to-40%">
                <div aria-hidden="true" className="hidden md:block absolute top-8 left-10 w-[120px] h-[120px] rounded-full opacity-90" style={{ background: "repeating-linear-gradient(135deg,#FFD9B8 0 6px,transparent 6px 14px)" }} />

                {/* Hero */}
                <section aria-labelledby="migration-title" className="relative px-5 md:px-20 pt-10 pb-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
                    <div className="flex flex-col gap-[22px] min-w-0">
                        <h1 id="migration-title" className="m-0 text-[32px] md:text-[42px] leading-[1.4] font-extrabold">
                            تحديث المواقع والأنظمة القديمة
                        </h1>
                        <p className="m-0 text-[17px] leading-[1.8] text-[#6B7280]">
                            الإصدارات المنتهية لا تصلها تحديثات الأمان، وتظهر في تقارير الامتثال. أنقل مشروعك من فيو أو نكست القديم إلى أحدث إصدار دون توقف، بخطة واضحة.
                        </p>
                        <ul className="m-0 p-0 list-none flex flex-col gap-2.5">
                            {heroPoints.map((p) => (
                                <li key={p} className="flex items-center gap-2.5 text-[15px] font-semibold">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F0801A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
                                        <circle cx="12" cy="12" r="10" /><path d="m8 12 3 3 5-6" />
                                    </svg>
                                    <span>{p}</span>
                                </li>
                            ))}
                        </ul>
                        <ul className="m-0 p-0 list-none flex flex-wrap gap-2" aria-label="تواريخ انتهاء الدعم">
                            {eolChips.map((c) => (
                                <li key={c} dir="rtl" className="bg-[#FFF3E8] text-[#1B2559] px-3 py-1.5 rounded-full text-[13px] font-semibold">{c}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="border-2 border-[#F0801A] rounded-[20px] p-6 md:p-8 bg-white shadow-[0_20px_48px_rgba(27,37,89,0.12)] flex flex-col gap-4 min-w-0">
                        <MigrationLeadForm />
                        <div className="flex items-center gap-3 text-[#6B7280] text-[13px]">
                            <span className="flex-1 h-px bg-[#EEF2F8]" /><span>أو تواصل مباشرة</span><span className="flex-1 h-px bg-[#EEF2F8]" />
                        </div>
                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-[22px] py-[11px] rounded-[10px] font-bold text-sm">
                            <WhatsAppIcon size={18} />واتساب
                        </a>
                    </div>
                </section>

                {/* What you get */}
                <section aria-labelledby="gets-title" className="relative px-5 md:px-20 pt-5 pb-14 flex flex-col gap-5">
                    <h2 id="gets-title" className="m-0 text-[28px] font-extrabold">ماذا يصلك؟</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {gets.map((g) => (
                            <article key={g.title} className="bg-white rounded-[20px] shadow-[0_12px_32px_rgba(27,37,89,0.06)] border border-[#EEF2F8] p-7 flex flex-col gap-5 items-start">
                                <div className="w-[76px] h-[76px] rounded-full bg-[#FFF3E8] shadow-[0_0_0_8px_#FFF9F4] flex items-center justify-center shrink-0">
                                    <CardIcon name={g.icon} />
                                </div>
                                <div className="flex flex-col gap-2 flex-1">
                                    <h3 className="m-0 text-[19px] font-extrabold">{g.title}</h3>
                                    <p className="m-0 text-sm leading-[1.9] text-[#6B7280]">{g.text}</p>
                                    {"proof" in g && (
                                        <div className="flex flex-col gap-1.5 mt-1.5">
                                            <a href={PROOF_REPO_URL} target="_blank" rel="noopener noreferrer" className="text-[13px] font-bold text-[#F0801A]">الكود على GitHub</a>
                                            <a href={ARTICLE_URL} target="_blank" rel="noopener noreferrer" className="text-[13px] font-bold text-[#F0801A]">المقال الكامل</a>
                                        </div>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Footer */}
                <footer className="relative px-5 py-7 border-t border-[#EEF2F8] flex flex-col items-center gap-4">
                    <div className="flex flex-wrap gap-3 justify-center">
                        <a href={WHATSAPP_URL} aria-label="واتساب" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center"><WhatsAppIcon size={22} /></a>
                        <a href={INSTAGRAM_URL} aria-label="إنستغرام" target="_blank" rel="noopener noreferrer" className={iconBtn}>
                            <svg {...strokeIcon}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
                        </a>
                        <a href={`mailto:${CONTACT_EMAIL}`} aria-label="بريد إلكتروني" className={iconBtn}>
                            <svg {...strokeIcon}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
                        </a>
                        <a href={GITHUB_URL} aria-label="GitHub" target="_blank" rel="noopener noreferrer" className={iconBtn}>
                            <svg {...strokeIcon}><path d="M16 22v-3.5a3 3 0 0 0-.9-2.2c3-.3 6-1.4 6-6.5a5 5 0 0 0-1.4-3.5 4.6 4.6 0 0 0-.1-3.5s-1.1-.3-3.6 1.4a12.3 12.3 0 0 0-6.4 0C7.1 2.5 6 2.8 6 2.8a4.6 4.6 0 0 0-.1 3.5A5 5 0 0 0 4.5 9.8c0 5.1 3 6.2 6 6.5a3 3 0 0 0-.9 2.2V22" /></svg>
                        </a>
                        <a href={LINKEDIN_URL} aria-label="لينكدإن" target="_blank" rel="noopener noreferrer" className={iconBtn}>
                            <svg {...strokeIcon}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4" /></svg>
                        </a>
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs text-[#6B7280]">
                        <span>سيد إسماعيل، 2026</span><span>الفحص المجاني إرشادي وليس شهادة اعتماد</span>
                    </div>
                </footer>
            </div>
        </div>
    );
}
