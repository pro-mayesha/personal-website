/**
 * Experience for /academic — grouped sections, ordered for the page.
 * EDIT THIS FILE to update roles, bullets, and tags.
 *
 * period — free-text date line (preferred when dates are irregular)
 * startDate / endDate — optional; used if period is empty
 */

export const experienceIntro =
  "My journey brings together human-centered AI, research, product building, teaching, and student leadership — from undergraduate research and founding a data science club to co-founding The Abroad Company.";

export const currentStatus =
  "Currently on a gap year after completing a bachelor’s degree in March 2026. Working full-time as an English instructor in Japan while continuing independent research, academic writing, and product development through The Abroad Company.";

export const experienceGroups = [
  {
    id: "professional",
    title: "Professional Experience",
    items: [
      {
        role: "English Instructor",
        organization: "Maple English Club & Cafe, Maple Inc.",
        location: "Saitama, Japan",
        period: "March 2026 — Present",
        bullets: [
          "Teach English full-time to children and Japanese professionals.",
          "Plan and deliver lessons for different ages, proficiency levels, and communication goals.",
          "Teach conversational English and communication for professional settings.",
          "Adapt lessons according to each learner’s progress, confidence, and individual needs.",
          "Work with both young learners and adult professionals through the same organization.",
        ],
        tags: ["English Teaching", "Communication", "Japan"],
        order: 1,
      },
      {
        role: "Co-founder and Product Lead",
        organization: "The Abroad Company",
        period: "2022 — Present",
        description:
          "Co-founded The Abroad Company and lead the development of products supporting students throughout the study-abroad and international university application journey.",
        bullets: [
          "Lead product strategy, user experience, content, research direction, and early-stage growth.",
          "Oversee the development of AbroadMates, a study-abroad mentorship platform.",
          "Lead ApplicationMate, a study-abroad application copilot that combines AI-supported guidance with structured application workflows.",
          "Develop systems for mentor discovery, booking, university recommendations, application planning, document management, and writing support.",
          "Integrate AI models and agents into real user-facing products.",
          "Use the products as real-world environments for studying how human and AI support influence user behaviour and outcomes.",
        ],
        tags: ["Co-founder", "Product Leadership", "AI Systems", "Study Abroad"],
        order: 2,
      },
    ],
  },
  {
    id: "research-experience",
    title: "Research Experience",
    items: [
      {
        role: "Independent Researcher",
        organization: "Human-Centered AI and Real-World AI Evaluation",
        period: "2026 — Present",
        bullets: [
          "Conduct independent research on how AI-enabled systems perform when deployed in real digital products.",
          "Study the causal field evaluation of AI models and agents.",
          "Examine how recommendations, explanations, personalization, and human support affect user behaviour.",
          "Investigate outcomes including decision quality, trust, adoption, purchase behaviour, engagement, task completion, continued use, and retention.",
          "Explore which interventions work, which users benefit, and under what conditions.",
          "Develop research projects informed by experience in NLP, automated essay scoring, knowledge graphs, retrieval-augmented generation, model training, and AI evaluation.",
        ],
        tags: ["Human-Centered AI", "Causal Evaluation", "User Behaviour", "NLP"],
        order: 1,
      },
      {
        role: "Research Assistant",
        organization: "Tokyo International University",
        period: "Four semesters during undergraduate study",
        bullets: [
          "Worked with professors, doctoral researchers, and research teams on applied AI and natural language processing projects.",
          "Prepared, cleaned, and organized research datasets.",
          "Supported the training and evaluation of machine-learning models.",
          "Contributed to experiments involving NLP, language models, knowledge-based systems, and text analysis.",
          "Collaborated with research teams on academic papers and project development.",
          "Developed practical experience in research design, experimentation, evaluation, and academic writing.",
        ],
        tags: ["Research", "NLP", "Machine Learning", "Data Analysis"],
        order: 2,
      },
      {
        role: "Teaching Assistant",
        organization: "Tokyo International University",
        period: "Two consecutive semesters during undergraduate study",
        bullets: [
          "Supported faculty members and students in university courses.",
          "Assisted with classroom activities and student learning.",
          "Helped explain technical and academic concepts.",
          "Provided guidance to students during coursework and practical activities.",
          "Supported communication between students and teaching staff.",
        ],
        tags: ["Teaching", "Academic Support", "Student Learning"],
        order: 3,
      },
    ],
  },
  {
    id: "leadership",
    title: "Leadership",
    items: [
      {
        role: "Founder",
        organization: "TIU Data Science and Analytics Club",
        period: "During undergraduate study",
        bullets: [
          "Founded a student-led community at Tokyo International University for students interested in data science, analytics, and artificial intelligence.",
          "Established the club’s initial vision, structure, and direction.",
          "Created a space for students to learn, collaborate, and exchange ideas.",
          "Encouraged practical engagement with data science, analytics, and AI.",
          "Supported student-led learning and technical community building.",
        ],
        tags: ["Founder", "Data Science", "Student Leadership"],
        order: 1,
      },
    ],
  },
  {
    id: "earlier-leadership",
    title: "Earlier Leadership and Community Work",
    items: [
      {
        role: "Founder",
        organization: "Superwoman: A She Learning Platform",
        period: "",
        description:
          "Founded a learning platform focused on helping women access educational resources, opportunities, and supportive learning communities.",
        bullets: [],
        tags: ["Founder", "Women’s Empowerment", "Learning"],
        order: 1,
      },
      {
        role: "Co-founder and Former President",
        organization: "Women Opportunities",
        period: "",
        description:
          "Co-founded and led a community that shared educational, professional, scholarship, and leadership opportunities with young women.",
        bullets: [],
        tags: ["Community", "Leadership", "Opportunities", "Women"],
        order: 2,
      },
      {
        role: "Divisional Coordinator",
        organization: "English Olympiad",
        period: "",
        description:
          "Supported regional coordination, participant communication, and student engagement for English Olympiad activities.",
        bullets: [],
        tags: ["Coordination", "Communication", "Student Engagement"],
        order: 3,
      },
      {
        role: "Educational Content Developer",
        organization: "National Curriculum and Textbook Board, Bangladesh",
        period: "",
        description:
          "Contributed to the development of educational content for students in Bangladesh.",
        bullets: [],
        tags: ["Content Development", "Curriculum", "Bangladesh"],
        order: 4,
      },
    ],
  },
];

/** Flat list (all groups) for any consumer that needs a single array. */
export const experienceItems = experienceGroups.flatMap((group, groupIndex) =>
  group.items.map((item, index) => ({
    ...item,
    group: group.id,
    order: groupIndex * 100 + index + 1,
  }))
);
