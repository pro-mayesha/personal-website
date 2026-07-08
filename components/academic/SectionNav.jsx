"use client";

import { academic } from "@/lib/content/academic";

export function SectionNav() {
  return (
    <div className="sticky top-0 z-20 border-y-2 border-line bg-white/95 backdrop-blur-sm">
      <nav
        className="mx-auto flex max-w-5xl gap-1 overflow-x-auto px-4 py-2.5 md:px-8"
        aria-label="Page sections"
      >
        {academic.sectionNav.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="whitespace-nowrap rounded-full px-3 py-1.5 text-[13px] font-medium text-ink/65 transition-colors hover:bg-terracotta/10 hover:text-terracotta"
          >
            {section.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
