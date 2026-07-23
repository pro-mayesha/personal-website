/**
 * Page-level content for /academic (the layout copy, not the data lists).
 * Research papers, projects, education, etc. live in their own content files.
 * The name/title come from profile.js; URLs for selected links come from links.js.
 *
 * EDIT THIS FILE to change the hero roles, topic tags, buttons, quick cards,
 * the section-nav order, and the intro/footer lines.
 */
export const academic = {
  hero: {
    // Shown under the name (pipe-separated).
    roles: [
      "Human-AI Interaction Researcher",
      "Data Scientist",
      "AI Product Manager",
      "Founder",
    ],
    // Topic tags under the bio.
    topicTags: [
      "NLP & Large Language Models",
      "Transformers & RAG",
      "Recommendation Systems",
      "AI Agents & Knowledge Graphs",
      "Automated Writing Evaluation",
      "Human-AI Decision-Making",
      "Causal Inference & Field Experiments",
      "EdTech & AI Decision Support",
    ],
    // Hero CTA buttons (label + href). href keys: writing | papers | contact
    buttons: [
      { label: "Writing", href: "#writing" },
      { label: "Publications", href: "#papers" },
      { label: "Contact Me", href: "#contact" },
    ],
  },

  // Four summary cards under the hero.
  // icon values map to lucide icons: BookOpen | Compass | GraduationCap | Link2
  // For Selected Links, use `links` (hrefKey maps to keys in lib/content/links.js).
  quickCards: [
    {
      icon: "BookOpen",
      title: "Research Interests",
      body: "AI for product decision-making, causal evaluation of user behavior, personalized recommendation systems, and NLP for stronger personal essays.",
      action: { label: "Explore research", href: "#research" },
    },
    {
      icon: "Compass",
      title: "Current Focus",
      body: "Designing AI interventions in student-facing products and testing whether they improve matching, trust, booking decisions, engagement, and continued use.",
      action: { label: "See current projects", href: "#projects" },
    },
    {
      icon: "GraduationCap",
      title: "Education",
      body: "BSc in Digital Business and Innovation with a concentration in Data Science and AI from Tokyo International University. Full-tuition scholarship. Preparing for thesis-based graduate research.",
      action: { label: "View education", href: "#education" },
    },
    {
      icon: "Link2",
      title: "Selected Links",
      body: "",
      links: [
        { label: "Google Scholar", hrefKey: "googleScholar" },
        { label: "LinkedIn", hrefKey: "linkedin" },
        { label: "AbroadMates", hrefKey: "abroadMates" },
        { label: "Mentorship", hrefKey: "abroadMates" },
        { label: "Writing", hrefKey: "writing" },
        { label: "Medium", hrefKey: "medium" },
      ],
      action: { label: "See all links", href: "#contact" },
    },
  ],

  // Sticky in-page navigation (ids must match section ids on the page).
  sectionNav: [
    { id: "research", label: "Research" },
    { id: "current-research", label: "Ongoing" },
    { id: "papers", label: "Papers" },
    { id: "projects", label: "Projects" },
    { id: "writing", label: "Writing" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ],

  researchFocusIntro:
    "Human-centered AI, causal field evaluation, and the real-world impact of AI-enabled systems, with a focus on user behavior, trust, decision-making, and product outcomes.",

  writingIntro:
    "My writing includes beginner-friendly essays on artificial intelligence and technology, alongside an evolving research notebook where I document papers, questions, field experiment ideas, and reflections related to my current work.",

  productsIntro:
    "Alongside my research, I co-founded The Abroad Company and work on products that support students throughout the study-abroad journey. My work spans human mentorship, AI-supported application planning, product strategy, and user experience.",

  footerLine: "Notes on research, life, and becoming.",
};
