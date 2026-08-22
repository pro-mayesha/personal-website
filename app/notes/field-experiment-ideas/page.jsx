import { ResearchNotesCategoryPage } from "@/components/academic/ResearchNotebookPages";
import { listResearchNotes } from "@/lib/researchNotesStore";

export const metadata = {
  title: "Field Experiment Ideas · AI & Education Reflections",
  description:
    "Early ideas for testing AI recommendations, explanations, personalization, agents, and human support inside real digital products.",
};

export default async function FieldExperimentIdeasPage() {
  const notes = await listResearchNotes();
  return <ResearchNotesCategoryPage categoryId="field-experiment-ideas" notes={notes} />;
}
