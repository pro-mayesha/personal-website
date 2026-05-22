import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { BlogPostCard } from "../blog/BlogPostCard.jsx";
import { BLOG_CATEGORIES, groupPostsByCategory } from "../blog/blogCategories.js";
import { getAllBlogPosts } from "../blog/blogStorage.js";

function CategorySection({ categoryId, posts }) {
  const meta = BLOG_CATEGORIES[categoryId];
  if (posts.length === 0) {
    return (
      <section id={meta.anchor} className="scroll-mt-28">
        <div className="mb-6 flex items-baseline gap-3">
          <h2 className="font-hand text-[28px] font-bold text-terracotta md:text-[32px]">{meta.label}</h2>
          <div className="h-[2px] flex-1 self-center bg-terracotta/20" />
        </div>
        <p className="rounded-sm border border-dashed border-terracotta/25 bg-paperSoft/80 px-4 py-8 text-center font-garamond text-[16px] italic text-ink/50">
          No {meta.label.toLowerCase()} notes yet — check back soon.
        </p>
      </section>
    );
  }

  return (
    <section id={meta.anchor} className="scroll-mt-28">
      <div className="mb-3 flex flex-wrap items-end justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex items-baseline gap-3">
            <h2 className="font-hand text-[28px] font-bold text-terracotta md:text-[32px]">{meta.label}</h2>
            <div className="h-[2px] flex-1 self-center bg-terracotta/20" />
            <span className="font-mono text-[10px] tracking-widest text-ink/35">
              {posts.length} {posts.length === 1 ? "note" : "notes"}
            </span>
          </div>
          <p className="max-w-[560px] font-garamond text-[16px] leading-relaxed text-ink/60">{meta.description}</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

const FILTERS = [
  { id: "all", label: "All notes" },
  { id: "personal", label: BLOG_CATEGORIES.personal.label },
  { id: "research", label: BLOG_CATEGORIES.research.label },
];

export function BlogIndexPage() {
  const [posts, setPosts] = useState(() => getAllBlogPosts());
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const onChange = () => setPosts(getAllBlogPosts());
    window.addEventListener("proma-posts-changed", onChange);
    return () => window.removeEventListener("proma-posts-changed", onChange);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash === "personal" || hash === "research") {
      setFilter("all");
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, []);

  const grouped = useMemo(() => groupPostsByCategory(posts), [posts]);
  const counts = useMemo(
    () => ({
      all: posts.length,
      personal: grouped.personal.length,
      research: grouped.research.length,
    }),
    [posts.length, grouped]
  );

  return (
    <div className="pb-24">
      <section className="mx-auto w-full max-w-[900px] scroll-mt-28 px-6 pt-20 lg:px-0">
        <div className="mb-6 flex items-baseline gap-3">
          <h1 className="font-hand text-[32px] font-bold text-terracotta md:text-[40px]">Notes</h1>
          <div className="h-[2px] flex-1 self-center bg-terracotta/20" />
          <Link to="/" className="shrink-0 font-hand text-[16px] text-terracotta/70 transition-colors hover:text-terracotta">
            home →
          </Link>
        </div>
        <p className="max-w-[620px] font-garamond text-[18px] italic leading-relaxed text-ink/65">
          Personal stories and research writing live in separate lanes — pick a shelf, then open the note you want.
        </p>
        <p className="mt-3 font-mono text-[10px] text-ink/35">
          <Link to="/admin" className="text-terracotta/70 hover:text-terracotta hover:underline">
            admin dashboard
          </Link>
        </p>

        <div
          className="mt-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter notes by category"
        >
          {FILTERS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={filter === tab.id}
              onClick={() => setFilter(tab.id)}
              className={`rounded-sm border-2 px-4 py-2 font-hand text-[17px] transition-colors ${
                filter === tab.id
                  ? "border-terracotta bg-terracotta text-paper shadow-[2px_3px_0_rgba(139,42,20,0.25)]"
                  : "border-[rgba(204,66,44,0.28)] bg-paperSoft text-terracotta hover:bg-[#fff1e9]"
              }`}
            >
              {tab.label}
              <span className="ml-1.5 font-mono text-[10px] opacity-80">({counts[tab.id]})</span>
            </button>
          ))}
        </div>

        {filter === "all" ? (
          <nav className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-hand text-[15px] text-terracotta/70">
            <a href="#personal" className="hover:text-terracotta hover:underline">
              Jump to personal ↓
            </a>
            <a href="#research" className="hover:text-terracotta hover:underline">
              Jump to research ↓
            </a>
          </nav>
        ) : null}
      </section>

      <div className="mx-auto mt-14 w-full max-w-[900px] space-y-16 px-6 lg:px-0 md:space-y-20">
        {filter === "all" ? (
          <>
            <CategorySection categoryId="personal" posts={grouped.personal} />
            <CategorySection categoryId="research" posts={grouped.research} />
          </>
        ) : (
          <CategorySection categoryId={filter} posts={grouped[filter]} />
        )}
      </div>
    </div>
  );
}
