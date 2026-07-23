"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { defaultBlogPosts } from "@/lib/blog/defaultBlogPosts";
import { BLOG_CATEGORIES, getPostExcerpt, normalizePostCategory } from "@/lib/blog/blogCategories";
import { NotebookStoryCard } from "@/lib/blog/NotebookStoryCard";
import { useBlogPosts } from "@/lib/blog/useBlogPosts";
import { WorkSection } from "@/components/WorkSection";
import { links } from "@/lib/content/links";
import {
  heroPages,
  notebookMenu,
  beliefs,
  journeyMilestones,
  archiveItems,
  researchAreas,
  researchTerminalLines,
  mentorshipAreas,
  mentorshipCta,
  notebookFilters,
} from "@/lib/content/homepage";
import {
  BookOpen,
  Camera,
  Coffee,
  FileText,
  Globe2,
  Heart,
  Lightbulb,
  Mail,
  PenLine,
  Star,
} from "lucide-react";

// Hand-drawn doodles for the beliefs cards (presentation only; text lives in homepage.js).
const BELIEF_DOODLES = [
  (
    <svg key="belief-doodle-1" width="38" height="38" viewBox="0 0 38 38" fill="none">
      <rect x="4" y="4" width="30" height="30" rx="4" stroke="var(--terracotta)" strokeWidth="1.8" />
      <path d="M10 14h18M10 19h14M10 24h16" stroke="var(--terracotta)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="29" cy="10" r="5" fill="var(--paper)" stroke="var(--terracotta)" strokeWidth="1.5" />
      <path d="M27 10h4M29 8v4" stroke="var(--terracotta)" strokeWidth="1.3" />
    </svg>
  ),
  (
    <svg key="belief-doodle-2" width="38" height="38" viewBox="0 0 38 38" fill="none">
      <path d="M8 22 Q19 8 30 22" stroke="var(--terracotta)" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="26" r="2" fill="var(--terracotta)" />
      <circle cx="19" cy="24" r="2" fill="var(--terracotta)" />
      <circle cx="26" cy="26" r="2" fill="var(--terracotta)" />
      <path d="M14 30h10" stroke="var(--terracotta)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg key="belief-doodle-3" width="38" height="38" viewBox="0 0 38 38" fill="none">
      <circle cx="19" cy="17" r="10" stroke="var(--terracotta)" strokeWidth="1.8" />
      <path d="M19 11v6l4 3" stroke="var(--terracotta)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 30 Q19 24 28 30" stroke="var(--terracotta)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
];

const ARCHIVE_ICONS = { BookOpen, FileText, Coffee, Camera };


function formatNoteDate(iso) {
  if (!iso) return "";
  const d = new Date(`${iso}T12:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function sortNotesNewestFirst(posts) {
  return [...posts].sort((a, b) => {
    const byDate = (b.date || "").localeCompare(a.date || "");
    if (byDate !== 0) return byDate;
    return a.title.localeCompare(b.title);
  });
}

function isFounderNote(post) {
  return (
    post.slug === "founder-story" ||
    post.slug === "the-chaos-i-couldnt-ignore" ||
    /founder/i.test(post.title)
  );
}

function SideRail({ right = false }) {
  const leftItems = [
    [Camera, "about", "/#about"],
    [Lightbulb, "story", "/#story"],
    [Star, "work", "/#work"],
    [PenLine, "research", "/#research"],
    [BookOpen, "notes", "/notes"],
  ];

  const rightItems = [
    [Camera, "images", "/#work"],
    [Globe2, "travel", "/#journey"],
    [Coffee, "notes", "/notes"],
    [Heart, "mentor", "/#connect"],
    [Mail, "connect", "/#connect"],
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
      {notebookMenu.map(([label, href]) => (
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
      {rightLabel ? (
        <Link href="/notes" className="font-hand text-xl text-terracotta/70">
          {rightLabel}
        </Link>
      ) : (
        <PenLine className="text-muted/45" size={17} />
      )}
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
    <img
      src="/assets/proma-coffee-girl.svg"
      alt="Proma — a hand-drawn portrait with a coffee cup"
      className="h-auto w-full select-none"
      draggable={false}
    />
  );
}

function Page1() {
  return (
    <img
      src="/assets/founder-life-simplified-dark.svg"
      alt="Founder life — a hand-drawn sketch of the founder journey"
      className="h-auto w-full select-none"
      draggable={false}
    />
  );
}

function Page2() {
  return (
    <img
      src="/assets/researcher-ponytail-research.svg"
      alt="Researcher — a hand-drawn sketch of research work"
      className="h-auto w-full select-none"
      draggable={false}
    />
  );
}

function Page3() {
  return (
    <img
      src="/assets/traveler-couple-dark.svg"
      alt="Traveler — a hand-drawn sketch of the journey so far"
      className="h-auto w-full select-none"
      draggable={false}
    />
  );
}

function HeroIllustration({ page }) {
  if (page === 1) return <Page1 />;
  if (page === 2) return <Page2 />;
  if (page === 3) return <Page3 />;
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
            {[0, 1, 2, 3].map((index) => (
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

function HeroCtaLink({ href, className, children }) {
  if (href.startsWith("/notes") || href === "/admin") {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
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
              <span className="rounded-sm border border-[rgba(204,66,44,0.30)] px-2 py-0.5 font-mono text-[10px] tracking-widest text-terracotta/60">page {page.page} of 4</span>
              {page.eyebrow ? (
                <span className="font-mono text-[10px] tracking-wide text-ink/40">{page.eyebrow}</span>
              ) : null}
            </div>
            <div className="mb-4 font-hand text-[48px] font-bold leading-none text-terracotta md:text-[58px]">{page.name}</div>
            <h1 className="mb-6 max-w-[420px] font-garamond text-[32px] font-semibold leading-[1.1] tracking-tight text-ink md:text-[48px]">
              {page.title}
            </h1>
            <div className="mb-6 font-mono text-[11px] tracking-wider text-ink/50">◉ {page.meta.join("  •  ")}</div>
            {page.line ? (
              <div className="mb-6 inline-block border-b-[2.5px] border-[rgba(204,66,44,0.40)] pb-1 font-hand text-[19px] font-semibold text-terracotta">
                {page.line.replace(/ ✧$/, "")} ✧
              </div>
            ) : null}
            <div className="mt-2 flex flex-wrap gap-3">
              <HeroCtaLink
                href={page.primaryHref}
                className="rounded border-2 border-terracotta bg-terracotta px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-terracottaDark"
              >
                {page.primary}
              </HeroCtaLink>
              <HeroCtaLink
                href={page.secondaryHref}
                className="rounded border-2 border-terracotta px-5 py-2.5 text-sm font-medium text-terracotta transition-colors hover:bg-terracotta/10"
              >
                {page.secondary}
              </HeroCtaLink>
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
      const nextPage = Math.min(3, Math.floor(Math.min(0.999, Math.max(0, latest)) * 4));
      setActivePage((current) => (current === nextPage ? current : nextPage));
    });
  }, [scrollYProgress]);

  const scrollToHeroPage = (index) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const top = window.scrollY + rect.top;
    const totalScrollable = heroRef.current.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + (totalScrollable / 4) * index, behavior: "smooth" });
  };

  return (
    <section ref={heroRef} id="top" className="relative h-[500vh] px-6">
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
    <section id="about" className="w-full max-w-[900px] mx-auto px-6 lg:px-0 scroll-mt-28">
      <div className="mb-4 flex items-baseline gap-3">
        <h2 className="font-hand text-[32px] font-bold text-terracotta md:text-[36px]">3 things I strongly believe in</h2>
        <div className="h-[2px] flex-1 self-center bg-terracotta/20" />
        <span className="font-hand text-lg text-ink/40">✍︎</span>
      </div>
      <p className="mb-8 max-w-[640px] font-garamond text-[17px] italic leading-relaxed text-ink/60">
        This list keeps changing — but right now, these are the three I strongly believe in.
      </p>

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
              <div className="mb-3">{BELIEF_DOODLES[index]}</div>
              <h3 className="mb-1 font-hand text-[23px] font-bold text-ink">{belief.title}</h3>
              <p className="mb-2 font-hand text-[15px] font-semibold text-terracotta">{belief.tagline}</p>
              <p className="font-garamond text-[15px] leading-relaxed text-ink/65">{belief.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function StorySection() {
  const { posts } = useBlogPosts();
  const chaos =
    posts.find((p) => p.slug === "the-chaos-i-couldnt-ignore") ||
    defaultBlogPosts.find((p) => p.slug === "the-chaos-i-couldnt-ignore");

  if (!chaos) return null;

  const paragraphs = chaos.paragraphs || [];
  const previewCount = 2;
  const preview = paragraphs.slice(0, previewCount);
  const hasMore = paragraphs.length > previewCount;

  return (
    <section id="story" className="w-full max-w-[900px] mx-auto px-6 lg:px-0 scroll-mt-28">
      <div className="mb-8 flex items-baseline gap-3">
        <h2 className="font-hand text-[32px] font-bold text-terracotta md:text-[36px]">{chaos.title}</h2>
        <div className="h-[2px] flex-1 self-center bg-terracotta/20" />
        <span className="font-hand text-lg text-ink/40">✍︎</span>
      </div>

      <NotebookStoryCard
        paragraphs={preview}
        pullQuote={hasMore ? "" : chaos.pullQuote}
        signature={chaos.signature}
        signatureMeta={chaos.signatureMeta}
      />

      {hasMore ? (
        <div className="mt-6 text-center">
          <Link
            href={`/notes/${chaos.slug}`}
            className="inline-block border-b-2 border-[rgba(204,66,44,0.40)] pb-0.5 font-hand text-[20px] text-terracotta transition-colors hover:border-terracotta"
          >
            Read the full write-up →
          </Link>
        </div>
      ) : null}
    </section>
  );
}

function ResearchSection() {
  const terminalLines = researchTerminalLines;

  return (
    <section id="research" className="w-full max-w-[900px] mx-auto px-6 lg:px-0 scroll-mt-28">
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
  const areas = mentorshipAreas;

  return (
    <section className="w-full max-w-[900px] mx-auto px-6 lg:px-0 scroll-mt-28">
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

            <a
              href={mentorshipCta.href || links.abroadMates}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border-2 border-terracotta bg-terracotta px-6 py-3 font-garamond text-[16px] text-paper transition-colors hover:bg-terracottaDark"
            >
              {mentorshipCta.label}
              <span className="font-hand text-lg">→</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function JourneySection() {
  const milestones = journeyMilestones;

  return (
    <section id="journey" className="w-full max-w-[900px] mx-auto px-6 lg:px-0 scroll-mt-28">
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

function NotesSection() {
  const { posts: notes, loading } = useBlogPosts();
  const [filter, setFilter] = useState("all");

  const sortedNotes = useMemo(() => sortNotesNewestFirst(notes), [notes]);

  const visibleNotes = useMemo(() => {
    if (filter === "all") return sortedNotes;
    if (filter === "founder") return sortedNotes.filter(isFounderNote);
    if (filter === "personal") return sortedNotes.filter((p) => normalizePostCategory(p) === "personal");
    if (filter === "research") return sortedNotes.filter((p) => normalizePostCategory(p) === "research");
    return sortedNotes;
  }, [sortedNotes, filter]);

  return (
    <section id="notebook" className="mx-auto w-full max-w-[900px] scroll-mt-28 px-6 lg:px-0">
      <div className="mb-8 flex items-baseline gap-3">
        <h2 className="font-hand text-[32px] font-bold text-terracotta md:text-[36px]">From the notebook</h2>
        <div className="h-[2px] flex-1 self-center bg-terracotta/20" />
        <Link href="/notes" className="shrink-0 font-hand text-[16px] text-terracotta/60 transition-colors hover:text-terracotta">
          all notes →
        </Link>
      </div>

      <p className="mb-2 font-garamond text-[15px] leading-relaxed text-ink/65">
        Founder stories, personal notes, and research essays. Newest first.
      </p>
      <p className="mb-8 font-garamond text-[14px] text-ink/55">
        Filter:{" "}
        {notebookFilters.map((tab, index) => (
          <span key={tab.id}>
            {index > 0 ? " · " : null}
            <button
              type="button"
              onClick={() => setFilter(tab.id)}
              className={
                filter === tab.id
                  ? "text-terracotta underline decoration-terracotta/50 underline-offset-2"
                  : "hover:text-terracotta"
              }
            >
              {tab.label}
            </button>
          </span>
        ))}
      </p>

      {loading ? (
        <p className="font-garamond text-[16px] italic text-ink/50">Loading notes…</p>
      ) : notes.length === 0 ? (
        <p className="font-garamond text-[16px] italic text-ink/50">No notes published yet.</p>
      ) : visibleNotes.length === 0 ? (
        <p className="font-garamond text-[16px] italic text-ink/50">No notes in this filter yet.</p>
      ) : (
        <div className="space-y-4">
          {visibleNotes.map((post, index) => {
            const category = BLOG_CATEGORIES[normalizePostCategory(post)];
            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.07 }}
                className="group relative overflow-hidden rounded-sm border-2 border-[rgba(204,66,44,0.25)] bg-paperSoft transition-all hover:-translate-y-[1px] hover:shadow-md"
                style={{ boxShadow: "3px 3px 0 rgba(192,68,42,0.12)" }}
              >
                <div className="absolute inset-0 bg-lines opacity-30 pointer-events-none" />
                <div className="absolute bottom-0 left-0 top-0 w-[4px] bg-terracotta" />

                <Link href={`/notes/${post.slug}`} className="relative z-[1] flex items-start gap-4 py-5 pl-6 pr-5">
                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="rounded-sm border border-[rgba(204,66,44,0.40)] px-2 py-0.5 font-mono text-[10px] tracking-widest text-terracotta">
                        {category.tag}
                      </span>
                      <span className="font-hand text-[13px] text-ink/30">{formatNoteDate(post.date)}</span>
                    </div>
                    <h3 className="mb-1.5 font-garamond text-[20px] font-semibold leading-snug text-ink transition-colors group-hover:text-terracotta">
                      {post.title}
                    </h3>
                    <p className="font-garamond text-[15px] leading-relaxed text-ink/55">{getPostExcerpt(post, 140)}</p>
                  </div>
                  <span className="flex-shrink-0 self-center font-hand text-[26px] text-terracotta/40 transition-all group-hover:translate-x-1 group-hover:text-terracotta">
                    →
                  </span>
                </Link>
              </motion.article>
            );
          })}
        </div>
      )}

      {notes.length > 0 ? (
        <div className="mt-6 text-center">
          <Link
            href="/notes"
            className="inline-block border-b-2 border-[rgba(204,66,44,0.40)] pb-0.5 font-hand text-[18px] text-terracotta transition-colors hover:border-terracotta"
          >
            read all notes ✦
          </Link>
        </div>
      ) : null}
    </section>
  );
}

function ArchiveSection() {
  return (
    <section className="w-full max-w-[900px] mx-auto px-6 lg:px-0 scroll-mt-28">
      <div className="mb-8 flex items-baseline gap-3">
        <h2 className="font-hand text-[32px] font-bold text-terracotta md:text-[36px]">Archive</h2>
        <div className="h-[2px] flex-1 self-center bg-terracotta/20" />
        <span className="font-hand text-lg text-ink/40">✍︎</span>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {archiveItems.map((item, index) => {
          const Icon = ARCHIVE_ICONS[item.icon] || BookOpen;
          return (
            <motion.a
              key={item.title}
              href="/#connect"
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
                <h3 className="font-hand text-[24px] font-bold leading-none text-ink">{item.title}</h3>
                <p className="mt-3 font-garamond text-[15px] leading-relaxed text-ink/60">{item.body}</p>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}

function ThankYouSection() {
  return (
    <section id="connect" className="w-full max-w-[900px] mx-auto scroll-mt-28 px-6 pb-24 lg:px-0 md:pb-28">
      <img
        src="/assets/Proma-Thank-you.png"
        alt="Proma — thank you and connect"
        className="block h-auto w-full"
      />
    </section>
  );
}

export default function HomePage() {
  return (
    <>
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
    </>
  );
}
