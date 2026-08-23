"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { defaultBlogPosts } from "@/lib/blog/defaultBlogPosts";
import {
  BLOG_CATEGORIES,
  THOUGHT_FILTERS,
  formatThoughtDate,
  getFeaturedThought,
  getPostExcerpt,
  normalizePostCategory,
  sortThoughtsNewestFirst,
} from "@/lib/blog/blogCategories";
import { useBlogPosts } from "@/lib/blog/useBlogPosts";
import { mergeThoughtArchive } from "@/lib/content/thoughts";
import { noteFolders, researchNotes as staticResearchNotes } from "@/lib/content/notes";

export default function ThoughtsPage({ researchNotes = staticResearchNotes }) {
  const { posts } = useBlogPosts();
  const [filter, setFilter] = useState("all");

  const personal = posts.length ? posts : defaultBlogPosts;
  const archive = useMemo(
    () => mergeThoughtArchive(personal, researchNotes),
    [personal, researchNotes]
  );
  const featured = getFeaturedThought(archive);
  const sorted = useMemo(() => sortThoughtsNewestFirst(archive), [archive]);
  const latestThree = sorted.slice(0, 3);
  const visible = useMemo(() => {
    if (filter === "all") return sorted;
    return sorted.filter((p) => normalizePostCategory(p) === filter);
  }, [sorted, filter]);

  const paperNotes = sorted.filter((p) => normalizePostCategory(p) === "paper-notes");
  const questions = sorted.filter((p) => normalizePostCategory(p) === "research-questions");

  return (
    <article className="page-wrap pb-10 pt-8">
      <p className="meta-kicker">Thoughts</p>
      <h1 className="mt-2 font-display text-[36px] font-medium tracking-tight text-ink md:text-[44px]">
        Thoughts
      </h1>
      <p className="mt-3 max-w-2xl font-article text-[20px] leading-[1.65] text-ink/75">
        Personal writing, paper notes, and research questions.
      </p>

      <section className="mt-8 grid gap-3 sm:grid-cols-2">
        {noteFolders
          .filter((folder) => folder.id === "paper-notes" || folder.id === "research-questions")
          .map((folder) => {
            const count =
              folder.id === "paper-notes" ? paperNotes.length : questions.length;
            return (
              <Link
                key={folder.id}
                href={folder.href}
                className="border border-line bg-paperSoft p-4 transition-colors hover:border-terracotta/50"
              >
                <p className="font-sans text-[11px] uppercase tracking-[0.14em] text-terracotta">
                  {count} {count === 1 ? "note" : "notes"}
                </p>
                <h2 className="mt-2 font-display text-[22px] text-ink">{folder.title}</h2>
                <p className="mt-2 font-garamond text-[15px] leading-relaxed text-ink/65">
                  {folder.description}
                </p>
              </Link>
            );
          })}
      </section>

      {paperNotes.length === 0 && questions.length === 0 ? (
        <p className="mt-6 font-garamond italic text-ink/55">
          New reflections are being written.
        </p>
      ) : null}

      {featured ? (
        <section className="mt-8 border border-line bg-paperSoft p-4">
          <p className="font-sans text-[11px] uppercase tracking-[0.14em] text-muted">
            Featured recent thought
          </p>
          <h2 className="mt-3 font-display text-[28px] leading-snug text-ink">
            <Link href={`/notes/${featured.slug}`} className="hover:text-terracotta">
              {featured.title}
            </Link>
          </h2>
          <p className="mt-2 font-sans text-[13px] text-muted">
            {BLOG_CATEGORIES[normalizePostCategory(featured)]?.label}
            {featured.date ? ` · ${formatThoughtDate(featured.date)}` : ""}
          </p>
          <p className="mt-4 max-w-2xl font-article text-[19px] leading-[1.65] text-ink/70">
            {getPostExcerpt(featured, 240)}
          </p>
        </section>
      ) : null}

      <section className="mt-8">
        <h2 className="font-display text-[24px] text-ink">Three latest</h2>
        {latestThree.length === 0 ? (
          <p className="mt-4 font-garamond italic text-ink/55">New reflections are being written.</p>
        ) : (
          <ol className="mt-3 divide-y divide-line border-y border-line">
            {latestThree.map((post) => (
              <li key={post.id} className="py-3">
                <p className="section-date">
                  {BLOG_CATEGORIES[normalizePostCategory(post)]?.label} · {formatThoughtDate(post.date)}
                </p>
                <Link href={`/notes/${post.slug}`} className="font-display text-[20px] text-ink hover:text-terracotta">
                  {post.title}
                </Link>
              </li>
            ))}
          </ol>
        )}
      </section>

      <section className="mt-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-[24px] text-ink">Archive</h2>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter thoughts">
            {THOUGHT_FILTERS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={filter === tab.id}
                onClick={() => setFilter(tab.id)}
                className={`border px-3 py-1 font-sans text-[12px] ${
                  filter === tab.id
                    ? "border-terracotta bg-terracotta text-white"
                    : "border-line text-ink/70 hover:border-terracotta/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {visible.length === 0 ? (
          <p className="mt-8 font-garamond italic text-ink/55">New reflections are being written.</p>
        ) : (
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {visible.map((post) => {
              const category = BLOG_CATEGORIES[normalizePostCategory(post)];
              return (
                <li key={post.id} className="grid gap-1.5 py-3.5 md:grid-cols-[160px_1fr]">
                  <div className="section-date">
                    <time dateTime={post.date}>{formatThoughtDate(post.date)}</time>
                    <p className="mt-1 uppercase tracking-[0.12em]">{category?.label}</p>
                  </div>
                  <div>
                    <Link href={`/notes/${post.slug}`} className="font-display text-[22px] text-ink hover:text-terracotta">
                      {post.title}
                    </Link>
                    <p className="mt-2 font-article text-[17px] leading-relaxed text-ink/60">
                      {getPostExcerpt(post, 160)}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </article>
  );
}
