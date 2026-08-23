/**
 * Internal research notebook: AI & Education Reflections.
 *
 * Folders stay visible even when empty. Add real notes to `researchNotes`
 * with published: true when ready — never invent placeholder articles.
 *
 * Categories: paper-notes | research-questions | field-experiment-ideas | reflections
 * Statuses: draft | developing | published
 */

export const NOTE_CATEGORY_IDS = [
  "paper-notes",
  "research-questions",
  "field-experiment-ideas",
  "reflections",
];

/** Umbrella notebook shown on /notes and previewed on /academic */
export const researchNotebook = {
  title: "AI & Education Reflections",
  href: "/notes",
  intro:
    "An evolving research notebook where Mayesha documents what she is reading, the questions she is developing, possible field experiments, and reflections from building and evaluating AI-enabled systems.",
  previewBody:
    "An evolving research notebook containing paper notes, open questions, experimental ideas, and reflections from ongoing work with AI-enabled systems.",
  actionLabel: "Open research notebook →",
  emptyState: "Notes will be added here as the research develops.",
};

/**
 * Folder cards for the notebook index and academic preview chips.
 * href maps to filtered category routes under /notes.
 */
export const noteFolders = [
  {
    id: "paper-notes",
    title: "Paper Notes",
    href: "/notes/paper-notes",
    description:
      "Notes on research papers, including key ideas, methodological choices, limitations, and questions worth carrying into future work.",
  },
  {
    id: "research-questions",
    title: "Research Questions",
    href: "/notes/research-questions",
    description:
      "Open questions about AI systems, human behaviour, trust, decision-making, adoption, engagement, and real-world outcomes.",
  },
  {
    id: "field-experiment-ideas",
    title: "Field Experiment Ideas",
    href: "/notes/field-experiment-ideas",
    description:
      "Early ideas for testing AI recommendations, explanations, personalization, agents, and human support inside real digital products.",
  },
  {
    id: "reflections",
    title: "General Reflections",
    href: "/notes/reflections",
    description:
      "Broader reflections connecting technical learning, product development, research, and observations from real users.",
  },
];

/**
 * Local research-note entries. Keep empty until real notes exist.
 * Example shape (do not invent content):
 * {
 *   title: "...",
 *   slug: "...",
 *   date: "YYYY-MM-DD",
 *   category: "paper-notes",
 *   excerpt: "...",
 *   tags: [],
 *   published: false,
 *   featured: false,
 *   status: "draft",
 * }
 */
const causalFieldEvalPaper = {
  title: "Toward Causal Field Evaluations of AI Systems",
  authors: "David Arbour, Iavor Bojinov, Avi Feller, and Tu Ni",
  year: "2026",
  venue: "Harvard Data Science Review, 8(2)",
  doi: "10.1162/99608f92.7d74e33e",
  url: "https://doi.org/10.1162/99608f92.7d74e33e",
  publisherUrl: "https://hdsr.mitpress.mit.edu/pub/ak16gxi2",
  citation:
    "Arbour, D., Bojinov, I., Feller, A., & Ni, T. (2026). Toward causal field evaluations of AI systems. Harvard Data Science Review, 8(2). https://doi.org/10.1162/99608f92.7d74e33e",
};

export const researchNotes = [
  {
    id: "static-rethinking-ai-evaluation",
    title: "Rethinking AI Evaluation Through Human-AI Interaction",
    slug: "rethinking-ai-evaluation-through-human-ai-interaction",
    date: "2026-08-22",
    category: "paper-notes",
    excerpt:
      "A reflection on Arbour, Bojinov, Feller, and Ni (2026): AI should be evaluated by its causal effect on human outcomes, not only by benchmark performance.",
    tags: ["AI evaluation", "Human-AI interaction", "Causal inference"],
    published: true,
    featured: true,
    status: "published",
    subtitle: "Reflection on “Toward Causal Field Evaluations of AI Systems”",
    relatedSlug: "adaptive-human-ai-systems-personalization-and-trust",
    paper: causalFieldEvalPaper,
    paragraphs: [
      "The rapid development of artificial intelligence has created systems that are increasingly involved in human decisions, learning, and everyday activities. However, many AI systems are still evaluated primarily through technical measurements such as accuracy, efficiency, or performance on benchmark datasets. While these measurements are useful, they do not fully explain whether an AI system actually helps people in real-world situations.",
      "The paper “Toward Causal Field Evaluations of AI Systems” challenges this traditional approach by arguing that AI systems should be evaluated based on their real-world impact on human outcomes. The authors emphasize the importance of understanding whether AI itself causes meaningful changes when people interact with it.",
      "What I found particularly interesting about this perspective is the shift from viewing AI as an independent technical system toward viewing AI as part of a larger human-AI system. The effectiveness of an AI system does not depend only on what the model can do, but also on how humans understand, trust, and use it.",
      "This idea connects strongly with Human-AI Interaction research. If AI systems influence human decisions, then designing better AI requires understanding the relationship between human behavior and AI capabilities. The challenge is not only creating more intelligent models but also creating systems that can communicate effectively, adapt to users, and provide meaningful support.",
      "Although this paper focuses mainly on evaluating AI systems after deployment, it raises an important design question: how can we build AI systems that are naturally aligned with human needs and abilities?",
      "For me, this paper highlights the importance of moving beyond the question of whether an AI system is technically capable. A more important question is whether the system can collaborate with humans in a way that improves their experience, decisions, and outcomes.",
    ],
  },
  {
    id: "static-adaptive-human-ai-question",
    title: "How can adaptive Human-AI systems be designed to understand individual users and provide personalized assistance while maintaining human control and trust?",
    slug: "adaptive-human-ai-systems-personalization-and-trust",
    date: "2026-08-22",
    category: "research-questions",
    excerpt:
      "An open question following Arbour et al. (2026): how personalization and user understanding can coexist with human control and trust.",
    tags: ["Human-AI interaction", "Personalization", "Trust"],
    published: true,
    featured: true,
    status: "published",
    relatedSlug: "rethinking-ai-evaluation-through-human-ai-interaction",
    paper: causalFieldEvalPaper,
    paragraphs: [
      "This question grows out of the argument in Arbour, Bojinov, Feller, and Ni (2026) that AI systems should be judged by their causal effects on people in the field, not only by laboratory or benchmark performance.",
      "If evaluation must include how humans understand, trust, and use a system, then design cannot treat the model as an independent technical object. Adaptive assistance has to remain inspectable and controllable by the person who is supposed to benefit from it.",
    ],
  },
];

export function getNoteFolder(categoryId) {
  return noteFolders.find((folder) => folder.id === categoryId) || null;
}

export function isNoteCategorySlug(slug) {
  return NOTE_CATEGORY_IDS.includes(slug);
}

/** Only published notes appear as full note cards. */
export function getPublishedNotes(notes = researchNotes) {
  return notes.filter((note) => note.published === true);
}

export function getPublishedNotesByCategory(categoryId, notes = researchNotes) {
  return getPublishedNotes(notes).filter((note) => note.category === categoryId);
}

export function getCategoryNoteCount(categoryId, notes = researchNotes) {
  return getPublishedNotesByCategory(categoryId, notes).length;
}

export function getAllCategoryCounts(notes = researchNotes) {
  return Object.fromEntries(
    NOTE_CATEGORY_IDS.map((id) => [id, getCategoryNoteCount(id, notes)])
  );
}
