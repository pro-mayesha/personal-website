/**
 * Ventures and products. LinkedIn lists the co-founder role from October 2025.
 * AbroadMates start year (2022) comes from Mayesha’s own published note.
 */

export const productFigures = {
  users: "approximately 1,500 users",
  sessions: "more than 2,000 booked sessions",
  mentors: "210 mentors",
  universities: "approximately 2,700 universities",
  programs: "approximately 157,000 programs",
};

export const projects = [
  {
    id: "abroad-company",
    title: "The Abroad Company",
    role: "parent",
    type: "Parent company",
    tagline: "International education and mobility products",
    problem:
      "Crossing a border for study involves many disconnected systems: information, people, paperwork, money, and timing. Students often meet those systems through agencies that are hard to verify.",
    context:
      "Mayesha and her co-founder built a parent company around that problem after applying abroad themselves.",
    built:
      "The Abroad Company is the parent for AbroadMates and ApplicationMate. Mayesha leads product direction, research, operations, and new product ideas. Her co-founder role is dated October 2025.",
    users: "Students navigating study abroad and the teams who support them.",
    research:
      "The products are where Mayesha watches confusion, drop-off, requests for human help, and the effect of feature changes. That observation is product research, not a claim about admissions outcomes.",
    status: "Active. Travel, work, and relocation products have been discussed as later work and are not presented here as shipped.",
    learned:
      "Making something work is different from making it understandable. Information architecture and human support matter as much as the model.",
    summary:
      "The Abroad Company is the parent company for international education and mobility products, including AbroadMates and ApplicationMate.",
    myRole:
      "Co-founder, October 2025 — present. Mayesha leads product direction, research, and connected services across the student journey.",
    focusAreas: [
      "Product strategy",
      "Research",
      "International mobility",
      "Distributed-team operations",
    ],
    tags: ["Founder", "Product Strategy", "International Mobility"],
    links: { website: "https://abroad.company", github: "", notes: "" },
    featured: true,
    showOnAcademic: true,
    order: 1,
  },
  {
    id: "abroadmates",
    title: "AbroadMates",
    role: "product",
    type: "Study-abroad mentorship platform",
    icon: "Users",
    tagline: "Guidance from people who already walked the path",
    problem:
      "When Mayesha applied abroad, she met a system that was confusing and often designed to sell a dream rather than explain a process. Students were left unsure whom to trust.",
    context:
      "The whole journey matters, not only an admission letter. Students need to hear from people who have studied, applied, received scholarships, or lived in the place they are aiming for.",
    built:
      "A mentorship platform where students search for mentors by university, country, scholarship, field, and experience, then book 20- or 40-minute sessions.",
    users:
      "Approximately 1,500 users, 210 mentors, and more than 2,000 booked sessions. About 50 users and mentors have been part of closer product research.",
    research:
      "Mayesha studied matching, trust, repeat use, and when students still asked for a person instead of a tool. Feature changes were watched against bookings, completion, and feedback — not against school admissions.",
    status: "Live at abroadmates.com.",
    learned:
      "Human guidance still matters when the decision is high-stakes. Automation can organize a process; it does not replace someone who has already lived it.",
    summary:
      "AbroadMates connects students with mentors who have already studied, applied, received scholarships, or lived in their target countries.",
    features: [
      {
        icon: "Search",
        title: "Find the right mentor",
        detail: "Search by university, country, scholarship, field, and experience.",
      },
      {
        icon: "Calendar",
        title: "Book and meet",
        detail: "Scheduling for 20- or 40-minute mentorship sessions.",
      },
      {
        icon: "MessageCircle",
        title: "Get lived guidance",
        detail: "Advice from someone who has already walked the path.",
      },
    ],
    researchSetting:
      "A setting for watching human guidance, mentor matching, trust, repeat use, and hybrid human-AI support.",
    tags: ["Mentorship", "Matching", "Study Abroad"],
    links: { website: "https://abroadmates.com", github: "", notes: "" },
    featured: true,
    showOnAcademic: true,
    order: 2,
  },
  {
    id: "applicationmate",
    title: "ApplicationMate",
    role: "product",
    type: "Application-planning platform",
    icon: "Sparkles",
    tagline: "A place to hold a complicated application",
    problem:
      "Study-abroad applications scatter requirements, documents, deadlines, and reusable information across tabs, chats, and memory. Students lose the thread.",
    context:
      "Mayesha designed the user journey, wireframes, and information architecture after living that scatter herself.",
    built:
      "An AI-supported application-planning and information-management platform. It matches students to programs and scholarships and centralizes application information. The catalog covers approximately 157,000 programs across approximately 2,700 universities.",
    users:
      "Students organizing multi-program applications. A closed cohort of 10 applicants was used for closer study. 856 people took part in chatbot conversations.",
    research:
      "Mayesha watched where people became confused, stopped responding, or asked for a human. Randomized feature experiments and post-use feedback informed changes. Admissions success is not claimed.",
    status: "Live at applicationmate.com.",
    learned:
      "Personalization is useful only when the student can still see why a suggestion appeared and can keep control of the file.",
    summary:
      "ApplicationMate helps students organize and complete applications through AI-supported guidance and structured workflows.",
    features: [
      {
        icon: "Compass",
        title: "Discover and plan",
        detail: "University and scholarship recommendations grounded in the student’s information.",
      },
      {
        icon: "Folders",
        title: "Organize everything",
        detail: "Documents, tasks, deadlines, requirements, and reusable information in one place.",
      },
      {
        icon: "PenLine",
        title: "Write with support",
        detail: "AI-supported writing feedback and application guidance.",
      },
    ],
    researchSetting:
      "A setting for watching AI recommendations, task completion, adoption, and when people still want a person.",
    tags: ["AI", "Application Planning", "Decision Support"],
    links: { website: "https://applicationmate.com", github: "", notes: "" },
    featured: true,
    showOnAcademic: true,
    order: 3,
  },
];
