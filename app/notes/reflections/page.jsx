import { ResearchNotesCategoryPage } from "@/components/academic/ResearchNotebookPages";
import { listResearchNotes } from "@/lib/researchNotesStore";

export const metadata = {
  title: "General Reflections · AI & Education Reflections",
  description:
    "Broader reflections connecting technical learning, product development, research, and observations from real users.",
};

export default async function ReflectionsPage() {
  const notes = await listResearchNotes();
  return <ResearchNotesCategoryPage categoryId="reflections" notes={notes} />;
}
