import { normalizePostCategory } from "./blogCategories.js";
import { defaultBlogPosts } from "./defaultBlogPosts.js";

function withCategory(post) {
  return { ...post, category: normalizePostCategory(post) };
}

const STORAGE_KEY = "proma_blog_posts_v1";

function notifyPostsChanged() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("proma-posts-changed"));
  }
}

function safeParse(json) {
  try {
    return JSON.parse(json);
  } catch {
    return null;
  }
}

export function slugify(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "note";
}

function mergeDefaultPosts(stored) {
  const merged = [...stored];
  for (const seed of defaultBlogPosts) {
    const i = merged.findIndex((p) => p.slug === seed.slug);
    if (i === -1) {
      merged.push(seed);
    } else if (typeof seed.id === "string" && seed.id.startsWith("seed-")) {
      merged[i] = { ...seed, id: merged[i].id };
    }
  }
  return merged;
}

/** @returns {import("./blogTypes").BlogPost[]} */
export function getAllBlogPostsLocal() {
  if (typeof window === "undefined") return defaultBlogPosts.map(withCategory);
  const raw = window.localStorage.getItem(STORAGE_KEY);
  const parsed = raw ? safeParse(raw) : null;
  if (!Array.isArray(parsed) || parsed.length === 0) {
    return defaultBlogPosts.map(withCategory);
  }
  return mergeDefaultPosts(parsed).map(withCategory);
}

/** @param {import("./blogTypes").BlogPost[]} posts */
export function saveAllBlogPostsLocal(posts) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  notifyPostsChanged();
}

/** @param {string} slug */
export function getPostBySlugLocal(slug) {
  return getAllBlogPostsLocal().find((p) => p.slug === slug) ?? null;
}

function buildPost(draft, id) {
  const slug = draft.slug?.trim() || slugify(draft.title);
  return withCategory({
    id: id ?? crypto.randomUUID(),
    slug,
    title: draft.title.trim(),
    date: draft.date || new Date().toISOString().slice(0, 10),
    category: draft.category,
    paragraphs: draft.paragraphs,
    pullQuote: draft.pullQuote?.trim() || "",
    signature: draft.signature?.trim() || "— Mayesha Maliha Proma",
    signatureMeta: draft.signatureMeta?.trim() || "from Bangladesh to Japan",
  });
}

/** @param {Omit<import("./blogTypes").BlogPost, "id" | "slug"> & { slug?: string }} draft */
export function addBlogPostLocal(draft) {
  const posts = getAllBlogPostsLocal();
  const post = buildPost(draft);
  if (posts.some((p) => p.slug === post.slug)) {
    throw new Error("That slug is already used. Pick another title or slug.");
  }
  posts.unshift(post);
  saveAllBlogPostsLocal(posts);
  return post;
}

/** @param {import("./blogTypes").BlogPost} updated */
export function updateBlogPostLocal(updated) {
  const posts = getAllBlogPostsLocal();
  const i = posts.findIndex((p) => p.id === updated.id);
  if (i === -1) throw new Error("Post not found.");
  const slug = updated.slug?.trim() || slugify(updated.title);
  if (posts.some((p, j) => p.slug === slug && j !== i)) {
    throw new Error("That slug is already used.");
  }
  posts[i] = withCategory({ ...updated, slug, title: updated.title.trim() });
  saveAllBlogPostsLocal(posts);
  return posts[i];
}

/** @param {string} id */
export function deleteBlogPostLocal(id) {
  const posts = getAllBlogPostsLocal().filter((p) => p.id !== id);
  saveAllBlogPostsLocal(posts);
}

export function importPostsJsonLocal(json) {
  const data = safeParse(json);
  if (!Array.isArray(data)) throw new Error("Invalid JSON: expected an array of posts.");
  saveAllBlogPostsLocal(data.map(withCategory));
}
