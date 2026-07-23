import { ResearchNotesCategoryPage } from "@/components/academic/ResearchNotebookPages";

export const metadata = {
  title: "Paper Notes · AI & Education Reflections",
  description:
    "Notes on research papers, including key ideas, methodological choices, limitations, and questions worth carrying into future work.",
};

export default function PaperNotesPage() {
  return <ResearchNotesCategoryPage categoryId="paper-notes" />;
}
