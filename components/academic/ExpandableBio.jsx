"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * Shows the first bio paragraph by default.
 * Remaining paragraphs expand when the arrow is clicked.
 */
export function ExpandableBio({ paragraphs = [], className = "" }) {
  const [open, setOpen] = useState(false);
  const [first, ...rest] = paragraphs.filter(Boolean);

  if (!first) return null;

  return (
    <div className={className}>
      <p className="text-[15.5px] leading-[1.75] text-ink/75 md:text-[16.5px]">{first}</p>

      {rest.length > 0 ? (
        <>
          {open ? (
            <div className="mt-3 space-y-3">
              {rest.map((paragraph, index) => (
                <p key={index} className="text-[15.5px] leading-[1.75] text-ink/75 md:text-[16.5px]">
                  {paragraph}
                </p>
              ))}
            </div>
          ) : null}

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            className="mt-2.5 inline-flex items-center gap-1 text-[13px] font-medium text-terracotta transition-colors hover:text-terracottaDark"
          >
            {open ? "Show less" : "Read more"}
            <ChevronDown
              size={15}
              aria-hidden
              className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            />
          </button>
        </>
      ) : null}
    </div>
  );
}
