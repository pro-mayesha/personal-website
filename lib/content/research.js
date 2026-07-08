/**
 * Research content for /academic.
 * EDIT THIS FILE to update your research interests, papers, and working papers.
 *
 * status values (control the colored StatusTag):
 *   "published" | "under-review" | "in-progress" | "research-idea"
 * icon values map to lucide icons in the page: GraduationCap | Users | PenLine
 */

export const researchInterests = [
  {
    icon: "GraduationCap",
    title: "AI for Education",
    summary:
      "Using language models and data to understand how students plan, choose, and learn.",
    tags: ["AI", "EdTech", "LLMs"],
  },
  {
    icon: "Users",
    title: "Human-centered Decision Systems",
    summary:
      "Designing tools that support students in complex, high-stakes decisions with clarity and confidence.",
    tags: ["Human-AI Interaction", "Decision Support"],
  },
  {
    icon: "PenLine",
    title: "Writing, NLP & Evaluation",
    summary:
      "Studying writing quality, feedback, and automated evaluation with fairness and transparency.",
    tags: ["NLP", "Writing Systems", "Evaluation"],
  },
];

export const researchPapers = [
  {
    title: "Structure-Aware Automated Essay Scoring",
    status: "under-review",
    summary:
      "Studies whether discourse structure, paragraph geometry, and boundary features improve automated essay scoring beyond text-only representations.",
    role: "Lead researcher",
    methods: ["Feature Engineering", "QWK Evaluation", "Ablation", "NLP"],
    tags: ["AES", "NLP", "Writing Systems", "Education AI"],
    links: { paper: "#", github: "#", notes: "#" },
  },
  {
    title: "Graph-Based Knowledge Modeling for HRM",
    status: "published",
    summary:
      "Explores graph-based knowledge representation for human resource management and decision support.",
    role: "Researcher",
    methods: ["Knowledge Graphs", "NLP", "Structured Reasoning"],
    tags: ["Knowledge Graphs", "HRM", "AI Systems"],
    links: { paper: "#", github: "#", notes: "#" },
  },
  {
    title: "RAG-Based Patent Summarization",
    status: "published",
    summary:
      "Applies retrieval-augmented generation to generate grounded and concise patent summaries.",
    role: "Researcher",
    methods: ["RAG", "LLMs", "Information Retrieval"],
    tags: ["RAG", "NLP", "Patent Analysis"],
    links: { paper: "#", github: "#", notes: "#" },
  },
];

export const workingPapers = [
  {
    title: "AI Guidance for Study Abroad Decision-Making",
    status: "in-progress",
    summary:
      "Designs AI systems to guide students through complex study abroad choices using personalized reasoning and constraints.",
    role: "Principal investigator",
    tags: ["EdTech", "Student Decisions", "AI Guidance"],
    links: { paper: "#", github: "#", notes: "#" },
  },
  {
    title: "Evaluating AI Essay Tools Through Student Outcomes",
    status: "research-idea",
    summary:
      "Proposes field experiments to evaluate the real impact of AI writing tools on essay quality and admission outcomes.",
    role: "Research design",
    tags: ["Causal Evaluation", "Essay Writing", "Field Experiment"],
    links: { paper: "#", github: "#", notes: "#" },
  },
];
