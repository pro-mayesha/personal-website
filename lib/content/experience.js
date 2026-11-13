/**
 * Experience for /academic.
 * Dates follow the November 2026 CVs: lab researcher from January 2024
 * (independent since April 2026); teaching assistant August 2024 – April 2025.
 */

export const experienceIntro =
  "Mayesha’s path brings together undergraduate research under Professor Parag Kulkarni, teaching support at Tokyo International University, product building, and student leadership.";

export const currentStatus =
  "After completing her bachelor’s degree in March 2026, Mayesha has been teaching English in Saitama while continuing independent research, academic writing, and product work through The Abroad Company. She is preparing MASc applications for Fall 2027.";

export const experienceGroups = [
  {
    id: "research-experience",
    title: "Research experience",
    items: [
      {
        role: "Researcher",
        organization: "NLP and ML Lab of Prof. Parag Kulkarni",
        location: "Tokyo International University, Tokyo, Japan",
        period: "January 2024 — present (independent since April 2026)",
        description:
          "Research in natural language processing, machine learning, knowledge graphs, and long-term memory for AI assistants.",
        bullets: [
          "Forget or Flag? Handling Superseded Facts in Long-Term Memory for AI Assistants: sole author; manuscript in preparation for ACL 2027; extends the thesis.",
          "What does argumentative organization add to holistic essay scores? First author; submitted to Assessing Writing (Elsevier), 2026.",
          "Knowledge-graph-grounded summarization (2024): co-developed a KG-grounded LLaMA 3 patent summarizer (ROUGE and human evaluation); co-authored a survey of 22 studies on graph-based summarization of CVs, cover letters, and motivation letters.",
          "Research proposal (October — December 2025): context-aware personalization for AI agents; proposed stakeholder interviews and a memory viewer that lets users control what an agent keeps.",
          "Participated in weekly research meetings, research planning, study design, and academic writing.",
        ],
        related: [
          {
            label: "Graph-based summarization for HRM (NLPIR 2024)",
            href: "https://doi.org/10.1145/3711542.3711572",
          },
          {
            label: "Patent summarization with a knowledge graph (LKM@IJCAI 2024)",
            href: "https://ceur-ws.org/Vol-3818/paper1.pdf",
          },
          {
            label: "Automated essay-scoring manuscripts",
            href: "#papers",
          },
        ],
        tags: ["NLP", "Machine learning", "Knowledge graphs", "Undergraduate research"],
        order: 1,
      },
      {
        role: "Independent researcher",
        organization: "Human-AI interaction and real-world evaluation",
        period: "April 2026 — present",
        bullets: [
          "Continues independent research on how people use AI-enabled tools in real products.",
          "Asks whether recommendations, explanations, personalization, and human support change decisions, trust, and task completion.",
          "Does not treat product observation as a completed formal human-subjects study unless ethics procedures are later documented.",
        ],
        tags: ["Human-AI interaction", "Evaluation", "NLP"],
        order: 2,
      },
      {
        role: "Research enumerator",
        organization: "Share-E-Net adolescent health study",
        location: "Dhaka, Bangladesh",
        period: "February 2020 — April 2020",
        bullets: [
          "Collected 500 samples from 10 schools and colleges and ran 20 focus groups.",
        ],
        tags: ["Fieldwork", "Public health"],
        order: 3,
      },
    ],
  },
  {
    id: "teaching-experience",
    title: "Teaching experience",
    items: [
      {
        role: "Teaching assistant",
        organization: "Tokyo International University (Prof. Fatih Ozaydin)",
        location: "Tokyo, Japan",
        period: "August 2024 — April 2025",
        description:
          "Teaching assistant for Foundations of Python and IT Project Management.",
        bullets: [
          "Ran hands-on coding practice and helped about 150 students debug their code.",
          "Gave feedback on students’ project ideas.",
          "Helped students with programming exercises, presentations, class activities, and course-related questions.",
          "Adapted explanations to different levels of technical knowledge, communication styles, and learning needs.",
          "Supported students in understanding Python fundamentals, project-management concepts, and practical technology applications.",
        ],
        tags: ["Teaching", "Academic support", "Python"],
        order: 1,
      },
      {
        role: "Curriculum developer",
        organization: "National Curriculum and Textbook Board, Bangladesh",
        period: "June 2020 — September 2021",
        bullets: [
          "Wrote 24 English assignments per class level (grades 6–8, SSC, HSC) for remote learning during COVID-19.",
          "Translated 24 Business Studies assignments.",
          "Contributed to impact analysis and recommendations with an expert team.",
        ],
        tags: ["Curriculum", "Bangladesh"],
        order: 2,
      },
      {
        role: "Private tutor",
        organization: "Dhaka, Bangladesh",
        period: "2015 — 2022",
        bullets: [
          "Started with younger siblings and cousins, then their friends; taught 14+ students aged 11–18 in English, maths, physics, and chemistry.",
        ],
        tags: ["Tutoring"],
        order: 3,
      },
    ],
  },
  {
    id: "professional",
    title: "Product and professional experience",
    items: [
      {
        role: "English teacher",
        organization: "Maple Inc.",
        location: "Saitama, Japan",
        period: "April 2026 — present",
        bullets: [
          "Teaches one-to-one English lessons for adults and children.",
          "Plans, delivers, and revises lessons based on learner progress and observation.",
          "Uses games, activities, and adaptive instruction to support different ages, attention spans, proficiency levels, and learning styles.",
          "Adjusts teaching methods based on student engagement and observed learning needs.",
        ],
        tags: ["English teaching", "Japan"],
        order: 1,
      },
      {
        role: "Co-founder",
        organization: "The Abroad Company",
        period: "October 2025 — present",
        description:
          "Co-founded The Abroad Company, whose products are ApplicationMate, AbroadMates, and Abroad News. AbroadMates itself began earlier, in 2022; she has been its CTO since July 2025.",
        bullets: [
          "Leads an 11-person team in five countries: Japan, the United States, Canada, Bangladesh, and Italy.",
          "AbroadMates: 2,000+ users, 200+ mentors in 36 countries, 2,000+ one-to-one sessions. Wrote ~80% of the platform’s code (1,100+ commits; Next.js, FastAPI, MongoDB, Docker).",
          "Ran 250+ user tests and interviews across both platforms.",
          "ApplicationMate: beta with 15 applicants; LLM program recommendations grounded in live web search.",
        ],
        tags: ["Co-founder", "Product leadership", "Study abroad"],
        order: 2,
      },
      {
        role: "Data analyst and content marketing intern",
        organization: "Guidable Inc.",
        location: "Shinjuku, Tokyo, Japan",
        period: "February 2024 — March 2024",
        bullets: [
          "Designed internal surveys, collected data, and used R for analysis.",
          "Researched sources, drafted and edited articles, and published to WordPress with SEO settings.",
        ],
        tags: ["Internship", "Data analysis", "Content"],
        order: 3,
      },
    ],
  },
  {
    id: "leadership",
    title: "Leadership and community engagement",
    items: [
      {
        role: "Founder and President",
        organization: "TIU Data Science and AI Club",
        period: "2024 — 2026",
        bullets: [
          "Founded a student community for data science, analytics, and AI; later the department’s student association.",
          "Ran TIU’s first datathon, with 83 participants, at TIU Tech Fest 2025.",
        ],
        tags: ["Founder", "Data science", "Student leadership"],
        order: 1,
      },
      {
        role: "Founder",
        organization: "Bangladesh Student Association of TIU",
        period: "September 2022 — December 2025",
        bullets: [
          "Founded the association because no Bangladeshi student community existed on campus.",
          "Helped incoming students and organized cultural festivals for four years.",
        ],
        tags: ["Founder", "Campus community"],
        order: 2,
      },
      {
        role: "Founder",
        organization: "Women Opportunities",
        period: "2019 — 2023 (paused)",
        description:
          "Founded a community that shared educational, professional, scholarship, and leadership opportunities with women: online classes for 23 women and an e-consultancy that reached ~500 women. The work is paused. She may return to it later.",
        bullets: [],
        tags: ["Community", "Leadership", "Women"],
        order: 3,
      },
      {
        role: "Co-founder",
        organization: "Superwoman.com.bd",
        period: "2019 — 2021",
        description:
          "Courses for women to learn practical business skills, including 30+ video tutorials.",
        bullets: [],
        tags: ["Founder", "Learning"],
        order: 4,
      },
      {
        role: "Dhaka Divisional Coordinator and Head of Sponsorship",
        organization: "English Olympiad",
        period: "2016 — 2022",
        description:
          "Led the ~500-person Dhaka team; Dhaka events drew 5,000+ participants. Initiated and led the Olympiad’s largest online event during the 2020 lockdown. National Leadership Award, 2021.",
        bullets: [],
        tags: ["Coordination", "Student engagement"],
        order: 5,
      },
      {
        role: "Project coordinator",
        organization: "Worldwide Organization for Charity",
        period: "May 2018 — February 2025",
        description:
          "Volunteered, then helped plan programs including an unfinished coding initiative for children.",
        bullets: [],
        tags: ["Community service"],
        order: 7,
      },
    ],
  },
];

export const experienceItems = experienceGroups.flatMap((group, groupIndex) =>
  group.items.map((item, index) => ({
    ...item,
    group: group.id,
    order: groupIndex * 100 + index + 1,
  }))
);
