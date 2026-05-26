import { randomUUID } from "crypto";
import { defaultBlogPosts } from "@/lib/blog/defaultBlogPosts";

export function normalizeCategory(category) {
  return category === "research" ? "research" : "personal";
}

export function docToPost(doc) {
  if (!doc) return null;
  return {
    id: String(doc.id),
    slug: String(doc.slug),
    title: String(doc.title),
    date: String(doc.date).slice(0, 10),
    category: normalizeCategory(doc.category),
    paragraphs: Array.isArray(doc.paragraphs) ? doc.paragraphs : [],
    pullQuote: String(doc.pullQuote ?? ""),
    signature: String(doc.signature ?? ""),
    signatureMeta: String(doc.signatureMeta ?? ""),
  };
}

export function postToDoc(post) {
  return {
    id: post.id || randomUUID(),
    slug: post.slug,
    title: post.title,
    date: post.date,
    category: normalizeCategory(post.category),
    paragraphs: post.paragraphs ?? [],
    pullQuote: post.pullQuote ?? "",
    signature: post.signature ?? "",
    signatureMeta: post.signatureMeta ?? "",
    updatedAt: new Date(),
  };
}

export function slugify(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "note";
}

export function getSeedFallback(slug) {
  const fallback = defaultBlogPosts.find((p) => p.slug === slug);
  if (!fallback) return null;
  return { ...fallback, category: normalizeCategory(fallback) };
}
