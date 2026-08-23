import Link from "next/link";
import { ExternalLink } from "lucide-react";
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
    <aside className="mt-8 border-t border-line pt-5">
      <p className="article-meta uppercase tracking-[0.12em] text-terracotta">Source paper</p>
      <h2 className="mt-2 font-article text-[22px] font-semibold leading-snug text-ink">
        {paper.url || doiHref ? (
          <a href={paper.url || doiHref} target="_blank" rel="noreferrer" className="hover:text-terracotta">
            {paper.title || "Linked paper"}
          </a>
        ) : (
          paper.title
        )}
      </h2>
      {paper.authors ? <p className="mt-2 font-article text-[17px] leading-relaxed text-ink/75">{paper.authors}</p> : null}
      <p className="mt-1 font-article text-[16px] text-ink/65">
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
        <p className="mt-4 border-t border-line pt-4 font-article text-[16px] leading-relaxed text-ink/80">
          {paper.citation}
        </p>
      ) : null}
      <div className="mt-4 flex flex-wrap gap-4 text-[15px]">
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
    <article className="article-column pb-12 pt-8">
      <p className="article-meta">
        <Link href={folder?.href || "/notes"} className="hover:text-terracotta">
          {folder?.title || researchNotebook.title}
        </Link>
      </p>
      <time className="article-meta mt-2 block">{formatNoteDate(note.date)}</time>

      <h1 className="article-title mt-5">{note.title}</h1>
      {note.subtitle ? <p className="article-dek mt-4">{note.subtitle}</p> : null}

      <div className="article-body mt-6">
        {note.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>

      <PaperCitation paper={note.paper} />

      {note.relatedSlug ? (
        <p className="mt-6 font-article text-[18px] leading-relaxed text-ink/70">
          {note.category === "research-questions" ? "Related paper note: " : "Related research question: "}
          <Link href={`/notes/${note.relatedSlug}`} className="text-terracotta hover:underline">
            {researchNotes.find((item) => item.slug === note.relatedSlug)?.title || "Open linked note"}
          </Link>
        </p>
      ) : null}
    </article>
  );
}
