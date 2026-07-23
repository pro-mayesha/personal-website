import Link from "next/link";
import { FolderOpen } from "lucide-react";
import { DetailCard } from "./DetailCard";
import {
  researchNotebook,
  noteFolders,
  getAllCategoryCounts,
} from "@/lib/content/notes";

/**
 * Compact preview of the internal research notebook on the academic page.
 * Title lives on the parent Writing section; this card focuses on folders + CTA.
 */
export function ResearchNotebookPreview() {
  const counts = getAllCategoryCounts();

  return (
    <DetailCard className="border-terracotta/25 bg-gradient-to-br from-white via-white to-[#fff8f5]">
      <p className="max-w-2xl text-[14.5px] leading-relaxed text-ink/70">
        {researchNotebook.previewBody}
      </p>

      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {noteFolders.map((folder) => {
          const count = counts[folder.id] ?? 0;
          return (
            <li key={folder.id}>
              <Link
                href={folder.href}
                className="flex items-center gap-2.5 rounded-xl border border-line/80 bg-white/80 px-3 py-2.5 transition-colors hover:border-terracotta/50"
              >
                <FolderOpen size={15} className="shrink-0 text-terracotta" aria-hidden />
                <span className="min-w-0 flex-1 text-[13px] font-medium text-ink">{folder.title}</span>
                <span className="shrink-0 text-[11px] text-muted">
                  {count} {count === 1 ? "note" : "notes"}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      <Link
        href={researchNotebook.href}
        className="mt-5 inline-flex items-center gap-1 text-[14px] font-medium text-terracotta transition-colors hover:text-terracottaDark"
      >
        {researchNotebook.actionLabel}
      </Link>
    </DetailCard>
  );
}
