import Link from "next/link";
import { WhatsAppIcon } from "@/components/Icons";

const WA = "https://wa.me/201066293366";
const ARTICLE = "https://dev.to/sayedesmail/what-migrating-a-vuetify-2-dashboard-to-vue-3-actually-took-2nih";

const skills = ["Vue 3", "Nuxt", "Next.js", "TypeScript", "Vuetify", "Node.js", "RTL", "Accessibility"];

const stats = [
    { n: "+10", t: "سنوات خبرة" },
    { n: "4", t: "خدمات تعمل اليوم" },
    { n: "13", t: "كوميت في ترحيل Vue 3" },
    { n: "3", t: "منشورات وأعمال علنية" },
];

const svg = { width: 30, height: 30, viewBox: "0 0 24 24", fill: "none", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;

const services = [
    {
        title: "فحص متاجر سلة وزد",
        href: "https://sayed-hub.vercel.app/store-check",
        color: "#2F7CF6",
        external: true,
        icon: <svg {...svg} stroke="#2F7CF6"><path d="M3 9h18l-1.5 11h-15L3 9Z" /><path d="M8 9V6a4 4 0 0 1 8 0v3" /><path d="m9 14 2 2 4-4" /></svg>,
    },
    {
        title: "مقروء لإمكانية الوصول",
        href: "https://maqru.vercel.app/ar",
        color: "#17A36A",
        external: true,
        icon: <svg {...svg} stroke="#17A36A"><circle cx="12" cy="12" r="3" /><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" /></svg>,
    },
    {
        title: "تحديث المواقع القديمة",
        href: "/migration",
        color: "#F0801A",
        external: false,
        icon: <svg {...svg} stroke="#F0801A"><path d="M21 12a9 9 0 0 1-15.5 6.2M3 12a9 9 0 0 1 15.5-6.2" /><path d="M21 4v5h-5M3 20v-5h5" /></svg>,
    },
    {
        title: "نَمو لإدارة الحضانات",
        href: "https://namu-nursery.vercel.app",
        color: "#7C4DFF",
        external: true,
        icon: <svg {...svg} stroke="#7C4DFF"><path d="M12 22V12M12 12c-4 0-7-3-7-7 4 0 7 3 7 7Zm0 0c4 0 7-3 7-7-4 0-7 3-7 7Z" /></svg>,
    },
];

const card = "pf-card bg-[#12151C] border border-[#232836] rounded-[20px]";

export default function Home() {
    return (
        <div dir="rtl" lang="ar" className="ar relative overflow-hidden bg-[#0B0D12] text-[#F3F4F6]">
            <div aria-hidden="true" className="absolute -top-[120px] -left-20 w-[520px] h-[520px] rounded-full opacity-35" style={{ background: "radial-gradient(circle,#F0801A 0%,transparent 65%)", animation: "glow 6s infinite" }} />
            <div aria-hidden="true" className="absolute top-[420px] -right-40 w-[480px] h-[480px] rounded-full opacity-25" style={{ background: "radial-gradient(circle,#7C4DFF 0%,transparent 65%)" }} />

            {/* Hero */}
            <section className="relative max-w-[1280px] mx-auto px-4 min-[900px]:px-20 pt-12 min-[900px]:pt-[72px] pb-14 grid grid-cols-1 min-[900px]:grid-cols-[1.1fr_1fr] gap-10 min-[900px]:gap-14 items-center">
                <div className="rise flex flex-col gap-5 min-w-0">
                    <span className="self-start bg-[#1B2030] border border-[#2A3040] text-[#F0801A] px-3.5 py-1.5 rounded-full text-[13px] font-bold">متاح لمشاريع جديدة</span>
                    <h1 className="m-0 text-[40px] sm:text-5xl min-[900px]:text-[64px] leading-[1.25] font-extrabold">
                        أنا <span className="text-[#F0801A]">سيد</span>،<br />
                        أبني مواقع <span className="inline-block border-b-[6px] border-[#F0801A] leading-none">تعمل</span> بإتقان
                    </h1>
                    <p className="m-0 text-[17px] sm:text-[19px] leading-[1.9] text-[#9AA3B2] max-w-[520px]">
                        مهندس برمجيات. أبني المتاجر والمنصات العربية، وأنقل المشاريع القديمة إلى أحدث إصدار.
                    </p>
                    <div className="flex flex-wrap gap-3.5 mt-2">
                        <a href="#work" className="bg-[#F0801A] text-white px-7 py-3.5 rounded-xl font-bold">شاهد أعمالي</a>
                        <a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border-[1.5px] border-[#2A3040] px-6 py-[13px] rounded-xl font-bold">
                            <WhatsAppIcon size={18} />تحدث معي
                        </a>
                    </div>
                </div>

                <div className="hero-art rise">
                    <div aria-hidden="true" className="hero-circle" />
                    <div className="hero-photo">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/me.svg" alt="سيد إسماعيل" className="w-full h-full object-cover" style={{ objectPosition: "50% 12%", filter: "contrast(1.06) saturate(1.05)" }} />
                    </div>
                    <div className="absolute top-5 right-0 bg-[#F0801A] text-white px-[18px] py-3 rounded-[14px] font-extrabold shadow-[0_12px_30px_rgba(240,128,26,.4)]" style={{ animation: "floaty 4s infinite" }}>Vue 3 ✓</div>
                    <div className="hero-badge-b bg-[#1B2030] border border-[#2A3040] px-[18px] py-3 rounded-[14px] font-extrabold" style={{ animation: "floaty 5s infinite .8s" }}>Accessible ♿</div>
                    <div aria-hidden="true" className="hero-code bg-[#12151C]/90 border border-[#232836] rounded-2xl px-4 py-3.5 shadow-[0_20px_50px_rgba(0,0,0,.5)]" style={{ animation: "floaty 6s infinite .3s" }}>
                        <div dir="ltr" className="text-left font-mono text-[13px] leading-[2] text-[#C9D0DC]">
                            <div><span className="text-[#7C4DFF]">const</span> sayed = {"{"}</div>
                            <div className="pl-5">role: <span className="text-[#17A36A]">&quot;Software Engineer&quot;</span>,</div>
                            <div className="pl-5">stack: [<span className="text-[#17A36A]">&quot;Vue&quot;</span>, <span className="text-[#17A36A]">&quot;Nuxt&quot;</span>, <span className="text-[#17A36A]">&quot;Next&quot;</span>],</div>
                            <div className="pl-5">builds: <span className="text-[#17A36A]">&quot;fast, accessible, Arabic-first&quot;</span>,</div>
                            <div className="pl-5">available: <span className="text-[#F0801A]">true</span><span className="inline-block w-2 h-4 bg-[#F0801A] ml-1 align-middle" style={{ animation: "blink 1s infinite" }} /></div>
                            <div>{"}"}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Marquee */}
            <section aria-label="المهارات" className="relative border-y border-[#232836] bg-[#0F1218] overflow-hidden py-[22px]">
                <div className="marquee-track">
                    {[...skills, ...skills].map((s, i) => (
                        <span key={i} aria-hidden={i >= skills.length ? true : undefined} className="px-[22px] py-2.5 border border-[#232836] rounded-full font-bold text-[#C9D0DC] whitespace-nowrap">{s}</span>
                    ))}
                </div>
            </section>

            {/* Stats */}
            <section className="relative max-w-[1280px] mx-auto px-4 min-[900px]:px-20 mt-14">
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
            <section id="work" className="relative max-w-[1280px] mx-auto px-4 min-[900px]:px-20 pt-[72px] pb-10 flex flex-col gap-7 scroll-mt-4">
                <h2 className="m-0 text-3xl sm:text-4xl font-extrabold">ماذا <span className="border-b-[6px] border-[#F0801A]">أقدم</span> لك؟</h2>
                <div className="grid grid-cols-1 min-[560px]:grid-cols-2 min-[1024px]:grid-cols-4 gap-5">
                    {services.map((s) => {
                        const inner = (
                            <>
                                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: `${s.color}22` }}>{s.icon}</div>
                                <h3 className="m-0 text-[19px] font-extrabold">{s.title}</h3>
                                <span className="font-bold text-sm" style={{ color: s.color }}>اعرف المزيد ←</span>
                            </>
                        );
                        const cls = `${card} p-7 flex flex-col gap-[18px]`;
                        return s.external ? (
                            <a key={s.title} href={s.href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
                        ) : (
                            <Link key={s.title} href={s.href} className={cls}>{inner}</Link>
                        );
                    })}
                </div>
            </section>

            {/* About */}
            <section id="about" className="relative max-w-[1280px] mx-auto px-4 min-[900px]:px-20 pt-10 pb-[72px] grid grid-cols-1 min-[900px]:grid-cols-2 gap-8 scroll-mt-4">
                <div className={`${card} p-8 flex flex-col gap-3`}>
                    <h3 className="m-0 text-2xl font-extrabold">نبذة</h3>
                    <p className="m-0 leading-[2] text-[#9AA3B2]">أكثر من 10 سنوات في بناء الواجهات والأنظمة. أهتم بسرعة الصفحة، وبأن يستخدمها كل إنسان، وبأن تعمل بالعربية كما يجب.</p>
                </div>
                <div id="articles" className={`${card} p-8 flex flex-col gap-3`}>
                    <h3 className="m-0 text-2xl font-extrabold">أحدث مقال</h3>
                    <p className="m-0 leading-[2] text-[#9AA3B2]">ماذا استغرق فعلاً ترحيل لوحة Vuetify 2 إلى Vue 3.</p>
                    <a href={ARTICLE} target="_blank" rel="noopener noreferrer" className="text-[#F0801A] font-bold">اقرأ المقال ←</a>
                </div>
            </section>
        </div>
    );
}
