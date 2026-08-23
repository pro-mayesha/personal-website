import { SectionHeader } from "./SectionHeader";
import { TimelineItem } from "./TimelineItem";
import { experienceGroups, currentStatus } from "@/lib/content/experience";
import { educationItems } from "@/lib/content/education";
import { awards, awardsIntro } from "@/lib/content/awards";
import { profile } from "@/lib/content/profile";

function byOrder(a, b) {
  return (a.order ?? 0) - (b.order ?? 0);
}

function GroupSection({ id, title, intro, items }) {
  if (!items?.length) return null;

  return (
    <section>
      <SectionHeader id={id} title={title} />
      {intro ? <p className="mb-3 max-w-3xl font-article text-[17px] leading-relaxed text-ink/70">{intro}</p> : null}
      <div className="space-y-4">
        {items.map((item) => (
          <TimelineItem
            key={`${id}-${item.role || item.degree || item.title}-${item.organization || item.institution}`}
            {...item}
          />
        ))}
      </div>
    </section>
  );
}

export function EducationSection() {
  return (
    <GroupSection
      id="education"
      title="Education"
      items={[...educationItems].sort(byOrder)}
    />
  );
}

export function ResearchExperienceSection() {
  const group = experienceGroups.find((item) => item.id === "research-experience");
  return (
    <GroupSection
      id="research-experience"
      title={group?.title || "Research experience"}
      items={group?.items || []}
    />
  );
}

export function TeachingExperienceSection() {
  const group = experienceGroups.find((item) => item.id === "teaching-experience");
  return (
    <GroupSection
      id="teaching"
      title={group?.title || "Teaching experience"}
      items={group?.items || []}
    />
  );
}

export function ProfessionalExperienceSection() {
  const group = experienceGroups.find((item) => item.id === "professional");
  return (
    <GroupSection
      id="professional"
      title={group?.title || "Product and professional experience"}
      items={group?.items || []}
    />
  );
}

export function LeadershipExperienceSection() {
  const group = experienceGroups.find((item) => item.id === "leadership");
  return (
    <GroupSection
      id="leadership"
      title={group?.title || "Leadership and community engagement"}
      items={group?.items || []}
    />
  );
}

export function AwardsSection() {
  return (
    <GroupSection
      id="awards"
      title="Awards and scholarships"
      intro={awardsIntro}
      items={awards}
    />
  );
}

export function LanguagesSection() {
  return (
    <section>
      <SectionHeader id="languages" title="Languages" />
      <ul className="flex flex-wrap gap-2">
        {profile.languages.map((language) => (
          <li
            key={language}
            className="border border-line bg-paperSoft px-3 py-1.5 font-article text-[16px] text-ink/80"
          >
            {language}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function CurrentStatusNote() {
  if (!currentStatus) return null;
  return (
    <div className="rounded-2xl border-[1.5px] border-line bg-paperSoft px-5 py-4">
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-terracotta">Current status</p>
      <p className="mt-2 font-article text-[16px] leading-relaxed text-ink/75">{currentStatus}</p>
    </div>
  );
}

/** @deprecated Use the named section components. Kept so older imports do not break. */
export function ExperienceEducationSection() {
  return (
    <>
      <EducationSection />
      <ResearchExperienceSection />
      <TeachingExperienceSection />
      <ProfessionalExperienceSection />
      <LeadershipExperienceSection />
    </>
  );
}
