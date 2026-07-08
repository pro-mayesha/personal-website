/**
 * Page-level content for /academic (the layout copy, not the data lists).
 * Research papers, projects, education, etc. live in their own content files.
 * The name/title come from profile.js; links come from links.js.
 *
 * EDIT THIS FILE to change the hero story, the credibility strip, quick cards,
 * the section-nav order, and the intro/footer lines.
 */
export const academic = {
  hero: {
    roles: ["Founder", "AI Researcher", "PhD Applicant"],
    // The opening paragraph of the page — write your story here.
    story:
      "Founder, AI researcher, and PhD applicant working where education meets technology. I build tools that help students make high-stakes decisions about studying abroad, and I study how AI systems can make writing, guidance, and cross-border education clearer, fairer, and more trustworthy. My work spans NLP, human-centered decision systems, and the messy, real experience of students crossing borders.",
    // Anchor for the "View Publications" button.
    publicationsHref: "#papers",
  },

  // Small proof-of-credibility labels shown under the hero.
  credibilityStrip: [
    "Founder of AbroadMates",
    "Building ApplicationMate",
    "AI, NLP, EdTech",
    "Preparing for PhD",
  ],

  // Four summary cards under the hero.
  // icon values map to lucide icons in the page: BookOpen | Compass | GraduationCap | Link2
  quickCards: [
    {
      icon: "BookOpen",
      title: "Research Interests",
      body: "AI for education, human-centered decision systems, and NLP for writing and evaluation.",
      action: { label: "Explore interests", href: "#research" },
    },
    {
      icon: "Compass",
      title: "Current Focus",
      body: "Building student decision-support systems and studying LLMs for clarity, fairness, and trust.",
      action: { label: "See current projects", href: "#projects" },
    },
    {
      icon: "GraduationCap",
      title: "Education",
      body: "MSc at Politecnico di Torino; BSc from Tokyo International University. PhD preparation ongoing.",
      action: { label: "View education", href: "#education" },
    },
    {
      icon: "Link2",
      title: "Selected Links",
      body: "Google Scholar · LinkedIn · AbroadMates · Research Notes.",
      action: { label: "See all links", href: "#contact" },
    },
  ],

  // Sticky in-page navigation (ids must match section ids on the page).
  sectionNav: [
    { id: "research", label: "Research" },
    { id: "papers", label: "Papers" },
    { id: "working-papers", label: "Working Papers" },
    { id: "projects", label: "Projects" },
    { id: "notes", label: "Notes" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ],

  researchFocusIntro:
    "Three threads run through my work — how students learn with AI, how they decide, and how we evaluate the writing in between.",

  notesIntro:
    "I write short public notes while reading papers, building research ideas, and preparing for PhD applications.",

  footerLine: "Notes on research, life, and becoming.",
};
