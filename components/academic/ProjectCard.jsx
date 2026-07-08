import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CategoryTag } from "./CategoryTag";

export function ProjectCard({ project }) {
  const href = project.links?.website || project.links?.notes || "";
  const hasLink = href && href !== "#";
  const isExternal = href.startsWith("http");

  const arrow = hasLink ? (
    isExternal ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 text-terracotta/50 transition-colors hover:text-terracotta"
        aria-label={`Open ${project.title}`}
      >
        <ArrowUpRight size={18} />
      </a>
    ) : (
      <Link
        href={href}
        className="shrink-0 text-terracotta/50 transition-colors hover:text-terracotta"
        aria-label={`Open ${project.title}`}
      >
        <ArrowUpRight size={18} />
      </Link>
    )
  ) : null;

  return (
    <article className="flex h-full flex-col rounded-2xl border-[1.5px] border-line bg-white p-5 shadow-[0_2px_10px_rgba(55,35,30,0.05)]">
      <div className="flex items-start justify-between gap-2">
        <div>
          {project.type ? (
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">{project.type}</p>
          ) : null}
          <h3 className="font-garamond text-[18px] font-semibold text-ink">{project.title}</h3>
        </div>
        {arrow}
      </div>

      <p className="mt-2 flex-1 text-[14px] leading-relaxed text-ink/70">{project.summary}</p>

      <dl className="mt-3 space-y-1.5 border-t border-line pt-3 text-[13px]">
        {project.whatIBuilt ? (
          <div>
            <dt className="inline text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">Built </dt>
            <dd className="inline text-ink/80">{project.whatIBuilt}</dd>
          </div>
        ) : null}
        {project.whyItMatters ? (
          <div>
            <dt className="inline text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">Why </dt>
            <dd className="inline text-ink/80">{project.whyItMatters}</dd>
          </div>
        ) : null}
      </dl>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <CategoryTag key={tag}>{tag}</CategoryTag>
        ))}
      </div>
    </article>
  );
}
