import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CategoryTag } from "./CategoryTag";

export function ProjectCard({ project }) {
  const href = project.links?.website || project.links?.notes || "";
  const hasLink = href && href !== "#";
  const isExternal = href.startsWith("http");
  const myWork = project.myWork || project.whatIBuilt || "";
  const researchValue = project.researchValue || "";

  const arrow = hasLink ? (
    isExternal ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 text-terracotta/50 transition-colors hover:text-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
        aria-label={`Open ${project.title}`}
      >
        <ArrowUpRight size={18} />
      </a>
    ) : (
      <Link
        href={href}
        className="shrink-0 text-terracotta/50 transition-colors hover:text-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
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

      {myWork || researchValue ? (
        <dl className="mt-3 space-y-2 border-t border-line pt-3 text-[13px]">
          {myWork ? (
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">My work</dt>
              <dd className="mt-0.5 text-ink/80">{myWork}</dd>
            </div>
          ) : null}
          {researchValue ? (
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">Research value</dt>
              <dd className="mt-0.5 text-ink/80">{researchValue}</dd>
            </div>
          ) : null}
        </dl>
      ) : null}

      {project.tags?.length ? (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <CategoryTag key={tag}>{tag}</CategoryTag>
          ))}
        </div>
      ) : null}
    </article>
  );
}
