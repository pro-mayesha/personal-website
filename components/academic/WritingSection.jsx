"use client";

import { useEffect, useState } from "react";
import { MediumArticleCard } from "./MediumArticleCard";
import { ResearchNotebookPreview } from "./ResearchNotebookPreview";
import { SectionHeader } from "./SectionHeader";
import { mediumArticlesFallback, mediumProfile, shortBlogs } from "@/lib/content/medium";
import { academic } from "@/lib/content/academic";

const PREVIEW_COUNT = 3;

function formatLoadingPlaceholders(count = 3) {
  return Array.from({ length: count }, (_, i) => i);
}

/**
 * Writing & Research Notes — Medium essays first (preview + expand), then notebook.
 * Full essay bodies stay on Medium; this page only lists cards and excerpts.
 */
export function WritingSection() {
  const [articles, setArticles] = useState(mediumArticlesFallback);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/medium");
        if (!res.ok) throw new Error("Failed to load Medium feed");
        const data = await res.json();
        if (!cancelled && Array.isArray(data.articles) && data.articles.length) {
          setArticles(data.articles);
        }
      } catch {
        if (!cancelled) setArticles(mediumArticlesFallback);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const visible = expanded ? articles : articles.slice(0, PREVIEW_COUNT);
  const hasMore = articles.length > PREVIEW_COUNT;

  return (
    <section>
      <SectionHeader id="writing" title="Writing & Research Notes" />
      {academic.writingIntro ? (
        <p className="mb-10 max-w-3xl text-[15px] leading-relaxed text-ink/70">{academic.writingIntro}</p>
      ) : null}

      {/* A. Short Blogs on AI & Technology */}
      <div className="mb-12">
        <div className="mb-2 flex flex-wrap items-center gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
            {shortBlogs.label}
          </p>
          <span className="rounded-full border border-terracotta/30 bg-terracotta/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-terracotta">
            {mediumProfile.label}
          </span>
        </div>
        <h3 className="font-garamond text-[22px] font-semibold text-ink md:text-[24px]">
          {shortBlogs.title}
        </h3>
        <p className="mt-2 max-w-3xl text-[14.5px] leading-relaxed text-ink/70">{shortBlogs.intro}</p>

        <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {loading
            ? formatLoadingPlaceholders(PREVIEW_COUNT).map((i) => (
                <div
                  key={i}
                  className="h-40 animate-pulse rounded-lg bg-line/40"
                  aria-hidden
                />
              ))
            : visible.map((article) => (
                <MediumArticleCard key={article.url} article={article} />
              ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
          {!loading && hasMore ? (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="text-[14px] font-medium text-terracotta transition-colors hover:text-terracottaDark"
            >
              {expanded ? "Show less" : `Read more (${articles.length - PREVIEW_COUNT} more)`}
            </button>
          ) : null}
          <a
            href={mediumProfile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[14px] font-medium text-terracotta transition-colors hover:text-terracottaDark"
          >
            {mediumProfile.viewAllLabel}
          </a>
        </div>
      </div>

      {/* B. AI & Education Reflections */}
      <div>
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
          Research Notebook
        </p>
        <h3 className="mb-4 font-garamond text-[22px] font-semibold text-ink md:text-[24px]">
          AI &amp; Education Reflections
        </h3>
        <ResearchNotebookPreview />
      </div>
    </section>
  );
}
