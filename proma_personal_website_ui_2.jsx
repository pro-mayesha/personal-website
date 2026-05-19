import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Camera,
  Coffee,
  FileText,
  Globe2,
  Heart,
  Lightbulb,
  Mail,
  PenLine,
  Shield,
  Sparkles,
  Star,
} from "lucide-react";

const beliefs = [
  {
    num: "01",
    title: "Build, then refine",
    desc: "A mediocre thing that exists beats a perfect thing that doesn’t. Ship it, learn from it, make it better.",
    bg: "#fff4ef",
    rotate: "-rotate-[1.2deg]",
    tape: true,
    doodle: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <rect x="4" y="4" width="30" height="30" rx="4" stroke="var(--terracotta)" strokeWidth="1.8" />
        <path d="M10 14h18M10 19h14M10 24h16" stroke="var(--terracotta)" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="29" cy="10" r="5" fill="var(--paper)" stroke="var(--terracotta)" strokeWidth="1.5" />
        <path d="M27 10h4M29 8v4" stroke="var(--terracotta)" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "People, not personas",
    desc: "Real users are messier and more interesting than any user story. Talk to them first, always.",
    bg: "#fdf0ec",
    rotate: "rotate-[0.8deg]",
    tape: false,
    doodle: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <circle cx="19" cy="13" r="7" stroke="var(--terracotta)" strokeWidth="1.8" />
        <path d="M8 34 Q8 26 19 26 Q30 26 30 34" stroke="var(--terracotta)" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="16" cy="14" r="1.2" fill="var(--terracotta)" />
        <circle cx="22" cy="14" r="1.2" fill="var(--terracotta)" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Compound curiosity",
    desc: "The best founders stay relentlessly curious. Every rabbit hole is a future insight waiting to happen.",
    bg: "#fff8f5",
    rotate: "-rotate-[0.5deg]",
    tape: true,
    doodle: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <path d="M19 6 L22 16 L32 16 L24 22 L27 32 L19 26 L11 32 L14 22 L6 16 L16 16 Z" stroke="var(--terracotta)" strokeWidth="1.8" />
        <circle cx="19" cy="19" r="3" fill="var(--terracotta)" />
      </svg>
    ),
  },
];

const workCards = [
  {
    tag: "THE MISSION",
    title: "The Abroad Company",
    desc: "Infrastructure for crossing borders. The bigger mission behind everything — fixing the broken study abroad system through mentorship, AI, and honest guidance.",
    note: "this is the whole thing →",
    bg: "#fff4ef",
  },
  {
    tag: "BUILDING NOW",
    title: "AbroadMates",
    desc: "Peer-to-peer study abroad mentorship. Students talk to people who have actually done it — not sales agents. Real guidance from real experience.",
    note: "launched & growing ✓",
    bg: "#fdf0ec",
  },
  {
    tag: "AI COPILOT",
    title: "ApplicationMate",
    desc: "AI-powered study abroad application guidance. Features Pearl, a friendly AI mascot, and tracks your full application journey.",
    note: "Pearl is cute 🐚",
    bg: "#fff8f5",
  },
  {
    tag: "PERSONAL NOTES",
    title: "Proma’s Notes",
    desc: "My personal writing space. Where I share what confuses me, what I learn, and what may help others crossing borders of any kind.",
    note: "you’re reading it ✦",
    bg: "#fff4ef",
  },
];

const timeline = [
  ["2018", "Early curiosity in Bangladesh", "Leadership, organizing, and a growing urge to fix broken systems."],
  ["2020", "Applied abroad independently", "Rejected the agency model. Self-applied to universities across North America, Europe, and Asia."],
  ["2021", "Full-tuition scholarship to Japan", "Moved to Tokyo International University to study Digital Business & Innovation."],
  ["2022", "Started AbroadMates", "Built a peer-to-peer mentorship platform so students could talk to people who actually walked the path."],
  ["2023", "Co-founded The Abroad Company", "The bigger mission: building infrastructure for crossing borders."],
  ["Now", "Building AI guidance tools", "ApplicationMate, writing intelligence, student-first tools, and public notes."],
];

const posts = [
  {
    tag: "Founder Notes",
    time: "6 min read",
    date: "Jan 2025",
    title: "I Decided to Organize the Chaos of Crossing Borders",
    body: "The study abroad system is broken. Here’s why I decided to build the alternative and what it took to get started.",
  },
  {
    tag: "AI Learning",
    time: "8 min read",
    date: "Feb 2025",
    title: "How to Talk to AI So It Actually Understands You",
    body: "A beginner-friendly guide to prompt engineering and getting consistently better outputs from LLMs.",
  },
  {
    tag: "Building in Public",
    time: "5 min read",
    date: "Mar 2025",
    title: "What I Learned Building AbroadMates From Scratch",
    body: "Lessons from turning a frustrating personal experience into a platform real students actually use.",
  },
];

const filters = [
  [BookOpen, "Founder Notes"],
  [Camera, "Travel Stories"],
  [Shield, "Policy"],
  [PenLine, "Thoughts"],
  [Coffee, "Daily Logs"],
  [Sparkles, "AI Learning"],
];

const archive = [
  [BookOpen, "Policy Papers", "Long-form analysis and research notes."],
  [FileText, "Policy Briefs", "Short pieces for action and clarity."],
  [Coffee, "Podcast", "Conversations on AI, ambition, and borders."],
  [Camera, "Travel Stories", "Personal notes from Japan, Bangladesh, and elsewhere."],
];

const heroPages = [
  {
    page: "1",
    label: "cover",
    eyebrow: "Founder / AI Researcher",
    name: "Proma ✦",
    title: "I organize the chaos of crossing borders.",
    meta: ["● Bangladesh", "↔ Japan", "● GMT+9"],
    line: "building the future of study abroad, one tool at a time ✧",
    primary: "Read my story",
    secondary: "See my work",
    note: "— written somewhere between Kawagoe & everywhere else",
    sketch: "app",
  },
  {
    page: "2",
    label: "founder story",
    eyebrow: "The personal reason",
    name: "Founder ✦",
    title: "I built a clearer path for students.",
    meta: ["self-applied", "scholarship", "student-first"],
    line: "turning confusion into clear next steps ✧",
    primary: "The chaos",
    secondary: "Selected work",
    note: "— building the alternative I wish I had",
    sketch: "founder",
  },
  {
    page: "3",
    label: "research story",
    eyebrow: "AI / NLP / Writing systems",
    name: "Researcher ✦",
    title: "I make AI clearer and more useful.",
    meta: ["NLP", "essay intelligence", "student decisions"],
    line: "turning messy writing into direction ✧",
    primary: "Research work",
    secondary: "Read notes",
    note: "— notebooks, models, and coffee",
    sketch: "research",
  },
];

function SideRail({ right = false }) {
  const leftItems = [
    [Camera, "about", "#about"],
    [Lightbulb, "story", "#story"],
    [Star, "work", "#work"],
    [PenLine, "research", "#research"],
    [BookOpen, "blog", "#notes"],
  ];

  const rightItems = [
    [Camera, "images", "#work"],
    [Globe2, "travel", "#journey"],
    [Coffee, "notes", "#notes"],
    [Heart, "mentor", "#connect"],
    [Mail, "connect", "#connect"],
  ];

  const items = right ? rightItems : leftItems;

  return (
    <aside className={`fixed top-1/2 ${right ? "right-5" : "left-5"} z-30 hidden -translate-y-1/2 lg:block`}>
      <div className="overflow-hidden rounded-full border border-[rgba(204,66,44,0.22)] bg-paperSoft/95 shadow-[4px_6px_0_rgba(204,66,44,0.10)] backdrop-blur-sm">
        {items.map(([Icon, label, href], index) => (
          <a
            key={label}
            href={href}
            className={`group relative flex h-[58px] w-[58px] items-center justify-center text-terracotta transition hover:bg-[#fff1e9] ${index !== items.length - 1 ? "border-b border-[rgba(204,66,44,0.13)]" : ""}`}
            aria-label={label}
            title={label}
          >
            <Icon size={23} strokeWidth={1.8} />
            <span className={`pointer-events-none absolute top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-sm border border-[rgba(204,66,44,0.18)] bg-paperSoft px-2 py-1 font-hand text-[16px] text-terracotta opacity-0 shadow-sm transition group-hover:opacity-100 xl:block ${right ? "right-[68px]" : "left-[68px]"}`}>
              {label}
            </span>
          </a>
        ))}
      </div>
    </aside>
  );
}

function NotebookMenu() {
  return (
    <nav className="mb-5 flex justify-center gap-9 font-hand text-[22px] text-muted">
      {[
        ["about", "#about"],
        ["story", "#story"],
        ["work", "#work"],
        ["research", "#research"],
        ["blog", "#notes"],
        ["connect", "#connect"],
      ].map(([label, href]) => (
        <a key={label} href={href} className="transition hover:-translate-y-0.5 hover:text-terracotta">
          {label}
        </a>
      ))}
    </nav>
  );
}

function SectionTitle({ id, children, rightLabel }) {
  return (
    <div id={id} className="mb-10 flex scroll-mt-32 items-center gap-5">
      <h2 className="whitespace-nowrap font-hand text-[34px] font-bold leading-none text-terracotta md:text-[42px]">{children}</h2>
      <div className="h-px flex-1 bg-terracotta/22" />
      {rightLabel ? <a href="#notes" className="font-hand text-xl text-terracotta/70">{rightLabel}</a> : <PenLine className="text-muted/45" size={17} />}
    </div>
  );
}

function Label({ children, light = false }) {
  return (
    <span className={`${light ? "border-white/20 bg-white/10 text-white" : "border-[rgba(204,66,44,0.30)] bg-paper text-terracotta"} inline-flex rounded-[5px] border px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.22em]`}>
      {children}
    </span>
  );
}

function RuledCard({ children, className = "" }) {
  return (
    <div className={`relative overflow-hidden rounded-[4px] border-2 border-[var(--line)] bg-paperSoft shadow-card ${className}`}>
      <div className="absolute inset-0 bg-lines opacity-90" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function Page0() {
  return (
    <svg viewBox="0 0 380 320" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full">
      <rect x="60" y="30" width="240" height="170" rx="8" fill="none" stroke="var(--terracotta)" strokeWidth="2" />
      <rect x="60" y="30" width="240" height="28" rx="8" fill="none" stroke="var(--terracotta)" strokeWidth="2" />
      <circle cx="80" cy="44" r="5" fill="none" stroke="var(--terracotta)" strokeWidth="1.5" />
      <circle cx="96" cy="44" r="5" fill="none" stroke="var(--terracotta)" strokeWidth="1.5" />
      <circle cx="112" cy="44" r="5" fill="none" stroke="var(--terracotta)" strokeWidth="1.5" />
      <rect x="122" y="37" width="100" height="14" rx="4" fill="none" stroke="var(--terracotta)" strokeWidth="1.2" />
      <text x="172" y="48" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7" fill="var(--terracotta)">student path</text>
      <rect x="72" y="72" width="100" height="12" rx="3" fill="none" stroke="var(--terracotta)" strokeWidth="1.2" />
      <rect x="72" y="92" width="70" height="8" rx="2" fill="none" stroke="var(--terracotta)" strokeWidth="1" />
      <rect x="72" y="108" width="85" height="8" rx="2" fill="none" stroke="var(--terracotta)" strokeWidth="1" />
      <rect x="72" y="124" width="60" height="8" rx="2" fill="none" stroke="var(--terracotta)" strokeWidth="1" />
      <ellipse cx="210" cy="115" rx="28" ry="22" fill="none" stroke="var(--terracotta)" strokeWidth="1.8" />
      <circle cx="210" cy="115" r="10" fill="none" stroke="var(--terracotta)" strokeWidth="1.5" />
      <circle cx="206" cy="111" r="2" fill="var(--terracotta)" />
      <path d="M220 108 Q228 103 232 108 Q228 114 220 112" fill="none" stroke="var(--terracotta)" strokeWidth="1.5" />
      <circle cx="320" cy="200" r="22" fill="none" stroke="var(--terracotta)" strokeWidth="2" />
      <path d="M300 192 Q310 178 320 178 Q330 178 340 192" fill="none" stroke="var(--terracotta)" strokeWidth="2" />
      <circle cx="313" cy="198" r="2.5" fill="var(--terracotta)" />
      <circle cx="327" cy="198" r="2.5" fill="var(--terracotta)" />
      <path d="M314 207 Q320 213 326 207" fill="none" stroke="var(--terracotta)" strokeWidth="1.5" />
      <path d="M310 222 L305 280 L335 280 L330 222" fill="none" stroke="var(--terracotta)" strokeWidth="2" />
      <path d="M308 235 Q290 245 278 238" fill="none" stroke="var(--terracotta)" strokeWidth="1.8" />
      <path d="M332 235 Q348 240 355 233" fill="none" stroke="var(--terracotta)" strokeWidth="1.8" />
      <rect x="274" y="238" width="56" height="36" rx="4" fill="none" stroke="var(--terracotta)" strokeWidth="1.8" />
      <path d="M268 274 L336 274" fill="none" stroke="var(--terracotta)" strokeWidth="1.5" />
      <path d="M30 300 Q20 270 35 255 Q42 265 30 300" fill="none" stroke="var(--terracotta)" strokeWidth="1.5" />
      <path d="M40 295 Q25 265 45 245 Q55 258 40 295" fill="none" stroke="var(--terracotta)" strokeWidth="1.5" />
      <path d="M20 310 L65 310" fill="none" stroke="var(--terracotta)" strokeWidth="2" />
      <circle cx="22" cy="255" r="6" fill="none" stroke="var(--terracotta)" strokeWidth="1.5" />
      <circle cx="22" cy="255" r="2.5" fill="var(--terracotta)" />
      <text x="150" y="25" fontFamily="serif" fontSize="14" fill="var(--terracotta)" opacity="0.7">✦</text>
      <text x="350" y="50" fontFamily="serif" fontSize="12" fill="var(--terracotta)" opacity="0.6">✦</text>
    </svg>
  );
}

function Page1() {
  return (
    <svg viewBox="0 0 380 320" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full">
      <circle cx="190" cy="100" r="40" fill="none" stroke="var(--terracotta)" strokeWidth="2" />
      <text x="190" y="95" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="14" fill="var(--terracotta)" fontWeight="600">clear</text>
      <text x="190" y="112" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="14" fill="var(--terracotta)" fontWeight="600">path</text>
      <circle cx="80" cy="60" r="20" fill="none" stroke="var(--terracotta)" strokeWidth="1.5" />
      <text x="80" y="64" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="var(--terracotta)">people</text>
      <line x1="100" y1="70" x2="150" y2="90" stroke="var(--terracotta)" strokeWidth="1" strokeDasharray="4,3" />
      <circle cx="300" cy="60" r="20" fill="none" stroke="var(--terracotta)" strokeWidth="1.5" />
      <text x="300" y="64" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="var(--terracotta)">story</text>
      <line x1="280" y1="70" x2="230" y2="90" stroke="var(--terracotta)" strokeWidth="1" strokeDasharray="4,3" />
      <circle cx="80" cy="180" r="20" fill="none" stroke="var(--terracotta)" strokeWidth="1.5" />
      <text x="80" y="184" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="var(--terracotta)">tools</text>
      <line x1="100" y1="170" x2="155" y2="130" stroke="var(--terracotta)" strokeWidth="1" strokeDasharray="4,3" />
      <circle cx="300" cy="180" r="20" fill="none" stroke="var(--terracotta)" strokeWidth="1.5" />
      <text x="300" y="184" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="var(--terracotta)">plan</text>
      <line x1="280" y1="170" x2="225" y2="130" stroke="var(--terracotta)" strokeWidth="1" strokeDasharray="4,3" />
      <path d="M100 260 L280 260" stroke="var(--terracotta)" strokeWidth="1" />
      <text x="190" y="280" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="16" fill="var(--terracotta)">finding clearer paths together ✦</text>
      <text x="30" y="40" fontFamily="serif" fontSize="14" fill="var(--terracotta)" opacity="0.5">✧</text>
      <text x="340" y="250" fontFamily="serif" fontSize="12" fill="var(--terracotta)" opacity="0.5">✦</text>
    </svg>
  );
}

function Page2() {
  const inputYs = [60, 120, 180, 240];
  const hiddenYs = [80, 140, 200];
  return (
    <svg viewBox="0 0 380 320" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full">
      {inputYs.map((y, i) => <circle key={`in-${i}`} cx="50" cy={y} r="12" fill="none" stroke="var(--terracotta)" strokeWidth="1.5" />)}
      {hiddenYs.map((y, i) => <circle key={`hidden-${i}`} cx="190" cy={y} r="14" fill="none" stroke="var(--terracotta)" strokeWidth="1.8" />)}
      <circle cx="330" cy="140" r="18" fill="none" stroke="var(--terracotta)" strokeWidth="2" />
      <text x="330" y="144" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="11" fill="var(--terracotta)" fontWeight="600">AI</text>
      {inputYs.map((y1) => hiddenYs.map((y2) => <line key={`${y1}-${y2}`} x1="62" y1={y1} x2="176" y2={y2} stroke="var(--terracotta)" strokeWidth="0.5" opacity="0.3" />))}
      {hiddenYs.map((y) => <line key={`out-${y}`} x1="204" y1={y} x2="312" y2="140" stroke="var(--terracotta)" strokeWidth="0.8" opacity="0.4" />)}
      <text x="50" y="275" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="var(--terracotta)" opacity="0.7">data</text>
      <text x="190" y="245" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="var(--terracotta)" opacity="0.7">signals</text>
      <text x="330" y="180" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="var(--terracotta)" opacity="0.7">direction</text>
      <rect x="70" y="265" width="240" height="45" rx="4" fill="none" stroke="var(--terracotta)" strokeWidth="1.5" />
      <text x="80" y="282" fontFamily="JetBrains Mono" fontSize="9" fill="var(--terracotta)" opacity="0.8">$ map_messy_ideas.py</text>
      <text x="80" y="298" fontFamily="JetBrains Mono" fontSize="9" fill="var(--terracotta)" opacity="0.5">→ clearer direction ✓</text>
      <text x="150" y="30" fontFamily="serif" fontSize="14" fill="var(--terracotta)" opacity="0.6">✦</text>
      <text x="290" y="50" fontFamily="serif" fontSize="10" fill="var(--terracotta)" opacity="0.4">✧</text>
    </svg>
  );
}

function HeroIllustration({ page }) {
  if (page === 1) return <Page1 />;
  if (page === 2) return <Page2 />;
  return <Page0 />;
}

function SpiralHoles() {
  return (
    <div className="absolute left-0 right-0 top-0 z-10 flex h-[26px] items-center justify-start gap-[16px] overflow-hidden bg-terracotta px-8">
      {Array.from({ length: 28 }, (_, i) => (
        <div key={i} className="relative h-[18px] w-[18px] flex-shrink-0 rounded-full border-2 border-terracottaDark bg-paper">
          <div className="absolute inset-[3px] rounded-full bg-[#e0d5c5]" />
        </div>
      ))}
    </div>
  );
}

function NotebookPageFrame({ children, activePage = 0, onDotClick }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-30 translate-x-4 translate-y-4 rounded-lg border border-[rgba(204,66,44,0.20)] bg-[#ddd0b8]" />
      <div className="absolute inset-0 -z-20 translate-x-[7px] translate-y-[7px] rounded-lg border border-[rgba(204,66,44,0.25)] bg-[#e6ddc8]" />
      <div className="absolute inset-0 -z-10 translate-x-[3px] translate-y-[3px] rounded-lg border border-[rgba(204,66,44,0.30)] bg-[#ede5d0]" />

      <div className="relative overflow-hidden rounded-lg border-2 border-terracotta bg-paperSoft" style={{ boxShadow: "5px 7px 0 #8b2a14, 9px 12px 0 rgba(139,42,20,0.20)" }}>
        <SpiralHoles />
        <div className="absolute inset-0 bg-grid opacity-80 pointer-events-none" />
        <div className="absolute bottom-[50px] top-[26px] left-[100px] hidden w-[2px] bg-terracotta/25 pointer-events-none md:block" />

        <div className="relative z-[1] min-h-[520px] pt-10">
          {children}
        </div>

        <div className="relative z-[2] flex items-center justify-between border-t-2 border-dashed border-[rgba(204,66,44,0.30)] bg-[#f1e5cf] px-6 py-3 md:px-14">
          <span className="font-hand text-[16px] text-terracotta/70">↓ keep scrolling to flip pages</span>
          <div className="flex items-center gap-2">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                type="button"
                onClick={() => onDotClick?.(index)}
                className={`h-2.5 w-2.5 rounded-full border-2 border-terracotta transition-all ${activePage === index ? "scale-110 bg-terracotta" : "bg-transparent"}`}
                aria-label={`Go to hero page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroPageContent({ page, activePage }) {
  return (
    <div className="flex min-h-[520px] flex-col md:flex-row">
      <AnimatePresence mode="wait">
        <motion.div
          key={page.page}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-1 flex-col justify-between px-6 py-8 md:px-14"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="rounded-sm border border-[rgba(204,66,44,0.30)] px-2 py-0.5 font-mono text-[10px] tracking-widest text-terracotta/60">page {page.page} of 3</span>
              <span className="font-mono text-[10px] tracking-wide text-ink/40">{page.eyebrow}</span>
            </div>
            <div className="mb-4 font-hand text-[48px] font-bold leading-none text-terracotta md:text-[58px]">{page.name}</div>
            <h1 className="mb-6 max-w-[420px] font-garamond text-[32px] font-semibold leading-[1.1] tracking-tight text-ink md:text-[48px]">
              {page.title}
            </h1>
            <div className="mb-6 font-mono text-[11px] tracking-wider text-ink/50">◉ {page.meta.join("  •  ")}</div>
            <div className="mb-6 inline-block border-b-[2.5px] border-[rgba(204,66,44,0.40)] pb-1 font-hand text-[19px] font-semibold text-terracotta">
              {page.line.replace(/ ✧$/, "")} ✧
            </div>
            <div className="mt-2 flex flex-wrap gap-3">
              <a href={activePage === 2 ? "#research" : "#story"} className="rounded border-2 border-terracotta bg-terracotta px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-terracottaDark">{page.primary}</a>
              <a href={activePage === 2 ? "#notes" : "#work"} className="rounded border-2 border-terracotta px-5 py-2.5 text-sm font-medium text-terracotta transition-colors hover:bg-terracotta/10">{page.secondary}</a>
            </div>
          </div>
          <div className="mt-8 rotate-[-0.5deg] font-hand text-[15px] text-ink/40">{page.note}</div>
        </motion.div>
      </AnimatePresence>

      <div className="flex w-full flex-shrink-0 items-center justify-center px-4 py-6 md:w-[360px] md:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={`illustration-${activePage}`}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35 }}
            className="w-full animate-float"
          >
            <HeroIllustration page={activePage} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function Hero() {
  const heroRef = useRef(null);
  const [activePage, setActivePage] = useState(0);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end end"] });

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const nextPage = Math.min(2, Math.floor(Math.min(0.999, Math.max(0, latest)) * 3));
      setActivePage((current) => (current === nextPage ? current : nextPage));
    });
  }, [scrollYProgress]);

  const scrollToHeroPage = (index) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const top = window.scrollY + rect.top;
    const totalScrollable = heroRef.current.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + (totalScrollable / 3) * index, behavior: "smooth" });
  };

  return (
    <section ref={heroRef} id="top" className="relative h-[400vh] px-6">
      <div className="sticky top-14 mx-auto max-w-[860px] pt-4 pb-4">
        <NotebookMenu />
        <NotebookPageFrame activePage={activePage} onDotClick={scrollToHeroPage}>
          <HeroPageContent page={heroPages[activePage]} activePage={activePage} />
        </NotebookPageFrame>
      </div>
    </section>
  );
}

function BeliefsSection() {
  return (
    <section id="about" className="w-full max-w-[900px] mx-auto mb-16 px-6 lg:px-0 scroll-mt-28">
      <div className="mb-10 flex items-baseline gap-3">
        <h2 className="font-hand text-[32px] font-bold text-terracotta md:text-[36px]">3 things I strongly believe in</h2>
        <div className="h-[2px] flex-1 self-center bg-terracotta/20" />
        <span className="font-hand text-lg text-ink/40">✍︎</span>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {beliefs.map((belief, index) => (
          <motion.div
            key={belief.num}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, rotate: 0 }}
            className={`relative overflow-visible rounded-sm border-2 border-[rgba(204,66,44,0.35)] p-6 pt-8 transition-all duration-300 ${belief.rotate}`}
            style={{ backgroundColor: belief.bg, boxShadow: "3px 4px 0 rgba(192,68,42,0.20)" }}
          >
            {belief.tape ? (
              <div className="absolute -top-3 left-1/2 h-5 w-14 -translate-x-1/2 rotate-[-2deg] rounded-sm border border-[rgba(204,66,44,0.15)] bg-terracotta/25" />
            ) : (
              <div className="absolute -top-2.5 left-1/2 z-10 h-5 w-5 -translate-x-1/2 rounded-full border-2 border-terracottaDark bg-terracotta shadow-sm" />
            )}
            <div className="absolute inset-0 rounded-sm bg-lines opacity-50 pointer-events-none" />
            <div className="relative z-[1]">
              <span className="mb-3 block font-mono text-[10px] tracking-widest text-terracotta/50">{belief.num}</span>
              <div className="mb-3">{belief.doodle}</div>
              <h3 className="mb-2 font-hand text-[23px] font-bold text-ink">{belief.title}</h3>
              <p className="font-garamond text-[15px] leading-relaxed text-ink/65">{belief.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function StorySection() {
  const paragraphs = [
    {
      text: "I’ve always been the person who sees chaos and feels pushed to organize it. As a kid, it was messy drawers and tangled wires. As an adult, it became broken systems that hurt people.",
      marginNote: "this is still true",
    },
    {
      text: "When I decided to study abroad, I ran into a system designed to extract money, not provide guidance. Commission-driven agencies sold dreams without accountability. Students were confused, misled, and alone.",
      marginNote: "↑ this made me so angry",
    },
    {
      text: "I self-applied to universities across Japan. I figured it out the hard way — and got a full-tuition scholarship to Tokyo International University for Digital Business & Innovation.",
      marginNote: "!!!",
    },
    {
      highlighted: true,
      marginNote: "the mission",
      content: (
        <>
          That experience broke something in me — in the best way. I knew I had to build the alternative. Together with Rahat, I co-founded <strong className="text-terracotta">The Abroad Company</strong>, launched <strong className="text-terracotta">AbroadMates</strong> as a peer-to-peer mentorship platform, and started building <strong className="text-terracotta">ApplicationMate</strong> — an AI copilot for study abroad applications.
        </>
      ),
    },
  ];

  return (
    <section id="story" className="w-full max-w-[900px] mx-auto mb-16 px-6 lg:px-0 scroll-mt-28">
      <div className="mb-8 flex items-baseline gap-3">
        <h2 className="font-hand text-[32px] font-bold text-terracotta md:text-[36px]">The chaos I couldn’t ignore</h2>
        <div className="h-[2px] flex-1 self-center bg-terracotta/20" />
        <span className="font-hand text-lg text-ink/40">✍︎</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-sm border-2 border-[rgba(204,66,44,0.40)] bg-paperSoft"
        style={{ boxShadow: "4px 5px 0 rgba(192,68,42,0.18)" }}
      >
        <div className="absolute inset-0 bg-lines pointer-events-none opacity-95" />
        <div className="absolute bottom-0 top-0 left-[110px] hidden w-[2px] bg-terracotta/25 pointer-events-none md:block" />

        <div className="relative z-[1] flex">
          <div className="hidden w-[110px] flex-shrink-0 space-y-[72px] px-3 py-10 md:block">
            {paragraphs.map((p, i) => (
              <div key={i} className="rotate-[-0.5deg] font-hand text-[12px] leading-tight text-terracotta/60">
                {p.marginNote}
              </div>
            ))}
          </div>

          <div className="flex-1 space-y-6 px-6 py-10 md:px-10">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className={`font-garamond text-[19px] leading-[1.75] text-ink md:text-[20px] ${p.highlighted ? "-mx-2 rounded-sm bg-[rgba(255,220,80,0.30)] px-2 py-1" : ""}`}
              >
                {p.text || p.content}
              </p>
            ))}

            <p className="mt-8 border-l-4 border-[rgba(204,66,44,0.40)] pl-5 font-garamond text-[20px] italic leading-relaxed text-terracotta md:text-[21px]">
              I care about turning confusing systems into clear paths for people.
            </p>

            <div className="mt-8 flex items-center gap-4 border-t border-dashed border-[rgba(204,66,44,0.20)] pt-6">
              <div className="rotate-[-1deg] font-hand text-[22px] text-ink/70">
                — Mayesha Maliha Proma
              </div>
              <span className="font-mono text-[10px] tracking-wider text-ink/40">from Bangladesh to Japan</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function WorkSection() {
  return (
    <section id="work" className="w-full max-w-[900px] mx-auto mb-16 px-6 lg:px-0 scroll-mt-28">
      <div className="mb-8 flex items-baseline gap-3">
        <h2 className="font-hand text-[32px] font-bold text-terracotta md:text-[36px]">Selected work</h2>
        <div className="h-[2px] flex-1 self-center bg-terracotta/20" />
        <span className="font-hand text-lg text-ink/40">✍︎</span>
      </div>

      <div className="space-y-4">
        {workCards.map((venture, index) => (
          <motion.div
            key={venture.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="group relative cursor-pointer overflow-hidden rounded-sm border-2 border-[rgba(204,66,44,0.30)] transition-transform hover:-translate-x-[2px] hover:-translate-y-[2px]"
            style={{ backgroundColor: venture.bg, boxShadow: "3px 4px 0 rgba(192,68,42,0.18)" }}
          >
            <div className="absolute inset-0 bg-lines opacity-40 pointer-events-none" />
            <div className="relative z-[1] flex items-start gap-5 p-5 md:p-6">
              <div className="flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <span className="rounded-sm border border-[rgba(204,66,44,0.40)] px-2 py-0.5 font-mono text-[10px] tracking-widest text-terracotta">
                    {venture.tag}
                  </span>
                  <span className="hidden font-hand text-[14px] text-ink/40 md:inline">{venture.note}</span>
                </div>
                <h3 className="mb-1.5 font-garamond text-[22px] font-bold text-ink">{venture.title}</h3>
                <p className="font-garamond text-[15px] leading-relaxed text-ink/60">{venture.desc}</p>
              </div>
              <span className="self-center flex-shrink-0 font-hand text-[28px] text-terracotta/50 transition-transform group-hover:translate-x-1">→</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ResearchSection() {
  const researchAreas = [
    { label: "AI/ML Personalization", note: "my main focus" },
    { label: "Natural Language Processing", note: "BERT, transformers" },
    { label: "Automated Essay Scoring", note: "for applications" },
    { label: "Data Science (HarvardX)", note: "ongoing" },
    { label: "Prompt Engineering", note: "also teaching others" },
  ];

  const terminalLines = [
    { text: "$ python train_model.py", className: "text-cream/70" },
    { text: "→ Loading BERT model...", className: "text-cream/35" },
    { text: "→ Processing essay embeddings...", className: "text-cream/35" },
    { text: "→ accuracy: 94.2% ✓", className: "text-orange-200 font-semibold" },
    { text: "→ Model ready for deployment", className: "text-cream/35" },
  ];

  return (
    <section id="research" className="w-full max-w-[900px] mx-auto mb-16 px-6 lg:px-0 scroll-mt-28">
      <div className="mb-8 flex items-baseline gap-3">
        <h2 className="font-hand text-[32px] font-bold text-terracotta md:text-[36px]">Research & technical work</h2>
        <div className="h-[2px] flex-1 self-center bg-terracotta/20" />
        <span className="font-hand text-lg text-ink/40">✍︎</span>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-sm border-2 border-[rgba(204,66,44,0.30)] bg-paperSoft"
          style={{ boxShadow: "3px 4px 0 rgba(192,68,42,0.15)" }}
        >
          <div className="absolute inset-0 bg-lines pointer-events-none opacity-95" />
          <div className="absolute bottom-0 top-0 left-[90px] hidden w-[2px] bg-terracotta/20 pointer-events-none md:block" />

          <div className="relative z-[1] p-6 md:pl-10">
            <p className="mb-6 font-garamond text-[17px] leading-relaxed text-ink/80">
              My work focuses on making AI guidance more <span className="bg-note px-1">personal, explainable,</span> and useful in real human decisions.
            </p>
            <ul className="space-y-4">
              {researchAreas.map((area, index) => (
                <motion.li
                  key={area.label}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex-shrink-0 text-terracotta">✦</span>
                  <div>
                    <span className="font-sans text-[14px] font-medium text-ink">{area.label}</span>
                    <span className="ml-2 font-hand text-[13px] text-terracotta/50">{area.note}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-sm border-2 border-[rgba(204,66,44,0.60)] bg-[#1a110e]"
          style={{ boxShadow: "3px 4px 0 rgba(192,68,42,0.30)" }}
        >
          <div className="flex items-center gap-2 border-b border-[rgba(204,66,44,0.20)] px-4 py-2">
            <div className="h-3 w-3 rounded-full bg-terracotta/70" />
            <div className="h-3 w-3 rounded-full bg-orange-200/50" />
            <div className="h-3 w-3 rounded-full bg-emerald-300/50" />
            <span className="ml-2 font-mono text-[10px] text-cream/30">research_lab.py</span>
          </div>
          <div className="space-y-2 p-5">
            {terminalLines.map((line, index) => (
              <motion.div
                key={line.text}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.15 }}
                className={`font-mono text-[12px] ${line.className}`}
              >
                {line.text}
              </motion.div>
            ))}
            <div className="mt-2 animate-pulse font-mono text-xs text-cream/40">█</div>
          </div>

          <div className="absolute bottom-4 right-4 w-28 rotate-[2deg] rounded-sm border border-orange-200/40 bg-[#fff9d6] p-2 shadow-md">
            <p className="font-hand text-[13px] leading-tight text-ink/70">need to write a blog post about this !</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MentorshipSection() {
  const areas = [
    "Japan applications & student life",
    "TIU applications & scholarships",
    "SOP & essay strategy",
    "Application planning & timelines",
    "AI/data science learning path",
    "Self-application (skip the agents)",
  ];

  return (
    <section className="w-full max-w-[900px] mx-auto mb-16 px-6 lg:px-0 scroll-mt-28">
      <div className="mb-8 flex items-baseline gap-3">
        <h2 className="font-hand text-[32px] font-bold text-terracotta md:text-[36px]">Mentorship</h2>
        <div className="h-[2px] flex-1 self-center bg-terracotta/20" />
        <span className="font-hand text-lg text-ink/40">✍︎</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-sm border-2 border-[rgba(204,66,44,0.30)] bg-paperSoft"
        style={{ boxShadow: "4px 5px 0 rgba(192,68,42,0.18)" }}
      >
        <div className="absolute inset-0 bg-lines pointer-events-none opacity-95" />
        <div className="absolute bottom-0 top-0 left-[100px] hidden w-[2px] bg-terracotta/25 pointer-events-none md:block" />

        <div className="relative z-[1] flex">
          <div className="hidden w-[100px] flex-shrink-0 px-3 py-10 md:block">
            <span className="mt-2 block font-hand text-[13px] leading-relaxed text-terracotta/50">honest guidance only</span>
          </div>

          <div className="flex-1 px-6 py-10 md:px-10">
            <p className="mb-7 max-w-[55ch] font-garamond text-[20px] leading-relaxed text-ink">
              I mentor students who want <strong className="font-semibold text-terracotta">honest, practical guidance</strong> from someone who has already walked the path. <em>No sales. No commission. Just clarity.</em>
            </p>

            <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {areas.map((area) => (
                <div key={area} className="flex items-start gap-2.5">
                  <span className="mt-1 flex-shrink-0 text-[12px] text-terracotta">✦</span>
                  <span className="font-garamond text-[16px] text-ink/75">{area}</span>
                </div>
              ))}
            </div>

            <a href="#connect" className="inline-flex items-center gap-2 rounded-sm border-2 border-terracotta bg-terracotta px-6 py-3 font-garamond text-[16px] text-paper transition-colors hover:bg-terracottaDark">
              Book a session through AbroadMates
              <span className="font-hand text-lg">→</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function JourneySection() {
  const milestones = [
    { year: "2018", title: "Early curiosity in Bangladesh", desc: "Leadership, organizing, and a growing urge to fix broken systems.", note: "the seeds ✦" },
    { year: "2020", title: "Applied abroad independently", desc: "Rejected the agency model. Self-applied to universities across North America, Europe, and Asia.", note: "scary but right" },
    { year: "2021", title: "Full-tuition scholarship to Japan", desc: "Moved to Tokyo International University to study Digital Business & Innovation.", note: "!!!!! 🎉" },
    { year: "2022", title: "Started AbroadMates", desc: "Built a peer-to-peer mentorship platform so students could talk to people who actually walked the path.", note: "live!" },
    { year: "2023", title: "Co-founded The Abroad Company", desc: "The bigger mission: building infrastructure for crossing borders.", note: "with Rahat ✦" },
    { year: "2024", title: "Building ApplicationMate", desc: "An AI copilot for study abroad — powered by Pearl, a friendly AI mascot.", note: "Pearl is adorable" },
    { year: "2025", title: "AI research & writing publicly", desc: "Personalization research, essay scoring, and writing honestly about all of it.", note: "← you are here" },
  ];

  return (
    <section id="journey" className="w-full max-w-[900px] mx-auto mb-16 px-6 lg:px-0 scroll-mt-28">
      <div className="mb-8 flex items-baseline gap-3">
        <h2 className="font-hand text-[32px] font-bold text-terracotta md:text-[36px]">The journey so far</h2>
        <div className="h-[2px] flex-1 self-center bg-terracotta/20" />
        <span className="font-hand text-lg text-ink/40">✍︎</span>
      </div>

      <div
        className="relative overflow-hidden rounded-sm border-2 border-[rgba(204,66,44,0.30)] bg-paperSoft"
        style={{ boxShadow: "3px 4px 0 rgba(192,68,42,0.15)" }}
      >
        <div className="absolute inset-0 bg-lines pointer-events-none opacity-95" />
        <div className="absolute bottom-0 top-0 left-[100px] hidden w-[2px] bg-terracotta/25 pointer-events-none md:block" />

        <div className="relative z-[1] py-4">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="group flex items-start"
            >
              <div className="hidden w-[100px] flex-shrink-0 px-3 pt-5 text-right md:block">
                <span className="font-hand text-[14px] text-terracotta/60">{milestone.note}</span>
              </div>

              <div className="flex flex-shrink-0 flex-col items-center px-4 pt-5 md:px-6">
                <div className="h-4 w-4 rounded-full border-2 border-terracotta bg-paperSoft transition-colors group-hover:bg-terracotta" />
                {index < milestones.length - 1 && <div className="mt-1 min-h-[32px] flex-1 bg-terracotta/20 w-[2px]" />}
              </div>

              <div className="flex-1 py-5 pr-6">
                <span className="font-mono text-[10px] tracking-widest text-terracotta/60">{milestone.year}</span>
                <h4 className="mt-0.5 mb-1 font-garamond text-[18px] font-semibold text-ink">{milestone.title}</h4>
                <p className="font-sans text-[12px] leading-relaxed text-ink/50">{milestone.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Divider() {
  return (
    <div className="w-full max-w-[900px] mx-auto flex items-center gap-4 my-2 mb-8 px-6 lg:px-0">
      <div className="flex-1 h-px bg-terracotta/15" />
      <span className="font-hand text-[14px] text-terracotta/30">✦ ✧ ✦</span>
      <div className="flex-1 h-px bg-terracotta/15" />
    </div>
  );
}

function NotesSection() {
  return (
    <section id="notes" className="w-full max-w-[900px] mx-auto mb-16 px-6 lg:px-0 scroll-mt-28">
      <div className="mb-8 flex items-baseline gap-3">
        <h2 className="font-hand text-[32px] font-bold text-terracotta md:text-[36px]">From the notebook</h2>
        <div className="h-[2px] flex-1 self-center bg-terracotta/20" />
        <a href="#connect" className="flex-shrink-0 font-hand text-[16px] text-terracotta/60 transition-colors hover:text-terracotta">all posts →</a>
      </div>

      <p className="mb-8 font-garamond text-[18px] italic text-ink/65">
        I write to think. Here’s what’s been on my mind lately.
      </p>

      <div className="space-y-4">
        {posts.map((post, index) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.07 }}
            className="group relative cursor-pointer overflow-hidden rounded-sm border-2 border-[rgba(204,66,44,0.25)] bg-paperSoft transition-all hover:-translate-y-[1px] hover:shadow-md"
            style={{ boxShadow: "3px 3px 0 rgba(192,68,42,0.12)" }}
          >
            <div className="absolute inset-0 bg-lines opacity-30 pointer-events-none" />
            <div className="absolute bottom-0 left-0 top-0 w-[4px] bg-terracotta" />

            <div className="relative z-[1] flex items-start gap-4 py-5 pl-6 pr-5">
              <div className="flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="rounded-sm border border-[rgba(204,66,44,0.40)] px-2 py-0.5 font-mono text-[10px] tracking-widest text-terracotta">
                    {post.tag}
                  </span>
                  <span className="font-mono text-[10px] text-ink/30">{post.time}</span>
                  <span className="font-hand text-[13px] text-ink/30">{post.date}</span>
                </div>
                <h3 className="mb-1.5 font-garamond text-[20px] font-semibold leading-snug text-ink transition-colors group-hover:text-terracotta">
                  {post.title}
                </h3>
                <p className="font-garamond text-[15px] leading-relaxed text-ink/55">{post.body}</p>
              </div>
              <span className="self-center flex-shrink-0 font-hand text-[26px] text-terracotta/40 transition-all group-hover:translate-x-1 group-hover:text-terracotta">→</span>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-6 text-center">
        <a href="#connect" className="border-b-2 border-[rgba(204,66,44,0.40)] pb-0.5 font-hand text-[18px] text-terracotta transition-colors hover:border-terracotta">
          read all posts ✦
        </a>
      </div>
    </section>
  );
}

function ArchiveSection() {
  return (
    <section className="w-full max-w-[900px] mx-auto mb-16 px-6 lg:px-0 scroll-mt-28">
      <div className="mb-8 flex items-baseline gap-3">
        <h2 className="font-hand text-[32px] font-bold text-terracotta md:text-[36px]">Archive</h2>
        <div className="h-[2px] flex-1 self-center bg-terracotta/20" />
        <span className="font-hand text-lg text-ink/40">✍︎</span>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {archive.map(([Icon, title, body], index) => (
          <motion.a
            key={title}
            href="#connect"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.06 }}
            className="relative overflow-hidden rounded-sm border-2 border-[rgba(204,66,44,0.25)] bg-paperSoft p-5 transition-transform hover:-translate-y-[2px]"
            style={{ boxShadow: "3px 4px 0 rgba(192,68,42,0.14)" }}
          >
            <div className="absolute inset-0 bg-lines opacity-35 pointer-events-none" />
            <div className="relative z-[1]">
              <Icon className="mb-5 text-terracotta" size={28} />
              <h3 className="font-hand text-[24px] font-bold leading-none text-ink">{title}</h3>
              <p className="mt-3 font-garamond text-[15px] leading-relaxed text-ink/60">{body}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

function ThankYouSection() {
  return (
    <section id="connect" className="w-full px-6 pb-20 pt-4 scroll-mt-28">
      <div className="mx-auto max-w-[900px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-sm border-2 border-[rgba(204,66,44,0.32)] bg-paperSoft px-8 py-12 text-center md:px-12 md:py-14"
          style={{ boxShadow: "4px 5px 0 rgba(192,68,42,0.15)" }}
        >
          <div className="absolute inset-0 bg-lines opacity-45 pointer-events-none" />
          <div className="relative z-[1]">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.28em] text-terracotta/55">
              founder • researcher • writer
            </p>

            <h2 className="font-hand text-[82px] font-bold leading-none text-terracotta md:text-[120px]">
              Thank you
            </h2>

            <div className="mx-auto my-8 max-w-[360px]">
              <svg viewBox="0 0 420 220" className="h-auto w-full" fill="none" aria-hidden="true">
                <path d="M167 66C174 32 221 22 245 50C264 72 258 111 242 132" stroke="var(--ink)" strokeWidth="3.2" strokeLinecap="round" />
                <path d="M171 78C189 55 226 55 244 80" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="191" cy="102" r="2.5" fill="var(--ink)" />
                <circle cx="230" cy="102" r="2.5" fill="var(--ink)" />
                <path d="M200 128C212 138 228 136 238 126" stroke="var(--ink)" strokeWidth="2.6" strokeLinecap="round" />
                <path d="M159 96C146 126 147 153 158 178" stroke="var(--ink)" strokeWidth="3.2" strokeLinecap="round" />
                <path d="M251 96C266 128 264 156 250 179" stroke="var(--ink)" strokeWidth="3.2" strokeLinecap="round" />
                <rect x="140" y="142" width="140" height="52" rx="8" fill="var(--paperSoft)" stroke="var(--ink)" strokeWidth="3" />
                <circle cx="210" cy="168" r="14" stroke="var(--ink)" strokeWidth="2.4" />
                <path d="M108 195H318" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" />
                <path d="M105 190C114 168 128 161 145 170" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" />
                <path d="M309 160C316 151 329 151 336 160C329 174 316 174 309 160Z" fill="var(--terracotta)" />
                <path d="M80 86C88 75 101 75 109 86" stroke="var(--terracotta)" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M322 52L330 67L346 74L330 82L322 98L314 82L298 74L314 67L322 52Z" stroke="var(--terracotta)" strokeWidth="2.4" />
              </svg>
            </div>

            <p className="mx-auto max-w-[620px] font-garamond text-[24px] leading-relaxed text-ink md:text-[28px]">
              Proma builds clearer paths for students crossing borders.
            </p>

            <div className="mx-auto mt-7 flex max-w-[720px] flex-wrap items-center justify-center gap-3 font-garamond text-[17px] text-terracotta md:text-[19px]">
              <a href="mailto:Proma@abroad.company" className="border-b border-[rgba(204,66,44,0.35)] pb-0.5 hover:border-terracotta">Proma@abroad.company</a>
              <span className="text-terracotta/40">•</span>
              <a href="#notes" className="border-b border-[rgba(204,66,44,0.35)] pb-0.5 hover:border-terracotta">Proma’s Notes</a>
              <span className="text-terracotta/40">•</span>
              <a href="#work" className="border-b border-[rgba(204,66,44,0.35)] pb-0.5 hover:border-terracotta">AbroadMates</a>
              <span className="text-terracotta/40">•</span>
              <a href="#top" className="border-b border-[rgba(204,66,44,0.35)] pb-0.5 hover:border-terracotta">Back to top</a>
            </div>
          </div>
        </motion.div>

        <p className="mt-7 text-center font-hand text-[21px] text-muted">
          designed & built somewhere between Kawagoe and everywhere else ✦
        </p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink [--paper:#f6efe3] [--paperSoft:#fff8ef] [--terracotta:#cc422c] [--terracottaDark:#9b2e20] [--ink:#37231e] [--muted:#917b72] [--line:#e9b2a2] [--note:#fff0b8]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600;700;800;900&family=Playfair+Display:wght@700;800&display=swap');
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .font-hand { font-family: 'Caveat', cursive; }
        .font-serif-display { font-family: 'EB Garamond', serif; }
        .font-garamond { font-family: 'EB Garamond', serif; }
        .bg-paper { background-color: var(--paper); }
        .bg-paperSoft { background-color: var(--paperSoft); }
        .bg-note { background-color: var(--note); }
        .bg-terracotta { background-color: var(--terracotta); }
        .bg-terracottaDark { background-color: var(--terracottaDark); }
        .text-ink { color: var(--ink); }
        .text-muted { color: var(--muted); }
        .text-terracotta { color: var(--terracotta); }
        .text-terracottaDark { color: var(--terracottaDark); }
        .border-terracotta { border-color: var(--terracotta); }
        .border-terracotta\/15 { border-color: rgba(204,66,44,0.15); }
        .border-terracotta\/20 { border-color: rgba(204,66,44,0.20); }
        .border-terracotta\/25 { border-color: rgba(204,66,44,0.25); }
        .border-terracotta\/30 { border-color: rgba(204,66,44,0.30); }
        .border-terracotta\/35 { border-color: rgba(204,66,44,0.35); }
        .border-terracotta\/40 { border-color: rgba(204,66,44,0.40); }
        .border-terracotta\/60 { border-color: rgba(204,66,44,0.60); }
        .border-terracottaDark { border-color: var(--terracottaDark); }
        .border-[var(--line)] { border-color: var(--line); }
        .shadow-card { box-shadow: 6px 6px 0 rgba(155,46,32,0.13); }
        .shadow-book { box-shadow: 8px 8px 0 rgba(155,46,32,0.18), 14px 18px 28px rgba(55,35,30,0.10); }
        .shadow-button { box-shadow: 4px 4px 0 rgba(155,46,32,0.22); }
        .bg-lines { background-image: linear-gradient(to bottom, transparent 0, transparent 31px, rgba(204,66,44,0.16) 32px); background-size: 100% 32px; }
        .bg-grid { background-image: linear-gradient(to right, rgba(204,66,44,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(204,66,44,0.14) 1px, transparent 1px); background-size: 28px 28px; }
        .container-narrow { max-width: 980px; margin-left: auto; margin-right: auto; }
        .section-space { padding: 88px 24px; }
        mark { color: var(--ink); }
        @media (min-width: 1024px) { .section-space { padding-left: 96px; padding-right: 96px; } }
      `}</style>
      <SideRail />
      <SideRail right />
      <main>
        <Hero />
        <BeliefsSection />
        <StorySection />
        <WorkSection />
        <ResearchSection />
        <MentorshipSection />
        <NotesSection />
        <JourneySection />
        <ArchiveSection />
        <ThankYouSection />
      </main>
    </div>
  );
}
