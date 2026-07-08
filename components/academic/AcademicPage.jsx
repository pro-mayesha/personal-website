"use client";

import Link from "next/link";
import { Download, Mail, BookOpen, Github, Linkedin } from "lucide-react";
import { AcademicTag } from "./AcademicTag";
import { StatusTag } from "./StatusTag";
import { SectionHeader } from "./SectionHeader";
import { TimelineItem } from "./TimelineItem";
import { ResearchCard } from "./ResearchCard";
import { ProjectCard } from "./ProjectCard";
import {
  hero,
  sidebarSections,
  researchFocus,
  education,
  researchPapers,
  workingPapers,
  experience,
  projects,
  skills,
  researchNotesIntro,
  researchNoteSamples,
  contact,
  quickFacts,
} from "@/lib/data/academicContent";

function DetailCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-sm border-2 border-[rgba(204,66,44,0.20)] bg-paperSoft p-5 shadow-card ${className}`}
    >
      {children}
    </div>
  );
}

function SidebarNav() {
  return (
    <nav aria-label="Academic page sections" className="space-y-1">
      {sidebarSections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="block rounded-sm px-2 py-1.5 font-mono text-[11px] uppercase tracking-wider text-ink/55 transition-colors hover:bg-[#fff4ef] hover:text-terracotta"
        >
          {section.label}
        </a>
      ))}
      <div className="my-4 h-px bg-terracotta/15" />
      <Link
        href="/"
        className="block px-2 font-hand text-[17px] text-terracotta/70 transition-colors hover:text-terracotta"
      >
        ← personal site
      </Link>
    </nav>
  );
}

function QuickFactsAside() {
  return (
    <aside className="hidden xl:block" aria-label="Quick facts">
      <div className="sticky top-8 rounded-sm border border-terracotta/20 bg-paperSoft/80 p-4">
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted">Quick facts</p>
        <dl className="mt-3 space-y-3 font-garamond text-[14px] text-ink/75">
          <div>
            <dt className="font-mono text-[9px] uppercase tracking-wider text-muted">Based</dt>
            <dd>{quickFacts.location}</dd>
          </div>
          <div>
            <dt className="font-mono text-[9px] uppercase tracking-wider text-muted">Languages</dt>
            <dd>{quickFacts.languages}</dd>
          </div>
          <div>
            <dt className="font-mono text-[9px] uppercase tracking-wider text-muted">Seeking</dt>
            <dd className="leading-snug">{quickFacts.seeking}</dd>
          </div>
        </dl>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-muted">Themes</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {quickFacts.themes.map((t) => (
            <AcademicTag key={t}>{t}</AcademicTag>
          ))}
        </div>
        <p className="mt-4 font-hand text-[15px] italic text-terracotta/60">open to research chats ✦</p>
      </div>
    </aside>
  );
}

export default function AcademicPage() {
  return (
    <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-12 md:px-8 md:pt-16 lg:px-10">
      {/* subtle corner label */}
      <p className="pointer-events-none absolute right-5 top-4 font-hand text-[14px] text-terracotta/35 md:right-10">
        academic portfolio
      </p>

      <div className="lg:flex lg:gap-10 xl:gap-14">
        {/* Left sidebar */}
        <div className="mb-10 lg:mb-0 lg:w-44 lg:shrink-0">
          <div className="lg:sticky lg:top-8">
            <p className="mb-4 hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted lg:block">
              On this page
            </p>
            <div className="flex gap-2 overflow-x-auto pb-2 lg:block lg:overflow-visible lg:pb-0">
              <SidebarNav />
            </div>
          </div>
        </div>

        {/* Main column */}
        <div className="min-w-0 flex-1 space-y-16 md:space-y-20">
          {/* Hero */}
          <section aria-labelledby="academic-hero-heading" className="relative">
            <DetailCard className="relative overflow-hidden">
              <div className="absolute inset-0 bg-lines opacity-20 pointer-events-none" />
              <div className="relative">
                <p className="font-hand text-[15px] text-terracotta/50">{hero.handwrittenNote}</p>
                <h1
                  id="academic-hero-heading"
                  className="mt-2 font-hand text-[40px] font-bold leading-none text-terracotta md:text-[48px]"
                >
                  {hero.name}
                </h1>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{hero.title}</p>
                <p className="mt-5 max-w-2xl font-garamond text-[18px] leading-relaxed text-ink/85 md:text-[20px]">
                  {hero.statement}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={hero.cvDownloadHref}
                    className="inline-flex items-center gap-2 rounded-sm border-2 border-terracotta bg-terracotta px-4 py-2.5 font-garamond text-[15px] text-paper shadow-button transition-colors hover:bg-terracottaDark"
                  >
                    <Download size={16} aria-hidden />
                    Download CV
                  </a>
                  <a
                    href={hero.emailHref}
                    className="inline-flex items-center gap-2 rounded-sm border-2 border-terracotta/35 bg-paper px-4 py-2.5 font-garamond text-[15px] text-terracotta transition-colors hover:bg-[#fff4ef]"
                  >
                    <Mail size={16} aria-hidden />
                    Email Me
                  </a>
                  <Link
                    href={hero.notesHref}
                    className="inline-flex items-center gap-2 rounded-sm border-2 border-terracotta/35 bg-paper px-4 py-2.5 font-garamond text-[15px] text-terracotta transition-colors hover:bg-[#fff4ef]"
                  >
                    <BookOpen size={16} aria-hidden />
                    Read Research Notes
                  </Link>
                </div>

                <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-2 border-t border-terracotta/15 pt-6">
                  {hero.credibility.map((item) => (
                    <li key={item} className="font-mono text-[10px] uppercase tracking-wider text-ink/50">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </DetailCard>
          </section>

          {/* Research Focus */}
          <section className="space-y-6" aria-labelledby="focus-heading">
            <SectionHeader id="focus" title="Research Focus" />
            <p className="font-garamond text-[16px] leading-relaxed text-ink/75">{researchFocus.summary}</p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {researchFocus.interests.map((interest) => (
                <li
                  key={interest}
                  className="flex items-start gap-2 font-garamond text-[15px] text-ink/80 before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-terracotta before:content-['']"
                >
                  {interest}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {researchFocus.categoryTags.map((tag) => (
                <AcademicTag key={tag}>{tag}</AcademicTag>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="space-y-8" aria-labelledby="education-heading">
            <SectionHeader id="education" title="Education" />
            <div className="space-y-8">
              {education.map((item) => (
                <TimelineItem key={item.institution + item.period} {...item} />
              ))}
            </div>
          </section>

          {/* Research Papers */}
          <section className="space-y-6" aria-labelledby="papers-heading">
            <SectionHeader
              id="papers"
              title="Research Papers"
              subtitle="Peer-reviewed and submitted work in NLP, writing systems, and knowledge modeling."
            />
            <div className="space-y-5">
              {researchPapers.map((paper) => (
                <ResearchCard key={paper.title} item={paper} />
              ))}
            </div>
          </section>

          {/* Working Papers */}
          <section className="space-y-6" aria-labelledby="working-papers-heading">
            <SectionHeader
              id="working-papers"
              title="Working Papers"
              subtitle="Active research threads connecting founder work to doctoral directions."
            />
            <div className="space-y-5">
              {workingPapers.map((paper) => (
                <ResearchCard key={paper.title} item={paper} />
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="space-y-6" aria-labelledby="experience-heading">
            <SectionHeader id="experience" title="Experience" />
            <div className="space-y-4">
              {experience.map((item) => (
                <DetailCard key={item.organization + item.period}>
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <time className="font-mono text-[10px] uppercase tracking-widest text-muted">{item.period}</time>
                      <h3 className="mt-1 font-garamond text-[18px] font-semibold text-ink">
                        {item.role}
                        <span className="font-normal text-terracotta/90"> · {item.organization}</span>
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => {
                        const status = tag.toLowerCase() === "founder" ? "founder" : tag.toLowerCase() === "research" ? "research" : null;
                        return status ? (
                          <StatusTag key={tag} status={status} />
                        ) : (
                          <AcademicTag key={tag}>{tag}</AcademicTag>
                        );
                      })}
                    </div>
                  </div>
                  <p className="mt-3 font-garamond text-[15px] leading-relaxed text-ink/75">{item.description}</p>
                </DetailCard>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="space-y-6" aria-labelledby="projects-heading">
            <SectionHeader id="projects" title="Projects" />
            <div className="grid gap-4 sm:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="space-y-6" aria-labelledby="skills-heading">
            <SectionHeader id="skills" title="Skills and Methods" />
            <div className="grid gap-4 md:grid-cols-2">
              {Object.values(skills).map((group) => (
                <DetailCard key={group.label}>
                  <h3 className="font-garamond text-[17px] font-semibold text-ink">{group.label}</h3>
                  <p className="mt-2 font-garamond text-[14px] leading-relaxed text-ink/70">{group.detail}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {group.keywords.map((kw) => (
                      <AcademicTag key={kw}>{kw}</AcademicTag>
                    ))}
                  </div>
                </DetailCard>
              ))}
            </div>
          </section>

          {/* Research Notes */}
          <section className="space-y-6" aria-labelledby="research-notes-heading">
            <SectionHeader id="research-notes" title="Research Notes" subtitle={researchNotesIntro} />
            <div className="grid gap-4 sm:grid-cols-2">
              {researchNoteSamples.map((note) => (
                <Link key={note.title} href={note.href} className="group block h-full">
                  <DetailCard className="h-full transition-colors group-hover:border-terracotta/35">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-garamond text-[17px] font-semibold text-ink group-hover:text-terracotta">
                        {note.title}
                      </h3>
                      <AcademicTag>{note.tag}</AcademicTag>
                    </div>
                    <p className="mt-2 font-garamond text-[14px] leading-relaxed text-ink/70">{note.description}</p>
                    <span className="mt-3 inline-block font-hand text-[16px] text-terracotta/60 group-hover:text-terracotta">
                      read →
                    </span>
                  </DetailCard>
                </Link>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="space-y-6" aria-labelledby="contact-heading">
            <SectionHeader id="contact" title="Contact" subtitle="Open to PhD conversations, research collaboration, and academic introductions." />
            <DetailCard>
              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href={contact.emailHref}
                  className="flex items-center gap-3 rounded-sm border border-terracotta/20 bg-paper px-4 py-3 transition-colors hover:border-terracotta/40"
                >
                  <Mail size={18} className="text-terracotta" aria-hidden />
                  <span className="font-garamond text-[15px] text-ink">{contact.email}</span>
                </a>
                <a
                  href={contact.linkedin}
                  className="flex items-center gap-3 rounded-sm border border-terracotta/20 bg-paper px-4 py-3 transition-colors hover:border-terracotta/40"
                >
                  <Linkedin size={18} className="text-terracotta" aria-hidden />
                  <span className="font-garamond text-[15px] text-ink">LinkedIn</span>
                </a>
                <a
                  href={contact.github}
                  className="flex items-center gap-3 rounded-sm border border-terracotta/20 bg-paper px-4 py-3 transition-colors hover:border-terracotta/40"
                >
                  <Github size={18} className="text-terracotta" aria-hidden />
                  <span className="font-garamond text-[15px] text-ink">GitHub</span>
                </a>
                <a
                  href={contact.cvHref}
                  className="flex items-center gap-3 rounded-sm border border-terracotta/20 bg-paper px-4 py-3 transition-colors hover:border-terracotta/40"
                >
                  <Download size={18} className="text-terracotta" aria-hidden />
                  <span className="font-garamond text-[15px] text-ink">Download CV (PDF)</span>
                </a>
              </div>
            </DetailCard>
          </section>
        </div>

        <div className="hidden w-52 shrink-0 xl:block">
          <QuickFactsAside />
        </div>
      </div>
    </div>
  );
}
