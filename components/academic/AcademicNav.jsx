"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download } from "lucide-react";
import { site } from "@/lib/content/site";
import { links } from "@/lib/content/links";
import { profile } from "@/lib/content/profile";

export function AcademicNav() {
  const pathname = usePathname();
  const cvHref = profile.cvUrl || links.cv;

  const isActive = (href) => href === pathname;

  return (
    <header className="border-b-2 border-line bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {site.navItems.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-[14px] transition-colors hover:text-terracotta ${
                isActive(link.href)
                  ? "font-semibold text-terracotta underline decoration-terracotta/40 underline-offset-4"
                  : "text-ink/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={cvHref}
          className="inline-flex items-center gap-2 rounded-lg border border-terracotta bg-paperSoft px-3.5 py-2 text-[13px] font-medium text-terracotta transition-colors hover:bg-terracotta hover:text-white"
        >
          <Download size={15} aria-hidden />
          Download CV
        </a>
      </div>

      <nav className="flex gap-5 overflow-x-auto px-5 pb-3 md:hidden" aria-label="Primary mobile">
        {site.navItems.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`whitespace-nowrap text-[13px] ${
              isActive(link.href) ? "font-semibold text-terracotta" : "text-ink/70"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
