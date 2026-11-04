import type { Metadata } from "next";
import MigrationLeadForm from "@/components/MigrationLeadForm";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/data/migration";
import { InstagramIcon, WhatsAppIcon } from "@/components/Icons";

export const metadata: Metadata = {
    title: "تحديث المواقع والأنظمة القديمة",
    description: "ننقل موقعك من فيو أو نكست القديم إلى أحدث إصدار دون توقف، بخطة واضحة.",
    openGraph: {
        title: "تحديث المواقع والأنظمة القديمة | Sayed Esmail",
        description: "ننقل موقعك من فيو أو نكست القديم إلى أحدث إصدار دون توقف، بخطة واضحة.",
        type: "website",
        locale: "ar_EG",
    },
};

const svgProps = { width: 34, height: 34, viewBox: "0 0 24 24", fill: "none", stroke: "#F0801A", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;

const gets = [
    {
        title: "يعمل أثناء النقل",
        text: "موقعك لا يتوقف لحظة.",
        icon: <svg {...svgProps}><path d="M21 12a9 9 0 0 1-15.5 6.2M3 12a9 9 0 0 1 15.5-6.2" /><path d="M21 4v5h-5M3 20v-5h5" /></svg>,
    },
    {
        title: "اختبارات قبل التسليم",
        text: "تتأكد أن كل شيء يعمل كما كان.",
        icon: <svg {...svgProps}><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" /></svg>,
    },
    {
        title: "خطة واضحة",
        text: "تعرف الخطوات قبل أن نبدأ.",
        icon: <svg {...svgProps}><path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" /><path d="M9 4v14M15 6v14" /></svg>,
    },
];

export default function MigrationPage() {
    return (
        <div dir="rtl" lang="ar" className="ar relative overflow-hidden bg-[#0B0D12] text-[#F3F4F6]">
            <div aria-hidden="true" className="absolute -top-[120px] -left-20 w-[520px] h-[520px] rounded-full opacity-35" style={{ background: "radial-gradient(circle,#F0801A 0%,transparent 65%)", animation: "glow 6s infinite" }} />
            <div aria-hidden="true" className="absolute top-[420px] -right-40 w-[480px] h-[480px] rounded-full opacity-25" style={{ background: "radial-gradient(circle,#7C4DFF 0%,transparent 65%)" }} />

            <section aria-labelledby="migration-title" className="relative max-w-[1280px] mx-auto px-4 md:px-20 pt-10 pb-2 flex flex-col items-center text-center gap-3.5">
                <h1 id="migration-title" className="rise m-0 text-[32px] md:text-[42px] leading-[1.45] font-extrabold max-w-[860px]">
                    تحديث المواقع والأنظمة <span className="inline-block border-b-[6px] border-[#F0801A] leading-none">القديمة</span>
                </h1>
                <p className="m-0 text-[17px] md:text-lg leading-[1.8] text-[#9AA3B2] max-w-[620px]">
                    ننقل مشروعك من فيو أو نكست القديم إلى أحدث إصدار، دون توقف.
                </p>
            </section>

            <section className="relative max-w-[1280px] mx-auto px-4 md:px-20 pt-7 pb-8 flex justify-center">
                <div className="w-full max-w-[560px] box-border border-2 border-[#F0801A] rounded-[20px] p-5 sm:p-8 bg-[#12151C] shadow-[0_24px_60px_rgba(240,128,26,.18)] flex flex-col gap-4">
                    <MigrationLeadForm />
                    <div className="flex items-center gap-3 text-[#9AA3B2] text-[13px]">
                        <span className="flex-1 h-px bg-[#232836]" /><span>أو تواصل مباشرة</span><span className="flex-1 h-px bg-[#232836]" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-[11px] rounded-[10px] font-bold text-sm">
                            <WhatsAppIcon size={18} />واتساب
                        </a>
                        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border-[1.5px] border-[#F3F4F6] text-[#F3F4F6] px-4 py-2.5 rounded-[10px] font-bold text-sm">
                            <InstagramIcon size={18} />إنستغرام
                        </a>
                    </div>
                </div>
            </section>

            <section aria-label="ماذا يصلك" className="relative max-w-[1280px] mx-auto px-4 md:px-20 pt-6 pb-14">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {gets.map((g) => (
                        <article key={g.title} className="bg-[#12151C] rounded-[20px] border border-[#232836] p-7 flex flex-col gap-[18px] items-start">
                            <div className="w-[76px] h-[76px] rounded-full bg-[#2A1B0C] shadow-[0_0_0_8px_#1A130B] flex items-center justify-center shrink-0">{g.icon}</div>
                            <div className="flex flex-col gap-1.5">
                                <h3 className="m-0 text-[19px] font-extrabold">{g.title}</h3>
                                <p className="m-0 text-sm leading-[1.9] text-[#9AA3B2]">{g.text}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
