import { ArrowUpRight, Building2 } from "lucide-react";

/**
 * Full-width parent-company strip for Products & Research Platforms.
 */
export function CompanyStrip({ company }) {
  const href = company.links?.website || "";
  if (!href || href === "#") return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${company.title} — visit website`}
      className="group flex flex-col gap-5 rounded-2xl border-[1.5px] border-line bg-[#fff8f5] p-5 shadow-[0_2px_10px_rgba(55,35,30,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-terracotta/70 hover:shadow-[0_8px_20px_rgba(55,35,30,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta sm:flex-row sm:items-center sm:gap-6 sm:p-6"
    >
      <div className="flex min-w-0 flex-1 items-start gap-4">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-terracotta"
          aria-hidden
        >
          <Building2 size={22} strokeWidth={1.75} />
        </span>
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-terracotta">
            Parent Company
          </p>
          <h3 className="mt-1 font-garamond text-[22px] font-semibold leading-tight text-ink">
            {company.title}
          </h3>
          <p className="mt-1.5 max-w-xl text-[14px] leading-relaxed text-ink/70">{company.summary}</p>
        </div>
      </div>

      <div className="grid min-w-0 flex-1 gap-4 sm:grid-cols-2 sm:gap-6">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">My role</p>
          <p className="mt-1 text-[13px] leading-relaxed text-ink/80">{company.myRole}</p>
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">Focus areas</p>
          <ul className="mt-1 space-y-0.5 text-[13px] leading-relaxed text-ink/80">
            {company.focusAreas?.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </div>

      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center self-end rounded-full border border-terracotta/40 text-terracotta transition-colors group-hover:border-terracotta group-hover:bg-terracotta group-hover:text-white sm:self-center"
        aria-hidden
      >
        <ArrowUpRight size={18} />
      </span>
    </a>
  );
}
