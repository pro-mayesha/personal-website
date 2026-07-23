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
    "This is an evolving research notebook where I document what I am reading, the questions I am developing, possible field experiments, and reflections from building and evaluating AI-enabled systems.",
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
export const researchNotes = [];

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
