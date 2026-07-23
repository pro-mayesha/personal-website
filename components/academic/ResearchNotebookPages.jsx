import Link from "next/link";
import { ArrowLeft, FolderOpen, FileText } from "lucide-react";
import { AcademicNav } from "@/components/academic/AcademicNav";
import { DetailCard } from "@/components/academic/DetailCard";
import { CategoryTag } from "@/components/academic/CategoryTag";
import {
  researchNotebook,
  noteFolders,
  getAllCategoryCounts,
  getPublishedNotesByCategory,
  getNoteFolder,
} from "@/lib/content/notes";

function formatNoteDate(iso) {
  if (!iso) return "";
  const d = new Date(`${iso}T12:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function NotebookShell({ children }) {
  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <AcademicNav />
      <main className="mx-auto max-w-5xl px-5 pb-20 pt-10 md:px-8 md:pt-14">{children}</main>
    </div>
  );
}

function NoteCard({ note }) {
  return (
    <DetailCard className="flex h-full flex-col">
      <div className="flex items-center gap-2 text-terracotta/70">
        <FileText size={15} aria-hidden />
        <span className="text-[11px] font-medium text-muted">{formatNoteDate(note.date)}</span>
        {note.status && note.status !== "published" ? (
          <span className="text-[11px] capitalize text-muted">· {note.status}</span>
        ) : null}
      </div>
      <h3 className="mt-2 font-garamond text-[17px] font-semibold leading-snug text-ink">
        {note.slug ? (
          <Link href={`/notes/${note.slug}`} className="hover:text-terracotta">
            {note.title}
          </Link>
        ) : (
          note.title
        )}
      </h3>
      {note.excerpt ? (
        <p className="mt-1.5 flex-1 text-[13.5px] leading-relaxed text-ink/70">{note.excerpt}</p>
      ) : null}
      {note.tags?.length ? (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {note.tags.map((tag) => (
            <CategoryTag key={tag}>{tag}</CategoryTag>
          ))}
        </div>
      ) : null}
    </DetailCard>
  );
}

function EmptyCategoryState() {
  return (
    <p className="rounded-2xl border border-dashed border-terracotta/30 bg-[#fffaf8] px-5 py-10 text-center text-[15px] leading-relaxed text-ink/55">
      {researchNotebook.emptyState}
    </p>
  );
}

/** /notes — umbrella notebook index with four folder cards */
export function ResearchNotebookIndex() {
  const counts = getAllCategoryCounts();

  return (
    <NotebookShell>
      <Link
        href="/academic#writing"
        className="mb-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-muted transition-colors hover:text-terracotta"
      >
        <ArrowLeft size={14} aria-hidden />
        Writing & Research Notes
      </Link>

      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-terracotta">
        Research Notebook
      </p>
      <h1 className="mt-2 font-garamond text-[32px] font-semibold leading-tight text-ink md:text-[40px]">
        {researchNotebook.title}
      </h1>
      <p className="mt-4 max-w-3xl text-[16px] leading-relaxed text-ink/70">{researchNotebook.intro}</p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {noteFolders.map((folder) => {
          const count = counts[folder.id] ?? 0;
          return (
            <Link key={folder.id} href={folder.href} className="group block h-full">
              <DetailCard className="flex h-full flex-col transition-colors group-hover:border-terracotta/55">
                <div className="flex items-start gap-3">
                  <FolderOpen size={18} className="mt-0.5 shrink-0 text-terracotta" aria-hidden />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <h2 className="font-garamond text-[20px] font-semibold text-ink group-hover:text-terracotta">
                        {folder.title}
                      </h2>
                      <span className="shrink-0 text-[11px] text-muted">
                        {count} {count === 1 ? "note" : "notes"}
                      </span>
                    </div>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink/70">{folder.description}</p>
                  </div>
                </div>
              </DetailCard>
            </Link>
          );
        })}
      </div>
    </NotebookShell>
  );
}

/** Category filtered view under /notes/<category-id> */
export function ResearchNotesCategoryPage({ categoryId }) {
  const folder = getNoteFolder(categoryId);
  const notes = getPublishedNotesByCategory(categoryId);

  if (!folder) {
    return (
      <NotebookShell>
        <p className="text-ink/70">Category not found.</p>
        <Link href="/notes" className="mt-4 inline-block text-terracotta">
          Back to notebook
        </Link>
      </NotebookShell>
    );
  }

  return (
    <NotebookShell>
      <Link
        href="/notes"
        className="mb-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-muted transition-colors hover:text-terracotta"
      >
        <ArrowLeft size={14} aria-hidden />
        {researchNotebook.title}
      </Link>

      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-terracotta">
        {researchNotebook.title}
      </p>
      <h1 className="mt-2 font-garamond text-[28px] font-semibold leading-tight text-ink md:text-[34px]">
        {folder.title}
      </h1>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink/70">{folder.description}</p>

      <div className="mt-8">
        {notes.length === 0 ? (
          <EmptyCategoryState />
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {notes.map((note) => (
              <NoteCard key={note.slug || note.title} note={note} />
            ))}
          </div>
        )}
      </div>
    </NotebookShell>
  );
}
