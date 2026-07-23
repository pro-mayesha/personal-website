import Link from "next/link";
import { ExternalLink, FileText, Github } from "lucide-react";
import { CategoryTag } from "./CategoryTag";
import { StatusTag } from "./StatusTag";

function ResearchLink({ href, icon: Icon, label }) {
  if (!href || href === "#") return null;

  const className =
    "inline-flex items-center gap-1 text-[11px] font-medium text-terracotta transition-colors hover:text-terracottaDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta";

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
  const hasLinks = Object.values(item.links || {}).some((href) => href && href !== "#");

  return (
    <article className="flex h-full flex-col rounded-2xl border-[1.5px] border-line bg-white p-5 shadow-[0_2px_10px_rgba(55,35,30,0.05)]">
      <StatusTag status={item.status} />

      <h3 className="mt-3 break-words font-garamond text-[18px] font-semibold leading-snug text-ink">
        {item.title}
      </h3>

      {item.summary ? (
        <p className={`mt-2 text-[14px] leading-relaxed text-ink/70 ${wide ? "" : "flex-1"}`}>{item.summary}</p>
      ) : null}

      {item.venue ? (
        <p className="mt-2 text-[12px] font-medium leading-relaxed text-terracotta">{item.venue}</p>
      ) : null}

      <div className={`mt-3 grid gap-3 ${wide ? "sm:grid-cols-2" : ""}`}>
        {item.role ? (
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">My role</p>
            <p className="mt-0.5 text-[13px] text-ink/80">{item.role}</p>
          </div>
        ) : null}
        {item.stage ? (
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">Current stage</p>
            <p className="mt-0.5 text-[13px] text-ink/80">{item.stage}</p>
          </div>
        ) : null}
        {item.methods?.length ? (
          <div className={wide ? "sm:col-span-2" : ""}>
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

      {hasLinks ? (
        <div className="mt-4 flex flex-wrap gap-4 border-t border-line pt-3">
          <ResearchLink
            href={item.links?.paper}
            icon={FileText}
            label={item.linkLabels?.paper || "Paper"}
          />
          <ResearchLink
            href={item.links?.github}
            icon={Github}
            label={item.linkLabels?.github || "GitHub"}
          />
          <ResearchLink
            href={item.links?.notes}
            icon={ExternalLink}
            label={item.linkLabels?.notes || "Notes"}
          />
        </div>
      ) : null}
    </article>
  );
}
