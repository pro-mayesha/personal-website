import {
  ArrowUpRight,
  Calendar,
  Compass,
  Folders,
  MessageCircle,
  PenLine,
  Search,
  Sparkles,
  Users,
} from "lucide-react";

const ICONS = {
  Users,
  Sparkles,
  Search,
  Calendar,
  MessageCircle,
  Compass,
  Folders,
  PenLine,
};

function FeatureIcon({ name }) {
  const Icon = ICONS[name] || Sparkles;
  return <Icon size={15} strokeWidth={1.75} aria-hidden />;
}

/**
 * Large product platform card for AbroadMates / ApplicationMate.
 * Entire card is a link; keep academic/editorial, not startup-landing.
 */
export function ProductPlatformCard({ product }) {
  const href = product.links?.website || "";
  if (!href || href === "#") return null;

  const MainIcon = ICONS[product.icon] || Sparkles;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${product.title} — learn more`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border-[1.5px] border-line bg-white shadow-[0_2px_10px_rgba(55,35,30,0.05)] transition-all duration-200 hover:-translate-y-1 hover:border-terracotta/70 hover:shadow-[0_10px_24px_rgba(55,35,30,0.09)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
    >
      <div className="h-[3px] w-full bg-terracotta" aria-hidden />

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <span
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-terracotta"
              aria-hidden
            >
              <MainIcon size={26} strokeWidth={1.6} />
            </span>
            <div>
              <h3 className="font-garamond text-[26px] font-semibold leading-tight text-ink md:text-[28px]">
                {product.title}
              </h3>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                {product.type}
              </p>
            </div>
          </div>
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-terracotta/35 text-terracotta transition-colors group-hover:border-terracotta group-hover:bg-terracotta group-hover:text-white"
            aria-hidden
          >
            <ArrowUpRight size={16} />
          </span>
        </div>

        <p className="mt-5 text-[15px] leading-relaxed text-ink/75">{product.summary}</p>

        <div className="mt-5 border-t border-line pt-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">What we do</p>
          <ul className="mt-3 space-y-3.5">
            {product.features?.map((feature) => (
              <li key={feature.title} className="flex gap-3">
                <span
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-terracotta"
                  aria-hidden
                >
                  <FeatureIcon name={feature.icon} />
                </span>
                <div>
                  <p className="text-[14px] font-semibold text-ink">{feature.title}</p>
                  <p className="mt-0.5 text-[13px] leading-relaxed text-ink/65">{feature.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {product.researchSetting ? (
          <div className="mt-5 rounded-xl border border-terracotta/25 bg-[#fff8f5] px-4 py-3.5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-terracotta">
              Research setting
            </p>
            <p className="mt-1.5 text-[13px] leading-relaxed text-ink/75">{product.researchSetting}</p>
          </div>
        ) : null}

        <span className="card-link mt-5 inline-flex items-center gap-1 text-[13px] font-medium">
          Learn more <ArrowUpRight size={14} aria-hidden />
        </span>
      </div>
    </a>
  );
}
