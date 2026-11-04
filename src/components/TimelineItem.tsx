"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function TimelineItem({ children, className = "", fromEnd = false }: { children: ReactNode; className?: string; fromEnd?: boolean }) {
    const ref = useRef<HTMLLIElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el || typeof IntersectionObserver === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        el.classList.add("rv-pre");
        const io = new IntersectionObserver((entries) => {
            if (entries.some((e) => e.isIntersecting)) {
                el.classList.add("rv-show");
                io.disconnect();
            }
        }, { threshold: 0.12 });
        io.observe(el);
        return () => io.disconnect();
    }, []);
    return <li ref={ref} className={`${className} ${fromEnd ? "rv-end" : "rv-start"}`}>{children}</li>;
}
