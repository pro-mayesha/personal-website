/**
 * Experience for /academic.
 * Research assistant dates follow the CV brief: November 2023 – March 2026.
 * Teaching/student assistant dates follow the CV brief: August 2024 – July 2025.
 * Official teaching title is combined because LinkedIn says Student Assistant
 * and earlier materials say Teaching Assistant.
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
        role: "Research assistant",
        organization: "Professor Parag Kulkarni’s Research Lab",
        location: "Tokyo International University, Tokyo, Japan",
        period: "November 2023 — March 2026",
        description:
          "Undergraduate research assistant in natural language processing, text mining, machine learning, knowledge graphs, and applied artificial intelligence.",
        bullets: [
          "Conducted undergraduate research under Professor Parag Kulkarni in natural language processing, text mining, machine learning, knowledge graphs, and applied artificial intelligence.",
          "Participated in weekly research meetings, research planning, idea development, study design, and academic writing.",
          "Contributed to research on extractive and abstractive summarization, sentiment analysis, trend analysis, knowledge graphs, and NLP for low-resource languages.",
          "Co-authored published research on graph-based text summarization for human resource management tasks.",
          "Co-authored research on augmenting patent summarization with large language models and knowledge graphs, evaluated using automatic metrics and human assessment.",
          "Developed independent research experience by initiating and leading an automated essay-scoring project during the final year of the degree.",
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
        period: "2026 — present",
        bullets: [
          "Continues independent research on how people use AI-enabled tools in real products.",
          "Asks whether recommendations, explanations, personalization, and human support change decisions, trust, and task completion.",
          "Does not treat product observation as a completed formal human-subjects study unless ethics procedures are later documented.",
        ],
        tags: ["Human-AI interaction", "Evaluation", "NLP"],
        order: 2,
      },
    ],
  },
  {
    id: "teaching-experience",
    title: "Teaching experience",
    items: [
      {
        role: "Teaching assistant / Student assistant",
        organization: "Tokyo International University",
        location: "Tokyo, Japan",
        period: "August 2024 — July 2025",
        description:
          "Supported undergraduate information-technology courses.",
        bullets: [
          "Supported undergraduate courses in Foundations of Python, IT Project Management, and related information-technology coursework.",
          "Assisted classes of up to 150 students from more than 120 countries.",
          "Helped students with programming exercises, presentations, attendance, class activities, and course-related questions.",
          "Adapted explanations to different levels of technical knowledge, communication styles, and learning needs.",
          "Supported students in understanding Python fundamentals, project-management concepts, and practical technology applications.",
        ],
        tags: ["Teaching", "Academic support", "Python"],
        order: 1,
      },
    ],
  },
  {
    id: "professional",
    title: "Product and professional experience",
    items: [
      {
        role: "Full-time English teacher",
        organization: "Maple Inc.",
        location: "Saitama, Japan",
        period: "April 2026 — present",
        bullets: [
          "Teaches English full-time to Japanese professionals and Japanese children.",
          "Plans, delivers, and revises monthly lessons based on learner progress and classroom observation.",
          "Uses games, activities, and adaptive instruction to support different ages, attention spans, proficiency levels, and learning styles.",
          "Adjusts teaching methods based on student engagement and observed learning needs.",
        ],
        tags: ["English teaching", "Japan"],
        order: 1,
      },
      {
        role: "Co-founder and product lead",
        organization: "The Abroad Company",
        period: "October 2025 — present",
        description:
          "Co-founded The Abroad Company and leads products that support students through study-abroad and international applications. The co-founder role is dated October 2025. AbroadMates itself began earlier, in 2022.",
        bullets: [
          "Leads product strategy, user experience, research direction, and early-stage operations.",
          "Launched AbroadMates, a study-abroad mentorship platform for paid 1:1 conversations.",
          "Leads ApplicationMate, an AI-supported application-planning platform for deadlines, essays, and scholarships.",
          "Leads an 11-person distributed team across Japan, the United States, Canada, Bangladesh, and Italy.",
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
        role: "Founder and former president",
        organization: "TIU Data Science and Analytics Club",
        period: "April 2023 — March 2026",
        bullets: [
          "Founded a student community for data science, analytics, and AI; later the department’s student association.",
          "Built a level-based curriculum with faculty; more than 70 students completed the pathway.",
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
        role: "Founder and former president",
        organization: "Women Opportunities",
        period: "January 2019 — Present (currently paused)",
        description:
          "Founded a community that shared educational, professional, scholarship, and leadership opportunities with women. The work is currently paused. She may return to it later.",
        bullets: [],
        tags: ["Community", "Leadership", "Women"],
        order: 3,
      },
      {
        role: "Founder",
        organization: "Superwoman: A She Learning Platform",
        period: "Date not listed",
        description:
          "The e-learning initiative she started so women could learn practical business skills.",
        bullets: [],
        tags: ["Founder", "Learning"],
        order: 4,
      },
      {
        role: "Divisional coordinator",
        organization: "English Olympiad",
        period: "April 2017 — September 2022",
        description:
          "Dhaka divisional coordinator, April 2017 — September 2022. Head of Sponsorship, November 2018 — January 2022.",
        bullets: [],
        tags: ["Coordination", "Student engagement"],
        order: 5,
      },
      {
        role: "Educational content developer",
        organization: "National Curriculum and Textbook Board, Bangladesh",
        period: "June 2020 — September 2021",
        description:
          "Developed assignments for Bangladesh’s online education and evaluation during COVID-19.",
        bullets: [],
        tags: ["Curriculum", "Bangladesh"],
        order: 6,
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
