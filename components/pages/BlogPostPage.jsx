"use client";

import Link from "next/link";
import { BLOG_CATEGORIES, formatThoughtDate, normalizePostCategory } from "@/lib/blog/blogCategories";
import { NotebookStoryCard } from "@/lib/blog/NotebookStoryCard";
import { useBlogPost } from "@/lib/blog/useBlogPosts";

export default function BlogPostPage({ slug }) {
  const { post, loading } = useBlogPost(slug);

  if (!slug) {
    return (
      <section className="article-column pt-8">
        <Link href="/thoughts" className="article-meta hover:text-terracotta">
          ← Thoughts
        </Link>
      </section>
    );
  }

  if (loading && !post) {
    return (
      <section className="article-column pt-8">
        <p className="article-body">Opening the note…</p>
      </section>
    );
  }

  if (!post) {
    return (
      <section className="article-column pt-8">
        <p className="article-body">This note does not exist (or was removed).</p>
        <Link href="/thoughts" className="mt-4 inline-block article-meta hover:text-terracotta">
          ← Thoughts
        </Link>
      </section>
    );
  }

  const categoryId = normalizePostCategory(post);
  const category = BLOG_CATEGORIES[categoryId];

  return (
    <article className="article-column pb-12 pt-8">
      <p className="article-meta">
        <Link href="/thoughts" className="hover:text-terracotta">
          Thoughts
        </Link>
        {category ? ` · ${category.label}` : ""}
      </p>
      <time className="article-meta mt-2 block" dateTime={post.date}>
        {formatThoughtDate(post.date)}
      </time>

      <h1 className="article-title mt-5">{post.title}</h1>

      <div className="mt-6">
        <NotebookStoryCard
          paragraphs={post.paragraphs}
          pullQuote={post.pullQuote}
          signature={post.signature}
          signatureMeta={post.signatureMeta}
        />
      </div>
    </article>
  );
}
