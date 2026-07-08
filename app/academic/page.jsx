import AcademicPage from "@/components/academic/AcademicPage";
import { profile } from "@/lib/content/profile";

const fullName = profile.fullName || "Academic CV";
const academicTitle = `Academic CV — ${fullName}`;
const academicDescription =
  profile.academicStatement ||
  profile.title ||
  "Research profile, publications, and academic portfolio.";

export const metadata = {
  // `absolute` bypasses the root title template so the name isn't repeated.
  title: { absolute: academicTitle },
  description: academicDescription,
  openGraph: {
    type: "profile",
    title: academicTitle,
    description: academicDescription,
  },
  twitter: {
    title: academicTitle,
    description: academicDescription,
  },
};

export default function Page() {
  return <AcademicPage />;
}
