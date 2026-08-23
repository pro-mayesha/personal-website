import { ExternalLink } from "lucide-react";
import { CategoryTag } from "./CategoryTag";

function formatDate(iso) {
  if (!iso) return "";
  const d = new Date(`${iso}T12:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

/**
 * Editorial card for a published Medium essay (external link only).
 * Visually distinct from internal research-notebook folder cards.
 */
export function MediumArticleCard({ article }) {
  const minutes = article.readingMinutes || 1;

  return (
    <article className="group flex h-full flex-col border-b border-line pb-5 pt-1 md:border-b-0 md:border-l md:border-line/80 md:pb-0 md:pl-5 md:pt-0">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-muted">
        {article.date ? <time dateTime={article.date}>{formatDate(article.date)}</time> : null}
        <span aria-hidden className="text-line">
          ·
        </span>
        <span>
          {minutes} min read
        </span>
      </div>

      <h3 className="mt-2 font-article text-[20px] font-semibold leading-snug text-ink transition-colors group-hover:text-terracotta md:text-[22px]">
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
        >
          {article.title}
        </a>
      </h3>

      {article.subtitle ? (
        <p className="mt-1 font-article text-[16px] italic leading-snug text-terracotta/85">{article.subtitle}</p>
      ) : null}

      {article.excerpt ? (
        <p className="mt-2 flex-1 font-article text-[17px] leading-relaxed text-ink/70">{article.excerpt}</p>
      ) : null}

      {article.tags?.length ? (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {article.tags.map((tag) => (
            <CategoryTag key={tag}>{tag}</CategoryTag>
          ))}
        </div>
      ) : null}

      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-terracotta transition-colors hover:text-terracottaDark"
      >
        Read article
        <ExternalLink size={13} aria-hidden />
      </a>
    </article>
  );
}
