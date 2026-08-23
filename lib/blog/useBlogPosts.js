import { useCallback, useEffect, useState } from "react";
import { defaultBlogPosts } from "./defaultBlogPosts.js";
import { fetchAllPosts, fetchPostBySlug } from "./blogPostsService.js";
import { normalizePostCategory } from "./blogCategories.js";

function seedPosts() {
  return defaultBlogPosts.map((p) => ({ ...p, category: normalizePostCategory(p) }));
}

function withMissingSeeds(posts) {
  const bySlug = new Map((posts || []).map((post) => [post.slug, post]));
  for (const seed of seedPosts()) {
    if (!bySlug.has(seed.slug)) bySlug.set(seed.slug, seed);
  }
  return [...bySlug.values()];
}

export function useBlogPosts() {
  const [posts, setPosts] = useState(seedPosts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const refresh = useCallback(async () => {
    try {
      setError(null);
      const data = await fetchAllPosts();
      setPosts(withMissingSeeds(data));
    } catch (err) {
      setError(err.message || "Could not load notes.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
    window.addEventListener("proma-posts-changed", refresh);
    return () => window.removeEventListener("proma-posts-changed", refresh);
  }, [refresh]);

  return { posts, loading, error, refresh };
}

export function useBlogPost(slug) {
  const seed = seedPosts().find((p) => p.slug === slug) || null;
  const [post, setPost] = useState(seed);
  const [loading, setLoading] = useState(Boolean(slug) && !seed);
  const [error, setError] = useState(null);

  const refresh = useCallback(async () => {
    const currentSeed = seedPosts().find((p) => p.slug === slug) || null;
    if (!slug) {
      setPost(null);
      setLoading(false);
      return;
    }
    try {
      setError(null);
      if (!currentSeed) setLoading(true);
      const data = await fetchPostBySlug(slug);
      if (data) setPost(data);
    } catch (err) {
      setError(err.message || "Could not load note.");
      if (!currentSeed) setPost(null);
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    refresh();
    window.addEventListener("proma-posts-changed", refresh);
    return () => window.removeEventListener("proma-posts-changed", refresh);
  }, [refresh]);

  return { post, loading, error, refresh };
}
