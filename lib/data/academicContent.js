/** Edit CV content here — imported by the /academic page. */

export const hero = {
  name: "Mayesha Maliha Proma",
  title: "Founder, AI Researcher, PhD Applicant",
  statement:
    "I study how AI systems can support high-stakes student decisions, writing, and cross-border education.",
  credibility: [
    "Founder of AbroadMates",
    "Building ApplicationMate",
    "AI, NLP, EdTech",
    "Preparing for PhD",
  ],
  handwrittenNote: "for professors & collaborators",
  cvDownloadHref: "#",
  emailHref: "mailto:hello@mayeshamalihaproma.com",
  notesHref: "/notes",
};

export const sidebarSections = [
  { id: "focus", label: "Research Focus" },
  { id: "education", label: "Education" },
  { id: "papers", label: "Research Papers" },
  { id: "working-papers", label: "Working Papers" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills & Methods" },
  { id: "research-notes", label: "Research Notes" },
  { id: "contact", label: "Contact" },
];

export const researchFocus = {
  summary:
    "My work sits at the intersection of NLP, education AI, and human decision-making — especially where students face irreversible choices about studying abroad, writing admissions essays, and navigating unfamiliar systems.",
  interests: [
    "Automated essay scoring & writing quality",
    "AI guidance for study abroad decisions",
    "Causal evaluation of EdTech tools",
    "Knowledge graphs & structured reasoning",
    "Human–AI interaction in high-stakes settings",
  ],
  categoryTags: ["AI", "NLP", "EdTech", "Causal Inference", "Writing Systems", "Study Abroad", "Human AI Interaction"],
};

export const education = [
  {
    period: "2024 — Present",
    degree: "MSc (planned / in progress)",
    institution: "Politecnico di Torino",
    detail: "Focus on data science, AI systems, and applied research methods.",
    tags: ["Graduate Study", "AI"],
  },
  {
    period: "2021 — 2025",
    degree: "B.A. Digital Business & Innovation",
    institution: "Tokyo International University",
    detail: "Full-tuition scholarship. Built ventures while studying product, innovation, and cross-border education.",
    tags: ["Japan", "Scholarship", "Innovation"],
  },
  {
    period: "Earlier",
    degree: "Secondary & pre-university education",
    institution: "Bangladesh",
    detail: "Self-directed path to applying abroad independently — without traditional agency support.",
    tags: ["Bangladesh", "Self-applied"],
  },
];

export const researchPapers = [
  {
    title: "Structure-Aware Automated Essay Scoring",
    status: "under-review",
    summary:
      "Studies whether discourse structure, paragraph geometry, and boundary features improve automated essay scoring beyond text-only representations.",
    role: "Lead researcher — feature design, experiments, evaluation",
    methods: ["AES", "NLP", "Writing Systems", "Education AI"],
    tags: ["AES", "NLP", "Writing Systems", "Education AI"],
    bullets: [
      "Built structure-aware essay features",
      "Compared feature families against text baselines",
      "Evaluated using QWK and validation controls",
      "Focused on interpretable signals beyond black-box models",
    ],
    links: { paper: "#", github: "#", notes: "/notes" },
  },
  {
    title: "Graph-Based Knowledge Modeling for HRM",
    status: "published",
    summary: "Models organizational knowledge as graphs to support human resource management and structured retrieval.",
    role: "Research contributor",
    methods: ["Knowledge Graphs", "HRM", "AI Systems"],
    tags: ["Knowledge Graphs", "HRM", "AI Systems"],
    bullets: [],
    links: { paper: "#", github: "#", notes: "#" },
  },
  {
    title: "RAG-Based Patent Summarization",
    status: "published",
    summary: "Retrieval-augmented generation pipeline for concise, source-grounded patent summaries.",
    role: "Lead implementer",
    methods: ["RAG", "NLP", "Patent Analysis"],
    tags: ["RAG", "NLP", "Patent Analysis"],
    bullets: [],
    links: { paper: "#", github: "#", notes: "#" },
  },
];

export const workingPapers = [
  {
    title: "AI Guidance for Study Abroad Decision-Making",
    status: "in-progress",
    summary:
      "Explores how AI systems can support students choosing universities, countries, and application strategies without replacing human judgment.",
    role: "Principal investigator (founder-led research)",
    methods: ["EdTech", "Student Decisions", "AI Guidance"],
    tags: ["EdTech", "Student Decisions", "AI Guidance"],
    bullets: [
      "Grounded in founder experience with AbroadMates and ApplicationMate",
      "Focus on decision quality, not just information delivery",
    ],
    links: { paper: "#", github: "#", notes: "/notes" },
  },
  {
    title: "Evaluating AI Essay Tools Through Student Outcomes",
    status: "research-idea",
    summary:
      "Proposes field-style evaluation linking AI writing assistance to measurable student outcomes and application quality.",
    role: "Research design",
    methods: ["Causal Evaluation", "Essay Writing", "Field Experiment"],
    tags: ["Causal Evaluation", "Essay Writing", "Field Experiment"],
    bullets: [],
    links: { paper: "#", github: "#", notes: "#" },
  },
];

export const experience = [
  {
    period: "2022 — Present",
    role: "Co-founder",
    organization: "AbroadMates",
    description:
      "Peer mentorship platform connecting students with mentors who have actually studied abroad — reducing information asymmetry in admissions.",
    tags: ["Founder", "EdTech", "Study Abroad"],
  },
  {
    period: "2023 — Present",
    role: "Founder / Product Lead",
    organization: "ApplicationMate",
    description:
      "AI-guided application workflow for students applying internationally — essay support, planning, and decision scaffolding.",
    tags: ["Founder", "AI", "Product"],
  },
  {
    period: "Ongoing",
    role: "Research & AI projects",
    organization: "Independent / academic collaborations",
    description:
      "NLP, essay scoring, knowledge graphs, and evaluation work aligned with PhD preparation in education AI and human-centered systems.",
    tags: ["Research", "NLP"],
  },
];

export const projects = [
  {
    name: "AbroadMates",
    description: "Peer mentorship for study abroad — real people, real paths, not agency sales funnels.",
    built: "Marketplace, mentor matching, student-first onboarding",
    why: "Students deserve advice from someone who has walked the path.",
    tags: ["EdTech", "Mentorship", "Study Abroad"],
    href: "https://abroadmates.com",
  },
  {
    name: "ApplicationMate",
    description: "AI-assisted application workflow for international students.",
    built: "Writing guidance, application planning, student decision support",
    why: "High-stakes applications need tools that respect agency, not replace it.",
    tags: ["AI", "Writing", "Applications"],
    href: "https://applicationmate.com",
  },
  {
    name: "Research Notes",
    description: "Public notebook of paper summaries, research questions, and field experiment ideas.",
    built: "Notes index, personal vs research lanes, live publishing",
    why: "Thinking in public while preparing for doctoral research.",
    tags: ["Writing", "Research", "Open Notes"],
    href: "/notes",
  },
  {
    name: "The Abroad Company",
    description: "Parent mission — infrastructure for students crossing borders.",
    built: "Venture portfolio, product strategy, cross-product research themes",
    why: "One umbrella for student-first tools in global education.",
    tags: ["Founder", "Systems", "EdTech"],
    href: "#",
  },
];

export const skills = {
  researchMethods: {
    label: "Research Methods",
    keywords: ["Experiment design", "QWK evaluation", "Feature ablation", "Literature synthesis", "Causal thinking"],
    detail: "Comfortable moving from research question to measurable evaluation — especially in education and writing domains.",
  },
  aiNlp: {
    label: "AI and NLP",
    keywords: ["Transformers", "RAG", "Knowledge graphs", "AES", "Embeddings", "Structured features"],
    detail: "Hands-on with pipelines that balance model performance and interpretability for student-facing tools.",
  },
  productSystems: {
    label: "Product and Systems",
    keywords: ["0→1 product", "User research", "Founder-led iteration", "EdTech UX", "Cross-border workflows"],
    detail: "Built live products used by students — research informed by real deployment constraints.",
  },
  tools: {
    label: "Tools",
    keywords: ["Python", "PyTorch", "MongoDB", "Next.js", "React", "LaTeX", "Git"],
    detail: "Full stack from notebooks to production web apps.",
  },
};

export const researchNotesIntro =
  "I write short public notes while reading papers, building research ideas, and preparing for PhD applications.";

export const researchNoteSamples = [
  {
    title: "Paper Notes",
    description: "Summaries and critiques of AES, RAG, and education AI papers — what holds up, what does not.",
    href: "/notes",
    tag: "Reading",
  },
  {
    title: "Research Questions",
    description: "Open questions on student decisions, essay quality signals, and when AI helps vs harms.",
    href: "/notes",
    tag: "Ideas",
  },
  {
    title: "Field Experiment Ideas",
    description: "Draft designs for evaluating AI writing tools through real student outcomes.",
    href: "/notes",
    tag: "Methods",
  },
  {
    title: "AI and Education Reflections",
    description: "Founder observations from building tools students actually use.",
    href: "/notes",
    tag: "Reflection",
  },
];

export const contact = {
  email: "hello@mayeshamalihaproma.com",
  emailHref: "mailto:hello@mayeshamalihaproma.com",
  linkedin: "#",
  github: "#",
  cvHref: "#",
};

export const quickFacts = {
  location: "Japan / Bangladesh",
  languages: "English, Bengali",
  seeking: "PhD opportunities in AI, NLP, EdTech, HCI",
  themes: ["Education AI", "Writing systems", "Student decisions", "Cross-border education"],
};
