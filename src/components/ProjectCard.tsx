import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";
import TechBadge from "./TechBadge";
import { card } from "./ui";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className={`${card} group relative overflow-hidden flex flex-col h-full`}>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-[20px] bg-[#0F1218]">
                <Image
                    src={project.heroImage}
                    alt={`${project.title} Screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.03]"
                />
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#12151C] to-transparent" />
            </div>
            <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-center justify-between gap-4 text-[11px] text-[#9AA3B2]">
                    <span className="text-[#F0801A] font-bold uppercase tracking-[.08em]">{project.role}</span>
                    <span>0{project.order}</span>
                </div>
                <h3 className="m-0 text-2xl font-extrabold text-[#F3F4F6]">
                    <Link href={`/projects/${project.slug}`}>
                        <span className="absolute inset-0" aria-hidden="true" />
                        {project.title}
                    </Link>
                </h3>
                <p className="m-0 text-sm leading-[1.8] text-[#C9D0DC] line-clamp-3">{project.subtitle}</p>
                <div className="flex flex-wrap gap-2 pt-2 mt-auto">
                    {project.tags.slice(0, 4).map((tag) => <TechBadge key={tag} name={tag} />)}
                    {project.tags.length > 4 && <span className="text-[11px] text-[#9AA3B2] self-center">+{project.tags.length - 4} more</span>}
                </div>
            </div>
        </div>
    );
}
