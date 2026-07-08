"use client";

import { usePathname } from "next/navigation";
import {
  BookOpen,
  Camera,
  Coffee,
  Globe2,
  GraduationCap,
  Heart,
  Lightbulb,
  Mail,
  PenLine,
  Star,
} from "lucide-react";

function SideRail({ right = false }) {
  const leftItems = [
    [Camera, "about", "/#about"],
    [Lightbulb, "story", "/#story"],
    [Star, "work", "/#work"],
    [PenLine, "research", "/#research"],
    [GraduationCap, "academic", "/academic"],
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
            <span
              className={`pointer-events-none absolute top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-sm border border-[rgba(204,66,44,0.18)] bg-paperSoft px-2 py-1 font-hand text-[16px] text-terracotta opacity-0 shadow-sm transition group-hover:opacity-100 xl:block ${right ? "right-[68px]" : "left-[68px]"}`}
            >
              {label}
            </span>
          </a>
        ))}
      </div>
    </aside>
  );
}

export function SiteLayout({ children }) {
  const pathname = usePathname();
  const bareLayout = pathname === "/academic";

  if (bareLayout) {
    return <div className="min-h-screen bg-paper text-ink">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-paper text-ink">
      <SideRail />
      <SideRail right />
      <main className="space-y-24 md:space-y-28">{children}</main>
    </div>
  );
}
