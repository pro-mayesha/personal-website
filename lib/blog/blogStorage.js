/** @deprecated Use blogPostsService.js — kept for imports that expect sync local helpers. */
export {
  slugify,
  getAllBlogPostsLocal as getAllBlogPosts,
  getPostBySlugLocal as getPostBySlug,
  addBlogPostLocal as addBlogPost,
  updateBlogPostLocal as updateBlogPost,
  deleteBlogPostLocal as deleteBlogPost,
  importPostsJsonLocal as importPostsJson,
} from "./localBlogStorage.js";
