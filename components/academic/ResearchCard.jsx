import { ExternalLink, FileText, Github } from "lucide-react";
import Link from "next/link";
import { AcademicTag } from "./AcademicTag";
import { StatusTag } from "./StatusTag";

export function ResearchCard({ item }) {
  return (
    <article className="rounded-sm border-2 border-[rgba(204,66,44,0.22)] bg-paperSoft p-5 shadow-card md:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="max-w-xl font-garamond text-[19px] font-semibold leading-snug text-ink md:text-[21px]">
          {item.title}
        </h3>
        <StatusTag status={item.status} />
      </div>

      <p className="mt-3 font-garamond text-[15px] leading-relaxed text-ink/75">{item.summary}</p>

      <dl className="mt-4 space-y-2 border-t border-terracotta/10 pt-4 text-[14px]">
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">My role</dt>
          <dd className="mt-0.5 font-garamond text-ink/80">{item.role}</dd>
        </div>
        {item.methods?.length > 0 ? (
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">Methods</dt>
            <dd className="mt-1.5 flex flex-wrap gap-1.5">
              {item.methods.map((m) => (
                <AcademicTag key={m}>{m}</AcademicTag>
              ))}
            </dd>
          </div>
        ) : null}
      </dl>

      {item.bullets?.length > 0 ? (
        <ul className="mt-4 list-inside list-disc space-y-1.5 font-garamond text-[14px] leading-relaxed text-ink/70">
          {item.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-3 border-t border-terracotta/10 pt-4">
        <ResearchLink href={item.links?.paper} icon={FileText} label="Paper" />
        <ResearchLink href={item.links?.github} icon={Github} label="GitHub" />
        <ResearchLink href={item.links?.notes} icon={ExternalLink} label="Notes" internal />
      </div>
    </article>
  );
}

function ResearchLink({ href, icon: Icon, label, internal }) {
  if (!href || href === "#") {
    return (
      <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-ink/30">
        <Icon size={12} aria-hidden />
        {label}
      </span>
    );
  }
  const className =
    "inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-terracotta transition-colors hover:text-terracottaDark";
  if (internal || href.startsWith("/")) {
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
