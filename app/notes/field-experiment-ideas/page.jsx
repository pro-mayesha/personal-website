import { ResearchNotesCategoryPage } from "@/components/academic/ResearchNotebookPages";

export const metadata = {
  title: "Field Experiment Ideas · AI & Education Reflections",
  description:
    "Early ideas for testing AI recommendations, explanations, personalization, agents, and human support inside real digital products.",
};

export default function FieldExperimentIdeasPage() {
  return <ResearchNotesCategoryPage categoryId="field-experiment-ideas" />;
}
