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
    date: "2026-07-14",
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
    date: "2026-08-08",
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
  {
    id: "static-what-should-a-personal-ai-agent-be-allowed-to-keep",
    title: "What should a personal AI agent be allowed to keep?",
    slug: "what-should-a-personal-ai-agent-be-allowed-to-keep",
    date: "2025-11-04",
    category: "research-questions",
    excerpt:
      "Starting a lab proposal on context-aware personalization for AI agents, and the question of who controls the memory.",
    tags: ["Personalization", "Memory", "Human control"],
    published: true,
    featured: false,
    status: "published",
    paragraphs: [
      "This month I started a research proposal in Professor Kulkarni’s lab on context-aware personalization for AI agents. The easy version of the idea is “the agent remembers you.” The harder version is deciding what it should remember, for how long, and who gets to see it.",
      "Two parts of the proposal feel most important to me. First, stakeholder interviews, because I do not want to guess what students and mentors want an assistant to know about them. Second, a memory viewer: a screen where a user can see what the agent keeps and change it.",
      "Open question: if users can edit memory, do they actually use that control, or does it only make them trust the system more? Those are different outcomes and I should not mix them.",
    ],
  },
  {
    id: "static-finishing-the-thesis",
    title: "Finishing the thesis",
    slug: "finishing-the-thesis",
    date: "2025-12-16",
    category: "reflections",
    excerpt:
      "Submitting my thesis on constraint-aware memory for long-horizon AI assistants.",
    tags: ["Thesis", "Memory", "LLMs"],
    published: true,
    featured: false,
    status: "published",
    paragraphs: [
      "I finished my thesis this month: Constraint-Aware Memory for Long-Horizon AI Assistants: Structured Retrieval and Conflict Resolution under Fixed Context Budgets. My advisors were Prof. Parag Kulkarni and Prof. Fatih Ozaydin.",
      "The core problem is simple to say. An assistant cannot read everything a user has ever told it, so it has to choose. And when two remembered facts conflict, it has to decide what to do.",
      "The part I keep thinking about is conflict resolution. When a user’s fact changes, the obvious move is to replace the old one. I am not sure that is right yet. That is the question I want to carry forward.",
    ],
  },
  {
    id: "static-delete-or-flag-an-outdated-fact",
    title: "Delete or flag an outdated fact?",
    slug: "delete-or-flag-an-outdated-fact",
    date: "2026-01-20",
    category: "field-experiment-ideas",
    excerpt:
      "A first test design for what happens when an assistant overwrites a user’s old information.",
    tags: ["Memory", "Evaluation", "Experiment design"],
    published: true,
    featured: false,
    status: "published",
    paragraphs: [
      "Extending the thesis, I want to compare two policies when a user’s fact changes: delete the old value, or keep it and flag it as outdated.",
      "Deleting looks cleaner. But many real questions are about the past: “where did I live before?”, “what was my old deadline?” If the old value is gone, the assistant cannot answer those at all.",
      "Plan: build questions about both the current value and the earlier value, run them under each policy, and score both. If deletion only hurts past questions, that should show up clearly. I am treating this as a hypothesis until the numbers exist.",
    ],
  },
  {
    id: "static-mentor-profiles-and-what-simple-really-means",
    title: "Mentor profiles and what “simple” really means",
    slug: "mentor-profiles-and-what-simple-really-means",
    date: "2026-02-10",
    category: "reflections",
    excerpt:
      "Simplifying mentor setup on AbroadMates, and watching profile completion change.",
    tags: ["AbroadMates", "Product research", "User testing"],
    published: true,
    featured: false,
    status: "published",
    paragraphs: [
      "One of the clearest lessons from AbroadMates came from mentor profiles. Only around half of mentors were completing them. After we simplified setup, completion went above 99%.",
      "Nobody told us the old setup was too long. We saw it in user tests and in PostHog data: people started, then stopped. The fix was less about persuasion and more about removing steps.",
      "This is product observation, not a formal study. But it changed how I think about research too: often the useful signal is where people quietly stop.",
    ],
  },
  {
    id: "static-graduating",
    title: "Graduating",
    slug: "graduating",
    date: "2026-03-18",
    category: "reflections",
    excerpt:
      "Finishing my B.S. at Tokyo International University after four years in Japan.",
    tags: ["TIU", "Japan", "Graduation"],
    published: true,
    featured: false,
    status: "published",
    paragraphs: [
      "I finished my B.S. in Digital Business and Innovation at Tokyo International University this month, with a concentration in AI and Data Science.",
      "Four years ago I arrived during COVID-19, on a full-tuition scholarship, still learning how to buy a train pass in Japanese. Since then: a research lab, two published co-authored papers, a student association, a data science club, and a company.",
      "I am not stopping research because the degree ended. The memory work is not finished, and I want to see it through.",
    ],
  },
  {
    id: "static-teaching-again-and-research-on-my-own",
    title: "Teaching again, and research on my own",
    slug: "teaching-again-and-research-on-my-own",
    date: "2026-04-14",
    category: "reflections",
    excerpt:
      "Starting one-to-one English lessons in Saitama while continuing the lab research independently.",
    tags: ["Teaching", "Independent research"],
    published: true,
    featured: false,
    status: "published",
    paragraphs: [
      "This month I started teaching English at Maple Inc. in Saitama: one-to-one lessons for adults and children. I have been tutoring in some form since 2015, starting with my younger siblings and cousins, so it feels familiar in a good way.",
      "At the same time, my research continues independently. Most of it now happens in the evenings and on weekends.",
      "Teaching one person at a time is also a reminder of what I want from AI assistants: notice what this person already knows, and adjust.",
    ],
  },
  {
    id: "static-deleting-outdated-facts-first-results",
    title: "Deleting outdated facts: first results",
    slug: "deleting-outdated-facts-first-results",
    date: "2026-05-12",
    category: "paper-notes",
    excerpt:
      "Deleting a user’s old facts cut accuracy on past questions from 0.95 to 0.15; flagging kept both past and present correct.",
    tags: ["Memory", "LLMs", "Results"],
    published: true,
    featured: false,
    status: "published",
    paragraphs: [
      "The first result from the forget-or-flag experiments is stronger than I expected. When outdated facts were deleted, accuracy on questions about the past fell from 0.95 to 0.15. When they were flagged as outdated instead, the assistant kept both past and present answers correct.",
      "Interpretation: deletion is not a neutral cleanup step. It removes information users still ask about.",
      "Limitation I need to address next: is my judge reliable? An LLM grading answers is convenient, but I need to validate it before I trust these numbers in a paper.",
    ],
  },
  {
    id: "static-checking-the-judge",
    title: "Checking the judge",
    slug: "checking-the-judge",
    date: "2026-06-09",
    category: "paper-notes",
    excerpt:
      "Validating an LLM-as-judge with a second judge and hand-graded answers.",
    tags: ["LLM-as-judge", "Evaluation", "Methods"],
    published: true,
    featured: false,
    status: "published",
    paragraphs: [
      "Before writing more, I validated the grading. A second judge agreed with the first at κ = 0.97, and I hand-graded 60 answers myself.",
      "I also built a 200-scenario benchmark of user updates. For detecting that a fact had changed, an LLM detector reached recall 1.00, while embedding similarity reached 0.29. Similar-sounding sentences are not the same thing as an update.",
      "This part is less exciting than the headline result, but it is the part a reviewer will check first.",
    ],
  },
  {
    id: "static-the-same-loss-in-mem0",
    title: "The same loss in Mem0",
    slug: "the-same-loss-in-mem0",
    date: "2026-07-07",
    category: "paper-notes",
    excerpt:
      "Testing whether the deletion problem appears in an open-source memory library.",
    tags: ["Mem0", "Memory", "Open source"],
    published: true,
    featured: false,
    status: "published",
    paragraphs: [
      "I wanted to know whether the problem only exists in my own setup. So I tested the open-source Mem0 library.",
      "Its overwriting release scored 0.24 on past facts. Its additive release scored 0.95. The same pattern: when old values are overwritten, questions about the past break.",
      "I am careful not to call this a bug in Mem0. It is a design choice with a cost that is easy to miss if you only test current facts.",
    ],
  },
  {
    id: "static-do-assistants-need-the-whole-chat-history",
    title: "Do assistants need the whole chat history?",
    slug: "do-assistants-need-the-whole-chat-history",
    date: "2026-08-27",
    category: "research-questions",
    excerpt:
      "300 tokens of dated memory items beat the full ~105k-token history.",
    tags: ["Context budgets", "Memory", "Retrieval"],
    published: true,
    featured: false,
    status: "published",
    paragraphs: [
      "One comparison surprised me. With 300 tokens of dated memory items, the assistant scored 0.97. With the full chat history, around 105k tokens, it scored 0.85.",
      "More context was worse here. My interpretation is that dates and structure matter more than volume, but I have not proven why.",
      "Open question: how small can memory get before it starts losing the past again? I also added 53 hand-checked earlier-value questions derived from LongMemEval, which raised that question type from 13 to 66, so I can test this more fairly.",
    ],
  },
  {
    id: "static-submitting-the-essay-paper",
    title: "Submitting the essay paper",
    slug: "submitting-the-essay-paper",
    date: "2026-09-15",
    category: "reflections",
    excerpt:
      "Our paper on argumentative organization and essay scores is submitted to Assessing Writing.",
    tags: ["Essay scoring", "PERSUADE 2.0", "Writing assessment"],
    published: true,
    featured: false,
    status: "published",
    paragraphs: [
      "We submitted “What does argumentative organization add to holistic essay scores?” to Assessing Writing, with P. J. Maliha, L. H. P. Peiris, and Prof. Kulkarni.",
      "The design keeps one TF-IDF + ridge model fixed and changes only the structural features, on 10,401 PERSUADE 2.0 essays. Argument structure raised QWK from .836 to .849, and it gained on all 15 prompts. Real structure beat all ten feature-matched controls.",
      "The finding I am most glad we reported: about half the gain came from feature format, not organization. It would have been easy to leave that out.",
    ],
  },
  {
    id: "static-what-250-conversations-taught-me-about-ai-recommendations",
    title: "What 250 conversations taught me about AI recommendations",
    slug: "what-250-conversations-taught-me-about-ai-recommendations",
    date: "2026-10-13",
    category: "reflections",
    excerpt:
      "Of 250+ users interviewed, 63% were satisfied with AI university lists; 37% had a mentor check them.",
    tags: ["ApplicationMate", "Trust", "User research"],
    published: true,
    featured: false,
    status: "published",
    paragraphs: [
      "Across AbroadMates and ApplicationMate we have now run 250+ user tests and interviews. One number stays with me: 63% were satisfied with the AI-generated university lists, and 37% had a mentor check them.",
      "I do not read that 37% as failure. For a decision this big, wanting a person to confirm makes sense.",
      "It is product observation, not a formal study. But it is the same question as my memory research: when does a person trust what a system tells them, and what would make that trust deserved?",
    ],
  },
  {
    id: "static-writing-forget-or-flag-for-acl-2027",
    title: "Writing Forget or Flag? for ACL 2027",
    slug: "writing-forget-or-flag-for-acl-2027",
    date: "2026-11-10",
    category: "research-questions",
    excerpt:
      "Turning a year of memory experiments into a sole-author paper, and the code is public.",
    tags: ["ACL 2027", "Memory", "Open code"],
    published: true,
    featured: false,
    status: "published",
    paragraphs: [
      "I am now writing “Forget or Flag? Handling Superseded Facts in Long-Term Memory for AI Assistants” as a sole-author paper for ACL 2027. The code is public under MIT: github.com/pro-mayesha/forget-or-flag.",
      "I tested three readers: Claude Haiku 5.5, Claude Sonnet 5.5, and Qwen2.5-7B. The paper needs to show the effect is not tied to one model.",
      "Still open: what should flagging look like for the user? That brings me back to the memory viewer from last year’s proposal.",
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
