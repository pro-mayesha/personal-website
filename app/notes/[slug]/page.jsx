import BlogPostPage from "@/components/pages/BlogPostPage";
import { ResearchNotesCategoryPage } from "@/components/academic/ResearchNotebookPages";
import { isNoteCategorySlug } from "@/lib/content/notes";

export default function NotePage({ params }) {
  const slug = params.slug;

  // Fallback if a category slug is ever resolved by the dynamic route.
  if (isNoteCategorySlug(slug)) {
    return <ResearchNotesCategoryPage categoryId={slug} />;
  }

  return <BlogPostPage slug={slug} />;
}
