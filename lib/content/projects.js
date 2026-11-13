/**
 * Ventures and products. LinkedIn lists the co-founder role from October 2025.
 * AbroadMates start year (2022) comes from Mayesha’s own published note.
 * Figures follow the November 2026 CVs.
 */

export const productFigures = {
  users: "2,000+ users",
  sessions: "2,000+ one-to-one sessions",
  mentors: "200+ mentors in 36 countries",
  universitySites: "470 validated university sites",
  programRecords: "2,777 program records",
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
      "The Abroad Company is the parent for ApplicationMate, AbroadMates, and Abroad News. Mayesha leads product direction, research, operations, and new product ideas, and an 11-person team in five countries (Japan, the United States, Canada, Bangladesh, and Italy). Her co-founder role is dated October 2025.",
    users: "Students navigating study abroad and the teams who support them.",
    research:
      "The products are where Mayesha watches confusion, drop-off, requests for human help, and the effect of feature changes. That observation is product research, not a claim about admissions outcomes.",
    status: "Active. Travel, work, and relocation products have been discussed as later work and are not presented here as shipped.",
    learned:
      "Making something work is different from making it understandable. Information architecture and human support matter as much as the model.",
    summary:
      "The Abroad Company is the parent company for international education and mobility products: ApplicationMate, AbroadMates, and Abroad News.",
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
      "A mentorship platform where students search for mentors by university, country, scholarship, field, and experience, then book 20- or 40-minute sessions. Mayesha co-founded it in 2022 and has been CTO since July 2025. She wrote ~80% of the platform’s code (1,100+ commits; Next.js, FastAPI, MongoDB, Docker). 2,000+ users use its AI-integrated recommendations.",
    users:
      "2,000+ users, 200+ mentors in 36 countries, and 2,000+ one-to-one sessions.",
    research:
      "Mayesha ran 250+ user tests and interviews across AbroadMates and ApplicationMate: calls, observed site use, surveys, and 200+ post-session feedback forms. From those tests and PostHog data she redesigned booking, mentor profiles, payment, search, and recommendations. Mentor profile completion rose from ~50% to 99%+ after setup was simplified; bookings rose from none to ~7 every two days after an easier payment method. Feature changes were watched against bookings, completion, and feedback — not against school admissions. This product observation is not a formal human-subjects study.",
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
      "An AI-supported application-planning and information-management platform. It gives LLM program recommendations grounded in live web search (Claude, GPT-4o) and centralizes application information. An AI advisor is in design: user profiling, long-term memory, and proactive guidance. An essay-feedback tool, co-built in a 2025 course, covers grammar, clarity, goal alignment, and program fit; its DistilBERT goal-alignment classifier reached ~85% F1 on a 25-SOP pilot set, and 20 students and mentors rated its usefulness 3.5/5. A program-data pipeline validated 470 university sites and collected 2,777 program records.",
    users:
      "Students organizing multi-program applications. A beta with 15 applicants was used for closer study.",
    research:
      "Mayesha ran screen-share user tests with 50+ users and watched where people became confused, stopped responding, or asked for a human. Of 250+ users interviewed, 63% were satisfied with the AI university lists; 37% had a mentor check them. Randomized feature experiments and post-use feedback informed changes. Admissions success is not claimed, and this is not a formal human-subjects study.",
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
    links: { website: "https://applicationmate.com", github: "https://github.com/pro-mayesha/program-scraper", notes: "" },
    featured: true,
    showOnAcademic: true,
    order: 3,
  },
];
