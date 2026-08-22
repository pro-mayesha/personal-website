import { ResearchNotesCategoryPage } from "@/components/academic/ResearchNotebookPages";
import { listResearchNotes } from "@/lib/researchNotesStore";

export const metadata = {
  title: "Research Questions",
};

export default async function ResearchQuestionsPage() {
  const notes = await listResearchNotes();
  return <ResearchNotesCategoryPage categoryId="research-questions" notes={notes} />;
}
