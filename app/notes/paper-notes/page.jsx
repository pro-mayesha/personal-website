import { ResearchNotesCategoryPage } from "@/components/academic/ResearchNotebookPages";
import { listResearchNotes } from "@/lib/researchNotesStore";

export const metadata = {
  title: "Paper Notes",
};

export default async function PaperNotesPage() {
  const notes = await listResearchNotes();
  return <ResearchNotesCategoryPage categoryId="paper-notes" notes={notes} />;
}
