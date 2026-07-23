import { CategoryTag } from "./CategoryTag";

function formatPeriod(period, startDate, endDate) {
  if (period) return period;
  if (startDate && endDate) return `${startDate} — ${endDate}`;
  if (startDate) return `${startDate} — Present`;
  return endDate || "";
}

export function TimelineItem({
  period,
  startDate,
  endDate,
  degree,
  role,
  institution,
  organization,
  location,
  detail,
  description,
  bullets = [],
  tags = [],
}) {
  const heading = degree || role;
  const place = institution || organization;
  const text = detail || description;
  const when = formatPeriod(period, startDate, endDate);
  const meta = [when, location].filter(Boolean).join(" · ");

  return (
    <article className="relative border-l-2 border-terracotta/35 pl-4 pb-0.5">
      <span className="absolute -left-[6px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-terracotta" aria-hidden />
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
        <h3 className="font-garamond text-[16px] font-semibold leading-snug text-ink">{heading}</h3>
        {meta ? <time className="text-[11px] font-medium text-muted">{meta}</time> : null}
      </div>
      {place ? <p className="text-[13px] font-medium text-terracotta/90">{place}</p> : null}
      {text ? <p className="mt-1 text-[13.5px] leading-relaxed text-ink/70">{text}</p> : null}
      {bullets.length > 0 ? (
        <ul className="mt-1.5 space-y-0.5">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2 text-[13px] leading-relaxed text-ink/70">
              <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-terracotta/60" aria-hidden />
              {bullet}
            </li>
          ))}
        </ul>
      ) : null}
      {tags.length > 0 ? (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <CategoryTag key={tag}>{tag}</CategoryTag>
          ))}
        </div>
      ) : null}
    </article>
  );
}
