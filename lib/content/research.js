/**
 * Research content for /academic.
 * Facts follow the November 2026 CVs. Essay-organization QWK .836 → .849.
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
  "Feature-matched falsification controls",
  "Shuffled-label controls",
  "Random-boundary controls",
  "Bootstrap confidence intervals",
  "McNemar tests",
  "LLM-as-judge validation",
  "Ablation",
  "Human evaluation",
  "Surveys",
  "Interviews",
  "Usability testing (task observation)",
  "Product analytics (PostHog)",
  "User studies",
  "Post-use feedback",
  "Randomized feature experiments",
];

export const ongoingResearch = {
  title: "Forget or Flag? Handling Superseded Facts in Long-Term Memory for AI Assistants",
  status: "in-preparation",
  summary:
    "Extending her thesis, Mayesha found that deleting a user’s outdated facts cut an assistant’s accuracy on questions about the past from 0.95 to 0.15, while flagging them as outdated kept both past and present correct. The same loss appears in the open-source Mem0 library: its overwriting release scored 0.24 on past facts, the additive release 0.95. 300 tokens of dated memory items beat the full ~105k-token chat history (0.97 vs 0.85). She built a 200-scenario benchmark of user updates, where an LLM detector reached recall 1.00 vs 0.29 for embedding similarity, and 53 hand-checked earlier-value questions derived from LongMemEval (13 → 66). The judge was validated with a second judge (κ = 0.97) and 60 hand-graded answers, across three readers (Claude Haiku 5.5, Claude Sonnet 5.5, Qwen2.5-7B).",
  venue: "Manuscript in preparation for ACL 2027 · extends the undergraduate thesis",
  role: "Sole author",
  methods: [
    "LLM-as-judge validation",
    "LongMemEval",
    "Mem0",
    "Benchmark construction",
  ],
  tags: ["Long-term memory", "AI assistants", "LLMs"],
  links: {
    github: "https://github.com/pro-mayesha/forget-or-flag",
  },
  linkLabels: {
    github: "Code (public, MIT)",
  },
};

export const researchPapers = [
  {
    title:
      "What does argumentative organization add to holistic essay scores? A controlled decomposition using PERSUADE 2.0",
    status: "under-review",
    venue:
      "Proma, M. M., Maliha, P. J., Peiris, L. H. P., and Kulkarni, P. Submitted to Assessing Writing (Elsevier), 2026.",
    summary:
      "A TF-IDF + ridge model is held fixed while only structural features vary, on 10,401 PERSUADE 2.0 essays (grades 6–12). Argument structure raised QWK from .836 to .849 (95% CI [.009, .016]), gaining on all 15 prompts. Against ten feature-matched controls (shuffled labels, random boundaries), real structure beat every one. Half the gain came from feature format, not organization.",
    role: "First author",
    methods: [
      "PERSUADE 2.0",
      "Feature isolation",
      "Feature-matched controls",
      "Bootstrap CIs",
      "QWK",
    ],
    tags: ["Automated Essay Scoring", "NLP", "Writing Assessment"],
    links: {
      github: "https://github.com/pro-mayesha/structure-aware-aes",
    },
  },
  {
    title: "Survey of Graph-Based Text Summarization for HRM Tasks",
    status: "published",
    venue:
      "Uchkempirov, M., Tajeddini, O., Proma, M. M., and Kulkarni, P. Proc. NLPIR 2024, ACM, pp. 380–387. doi:10.1145/3711542.3711572",
    summary:
      "A survey of 22 studies on graph-based summarization of CVs, cover letters, and motivation letters.",
    role: "Co-author",
    methods: ["Literature Review", "Graph-Based Summarization", "NLP", "HRM"],
    tags: ["Text Summarization", "Graph Methods", "NLP", "HRM"],
    links: {
      paper: "https://doi.org/10.1145/3711542.3711572",
    },
  },
  {
    title:
      "Augmenting Patent Summarization Using Large Language Model with Knowledge Graph",
    status: "published",
    venue:
      "Phyu, S. L., Uchkempirov, M., Proma, M. M., and Kulkarni, P. LKM workshop @ IJCAI 2024, CEUR-WS Vol. 3818, pp. 1–13.",
    summary:
      "Co-developed a knowledge-graph-grounded LLaMA 3 patent summarizer, evaluated with ROUGE and human evaluation. Human evaluators preferred the knowledge-graph summaries in most tested patent cases, although the baseline achieved higher ROUGE scores.",
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
    "250+ user tests and interviews across AbroadMates and ApplicationMate",
    "200+ AbroadMates post-session feedback forms",
    "Screen-share user tests with 50+ ApplicationMate users",
    "15-applicant ApplicationMate beta",
    "Surveys",
    "Interviews",
    "Usability testing (task observation)",
    "Product analytics (PostHog)",
    "Randomized feature experiments",
  ],
  figures: [
    { label: "AbroadMates users", value: "2,000+" },
    { label: "One-to-one sessions", value: "2,000+" },
    { label: "Mentors", value: "200+ in 36 countries" },
    { label: "University sites validated", value: "470" },
    { label: "Program records collected", value: "2,777" },
  ],
  figuresNote:
    "These are current approximate figures. Sessions are sessions, not users.",
};

export const remoteCollaboration = {
  title: "Remote collaboration",
  body:
    "Mayesha leads an 11-person distributed team across Japan, the United States, Canada, Bangladesh, and Italy. The team uses a shared portal, holds two meetings each week, and works primarily through asynchronous coordination.",
  detail:
    "Mayesha reviews weekly task completion, work activity, hours, and efficiency to improve the team’s systems and workflow. This is operational leadership, not a formal human-subject study.",
};
