/** @typedef {'personal' | 'research'} BlogCategoryId */

export const BLOG_CATEGORIES = {
  personal: {
    id: "personal",
    label: "Personal",
    tag: "personal note",
    description: "Stories, founder notes, travel, and the path that shaped me.",
    anchor: "personal",
  },
  research: {
    id: "research",
    label: "Research",
    tag: "research note",
    description: "Essays on decisions, AI, and turning complexity into clarity.",
    anchor: "research",
  },
};

/** @param {import("./blogTypes").BlogPost} post */
export function normalizePostCategory(post) {
  if (post.category === "research" || post.category === "personal") {
    return post.category;
  }
  if (post.slug === "researcher") return "research";
  return "personal";
}

/** @param {import("./blogTypes").BlogPost} post */
export function getPostExcerpt(post, maxLength = 160) {
  const first = post.paragraphs?.[0]?.text?.trim() || "";
  if (first.length <= maxLength) return first;
  return `${first.slice(0, maxLength).trim()}…`;
}

/** @param {import("./blogTypes").BlogPost[]} posts */
export function groupPostsByCategory(posts) {
  const sorted = [...posts].sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  return {
    personal: sorted.filter((p) => normalizePostCategory(p) === "personal"),
    research: sorted.filter((p) => normalizePostCategory(p) === "research"),
  };
}
