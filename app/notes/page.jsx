import { ResearchNotebookIndex } from "@/components/academic/ResearchNotebookPages";
import { listResearchNotes } from "@/lib/researchNotesStore";

export const metadata = {
  title: "AI & Education Reflections",
  description:
    "An evolving research notebook with paper notes, research questions, field experiment ideas, and general reflections.",
};

export default async function NotesPage() {
  const notes = await listResearchNotes();
  return <ResearchNotebookIndex notes={notes} />;
}
