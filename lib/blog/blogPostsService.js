import { defaultBlogPosts } from "./defaultBlogPosts.js";
import { apiFetch, isLiveStorageConfigured } from "./apiClient.js";
import {
  addBlogPostLocal,
  deleteBlogPostLocal,
  getAllBlogPostsLocal,
  getPostBySlugLocal,
  importPostsJsonLocal,
  slugify,
  updateBlogPostLocal,
} from "./localBlogStorage.js";
import { normalizePostCategory } from "./blogCategories.js";

export { isLiveStorageConfigured, slugify };

function notifyPostsChanged() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("proma-posts-changed"));
  }
}

function sortByDate(posts) {
  return [...posts].sort((a, b) => {
    const byDate = (b.date || "").localeCompare(a.date || "");
    if (byDate !== 0) return byDate;
    return a.title.localeCompare(b.title);
  });
}

function fallbackPosts() {
  return sortByDate(defaultBlogPosts.map((p) => ({ ...p, category: normalizePostCategory(p) })));
}

/** @returns {Promise<import("./blogTypes").BlogPost[]>} */
export async function fetchAllPosts() {
  if (!isLiveStorageConfigured()) {
    return sortByDate(getAllBlogPostsLocal());
  }
  try {
    const { posts } = await apiFetch("/api/posts");
    if (!posts?.length) return fallbackPosts();
    return sortByDate(posts);
  } catch {
    return sortByDate(getAllBlogPostsLocal().length ? getAllBlogPostsLocal() : fallbackPosts());
  }
}

/** @param {string} slug */
export async function fetchPostBySlug(slug) {
  if (!isLiveStorageConfigured()) {
    return getPostBySlugLocal(slug);
  }
  try {
    const { post } = await apiFetch(`/api/posts/slug/${encodeURIComponent(slug)}`);
    return post;
  } catch {
    const fallback = defaultBlogPosts.find((p) => p.slug === slug);
    return fallback ? { ...fallback, category: normalizePostCategory(fallback) } : null;
  }
}

/** @param {Omit<import("./blogTypes").BlogPost, "id" | "slug"> & { slug?: string }} draft */
export async function createPost(draft) {
  if (!isLiveStorageConfigured()) {
    return addBlogPostLocal(draft);
  }
  const { post } = await apiFetch("/api/posts", {
    method: "POST",
    body: JSON.stringify(draft),
  });
  notifyPostsChanged();
  return post;
}

/** @param {import("./blogTypes").BlogPost} updated */
export async function savePost(updated) {
  if (!isLiveStorageConfigured()) {
    return updateBlogPostLocal(updated);
  }
  const { post } = await apiFetch(`/api/posts/${encodeURIComponent(updated.id)}`, {
    method: "PUT",
    body: JSON.stringify(updated),
  });
  notifyPostsChanged();
  return post;
}

/** @param {string} id */
export async function removePost(id) {
  if (!isLiveStorageConfigured()) {
    deleteBlogPostLocal(id);
    notifyPostsChanged();
    return;
  }
  await apiFetch(`/api/posts/${encodeURIComponent(id)}`, { method: "DELETE" });
  notifyPostsChanged();
}

export async function exportPostsJson() {
  const posts = await fetchAllPosts();
  return JSON.stringify(posts, null, 2);
}

export async function importPostsJson(json) {
  const posts = JSON.parse(json);
  if (!Array.isArray(posts)) throw new Error("Invalid JSON: expected an array of posts.");
  if (!isLiveStorageConfigured()) {
    importPostsJsonLocal(json);
    return;
  }
  await apiFetch("/api/posts/import", {
    method: "POST",
    body: JSON.stringify({ posts }),
  });
  notifyPostsChanged();
}

export async function seedDefaultPostsToCloud() {
  if (!isLiveStorageConfigured()) {
    throw new Error("Live notes are not enabled. Set VITE_LIVE_NOTES=true and run the API server.");
  }
  await apiFetch("/api/posts/seed", { method: "POST" });
  notifyPostsChanged();
}
