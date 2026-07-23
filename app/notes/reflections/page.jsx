import { ResearchNotesCategoryPage } from "@/components/academic/ResearchNotebookPages";

export const metadata = {
  title: "General Reflections · AI & Education Reflections",
  description:
    "Broader reflections connecting technical learning, product development, research, and observations from real users.",
};

export default function ReflectionsPage() {
  return <ResearchNotesCategoryPage categoryId="reflections" />;
}
