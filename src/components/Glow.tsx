/** Static decorative purple glow for page bands (no animation). */
export default function Glow({ className = "" }: { className?: string }) {
    return <div aria-hidden="true" className={`pointer-events-none absolute w-[520px] h-[520px] rounded-full ${className}`} style={{ background: "radial-gradient(circle, rgba(124,77,255,.14), transparent 65%)" }} />;
}
