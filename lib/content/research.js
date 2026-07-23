/**
 * Research content for /academic.
 * EDIT THIS FILE to update research interests, ongoing work, and publications.
 *
 * status values (StatusTag):
 *   "published" | "ongoing" | "manuscript-revision" | "under-review" |
 *   "in-progress" | "research-idea" | "working-paper"
 * icon values for interests: GraduationCap | Users | PenLine
 *
 * Note: The Harvard Data Science Review “framework paper” link on ongoingResearch
 * is by Arbour, Bojinov, Feller & Ni — it informs this project; it is not Mayesha’s paper.
 */

export const researchInterests = [
  {
    icon: "GraduationCap",
    title: "Causal Field Evaluation of AI Systems",
    summary:
      "Studying whether AI models and agents achieve their intended goals when deployed in real products, which users benefit, and under what conditions they work best.",
    tags: ["Causal Inference", "Field Experiments", "AI Evaluation"],
  },
  {
    icon: "Users",
    title: "Human-AI Decisions and User Behavior",
    summary:
      "Examining how recommendations, explanations, personalization, and human support influence decisions, trust, adoption, conversion, engagement, and retention.",
    tags: ["Human-AI Interaction", "Decision Support", "User Behavior"],
  },
  {
    icon: "PenLine",
    title: "Language Models and Intelligent Systems",
    summary:
      "Developing and evaluating language-based systems for writing assessment, retrieval-augmented generation, knowledge-based applications, and personalized AI guidance.",
    tags: ["NLP", "LLMs", "AI Agents", "Evaluation"],
  },
];

export const ongoingResearch = {
  title: "Causal Field Evaluation of AI Systems in Study-Abroad Platforms",
  status: "ongoing",
  summary:
    "Adapts causal field evaluation methods to AI models and agents deployed in real study-abroad products. The research examines whether these systems achieve their intended goals and how recommendations, explanations, personalization, and human support affect decisions, trust, adoption, conversion, engagement, and retention.",
  role: "Lead researcher",
  stage: "Active research and experiment design",
  methods: [
    "Randomized Field Experiments",
    "A/B Testing",
    "Causal Inference",
    "Behavioral Analytics",
  ],
  tags: [
    "Causal AI Evaluation",
    "Field Experiments",
    "Human-AI Interaction",
    "User Behavior",
  ],
  links: {
    paper: "https://hdsr.mitpress.mit.edu/pub/ak16gxi2/release/2",
  },
  linkLabels: {
    paper: "Framework paper",
  },
};

export const researchPapers = [
  {
    title:
      "Do Document Boundaries and Rhetorical Transitions Matter for Holistic Essay Scoring?",
    status: "manuscript-revision",
    summary:
      "Tests whether discourse-derived document structure adds predictive value beyond essay text, surface features, and component counts on PERSUADE 2.0. Full-structure features improved held-out QWK from 0.836 to 0.849 and outperformed the baseline across all 15 prompts.",
    role: "Lead researcher and first author",
    methods: [
      "PERSUADE 2.0",
      "TF-IDF + Ridge",
      "DeBERTa",
      "QWK",
      "Ablation",
    ],
    tags: [
      "Automated Essay Scoring",
      "NLP",
      "Document Structure",
    ],
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
    methods: [
      "Literature Review",
      "Graph-Based Summarization",
      "NLP",
      "HRM",
    ],
    tags: [
      "Text Summarization",
      "Graph Methods",
      "NLP",
      "HRM",
    ],
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
    methods: [
      "LLaMA 3",
      "Knowledge Graphs",
      "Neo4j",
      "ROUGE",
      "Human Evaluation",
    ],
    tags: [
      "Patent Summarization",
      "LLMs",
      "Knowledge Graphs",
      "NLP",
    ],
    links: {
      paper: "https://ceur-ws.org/Vol-3818/paper1.pdf",
    },
  },
];
