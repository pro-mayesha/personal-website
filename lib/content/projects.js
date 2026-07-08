/**
 * Ventures & projects. Used by BOTH the homepage "Selected work" and /academic.
 * EDIT THIS FILE to add, reorder (via `order`), or feature (`featured`) projects.
 *
 * Field notes:
 *   type        — short kind label shown as a tag ("Parent Company", "Product"...)
 *   tagline     — one-line subtitle used on the homepage work cards
 *   summary     — short description (homepage card body + academic card body)
 *   whatIBuilt  — academic card "Built" line
 *   whyItMatters— academic card "Why" line
 *   links       — { website, github, notes } (use "" when none)
 *   featured    — show on the homepage
 *   order       — ascending sort order
 */
export const projects = [
  {
    title: "The Abroad Company",
    type: "Parent Company",
    tagline: "Making crossing borders easier",
    summary:
      "Parent mission building infrastructure for students crossing borders — AbroadMates, ApplicationMate, AbroadNews, and more.",
    whatIBuilt: "Venture portfolio, product strategy, cross-product research themes.",
    whyItMatters: "One umbrella for student-first tools in global education.",
    tags: ["Founder", "Systems", "EdTech"],
    links: { website: "https://abroad.company", github: "", notes: "" },
    featured: true,
    order: 1,
  },
  {
    title: "AbroadMates",
    type: "Product",
    tagline: "Real people. Real guidance.",
    summary:
      "Peer-to-peer mentorship. Students talk to mentors who have done it themselves, not sales reps — real answers, clearer paths.",
    whatIBuilt: "Marketplace, mentor matching, student-first onboarding.",
    whyItMatters: "Students deserve advice from someone who has walked the path.",
    tags: ["EdTech", "Mentorship", "Study Abroad"],
    links: { website: "https://abroadmates.com", github: "", notes: "" },
    featured: true,
    order: 2,
  },
  {
    title: "ApplicationMate",
    type: "Product",
    tagline: "Your AI study abroad companion",
    summary:
      "An AI copilot for study abroad applications: step-by-step guidance, prompts, writing feedback, and a journey tracked start to finish.",
    whatIBuilt: "Writing guidance, application planning, decision support.",
    whyItMatters: "High-stakes applications need tools that respect agency, not replace it.",
    tags: ["AI", "Writing", "Applications"],
    links: { website: "https://applicationmate.com", github: "", notes: "" },
    featured: true,
    order: 3,
  },
  {
    title: "Research Notes",
    type: "Product",
    tagline: "Thoughts, questions, and small discoveries",
    summary:
      "Personal writing on what I am thinking, learning, and hoping might help others. Honest, messy, and human.",
    whatIBuilt: "Public notes on research, reading, and building.",
    whyItMatters: "Thinking in public sharpens ideas and helps other students.",
    tags: ["Writing", "Research", "Notes"],
    links: { website: "/notes", github: "", notes: "/notes" },
    featured: true,
    order: 4,
  },
];
