"use client";

import { useState, type FormEvent } from "react";

const ENDPOINT = "https://sayed-hub.vercel.app/api/lead";
type Status = "idle" | "sending" | "success" | "error";

const field =
    "w-full box-border px-3.5 py-[13px] border-[1.5px] border-[#2A3040] rounded-xl text-[15px] text-[#F3F4F6] bg-[#0F1218] focus:outline-none focus:border-[#F0801A] focus:ring-2 focus:ring-[#F0801A]/25";
const label = "text-sm font-bold";

function isValidUrl(value: string): boolean {
    try {
        const u = new URL(value);
        return u.protocol === "http:" || u.protocol === "https:";
    } catch {
        return false;
    }
}

export default function MigrationLeadForm() {
    const [status, setStatus] = useState<Status>("idle");
    const [error, setError] = useState("");

    async function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (status === "sending") return;
        const data = new FormData(e.currentTarget);
        const url = String(data.get("url") ?? "").trim();
        const email = String(data.get("email") ?? "").trim();
        const version = String(data.get("version") ?? "").trim();
        const note = String(data.get("message") ?? "").trim();
        const hp = String(data.get("_hp") ?? "");

        if (!isValidUrl(url)) {
            setError("أدخل رابطاً صحيحاً يبدأ بـ https://");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("أدخل بريداً إلكترونياً صحيحاً.");
            return;
        }
        setError("");
        setStatus("sending");
        const message = [version && `الإصدار الحالي: ${version}`, note].filter(Boolean).join("\n").slice(0, 1000);
        try {
            const res = await fetch(ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ project: "migration", url, email, message, _hp: hp }),
            });
            if (!res.ok) throw new Error(String(res.status));
            setStatus("success");
        } catch {
            setStatus("error");
        }
    }

    if (status === "success") {
        return (
            <div role="status" className="flex flex-col gap-3 text-center py-6">
                <h2 className="text-[22px] font-extrabold m-0">وصل طلبك</h2>
                <p className="m-0 text-sm leading-[1.9] text-[#9AA3B2]">
                    سأراجع مشروعك وأرد عليك خلال يوم عمل بما أراه من الخارج، بلا التزام.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4 m-0">
            <h2 className="m-0 text-[22px] font-extrabold">اطلب فحص مشروعك</h2>
            <div className="flex flex-col gap-1.5">
                <label htmlFor="mig-url" className={label}>رابط المستودع أو الموقع</label>
                <input id="mig-url" name="url" type="url" required placeholder="https://" dir="ltr" className={`${field} text-right`} />
            </div>
            <div className="flex flex-col gap-1.5">
                <label htmlFor="mig-ver" className={label}>الإصدار الحالي</label>
                <select id="mig-ver" name="version" className={field} defaultValue="Vue 2">
                    <option>Vue 2</option>
                    <option>Nuxt 2</option>
                    <option>Vuetify 2</option>
                    <option>غير متأكد</option>
                </select>
            </div>
            <div className="flex flex-col gap-1.5">
                <label htmlFor="mig-email" className={label}>البريد الإلكتروني</label>
                <input id="mig-email" name="email" type="email" required placeholder="name@example.com" dir="ltr" className={`${field} text-right`} />
            </div>
            {/* Honeypot: offscreen, not focusable, must stay empty */}
            <input
                name="_hp"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                defaultValue=""
                style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
            />
            {error && <p role="alert" className="m-0 text-sm font-semibold text-[#FF6B5E]">{error}</p>}
            {status === "error" && (
                <p role="alert" className="m-0 text-sm font-semibold text-[#FF6B5E]">
                    تعذر الإرسال الآن. حاول مرة أخرى أو راسلني على واتساب.
                </p>
            )}
            <button
                type="submit"
                disabled={status === "sending"}
                className="bg-[#F0801A] text-white border-0 px-5 py-3.5 rounded-[10px] font-bold text-base cursor-pointer font-[inherit] disabled:opacity-70 disabled:cursor-wait"
            >
                {status === "sending" ? "جارٍ الإرسال..." : "اطلب فحص مشروعك"}
            </button>
            <p className="m-0 text-[13px] leading-[1.8] text-[#9AA3B2]">
                لا نحتاج صلاحية على الكود قبل الاتفاق.
            </p>
        </form>
    );
}
