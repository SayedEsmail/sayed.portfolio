"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import type { Lang } from "@/data/i18n";

interface LangContextValue {
    lang: Lang;
    setLang: (lang: Lang) => void;
    canToggle: boolean;
}

const LangContext = createContext<LangContextValue>({ lang: "en", setLang: () => {}, canToggle: false });

const listeners = new Set<() => void>();
const subscribe = (cb: () => void) => {
    listeners.add(cb);
    return () => {
        listeners.delete(cb);
    };
};
const getSnapshot = (): Lang => {
    try {
        return localStorage.getItem("lang") === "ar" ? "ar" : "en";
    } catch {
        return "en";
    }
};
const getServerSnapshot = (): Lang => "en";

/**
 * Client-side language state. English is the default. The preference only affects the home page;
 * /migration is always Arabic and every other route is always English (LTR).
 */
export function LangProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const pref = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    const isHome = pathname === "/";
    const lang: Lang = isHome ? pref : pathname.startsWith("/migration") ? "ar" : "en";

    useEffect(() => {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }, [lang]);

    const setLang = useCallback((next: Lang) => {
        try {
            localStorage.setItem("lang", next);
        } catch {
            /* storage unavailable */
        }
        listeners.forEach((l) => l());
    }, []);

    const value = useMemo(() => ({ lang, setLang, canToggle: isHome }), [lang, setLang, isHome]);
    return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
