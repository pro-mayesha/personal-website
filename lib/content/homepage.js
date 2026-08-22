/**
 * Content for the artistic homepage (the notebook-style landing page).
 * EDIT THIS FILE to change hero pages, beliefs, journey milestones, archive,
 * the research lists, mentorship topics, and the notebook menu/filters.
 *
 * NOTE: Purely decorative pieces (hand-drawn SVG doodles, section headings,
 * inline emphasis) live in the components — this file holds the editable text.
 */

// The 4 flip-through hero "pages". `sketch` selects the illustration.
export const heroPages = [
  {
    page: "1",
    label: "proma hero",
    eyebrow: "",
    name: "Hi. I am Mayesha Maliha Proma ✦",
    title: "Curious, diverse, leading my own way from the start.",
    meta: ["● Bangladesh", "↔ Japan", "● GMT+9"],
    line: "",
    primary: "Read my story",
    primaryHref: "/notes/hi-im-mayesha-maliha-proma",
    secondary: "See my work",
    secondaryHref: "/#work",
    note: "— written somewhere between Kawagoe & everywhere else",
    sketch: "app",
  },
  {
    page: "2",
    label: "founder story",
    eyebrow: "Founder Story",
    name: "Founder ✦",
    title: "Everything draws me in, risk is fun, ventures solve.",
    meta: ["self-applied", "scholarship", "student-first"],
    line: "",
    primary: "Founder story",
    primaryHref: "/notes/founder-story",
    secondary: "The chaos",
    secondaryHref: "/notes/the-chaos-i-couldnt-ignore",
    note: "— building the alternative I wish I had",
    sketch: "founder",
  },
  {
    page: "3",
    label: "research story",
    eyebrow: "Researcher",
    name: "Researcher ✦",
    title: "I go deep, ask the last question, learn from it.",
    meta: ["NLP", "essay intelligence", "student decisions"],
    line: "",
    primary: "Research work",
    primaryHref: "/notes/researcher",
    secondary: "Read notes",
    secondaryHref: "/notes",
    note: "— notebooks, models, and coffee",
    sketch: "research",
  },
  {
    page: "4",
    label: "traveler story",
    eyebrow: "Traveler",
    name: "Traveler ✦",
    title: "I follow, watch, think, and reflect on the world.",
    meta: ["✈ borders", "● slow travel", "✎ field notes"],
    line: "",
    primary: "See the journey",
    primaryHref: "/notes/traveler",
    secondary: "Travel notes",
    secondaryHref: "/notes/traveler",
    note: "— passport stamps & cafés along the way",
    sketch: "travel",
  },
];

// The notebook top menu (label, href).
export const notebookMenu = [
  ["about", "/#about"],
  ["story", "/#story"],
  ["work", "/#work"],
  ["research", "/#research"],
  ["academic", "/academic"],
  ["notes", "/notes"],
  ["connect", "/#connect"],
];

// "3 things I strongly believe in" — doodles stay in the component (by index).
export const beliefs = [
  {
    num: "01",
    title: "Build, then refine",
    tagline: "Ship, test, improve",
    desc: "A mediocre thing that exists beats a perfect thing that doesn’t. Learn, adjust, and make it better.",
    bg: "#fff4ef",
    rotate: "-rotate-[1.2deg]",
    tape: true,
  },
  {
    num: "02",
    title: "Find joy in the small things",
    tagline: "Small moments, big impact",
    desc: "Work, walk, or listen to music—life can always be fun. Small moments shape mood, creativity, and energy.",
    bg: "#fdf0ec",
    rotate: "rotate-[0.8deg]",
    tape: false,
  },
  {
    num: "03",
    title: "Everything can be learned",
    tagline: "Curiosity unlocks growth",
    desc: "Curiosity is the key. Today you might not know something, tomorrow you can. Explore, try, and grow every day.",
    bg: "#fff8f5",
    rotate: "-rotate-[0.5deg]",
    tape: true,
  },
];

// "The journey so far" timeline.
export const journeyMilestones = [
  { year: "2018", title: "Early curiosity in Bangladesh", desc: "Leadership, organizing, and a growing urge to fix broken systems.", note: "the seeds ✦" },
  { year: "2020", title: "Applied abroad independently", desc: "Rejected the agency model. Self-applied to universities across North America, Europe, and Asia.", note: "scary but right" },
  { year: "2021", title: "Full-tuition scholarship to Japan", desc: "Moved to Tokyo International University to study Digital Business & Innovation.", note: "!!!!! 🎉" },
  { year: "2022", title: "Started AbroadMates", desc: "Built a peer-to-peer mentorship platform so students could talk to people who actually walked the path.", note: "live!" },
  { year: "2023", title: "Co-founded The Abroad Company", desc: "The bigger mission: building infrastructure for crossing borders.", note: "with Rahat ✦" },
  { year: "2024", title: "Building ApplicationMate", desc: "An AI copilot for study abroad — powered by Pearl, a friendly AI mascot.", note: "Pearl is adorable" },
  { year: "2025", title: "AI research & writing publicly", desc: "Personalization research, essay scoring, and writing honestly about all of it.", note: "← you are here" },
];

// Archive grid. `icon` maps to a lucide icon in the component.
export const archiveItems = [
  {
    icon: "PenLine",
    title: "Proma Notes",
    body: "Personal writing — stories, founder notes, and the path I’m on.",
    href: "/notes/hi-im-mayesha-maliha-proma",
  },
  {
    icon: "BookOpen",
    title: "Research Notes",
    body: "Paper notes, open questions, and reflections on Human-AI systems.",
    href: "/notes",
  },
  { icon: "Coffee", title: "Podcast", body: "Conversations on AI, ambition, and borders.", href: "/#connect" },
  {
    icon: "Camera",
    title: "Travel Stories",
    body: "Personal notes from Japan, Bangladesh, and elsewhere.",
    href: "/notes/traveler",
  },
];

// Research & technical work section.
export const researchAreas = [
  { label: "AI/ML Personalization", note: "my main focus" },
  { label: "Natural Language Processing", note: "BERT, transformers" },
  { label: "Automated Essay Scoring", note: "for applications" },
  { label: "Data Science (HarvardX)", note: "ongoing" },
  { label: "Prompt Engineering", note: "also teaching others" },
];

export const researchTerminalLines = [
  { text: "$ python train_model.py", className: "text-cream/70" },
  { text: "→ Loading BERT model...", className: "text-cream/35" },
  { text: "→ Processing essay embeddings...", className: "text-cream/35" },
  { text: "→ accuracy: 94.2% ✓", className: "text-orange-200 font-semibold" },
  { text: "→ Model ready for deployment", className: "text-cream/35" },
];

// Mentorship topics + call-to-action.
export const mentorshipAreas = [
  "Japan applications & student life",
  "TIU applications & scholarships",
  "SOP & essay strategy",
  "Application planning & timelines",
  "AI/data science learning path",
  "Self-application (skip the agents)",
];

export const mentorshipCta = {
  label: "Book a session through AbroadMates",
  href: "https://abroadmates.com",
};

// Notebook notes filters.
export const notebookFilters = [
  { id: "all", label: "All" },
  { id: "founder", label: "Founder" },
  { id: "personal", label: "Personal" },
  { id: "research", label: "Research" },
];
