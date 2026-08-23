/**
 * Research content for /academic.
 * Essay-structure QWK 0.8361 → 0.8488 is the verified result.
 * RubriQ QWK: application figure 0.7545 → 0.7635 is used on the public site.
 */

export const researchInterests = [
  {
    icon: "Users",
    title: "Human-AI interaction and decision-making",
    summary:
      "How people interpret, trust, and act on AI-generated guidance when the decision is consequential.",
    tags: ["Human-AI Interaction", "Trust", "Decision Support"],
  },
  {
    icon: "GraduationCap",
    title: "Real-world evaluation of intelligent systems",
    summary:
      "Whether AI systems improve decisions, task completion, trust, and access to opportunity — not only benchmark scores.",
    tags: ["Evaluation", "User Behavior", "Educational Technology"],
  },
  {
    icon: "PenLine",
    title: "Language models and educational NLP",
    summary:
      "Writing assessment, retrieval-augmented generation, knowledge-graph applications, and personalized language-based tools.",
    tags: ["NLP", "LLMs", "AES", "Knowledge Graphs"],
  },
];

export const researchMethods = [
  "Controlled feature isolation",
  "Shuffled-label controls",
  "Random-boundary controls",
  "Random-feature controls",
  "Bootstrap confidence intervals",
  "Ablation",
  "Human evaluation",
  "Surveys",
  "Interviews",
  "Usability testing",
  "User studies",
  "Post-use feedback",
  "Randomized feature experiments",
];

export const ongoingResearch = {
  title: "Evaluating AI support inside study-abroad products",
  status: "ongoing",
  summary:
    "A research direction on whether recommendations, explanations, personalization, and human support change how people decide, trust a tool, finish a task, or ask for help. Her current thesis work designs a context-aware personalization framework for AI agents: short- and long-term memory, a planner that suggests the next step, and memory viewers users can see and edit. This is work in design and observation, not a completed formal human-subjects study.",
  role: "Independent researcher",
  stage: "Active reading, question-forming, and experiment design",
  methods: [
    "User observation",
    "Product analytics",
    "Feature experiments",
    "Qualitative feedback",
  ],
  tags: ["Human-AI Interaction", "User Behavior", "Educational Technology"],
  links: {
    paper: "https://hdsr.mitpress.mit.edu/pub/ak16gxi2/release/2",
  },
  linkLabels: {
    paper: "Related framework (Arbour et al., not Mayesha’s paper)",
  },
};

export const researchPapers = [
  {
    title:
      "Automated Essay Scoring with Availability Signals and Genetic Algorithms: The RubriQ Framework",
    status: "in-progress",
    summary:
      "Combines DeBERTa-v3-base, availability-inspired essay signals, and genetic-algorithm fusion. The genetic algorithm improved mean held-out QWK from 0.7545 to 0.7635 and beat the baseline on all six prompts.",
    role: "Lead researcher and first author",
    methods: ["DeBERTa-v3", "Genetic algorithms", "Availability features", "QWK"],
    tags: ["Automated Essay Scoring", "NLP", "RubriQ"],
    links: {
      github: "https://github.com/pro-mayesha/rubriq-framework",
    },
  },
  {
    title:
      "What Makes Essay Structure Useful for Automated Scoring? A Document-Engineering Study of Boundary Geometry and Rhetorical Transitions",
    status: "manuscript-revision",
    summary:
      "A predictive isolation study of whether discourse-derived document structure adds value beyond essay text, surface features, and component counts on PERSUADE 2.0. The complete structural model improved held-out QWK from 0.8361 to 0.8488. The study used controlled feature isolation, shuffled-label controls, random-boundary controls, random-feature controls, and bootstrap confidence intervals. This is not a causal study.",
    role: "Lead researcher and first author",
    methods: [
      "PERSUADE 2.0",
      "Feature isolation",
      "Shuffled-label controls",
      "Random-boundary controls",
      "Bootstrap CIs",
      "QWK",
    ],
    tags: ["Automated Essay Scoring", "NLP", "Document Structure"],
    links: {
      github: "https://github.com/pro-mayesha/structure-aware-aes",
    },
  },
  {
    title: "Survey of Graph-Based Text Summarization for HRM Tasks",
    status: "published",
    venue:
      "NLPIR 2024 · Proceedings of the 8th International Conference on Natural Language Processing and Information Retrieval · pp. 380–387",
    summary:
      "Reviews graph-based text summarization methods for human resource management tasks and synthesizes the main approaches, applications, and research directions.",
    role: "Co-author",
    methods: ["Literature Review", "Graph-Based Summarization", "NLP", "HRM"],
    tags: ["Text Summarization", "Graph Methods", "NLP", "HRM"],
    links: {
      paper: "https://doi.org/10.1145/3711542.3711572",
    },
  },
  {
    title:
      "Augmenting Patent Summarization Using a Large Language Model with a Knowledge Graph",
    status: "published",
    venue:
      "LKM@IJCAI 2024 · First International OpenKG Workshop: Large Knowledge-Enhanced Models · pp. 1–13",
    summary:
      "Combines LLaMA 3 with patent knowledge graphs and evaluates the generated summaries through ROUGE and human assessment. Human evaluators preferred the knowledge-graph summaries in most tested patent cases, although the baseline achieved higher ROUGE scores.",
    role: "Co-author",
    methods: ["LLaMA 3", "Knowledge Graphs", "Neo4j", "ROUGE", "Human Evaluation"],
    tags: ["Patent Summarization", "LLMs", "Knowledge Graphs", "NLP"],
    links: {
      paper: "https://ceur-ws.org/Vol-3818/paper1.pdf",
    },
  },
];

export const productResearch = {
  title: "Human-AI product research",
  intro:
    "Mayesha studied how users navigated the products, where they became confused, when they stopped responding, when they requested human assistance, and how feature changes affected completion, bookings, subscriptions, tool usage, and feedback. She does not claim that the products improved school admissions; that outcome has not been measured here.",
  settings: [
    "Approximately 50 AbroadMates users and mentors",
    "10 closed-cohort ApplicationMate applicants",
    "856 chatbot participants",
    "Surveys",
    "Interviews",
    "Usability testing",
    "User studies",
    "Post-use feedback",
    "Randomized feature experiments",
  ],
  figures: [
    { label: "Users", value: "Approximately 1,500" },
    { label: "Booked sessions", value: "More than 2,000" },
    { label: "Mentors", value: "210" },
    { label: "Universities", value: "Approximately 2,700" },
    { label: "Programs", value: "Approximately 157,000" },
  ],
  figuresNote:
    "These are current approximate figures. Booked sessions are sessions, not users.",
};

export const remoteCollaboration = {
  title: "Remote collaboration",
  body:
    "Mayesha leads an 11-person distributed team across Japan, the United States, Canada, Bangladesh, and Italy. The team uses a shared portal, holds two meetings each week, and works primarily through asynchronous coordination.",
  detail:
    "Mayesha reviews weekly task completion, work activity, hours, and efficiency to improve the team’s systems and workflow. This is operational leadership, not a formal human-subject study.",
};
