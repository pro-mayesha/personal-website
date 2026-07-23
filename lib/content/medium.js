/**
 * Medium profile + short blogs shown on the academic Writing section.
 * Live articles come from the RSS feed; fallback is used when fetch fails.
 */
export { mediumArticlesFallback } from "./mediumArticles.generated.js";

export const mediumProfile = {
  url: "https://mproma.medium.com",
  feedUrl: "https://mproma.medium.com/feed",
  label: "LEARNING IN PUBLIC",
  viewAllLabel: "View all on Medium ↗",
};

export const shortBlogs = {
  title: "Short Blogs on AI & Technology",
  label: "Published Essays",
  intro:
    "These essays document how I learned technical ideas by explaining them in simple language and connecting them to tools, experiments, and products I was building. Together, they trace my journey from foundational data science concepts to neural networks, language models, and applied AI systems.",
};
