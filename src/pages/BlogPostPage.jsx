import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { NotebookStoryCard } from "../blog/NotebookStoryCard.jsx";
import { getPostBySlug } from "../blog/blogStorage.js";

export function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(() => (slug ? getPostBySlug(slug) : null));

  useEffect(() => {
    const onChange = () => setPost(slug ? getPostBySlug(slug) : null);
    window.addEventListener("proma-posts-changed", onChange);
    return () => window.removeEventListener("proma-posts-changed", onChange);
  }, [slug]);

  if (!slug) return <Navigate to="/blog" replace />;

  if (!post) {
    return (
      <section className="mx-auto max-w-[900px] px-6 pt-24 lg:px-0">
        <p className="font-garamond text-lg text-ink/70">This note doesn’t exist (or was removed).</p>
        <Link to="/blog" className="mt-4 inline-block font-hand text-xl text-terracotta hover:underline">
          ← Back to blog
        </Link>
      </section>
    );
  }

  return (
    <article className="mx-auto max-w-[900px] space-y-8 px-6 pb-24 pt-20 lg:px-0">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link to="/blog" className="font-hand text-[18px] text-terracotta/70 transition-colors hover:text-terracotta">
          ← all notes
        </Link>
        <span className="font-mono text-[10px] tracking-widest text-ink/35">{post.date}</span>
      </div>

      <header>
        <div className="mb-8 flex items-baseline gap-3">
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
