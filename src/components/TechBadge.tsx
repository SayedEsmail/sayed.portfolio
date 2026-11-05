import { tagCls } from "./ui";

interface TechBadgeProps {
    name: string;
}

export default function TechBadge({ name }: TechBadgeProps) {
    return <span className={`inline-block select-none ${tagCls}`}>{name}</span>;
}
