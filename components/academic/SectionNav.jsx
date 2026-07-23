"use client";

import { useEffect, useState } from "react";
import { academic } from "@/lib/content/academic";

export function SectionNav() {
  const sections = academic.sectionNav;
  const [activeId, setActiveId] = useState(sections[0]?.id || "");

  useEffect(() => {
    const ids = sections.map((section) => section.id);
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (elements.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));

    const onHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && ids.includes(hash)) setActiveId(hash);
    };
    window.addEventListener("hashchange", onHash);
    onHash();

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", onHash);
    };
  }, [sections]);

  return (
    <div className="sticky top-0 z-20 border-y-2 border-line bg-white/95 backdrop-blur-sm">
      <nav
        className="mx-auto flex max-w-5xl gap-1 overflow-x-auto px-4 py-2.5 md:px-8"
        aria-label="Page sections"
      >
        {sections.map((section) => {
          const selected = activeId === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`section-nav-link${selected ? " is-selected" : ""}`}
              aria-current={selected ? "true" : undefined}
              onClick={() => setActiveId(section.id)}
            >
              {section.label}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
