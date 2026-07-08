import Link from "next/link";
import { ExternalLink, FileText, Github } from "lucide-react";
import { CategoryTag } from "./CategoryTag";
import { StatusTag } from "./StatusTag";

function ResearchLink({ href, icon: Icon, label }) {
  if (!href || href === "#") {
    return (
      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-ink/25">
        <Icon size={12} aria-hidden />
        {label}
      </span>
    );
  }
  const className =
    "inline-flex items-center gap-1 text-[11px] font-medium text-terracotta transition-colors hover:text-terracottaDark";
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        <Icon size={12} aria-hidden />
        {label}
      </Link>
    );
  }
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      <Icon size={12} aria-hidden />
      {label}
    </a>
  );
}

export function ResearchCard({ item, wide = false }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border-[1.5px] border-line bg-white p-5 shadow-[0_2px_10px_rgba(55,35,30,0.05)]">
      <StatusTag status={item.status} />

      <h3 className="mt-3 font-garamond text-[18px] font-semibold leading-snug text-ink">{item.title}</h3>

      {item.summary ? (
        <p className={`mt-2 text-[14px] leading-relaxed text-ink/70 ${wide ? "" : "flex-1"}`}>{item.summary}</p>
      ) : null}

      <div className={`mt-3 grid gap-3 ${wide ? "sm:grid-cols-2" : ""}`}>
        {item.role ? (
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">My role</p>
            <p className="mt-0.5 text-[13px] text-ink/80">{item.role}</p>
          </div>
        ) : null}
        {item.methods?.length ? (
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">Methods</p>
            <p className="mt-0.5 text-[13px] text-ink/80">{item.methods.join(" · ")}</p>
          </div>
        ) : null}
      </div>

      {item.tags?.length ? (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <CategoryTag key={tag}>{tag}</CategoryTag>
          ))}
        </div>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-4 border-t border-line pt-3">
        <ResearchLink href={item.links?.paper} icon={FileText} label="Paper" />
        <ResearchLink href={item.links?.github} icon={Github} label="GitHub" />
        <ResearchLink href={item.links?.notes} icon={ExternalLink} label="Notes" />
      </div>
    </article>
  );
}
