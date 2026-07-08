/**
 * Site-wide metadata + navigation.
 * EDIT THIS FILE to change the site title, description, and top-nav items.
 */
export const site = {
  // Canonical site URL (used for metadataBase + absolute OG/Twitter image URLs).
  siteUrl: "https://proma.blog",
  siteName: "Mayesha Maliha Proma",
  defaultTitle: "Mayesha Maliha Proma — Founder, AI Researcher, PhD Applicant",
  defaultDescription:
    "Personal website of Mayesha Maliha Proma — founder, AI researcher, and PhD applicant working on AI for education, NLP, and student decision systems.",
  // Top navigation used on the /academic page.
  navItems: [
    { label: "Home", href: "/" },
    { label: "Notes", href: "/notes" },
    { label: "Research & CV", href: "/academic" },
    { label: "Travel", href: "/#journey" },
    { label: "Contact", href: "#contact" },
  ],
  footerText: "Notes on research, life, and becoming.",
  // Path under /public used for social share previews.
  ogImage: "/assets/Proma-Thank-you.png",
};
