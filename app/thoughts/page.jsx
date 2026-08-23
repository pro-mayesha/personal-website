import ThoughtsPage from "@/components/pages/ThoughtsPage";
import { listResearchNotes } from "@/lib/researchNotesStore";

export const metadata = {
  title: "Thoughts",
  description:
    "Personal writing, paper notes, and research questions by Mayesha Maliha Proma.",
};

export default async function Page() {
  const researchNotes = await listResearchNotes();
  return <ThoughtsPage researchNotes={researchNotes} />;
}
