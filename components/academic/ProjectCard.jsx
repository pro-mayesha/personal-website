import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AcademicTag } from "./AcademicTag";

export function ProjectCard({ project }) {
  const isExternal = project.href?.startsWith("http");
  const Wrapper = isExternal ? "a" : Link;
  const linkProps = isExternal
    ? { href: project.href, target: "_blank", rel: "noopener noreferrer" }
    : { href: project.href || "#" };

  return (
    <article className="flex h-full flex-col rounded-sm border-2 border-[rgba(204,66,44,0.22)] bg-paperSoft p-5 shadow-card">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-garamond text-[18px] font-semibold text-ink">{project.name}</h3>
        {project.href && project.href !== "#" ? (
          <Wrapper
            {...linkProps}
            className="shrink-0 text-terracotta/50 transition-colors hover:text-terracotta"
            aria-label={`Open ${project.name}`}
          >
            <ArrowUpRight size={18} />
          </Wrapper>
        ) : null}
      </div>

      <p className="mt-2 flex-1 font-garamond text-[15px] leading-relaxed text-ink/75">{project.description}</p>

      <div className="mt-4 space-y-2 border-t border-terracotta/10 pt-4 text-[14px]">
        <p>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Built </span>
          <span className="font-garamond text-ink/80">{project.built}</span>
        </p>
        <p>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Why </span>
          <span className="font-garamond text-ink/80">{project.why}</span>
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <AcademicTag key={tag}>{tag}</AcademicTag>
        ))}
      </div>
    </article>
  );
}
