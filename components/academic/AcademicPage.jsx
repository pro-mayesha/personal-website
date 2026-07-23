"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Compass,
  Download,
  FlaskConical,
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
import { CompanyStrip } from "./CompanyStrip";
import { ProductPlatformCard } from "./ProductPlatformCard";
import { SkillGroup } from "./SkillGroup";
import { LinkButton } from "./LinkButton";
import { ExpandableBio } from "./ExpandableBio";
import { PortraitCard } from "./PortraitCard";
import { WritingSection } from "./WritingSection";
import { ExperienceEducationSection } from "./ExperienceEducationSection";

import { profile } from "@/lib/content/profile";
import { links } from "@/lib/content/links";
import { academic } from "@/lib/content/academic";
import { researchInterests, ongoingResearch, researchPapers } from "@/lib/content/research";
import { projects } from "@/lib/content/projects";
import { skillGroups } from "@/lib/content/skills";

const ICONS = { BookOpen, Compass, GraduationCap, Link2, Users, PenLine };

function Icon({ name, ...props }) {
  const Cmp = ICONS[name] || BookOpen;
  return <Cmp {...props} />;
}

function byOrder(a, b) {
  return (a.order ?? 0) - (b.order ?? 0);
}

export default function AcademicPage() {
  const cvHref = profile.cvUrl || links.cv;
  const emailHref = `mailto:${links.email}`;

  const academicProjects = [...projects]
    .filter((project) => project.showOnAcademic)
    .sort(byOrder);
  const parentCompany = academicProjects.find((project) => project.role === "parent");
  const productPlatforms = academicProjects.filter((project) => project.role === "product");

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <AcademicNav />

      {/* Hero */}
      <section className="academic-hero mx-auto max-w-5xl px-5 pb-10 pt-12 md:px-8 md:pt-16">
        <div className="academic-hero__grid">
          {/* Left: identity + bio + actions */}
          <div className="min-w-0">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-terracotta">
              Research & CV
            </p>
            <h1 className="academic-hero__name">{profile.fullName}</h1>
            <p className="mt-2 text-[13px] font-medium leading-snug text-terracotta md:text-[14px]">
              {academic.hero.roles.join("  |  ")}
            </p>

            <ExpandableBio paragraphs={profile.bio?.paragraphs || []} className="mt-5" />

            {academic.hero.topicTags?.length ? (
              <div className="mt-5 flex flex-wrap gap-2">
                {academic.hero.topicTags.map((tag) => (
                  <CategoryTag key={tag}>{tag}</CategoryTag>
                ))}
              </div>
            ) : null}

            <div className="mt-6 flex flex-wrap gap-3">
              {academic.hero.buttons.map((button, index) => {
                const isPrimary = index === 0;
                const className = isPrimary
                  ? "inline-flex items-center gap-2 rounded-lg border border-terracotta bg-terracotta px-4 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-terracottaDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
                  : "inline-flex items-center gap-2 rounded-lg border border-terracotta/40 bg-white px-4 py-2.5 text-[14px] font-medium text-terracotta transition-colors hover:bg-terracotta/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta";

                if (button.href.startsWith("/")) {
                  return (
                    <Link key={button.label} href={button.href} className={className}>
                      {button.label}
                      {isPrimary ? <ArrowRight size={15} aria-hidden /> : null}
                    </Link>
                  );
                }

                return (
                  <a key={button.label} href={button.href} className={className}>
                    {button.label}
                    {button.label === "Contact Me" ? <Mail size={15} aria-hidden /> : null}
                    {button.label === "Publications" ? <ArrowRight size={15} aria-hidden /> : null}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right: pinned polaroid */}
          <div className="academic-hero__portrait">
            <PortraitCard
              src={profile.portraitImage}
              alt={`Portrait of ${profile.fullName}`}
              caption={profile.portraitCaption || "Mayesha, in ink"}
            />
          </div>
        </div>

        {/* Quick summary cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {academic.quickCards.map((card) => (
            <DetailCard key={card.title} className="flex flex-col">
              <Icon name={card.icon} size={20} className="text-terracotta" aria-hidden />
              <h3 className="mt-3 font-garamond text-[17px] font-semibold text-ink">{card.title}</h3>

              {card.links?.length ? (
                <p className="mt-1.5 flex-1 text-[13.5px] leading-relaxed text-ink/70">
                  {card.links.map((item, index) => {
                    const href = links[item.hrefKey] || "#";
                    const isInternal = href.startsWith("/");
                    const link = isInternal ? (
                      <Link key={item.label} href={href} className="card-link">
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        key={item.label}
                        href={href}
                        className="card-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.label}
                      </a>
                    );
                    return (
                      <span key={item.label}>
                        {index > 0 ? <span> · </span> : null}
                        {link}
                      </span>
                    );
                  })}
                </p>
              ) : (
                <p className="mt-1.5 flex-1 text-[13.5px] leading-relaxed text-ink/70">{card.body}</p>
              )}

              {card.action ? (
                <a href={card.action.href} className="card-link mt-3 inline-flex items-center gap-1 text-[13px] font-medium">
                  {card.action.label} →
                </a>
              ) : null}
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

        {/* Ongoing Research */}
        <section>
          <SectionHeader id="current-research" title="Ongoing Research" />
          <div className="grid gap-4">
            <ResearchCard item={ongoingResearch} wide />
          </div>
        </section>

        {/* Selected Publications & Manuscripts */}
        <section>
          <SectionHeader
            id="papers"
            title="Selected Publications & Manuscripts"
            action={{
              label: "View publication record",
              href: links.dblp,
            }}
          />
          <div className="grid gap-4 md:grid-cols-3">
            {researchPapers.map((paper) => (
              <ResearchCard key={paper.title} item={paper} />
            ))}
          </div>
        </section>

        {/* Products & Research Platforms */}
        <section>
          <SectionHeader id="projects" title="Products & Research Platforms" />
          {academic.productsIntro ? (
            <p className="mb-6 max-w-2xl text-[15px] leading-relaxed text-ink/70">{academic.productsIntro}</p>
          ) : null}

          <div className="space-y-5">
            {parentCompany ? <CompanyStrip company={parentCompany} /> : null}

            <div className="grid gap-5 md:grid-cols-2 md:items-stretch">
              {productPlatforms.map((product) => (
                <ProductPlatformCard key={product.title} product={product} />
              ))}
            </div>

            <p className="flex items-start justify-center gap-2 pt-2 text-center text-[13px] leading-relaxed text-ink/60 md:items-center">
              <FlaskConical size={15} className="mt-0.5 shrink-0 text-terracotta md:mt-0" aria-hidden />
              <span>
                These products create real-world environments for studying how human and AI support shape
                decisions and outcomes.
              </span>
            </p>
          </div>
        </section>

        <WritingSection />

        <ExperienceEducationSection />

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
              Research Notebook
            </LinkButton>
            <LinkButton href={links.medium} icon={PenLine} className="transition-colors hover:text-terracotta">
              Medium
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
