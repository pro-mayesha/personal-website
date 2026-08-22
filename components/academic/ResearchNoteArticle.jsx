import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { AcademicNav } from "@/components/academic/AcademicNav";
import { getNoteFolder, researchNotebook, researchNotes } from "@/lib/content/notes";

function formatNoteDate(iso) {
  if (!iso) return "";
  const d = new Date(`${iso}T12:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function PaperCitation({ paper }) {
  if (!paper) return null;
  const doiHref = paper.doi ? `https://doi.org/${paper.doi}` : paper.url;
  return (
    <aside className="mt-10 rounded-2xl border border-line bg-[#fffaf8] p-5 md:p-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-terracotta">Source paper</p>
      <h2 className="mt-2 font-garamond text-[20px] font-semibold leading-snug text-ink">
        {paper.url || doiHref ? (
          <a href={paper.url || doiHref} target="_blank" rel="noreferrer" className="hover:text-terracotta">
            {paper.title || "Linked paper"}
          </a>
        ) : (
          paper.title
        )}
      </h2>
      {paper.authors ? <p className="mt-2 text-[14px] leading-relaxed text-ink/75">{paper.authors}</p> : null}
      <p className="mt-1 text-[13.5px] text-ink/65">
        {[paper.venue, paper.year].filter(Boolean).join(", ")}
        {paper.doi ? (
          <>
            {". "}
            <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noreferrer" className="text-terracotta hover:underline">
              https://doi.org/{paper.doi}
            </a>
          </>
        ) : null}
      </p>
      {paper.citation ? (
        <p className="mt-4 border-t border-terracotta/15 pt-4 font-garamond text-[14.5px] leading-relaxed text-ink/80">
          {paper.citation}
        </p>
      ) : null}
      <div className="mt-4 flex flex-wrap gap-4 text-[13px]">
        {doiHref ? (
          <a href={doiHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-terracotta hover:underline">
            DOI record <ExternalLink size={13} aria-hidden />
          </a>
        ) : null}
        {paper.publisherUrl ? (
          <a
            href={paper.publisherUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-terracotta hover:underline"
          >
            Harvard Data Science Review <ExternalLink size={13} aria-hidden />
          </a>
        ) : null}
      </div>
    </aside>
  );
}

export function ResearchNoteArticle({ note }) {
  const folder = getNoteFolder(note.category);

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <AcademicNav />
      <article className="mx-auto max-w-3xl px-5 pb-24 pt-10 md:px-8 md:pt-14">
        <Link
          href={folder?.href || "/notes"}
          className="mb-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-muted transition-colors hover:text-terracotta"
        >
          <ArrowLeft size={14} aria-hidden />
          {folder?.title || researchNotebook.title}
        </Link>

        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-terracotta">
          {folder?.title || "Research note"}
        </p>
        <h1 className="mt-2 font-garamond text-[30px] font-semibold leading-tight text-ink md:text-[38px]">
          {note.title}
        </h1>
        {note.subtitle ? (
          <p className="mt-3 font-garamond text-[18px] italic leading-snug text-ink/70">{note.subtitle}</p>
        ) : null}
        <p className="mt-3 text-[13px] text-muted">{formatNoteDate(note.date)}</p>

        <div className="mt-8 space-y-5">
          {note.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-[16.5px] leading-[1.75] text-ink/85">
              {paragraph}
            </p>
          ))}
        </div>

        <PaperCitation paper={note.paper} />

        {note.relatedSlug ? (
          <p className="mt-8 text-[14.5px] leading-relaxed text-ink/70">
            {note.category === "research-questions" ? "Related paper note: " : "Related research question: "}
            <Link href={`/notes/${note.relatedSlug}`} className="text-terracotta hover:underline">
              {researchNotes.find((item) => item.slug === note.relatedSlug)?.title || "Open linked note"}
            </Link>
          </p>
        ) : null}
      </article>
    </div>
  );
}
