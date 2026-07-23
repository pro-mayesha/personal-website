import { ResearchNotesCategoryPage } from "@/components/academic/ResearchNotebookPages";

export const metadata = {
  title: "Research Questions · AI & Education Reflections",
  description:
    "Open questions about AI systems, human behaviour, trust, decision-making, adoption, engagement, and real-world outcomes.",
};

export default function ResearchQuestionsPage() {
  return <ResearchNotesCategoryPage categoryId="research-questions" />;
}
