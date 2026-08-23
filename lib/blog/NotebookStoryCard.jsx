"use client";

/**
 * Medium-style reading column. Original note text is unchanged.
 */
export function NotebookStoryCard({
  paragraphs,
  pullQuote,
  signature,
  signatureMeta,
}) {
  return (
    <div className="article-body">
      {paragraphs.map((p, i) => (
        <p
          key={i}
          className={p.highlighted ? "rounded-sm bg-note/70 px-1" : undefined}
        >
          {p.text}
        </p>
      ))}

      {pullQuote ? (
        <blockquote className="mt-6 border-l-2 border-terracotta pl-5 font-article text-[22px] italic leading-snug text-ink/80">
          {pullQuote}
        </blockquote>
      ) : null}

      {signature ? (
        <p className="mt-8 font-article text-[18px] text-ink/60">
          {signature}
          {signatureMeta ? <span className="article-meta ml-3">{signatureMeta}</span> : null}
        </p>
      ) : null}
    </div>
  );
}
