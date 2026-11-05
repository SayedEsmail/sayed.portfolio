import { h2Cls, lead } from "./ui";

interface SectionHeadingProps {
    id?: string;
    title: string;
    subtitle?: string;
    className?: string;
    level?: 1 | 2;
}

export default function SectionHeading({ id, title, subtitle, className = "", level = 2 }: SectionHeadingProps) {
    const Heading = level === 1 ? "h1" : "h2";
    return (
        <div className={`flex flex-col gap-3 max-w-[760px] ${className}`}>
            <Heading id={id} className={h2Cls}>{title}</Heading>
            {subtitle && <p className={lead}>{subtitle}</p>}
        </div>
    );
}
