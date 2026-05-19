import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NotebookStoryCard } from "../blog/NotebookStoryCard.jsx";
import { getAllBlogPosts } from "../blog/blogStorage.js";

export function BlogIndexPage() {
  const [posts, setPosts] = useState(() => getAllBlogPosts());

  useEffect(() => {
    const onChange = () => setPosts(getAllBlogPosts());
    window.addEventListener("proma-posts-changed", onChange);
    return () => window.removeEventListener("proma-posts-changed", onChange);
  }, []);

  return (
    <div className="space-y-24 md:space-y-28">
      <section className="w-full max-w-[900px] mx-auto scroll-mt-28 px-6 pt-20 lg:px-0">
        <div className="mb-8 flex items-baseline gap-3">
          <h1 className="font-hand text-[32px] font-bold text-terracotta md:text-[40px]">Blog — notes from the notebook</h1>
          <div className="h-[2px] flex-1 self-center bg-terracotta/20" />
          <Link to="/" className="shrink-0 font-hand text-[16px] text-terracotta/70 transition-colors hover:text-terracotta">
            home →
          </Link>
        </div>
        <p className="font-garamond text-[18px] italic leading-relaxed text-ink/65">
          Every post uses the same ruled layout as the story on the home page — margin notes, pull quote, and sign-off.
        </p>
        <p className="mt-3 font-mono text-[10px] text-ink/35">
          <Link to="/admin" className="text-terracotta/70 hover:text-terracotta hover:underline">
            write / edit notes (admin)
          </Link>
        </p>
      </section>

      {posts.map((post) => {
        const preview = post.paragraphs.length > 2 ? post.paragraphs.slice(0, 2) : post.paragraphs;
        const hasMore = post.paragraphs.length > preview.length;
        return (
          <section key={post.id} className="w-full max-w-[900px] mx-auto scroll-mt-28 px-6 lg:px-0">
            <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3">
              <div className="flex min-w-0 flex-1 items-baseline gap-3">
                <h2 className="font-hand text-[28px] font-bold leading-tight text-terracotta md:text-[34px]">{post.title}</h2>
                <div className="h-[2px] flex-1 self-center bg-terracotta/20" />
              </div>
              <span className="font-mono text-[10px] tracking-widest text-ink/35">{post.date}</span>
            </div>

            <NotebookStoryCard
              paragraphs={preview}
              pullQuote={hasMore ? "" : post.pullQuote}
              signature={post.signature}
              signatureMeta={post.signatureMeta}
            />

            {hasMore ? (
              <div className="mt-6 text-center">
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-block border-b-2 border-[rgba(204,66,44,0.40)] pb-0.5 font-hand text-[20px] text-terracotta transition-colors hover:border-terracotta"
                >
                  read full note →
                </Link>
              </div>
            ) : (
              <div className="mt-6 text-center">
                <Link
                  to={`/blog/${post.slug}`}
                  className="font-hand text-[17px] text-terracotta/60 hover:text-terracotta"
                >
                  open as page →
                </Link>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
