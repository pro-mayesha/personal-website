/** Seed posts when localStorage is empty — same shape as admin-created posts. */
export const defaultBlogPosts = [
  {
    id: "seed-chaos",
    slug: "the-chaos-i-couldnt-ignore",
    title: "The chaos I couldn’t ignore",
    date: "2025-01-12",
    paragraphs: [
      {
        text: "I’ve always been the person who sees chaos and feels pushed to organize it. As a kid, it was messy drawers and tangled wires. As an adult, it became broken systems that hurt people.",
        marginNote: "this is still true",
        highlighted: false,
      },
      {
        text: "When I decided to study abroad, I ran into a system designed to extract money, not provide guidance. Commission-driven agencies sold dreams without accountability. Students were confused, misled, and alone.",
        marginNote: "↑ this made me so angry",
        highlighted: false,
      },
      {
        text: "I self-applied to universities across Japan. I figured it out the hard way — and got a full-tuition scholarship to Tokyo International University for Digital Business & Innovation.",
        marginNote: "!!!",
        highlighted: false,
      },
      {
        text: "That experience broke something in me — in the best way. I knew I had to build the alternative. Together with Rahat, I co-founded The Abroad Company, launched AbroadMates as a peer-to-peer mentorship platform, and started building ApplicationMate — an AI copilot for study abroad applications.",
        marginNote: "the mission",
        highlighted: true,
      },
    ],
    pullQuote: "I care about turning confusing systems into clear paths for people.",
    signature: "— Mayesha Maliha Proma",
    signatureMeta: "from Bangladesh to Japan",
  },
];
