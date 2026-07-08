"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Compass,
  Download,
  FileText,
  GraduationCap,
  Github,
  Link2,
  Linkedin,
  Mail,
  PenLine,
  Users,
} from "lucide-react";
import { AcademicNav } from "./AcademicNav";
import { SectionNav } from "./SectionNav";
import { SectionHeader } from "./SectionHeader";
import { CategoryTag } from "./CategoryTag";
import { DetailCard } from "./DetailCard";
import { ResearchCard } from "./ResearchCard";
import { ProjectCard } from "./ProjectCard";
import { TimelineItem } from "./TimelineItem";
import { SkillGroup } from "./SkillGroup";
import { LinkButton } from "./LinkButton";

import { profile } from "@/lib/content/profile";
import { links } from "@/lib/content/links";
import { academic } from "@/lib/content/academic";
import { researchInterests, researchPapers, workingPapers } from "@/lib/content/research";
import { projects } from "@/lib/content/projects";
import { educationItems } from "@/lib/content/education";
import { experienceItems } from "@/lib/content/experience";
import { skillGroups } from "@/lib/content/skills";
import { researchNotes } from "@/lib/content/notes";

const ICONS = { BookOpen, Compass, GraduationCap, Link2, Users, PenLine };

function Icon({ name, ...props }) {
  const Cmp = ICONS[name] || BookOpen;
  return <Cmp {...props} />;
}

function byOrder(a, b) {
  return (a.order ?? 0) - (b.order ?? 0);
}

function formatNoteDate(iso) {
  if (!iso) return "";
  const d = new Date(`${iso}T12:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function AcademicPage() {
  const cvHref = profile.cvUrl || links.cv;
  const emailHref = `mailto:${links.email}`;

  const education = [...educationItems].sort(byOrder);
  const experience = [...experienceItems].sort(byOrder);
  const sortedProjects = [...projects].sort(byOrder);
  const notes = researchNotes.filter((note) => note.published);

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <AcademicNav />

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-5 pb-10 pt-12 md:px-8 md:pt-16">
        <div className="max-w-3xl">
          <h1 className="font-garamond text-[44px] font-bold leading-[1.05] text-ink md:text-[60px]">
            {profile.fullName}
          </h1>
          <p className="mt-2 text-[15px] font-semibold text-terracotta">
            {academic.hero.roles.join("  ·  ")}
          </p>
          <p className="mt-5 text-[17px] leading-relaxed text-ink/75 md:text-[18px]">
            {academic.hero.story}
          </p>

          {academic.credibilityStrip?.length ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {academic.credibilityStrip.map((item) => (
                <CategoryTag key={item}>{item}</CategoryTag>
              ))}
            </div>
          ) : null}

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={academic.hero.publicationsHref}
              className="inline-flex items-center gap-2 rounded-lg border border-terracotta bg-terracotta px-4 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-terracottaDark"
            >
              View Publications <ArrowRight size={15} aria-hidden />
            </a>
            <a
              href={emailHref}
              className="inline-flex items-center gap-2 rounded-lg border border-terracotta/40 bg-white px-4 py-2.5 text-[14px] font-medium text-terracotta transition-colors hover:bg-terracotta/10"
            >
              Contact Me <Mail size={15} aria-hidden />
            </a>
            <a
              href={cvHref}
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-4 py-2.5 text-[14px] font-medium text-ink/75 transition-colors hover:border-terracotta/60 hover:text-terracotta"
            >
              <Download size={15} aria-hidden /> Download CV
            </a>
          </div>
        </div>

        {/* Quick summary cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {academic.quickCards.map((card) => (
            <DetailCard key={card.title} className="flex flex-col">
              <Icon name={card.icon} size={20} className="text-terracotta" aria-hidden />
              <h3 className="mt-3 font-garamond text-[17px] font-semibold text-ink">{card.title}</h3>
              <p className="mt-1.5 flex-1 text-[13.5px] leading-relaxed text-ink/70">{card.body}</p>
              <a
                href={card.action.href}
                className="mt-3 inline-flex items-center gap-1 text-[13px] font-medium text-terracotta transition-colors hover:text-terracottaDark"
              >
                {card.action.label} →
              </a>
            </DetailCard>
          ))}
        </div>
      </section>

      <SectionNav />

      <main className="mx-auto max-w-5xl space-y-16 px-5 py-14 md:px-8 md:py-16">
        {/* Research Interests */}
        <section>
          <SectionHeader id="research" title="Research Interests" />
          {academic.researchFocusIntro ? (
            <p className="mb-6 max-w-2xl text-[15px] leading-relaxed text-ink/70">{academic.researchFocusIntro}</p>
          ) : null}
          <div className="grid gap-4 md:grid-cols-3">
            {researchInterests.map((item) => (
              <DetailCard key={item.title} className="flex flex-col">
                <Icon name={item.icon} size={20} className="text-terracotta" aria-hidden />
                <h3 className="mt-3 font-garamond text-[18px] font-semibold text-ink">{item.title}</h3>
                <p className="mt-1.5 flex-1 text-[14px] leading-relaxed text-ink/70">{item.summary}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <CategoryTag key={tag}>{tag}</CategoryTag>
                  ))}
                </div>
              </DetailCard>
            ))}
          </div>
        </section>

        {/* Selected Papers */}
        <section>
          <SectionHeader id="papers" title="Selected Papers & Projects" action={{ label: "View all publications", href: "#" }} />
          <div className="grid gap-4 md:grid-cols-3">
            {researchPapers.map((paper) => (
              <ResearchCard key={paper.title} item={paper} />
            ))}
          </div>
        </section>

        {/* Working Papers */}
        <section>
          <SectionHeader id="working-papers" title="Working Papers" />
          <div className="grid gap-4">
            {workingPapers.map((paper) => (
              <ResearchCard key={paper.title} item={paper} wide />
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <SectionHeader id="projects" title="Projects" />
          <div className="grid gap-4 md:grid-cols-3">
            {sortedProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        {/* Reading Notes */}
        <section>
          <SectionHeader id="notes" title="Reading Notes / Paper Reflections" action={{ label: "See all notes", href: links.notes }} />
          {academic.notesIntro ? (
            <p className="mb-6 max-w-2xl text-[15px] leading-relaxed text-ink/70">{academic.notesIntro}</p>
          ) : null}
          <div className="grid gap-4 md:grid-cols-3">
            {notes.map((note) => (
              <Link key={note.title} href={note.slug ? `${links.notes}/${note.slug}` : links.notes} className="group block h-full">
                <DetailCard className="flex h-full flex-col transition-colors group-hover:border-terracotta/60">
                  <div className="flex items-center gap-2 text-terracotta/70">
                    <FileText size={15} aria-hidden />
                    <span className="text-[11px] font-medium text-muted">{formatNoteDate(note.date)}</span>
                  </div>
                  <h3 className="mt-2 font-garamond text-[16px] font-semibold leading-snug text-ink group-hover:text-terracotta">
                    {note.title}
                  </h3>
                  <p className="mt-1.5 flex-1 text-[13.5px] leading-relaxed text-ink/70">{note.excerpt}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {note.tags.map((tag) => (
                      <CategoryTag key={tag}>{tag}</CategoryTag>
                    ))}
                  </div>
                </DetailCard>
              </Link>
            ))}
          </div>
        </section>

        {/* Experience & Education */}
        <section>
          <SectionHeader id="experience" title="Experience & Education" />
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="mb-5 text-[12px] font-bold uppercase tracking-[0.16em] text-muted">Experience</h3>
              <div className="space-y-6">
                {experience.map((item) => (
                  <TimelineItem key={item.role + item.organization} {...item} />
                ))}
              </div>
            </div>
            <div id="education" className="scroll-mt-24">
              <h3 className="mb-5 text-[12px] font-bold uppercase tracking-[0.16em] text-muted">Education</h3>
              <div className="space-y-6">
                {education.map((item) => (
                  <TimelineItem key={item.degree + item.institution} {...item} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
          <SectionHeader id="skills" title="Skills & Methods" />
          <div className="rounded-2xl border-[1.5px] border-line bg-white bg-grid p-6 md:p-9">
            <div className="grid gap-x-12 gap-y-9 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <SkillGroup
                  key={group.title}
                  title={group.title}
                  description={group.description}
                  skills={group.skills}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer / Contact */}
      <footer id="contact" className="scroll-mt-24 border-t-2 border-line bg-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-ink/75">
            <LinkButton href={emailHref} icon={Mail} className="transition-colors hover:text-terracotta">
              {links.email}
            </LinkButton>
            <LinkButton href={links.linkedin} icon={Linkedin} className="transition-colors hover:text-terracotta">
              LinkedIn
            </LinkButton>
            <LinkButton href={links.googleScholar} icon={GraduationCap} className="transition-colors hover:text-terracotta">
              Google Scholar
            </LinkButton>
            <LinkButton href={links.github} icon={Github} className="transition-colors hover:text-terracotta">
              GitHub
            </LinkButton>
            <LinkButton href={links.notes} icon={BookOpen} className="transition-colors hover:text-terracotta">
              Notes
            </LinkButton>
            <LinkButton href={cvHref} icon={Download} className="font-medium text-terracotta transition-colors hover:text-terracottaDark" showDisabled>
              Download CV
            </LinkButton>
          </div>
          <p className="text-[13px] italic text-muted">{academic.footerLine}</p>
        </div>
      </footer>
    </div>
  );
}
