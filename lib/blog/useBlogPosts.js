import { useCallback, useEffect, useState } from "react";
import { fetchAllPosts, fetchPostBySlug } from "./blogPostsService.js";

export function useBlogPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refresh = useCallback(async () => {
    try {
      setError(null);
      const data = await fetchAllPosts();
      setPosts(data);
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
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(Boolean(slug));
  const [error, setError] = useState(null);

  const refresh = useCallback(async () => {
    if (!slug) {
      setPost(null);
      setLoading(false);
      return;
    }
    try {
      setError(null);
      setLoading(true);
      const data = await fetchPostBySlug(slug);
      setPost(data);
    } catch (err) {
      setError(err.message || "Could not load note.");
      setPost(null);
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
