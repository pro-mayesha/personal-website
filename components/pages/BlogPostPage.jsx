"use client";

import Link from "next/link";
import { BLOG_CATEGORIES, normalizePostCategory } from "@/lib/blog/blogCategories";
import { NotebookStoryCard } from "@/lib/blog/NotebookStoryCard";
import { useBlogPost } from "@/lib/blog/useBlogPosts";

export default function BlogPostPage({ slug }) {
  const { post, loading } = useBlogPost(slug);

  if (!slug) {
    return (
      <section className="mx-auto max-w-[900px] px-6 pt-24 lg:px-0">
        <Link href="/notes" className="font-hand text-xl text-terracotta hover:underline">
          ← Back to notes
        </Link>
      </section>
    );
  }

  if (loading) {
    return (
      <section className="mx-auto max-w-[900px] px-6 pt-24 lg:px-0">
        <p className="font-garamond text-lg text-ink/70">Loading note…</p>
      </section>
    );
  }

  if (!post) {
    return (
      <section className="mx-auto max-w-[900px] px-6 pt-24 lg:px-0">
        <p className="font-garamond text-lg text-ink/70">This note doesn’t exist (or was removed).</p>
        <Link href="/notes" className="mt-4 inline-block font-hand text-xl text-terracotta hover:underline">
          ← Back to notes
        </Link>
      </section>
    );
  }

  const categoryId = normalizePostCategory(post);
  const category = BLOG_CATEGORIES[categoryId];

  return (
    <article className="mx-auto max-w-[900px] space-y-8 px-6 pb-24 pt-20 lg:px-0">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/notes" className="font-hand text-[18px] text-terracotta/70 transition-colors hover:text-terracotta">
            ← all notes
          </Link>
          <span className="text-ink/25">·</span>
          <Link
            href={`/notes#${category.anchor}`}
            className="font-hand text-[18px] text-terracotta/70 transition-colors hover:text-terracotta"
          >
            ← {category.label}
          </Link>
        </div>
        <time className="font-mono text-[10px] tracking-widest text-ink/35">{post.date}</time>
      </div>

      <header>
        <span className="mb-4 inline-block rounded-sm border border-[rgba(204,66,44,0.28)] bg-[#fff4ef] px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-terracotta">
          {category.tag}
        </span>
        <div className="flex items-baseline gap-3">
          <h1 className="font-hand text-[32px] font-bold leading-tight text-terracotta md:text-[40px]">{post.title}</h1>
          <div className="h-[2px] flex-1 self-center bg-terracotta/20" />
          <span className="font-hand text-lg text-ink/40">✍︎</span>
        </div>
      </header>

      <NotebookStoryCard
        paragraphs={post.paragraphs}
        pullQuote={post.pullQuote}
        signature={post.signature}
        signatureMeta={post.signatureMeta}
      />
    </article>
  );
}
