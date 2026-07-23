import { mediumProfile, mediumArticlesFallback } from "@/lib/content/medium";
import { parseMediumFeed } from "@/lib/medium/parseMediumFeed";

/**
 * Fetch Medium articles via RSS. Falls back to verified local data on failure.
 * @returns {Promise<{ articles: Array, source: 'rss' | 'fallback' }>}
 */
export async function fetchMediumArticles() {
  try {
    const response = await fetch(mediumProfile.feedUrl, {
      headers: {
        Accept: "application/rss+xml, application/xml, text/xml, */*",
        "User-Agent": "personal-website/1.0 (academic writing section)",
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Medium RSS responded ${response.status}`);
    }

    const xml = await response.text();
    const articles = parseMediumFeed(xml);
    if (!articles.length) {
      throw new Error("Medium RSS returned no items");
    }

    return { articles, source: "rss" };
  } catch {
    return { articles: mediumArticlesFallback, source: "fallback" };
  }
}
