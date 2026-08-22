import BlogPostPage from "@/components/pages/BlogPostPage";
import { ResearchNoteArticle } from "@/components/academic/ResearchNoteArticle";
import { ResearchNotesCategoryPage } from "@/components/academic/ResearchNotebookPages";
import { isNoteCategorySlug } from "@/lib/content/notes";
import { getResearchNoteBySlug, listResearchNotes } from "@/lib/researchNotesStore";

export default async function NotePage({ params }) {
  const slug = params.slug;

  if (isNoteCategorySlug(slug)) {
    const notes = await listResearchNotes();
    return <ResearchNotesCategoryPage categoryId={slug} notes={notes} />;
  }

  const note = await getResearchNoteBySlug(slug);
  if (note) {
    return <ResearchNoteArticle note={note} />;
  }

  return <BlogPostPage slug={slug} />;
}
