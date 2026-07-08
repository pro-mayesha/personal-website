import { AcademicTag } from "./AcademicTag";

export function TimelineItem({ period, degree, institution, detail, tags = [] }) {
  return (
    <article className="relative border-l-2 border-terracotta/20 pl-6">
      <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-terracotta" aria-hidden />
      <time className="font-mono text-[11px] uppercase tracking-widest text-muted">{period}</time>
      <h3 className="mt-1 font-garamond text-[18px] font-semibold text-ink">{degree}</h3>
      <p className="font-garamond text-[15px] font-medium text-terracotta/90">{institution}</p>
      <p className="mt-2 font-garamond text-[15px] leading-relaxed text-ink/70">{detail}</p>
      {tags.length > 0 ? (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <AcademicTag key={tag}>{tag}</AcademicTag>
          ))}
        </div>
      ) : null}
    </article>
  );
}
