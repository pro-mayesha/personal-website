import { randomUUID } from "crypto";
import { NOTE_CATEGORY_IDS, researchNotes as staticNotes } from "@/lib/content/notes";
import { slugify } from "@/lib/posts";

export function normalizePaper(paper) {
  if (!paper || typeof paper !== "object") return null;
  const title = String(paper.title || "").trim();
  const url = String(paper.url || "").trim();
  const doi = String(paper.doi || "").trim();
  if (!title && !url && !doi) return null;
  return {
    title,
    authors: String(paper.authors || "").trim(),
    year: String(paper.year || "").trim(),
    venue: String(paper.venue || "").trim(),
    doi,
    url: url || (doi ? `https://doi.org/${doi}` : ""),
    publisherUrl: String(paper.publisherUrl || "").trim(),
    citation: String(paper.citation || "").trim(),
  };
}

export function docToResearchNote(doc) {
  if (!doc) return null;
  return {
    id: String(doc.id),
    slug: String(doc.slug),
    title: String(doc.title),
    date: String(doc.date || "").slice(0, 10),
    category: NOTE_CATEGORY_IDS.includes(doc.category) ? doc.category : "paper-notes",
    excerpt: String(doc.excerpt || ""),
    tags: Array.isArray(doc.tags) ? doc.tags.map(String) : [],
    published: doc.published !== false,
    featured: Boolean(doc.featured),
    status: String(doc.status || (doc.published !== false ? "published" : "draft")),
    subtitle: String(doc.subtitle || ""),
    relatedSlug: String(doc.relatedSlug || ""),
    paper: normalizePaper(doc.paper),
    paragraphs: Array.isArray(doc.paragraphs)
      ? doc.paragraphs.map((p) => String(p).trim()).filter(Boolean)
      : [],
    source: doc.source || "cloud",
  };
}

export function researchNoteToDoc(note) {
  const title = String(note.title || "").trim();
  const paragraphs = Array.isArray(note.paragraphs)
    ? note.paragraphs.map((p) => String(p).trim()).filter(Boolean)
    : String(note.body || "")
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean);
  return {
    id: note.id || randomUUID(),
    slug: String(note.slug || "").trim() || slugify(title),
    title,
    date: String(note.date || new Date().toISOString().slice(0, 10)).slice(0, 10),
    category: NOTE_CATEGORY_IDS.includes(note.category) ? note.category : "paper-notes",
    excerpt: String(note.excerpt || paragraphs[0] || "").slice(0, 280),
    tags: Array.isArray(note.tags)
      ? note.tags.map((t) => String(t).trim()).filter(Boolean)
      : String(note.tags || "")
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
    published: note.published !== false,
    featured: Boolean(note.featured),
    status: note.published === false ? "draft" : "published",
    subtitle: String(note.subtitle || "").trim(),
    relatedSlug: String(note.relatedSlug || "").trim(),
    paper: normalizePaper(note.paper),
    paragraphs,
    updatedAt: new Date(),
  };
}

export function getStaticResearchNotes() {
  return staticNotes.map((note) => ({ ...note, source: "static" }));
}

export function mergeResearchNotes(cloudNotes, includeUnpublished = false) {
  const cloud = cloudNotes.map(docToResearchNote).filter(Boolean);
  const staticList = getStaticResearchNotes();
  const bySlug = new Map();
  for (const note of staticList) {
    if (includeUnpublished || note.published) bySlug.set(note.slug, note);
  }
  for (const note of cloud) {
    if (includeUnpublished || note.published) bySlug.set(note.slug, note);
  }
  return [...bySlug.values()].sort((a, b) => (b.date || "").localeCompare(a.date || ""));
}
