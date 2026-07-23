/**
 * Ventures & products.
 * Homepage "Selected work" uses featured items (including Research Notes).
 * Academic section uses role: "parent" | "product" with showOnAcademic.
 */
export const projects = [
  {
    title: "The Abroad Company",
    role: "parent",
    type: "Parent Company",
    tagline: "Making crossing borders easier",
    summary:
      "The Abroad Company builds products for students navigating study abroad and international mobility.",
    myRole:
      "Co-founder. I lead product direction, research, and the development of connected services across the student journey.",
    focusAreas: [
      "Product strategy",
      "Research",
      "International mobility",
      "Growth and partnerships",
    ],
    tags: ["Founder", "Product Strategy", "International Mobility"],
    links: { website: "https://abroad.company", github: "", notes: "" },
    featured: true,
    showOnAcademic: true,
    order: 1,
  },
  {
    title: "AbroadMates",
    role: "product",
    type: "Study-Abroad Mentorship Platform",
    icon: "Users",
    tagline: "Real people. Real guidance.",
    summary:
      "AbroadMates connects students with mentors who have already studied, applied, received scholarships, or lived in their target countries.",
    features: [
      {
        icon: "Search",
        title: "Find the right mentor",
        detail: "Search by university, country, scholarship, field, and experience.",
      },
      {
        icon: "Calendar",
        title: "Book and meet",
        detail: "Easy scheduling for 20 or 40-minute mentorship sessions.",
      },
      {
        icon: "MessageCircle",
        title: "Get real guidance",
        detail: "Receive honest advice from someone who has already walked the path.",
      },
    ],
    researchSetting:
      "Helps me study human guidance, mentor matching, trust, repeat use, retention, and hybrid human-AI support in real-world settings.",
    tags: ["Mentorship", "Matching", "Study Abroad"],
    links: { website: "https://abroadmates.com", github: "", notes: "" },
    featured: true,
    showOnAcademic: true,
    order: 2,
  },
  {
    title: "ApplicationMate",
    role: "product",
    type: "Study-Abroad Application Copilot",
    icon: "Sparkles",
    tagline: "Your AI study abroad companion",
    summary:
      "ApplicationMate helps students organize and complete their applications through AI-powered guidance and structured workflows.",
    features: [
      {
        icon: "Compass",
        title: "Discover and plan",
        detail: "Receive personalized university and scholarship recommendations.",
      },
      {
        icon: "Folders",
        title: "Organize everything",
        detail: "Manage documents, tasks, deadlines, requirements, and reusable information in one place.",
      },
      {
        icon: "PenLine",
        title: "Write and improve",
        detail: "Use AI-supported writing feedback and application guidance.",
      },
    ],
    researchSetting:
      "Enables experiments on AI recommendations, agents, decision quality, task completion, adoption, engagement, and retention.",
    tags: ["AI", "Application Planning", "Decision Support"],
    links: { website: "https://applicationmate.com", github: "", notes: "" },
    featured: true,
    showOnAcademic: true,
    order: 3,
  },
  {
    title: "Research Notes",
    role: "writing",
    type: "Writing",
    tagline: "Thoughts, questions, and small discoveries",
    summary:
      "Personal writing on what I am thinking, learning, and hoping might help others. Honest, messy, and human.",
    tags: ["Writing", "Research", "Notes"],
    links: { website: "/notes", github: "", notes: "/notes" },
    featured: true,
    showOnAcademic: false,
    order: 4,
  },
];
