/** @typedef {'personal' | 'research' | 'founder' | 'travel' | 'paper-notes' | 'research-questions'} BlogCategoryId */

export const BLOG_CATEGORIES = {
  personal: {
    id: "personal",
    label: "Personal",
    tag: "personal",
    description: "Stories and notes about the path that shaped Mayesha.",
    anchor: "personal",
  },
  founder: {
    id: "founder",
    label: "Founder",
    tag: "founder",
    description: "Notes from building companies and products.",
    anchor: "founder",
  },
  research: {
    id: "research",
    label: "Research",
    tag: "research",
    description: "Essays on decisions, AI, and turning complexity into questions.",
    anchor: "research",
  },
  "paper-notes": {
    id: "paper-notes",
    label: "Paper notes",
    tag: "paper note",
    description: "Notes on papers Mayesha is reading.",
    anchor: "paper-notes",
  },
  "research-questions": {
    id: "research-questions",
    label: "Research questions",
    tag: "research question",
    description: "Open questions carried forward from reading and building.",
    anchor: "research-questions",
  },
  travel: {
    id: "travel",
    label: "Travel",
    tag: "travel",
    description: "Field notes from moving between places.",
    anchor: "travel",
  },
};

export const THOUGHT_FILTERS = [
  { id: "all", label: "All" },
  { id: "paper-notes", label: "Paper notes" },
  { id: "research-questions", label: "Research questions" },
  { id: "personal", label: "Personal" },
  { id: "founder", label: "Founder" },
  { id: "research", label: "Research" },
  { id: "travel", label: "Travel" },
];

const SLUG_CATEGORY = {
  "founder-story": "founder",
  "the-chaos-i-couldnt-ignore": "founder",
  traveler: "travel",
  researcher: "research",
};

/** @param {import("./blogTypes").BlogPost} post */
export function normalizePostCategory(post) {
  if (post.thoughtCategory && BLOG_CATEGORIES[post.thoughtCategory]) {
    return post.thoughtCategory;
  }
  if (post.category && BLOG_CATEGORIES[post.category]) {
    return post.category;
  }
  if (SLUG_CATEGORY[post.slug]) return SLUG_CATEGORY[post.slug];
  return "personal";
}

/** @param {import("./blogTypes").BlogPost} post */
export function getPostExcerpt(post, maxLength = 160) {
  const firstParagraph = post.paragraphs?.[0];
  const first =
    post.excerpt?.trim() ||
    (typeof firstParagraph === "string" ? firstParagraph.trim() : firstParagraph?.text?.trim()) ||
    "";
  if (first.length <= maxLength) return first;
  return `${first.slice(0, maxLength).trim()}…`;
}

/** @param {import("./blogTypes").BlogPost[]} posts */
export function groupPostsByCategory(posts) {
  const sorted = [...posts].sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  return {
    personal: sorted.filter((p) => normalizePostCategory(p) === "personal"),
    founder: sorted.filter((p) => normalizePostCategory(p) === "founder"),
    research: sorted.filter((p) => normalizePostCategory(p) === "research"),
    travel: sorted.filter((p) => normalizePostCategory(p) === "travel"),
  };
}

export function sortThoughtsNewestFirst(posts) {
  return [...posts].sort((a, b) => {
    const byDate = (b.date || "").localeCompare(a.date || "");
    if (byDate !== 0) return byDate;
    if (a.featuredOnHome && !b.featuredOnHome) return -1;
    if (!a.featuredOnHome && b.featuredOnHome) return 1;
    return (a.title || "").localeCompare(b.title || "");
  });
}

export function getRecentThoughts(posts, count = 3) {
  return sortThoughtsNewestFirst(posts).slice(0, count);
}

export function getFeaturedThought(posts) {
  const sorted = sortThoughtsNewestFirst(posts);
  return sorted.find((p) => p.featured) || sorted.find((p) => p.featuredOnHome) || sorted[0] || null;
}

export function formatThoughtDate(iso) {
  if (!iso) return "";
  const d = new Date(`${iso}T12:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}
