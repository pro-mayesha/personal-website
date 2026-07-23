"use client";

import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { TimelineItem } from "./TimelineItem";
import { experienceGroups, experienceIntro, currentStatus } from "@/lib/content/experience";
import { educationItems } from "@/lib/content/education";

function byOrder(a, b) {
  return (a.order ?? 0) - (b.order ?? 0);
}

const PREVIEW_BULLETS = 2;

/**
 * Experience & Education with a short preview and Read more.
 * Collapsed view keeps the page scannable; expand for the full timeline.
 */
export function ExperienceEducationSection() {
  const [expanded, setExpanded] = useState(false);
  const education = [...educationItems].sort(byOrder);

  const professional = experienceGroups.find((g) => g.id === "professional");
  const research = experienceGroups.find((g) => g.id === "research-experience");
  const leadership = experienceGroups.filter(
    (g) => g.id === "leadership" || g.id === "earlier-leadership"
  );

  const previewItems = (professional?.items || []).slice(0, 2);

  return (
    <section>
      <SectionHeader id="experience" title="Experience & Education" />
      {experienceIntro ? (
        <p className="mb-8 max-w-3xl text-[15px] leading-relaxed text-ink/70">{experienceIntro}</p>
      ) : null}

      {!expanded ? (
        <div className="space-y-8">
          {professional ? (
            <div>
              <h3 className="mb-4 text-[12px] font-bold uppercase tracking-[0.16em] text-muted">
                {professional.title}
              </h3>
              <div className="space-y-6">
                {previewItems.map((item) => (
                  <TimelineItem
                    key={`${professional.id}-${item.role}-${item.organization}`}
                    {...item}
                    bullets={(item.bullets || []).slice(0, PREVIEW_BULLETS)}
                  />
                ))}
              </div>
            </div>
          ) : null}

          <div id="education" className="scroll-mt-24">
            <h3 className="mb-4 text-[12px] font-bold uppercase tracking-[0.16em] text-muted">Education</h3>
            <div className="space-y-6">
              {education.slice(0, 1).map((item) => (
                <TimelineItem key={item.degree + item.institution} {...item} />
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="text-[14px] font-medium text-terracotta transition-colors hover:text-terracottaDark"
          >
            Read more
          </button>
        </div>
      ) : (
        <>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-0 lg:items-start">
            <div className="space-y-10">
              {[professional, research].filter(Boolean).map((group) => (
                <div key={group.id}>
                  <h3 className="mb-4 text-[12px] font-bold uppercase tracking-[0.16em] text-muted">
                    {group.title}
                  </h3>
                  <div className="space-y-6">
                    {group.items.map((item) => (
                      <TimelineItem
                        key={`${group.id}-${item.role}-${item.organization}`}
                        {...item}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-10">
              {leadership.map((group) => (
                <div key={group.id}>
                  <h3 className="mb-4 text-[12px] font-bold uppercase tracking-[0.16em] text-muted">
                    {group.title}
                  </h3>
                  <div className="space-y-6">
                    {group.items.map((item) => (
                      <TimelineItem
                        key={`${group.id}-${item.role}-${item.organization}`}
                        {...item}
                      />
                    ))}
                  </div>
                </div>
              ))}

              <div id="education" className="scroll-mt-24">
                <h3 className="mb-4 text-[12px] font-bold uppercase tracking-[0.16em] text-muted">
                  Education
                </h3>
                <div className="space-y-6">
                  {education.map((item) => (
                    <TimelineItem key={item.degree + item.institution} {...item} />
                  ))}
                </div>
              </div>

              {currentStatus ? (
                <div className="rounded-2xl border-[1.5px] border-line bg-[#fff8f5] px-5 py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-terracotta">
                    Current Status
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink/75">{currentStatus}</p>
                </div>
              ) : null}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setExpanded(false)}
            className="mt-8 text-[14px] font-medium text-terracotta transition-colors hover:text-terracottaDark"
          >
            Show less
          </button>
        </>
      )}
    </section>
  );
}
