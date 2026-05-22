import { Link } from "react-router-dom";
import { BLOG_CATEGORIES, getPostExcerpt, normalizePostCategory } from "./blogCategories.js";

/**
 * @param {{ post: import("./blogTypes").BlogPost }} props
 */
export function BlogPostCard({ post }) {
  const categoryId = normalizePostCategory(post);
  const category = BLOG_CATEGORIES[categoryId];
  const excerpt = getPostExcerpt(post);

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-sm border-2 border-[rgba(204,66,44,0.30)] bg-paperSoft transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_6px_0_rgba(192,68,42,0.18)]"
      style={{ boxShadow: "3px 4px 0 rgba(192,68,42,0.14)" }}
    >
      <div className="absolute inset-0 bg-lines opacity-60 pointer-events-none" />
      <div className="relative z-[1] flex flex-1 flex-col p-5 md:p-6">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <span className="rounded-sm border border-[rgba(204,66,44,0.28)] bg-[#fff4ef] px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-terracotta">
            {category.tag}
          </span>
          <time className="font-mono text-[10px] tracking-widest text-ink/40">{post.date}</time>
        </div>

        <h3 className="mb-2 font-hand text-[22px] font-bold leading-tight text-ink transition-colors group-hover:text-terracotta md:text-[26px]">
          <Link to={`/notes/${post.slug}`} className="outline-none focus-visible:underline">
            {post.title}
          </Link>
        </h3>

        {post.pullQuote ? (
          <p className="mb-2 font-garamond text-[14px] italic leading-snug text-terracotta/80 line-clamp-2">
            {post.pullQuote}
          </p>
        ) : null}

        <p className="mb-4 flex-1 font-garamond text-[15px] leading-relaxed text-ink/65 line-clamp-3">{excerpt}</p>

        <Link
          to={`/notes/${post.slug}`}
          className="inline-flex w-fit items-center gap-1 border-b-2 border-[rgba(204,66,44,0.35)] pb-0.5 font-hand text-[17px] text-terracotta transition-colors hover:border-terracotta"
        >
          Read note <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
