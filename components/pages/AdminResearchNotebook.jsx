"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { noteFolders } from "@/lib/content/notes";
import {
  createResearchNote,
  deleteResearchNote,
  fetchResearchNotesAdmin,
  updateResearchNote,
} from "@/lib/blog/researchNotesService.js";

const inputClass =
  "w-full rounded-sm border-2 border-[rgba(204,66,44,0.35)] bg-paperSoft px-3 py-2 font-garamond text-ink outline-none focus:border-terracotta";

function emptyNotebookForm() {
  return {
    id: "",
    title: "",
    slug: "",
    date: new Date().toISOString().slice(0, 10),
    category: "paper-notes",
    subtitle: "",
    excerpt: "",
    tags: "",
    relatedSlug: "",
    body: "",
    paperTitle: "",
    paperAuthors: "",
    paperYear: "",
    paperVenue: "",
    paperDoi: "",
    paperUrl: "",
    paperPublisherUrl: "",
    paperCitation: "",
  };
}

export default function AdminResearchNotebook() {
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState(emptyNotebookForm);
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const refresh = async () => {
    try {
      setNotes(await fetchResearchNotesAdmin());
    } catch (err) {
      setError(err.message || "Could not load research notebook.");
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  const loadNote = (note) => {
    if (note.source === "static") {
      setError("This entry is built into the site. Use a new entry below to add more notes.");
      return;
    }
    setEditingId(note.id);
    setForm({
      id: note.id,
      title: note.title,
      slug: note.slug,
      date: note.date,
      category: note.category,
      subtitle: note.subtitle || "",
      excerpt: note.excerpt || "",
      tags: (note.tags || []).join(", "),
      relatedSlug: note.relatedSlug || "",
      body: (note.paragraphs || []).join("\n\n"),
      paperTitle: note.paper?.title || "",
      paperAuthors: note.paper?.authors || "",
      paperYear: note.paper?.year || "",
      paperVenue: note.paper?.venue || "",
      paperDoi: note.paper?.doi || "",
      paperUrl: note.paper?.url || "",
      paperPublisherUrl: note.paper?.publisherUrl || "",
      paperCitation: note.paper?.citation || "",
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setSaving(true);
    try {
      const payload = {
        id: editingId || undefined,
        title: form.title.trim(),
        slug: form.slug.trim(),
        date: form.date,
        category: form.category,
        subtitle: form.subtitle.trim(),
        excerpt: form.excerpt.trim(),
        tags: form.tags,
        relatedSlug: form.relatedSlug.trim(),
        body: form.body,
        paper: {
          title: form.paperTitle,
          authors: form.paperAuthors,
          year: form.paperYear,
          venue: form.paperVenue,
          doi: form.paperDoi,
          url: form.paperUrl,
          publisherUrl: form.paperPublisherUrl,
          citation: form.paperCitation,
        },
      };
      if (editingId) await updateResearchNote({ ...payload, id: editingId });
      else await createResearchNote(payload);
      setForm(emptyNotebookForm());
      setEditingId(null);
      await refresh();
    } catch (err) {
      setError(err.message || "Could not save notebook entry.");
    } finally {
      setSaving(false);
    }
  };

  const remove = async (note) => {
    if (note.source === "static") return;
    if (!window.confirm("Delete this notebook entry?")) return;
    try {
      await deleteResearchNote(note.id);
      await refresh();
    } catch (err) {
      setError(err.message || "Could not delete.");
    }
  };

  return (
    <section className="space-y-8">
      <div>
        <h2 className="font-hand text-3xl font-bold text-terracotta">Research notebook</h2>
        <p className="mt-2 font-garamond text-[15px] leading-relaxed text-ink/70">
          Upload paper notes and research questions as separate entries. Choose the folder first, then
          paste the writing. Paper notes can include a citation and DOI so the page stays academic.
        </p>
      </div>

      <div className="rounded-sm border-2 border-[rgba(204,66,44,0.25)] bg-paperSoft p-5">
        <h3 className="mb-3 font-hand text-2xl font-bold text-terracotta">Published notebook entries</h3>
        <ul className="space-y-2">
          {notes.map((note) => (
            <li key={note.id} className="flex flex-wrap items-center justify-between gap-2 border-b border-terracotta/10 py-2 last:border-0">
              <div>
                <span className="font-garamond font-semibold text-ink">{note.title}</span>
                <span className="ml-2 rounded-sm border border-terracotta/20 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-terracotta/70">
                  {note.category}
                </span>
                {note.source === "static" ? (
                  <span className="ml-2 font-mono text-[9px] uppercase text-ink/40">built-in</span>
                ) : null}
              </div>
              <div className="flex gap-2">
                {note.source !== "static" ? (
                  <>
                    <button type="button" onClick={() => loadNote(note)} className="font-hand text-lg text-terracotta hover:underline">
                      edit
                    </button>
                    <button type="button" onClick={() => remove(note)} className="font-hand text-lg text-terracotta/50 hover:text-terracotta">
                      delete
                    </button>
                  </>
                ) : null}
                <Link href={`/notes/${note.slug}`} className="font-hand text-lg text-ink/50 hover:text-terracotta">
                  view
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <form onSubmit={submit} className="space-y-4">
        <h3 className="font-hand text-2xl font-bold text-terracotta">
          {editingId ? "Edit notebook entry" : "New notebook entry"}
        </h3>
        {error ? <p className="font-garamond text-sm text-terracotta">{error}</p> : null}

        <label className="block space-y-1">
          <span className="font-mono text-[10px] uppercase tracking-widest text-terracotta/60">folder</span>
          <select
            value={form.category}
            onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
            className={`${inputClass} max-w-md`}
          >
            {noteFolders.map((folder) => (
              <option key={folder.id} value={folder.id}>
                {folder.title}
              </option>
            ))}
          </select>
        </label>

        <label className="block space-y-1">
          <span className="font-mono text-[10px] uppercase tracking-widest text-terracotta/60">
            {form.category === "research-questions" ? "research question" : "title"}
          </span>
          <input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} className={inputClass} />
        </label>

        {form.category === "paper-notes" ? (
          <label className="block space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-terracotta/60">subtitle</span>
            <input value={form.subtitle} onChange={(e) => setForm((f) => ({ ...f, subtitle: e.target.value }))} className={inputClass} />
          </label>
        ) : null}

        <div className="grid gap-4 md:grid-cols-2">
          <label className="block space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-terracotta/60">date</span>
            <input type="date" value={form.date} onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))} className={inputClass} />
          </label>
          <label className="block space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-terracotta/60">slug (optional)</span>
            <input value={form.slug} onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))} className={inputClass} />
          </label>
        </div>

        <label className="block space-y-1">
          <span className="font-mono text-[10px] uppercase tracking-widest text-terracotta/60">body (blank line between paragraphs)</span>
          <textarea
            value={form.body}
            onChange={(e) => setForm((f) => ({ ...f, body: e.target.value }))}
            rows={10}
            className={inputClass}
          />
        </label>

        <label className="block space-y-1">
          <span className="font-mono text-[10px] uppercase tracking-widest text-terracotta/60">tags (comma separated)</span>
          <input value={form.tags} onChange={(e) => setForm((f) => ({ ...f, tags: e.target.value }))} className={inputClass} />
        </label>

        <label className="block space-y-1">
          <span className="font-mono text-[10px] uppercase tracking-widest text-terracotta/60">related notebook slug</span>
          <input
            value={form.relatedSlug}
            onChange={(e) => setForm((f) => ({ ...f, relatedSlug: e.target.value }))}
            placeholder="optional link to the matching note or question"
            className={inputClass}
          />
        </label>

        <div className="rounded-sm border-2 border-[rgba(204,66,44,0.2)] p-4">
          <h4 className="mb-3 font-hand text-xl text-terracotta">Linked paper (optional)</h4>
          <div className="grid gap-3">
            <input placeholder="Paper title" value={form.paperTitle} onChange={(e) => setForm((f) => ({ ...f, paperTitle: e.target.value }))} className={inputClass} />
            <input placeholder="Authors" value={form.paperAuthors} onChange={(e) => setForm((f) => ({ ...f, paperAuthors: e.target.value }))} className={inputClass} />
            <div className="grid gap-3 md:grid-cols-2">
              <input placeholder="Year" value={form.paperYear} onChange={(e) => setForm((f) => ({ ...f, paperYear: e.target.value }))} className={inputClass} />
              <input placeholder="Venue" value={form.paperVenue} onChange={(e) => setForm((f) => ({ ...f, paperVenue: e.target.value }))} className={inputClass} />
            </div>
            <input placeholder="DOI (e.g. 10.1162/…)" value={form.paperDoi} onChange={(e) => setForm((f) => ({ ...f, paperDoi: e.target.value }))} className={inputClass} />
            <input placeholder="DOI or paper URL" value={form.paperUrl} onChange={(e) => setForm((f) => ({ ...f, paperUrl: e.target.value }))} className={inputClass} />
            <input placeholder="Publisher page URL" value={form.paperPublisherUrl} onChange={(e) => setForm((f) => ({ ...f, paperPublisherUrl: e.target.value }))} className={inputClass} />
            <textarea
              placeholder="Full citation"
              value={form.paperCitation}
              onChange={(e) => setForm((f) => ({ ...f, paperCitation: e.target.value }))}
              rows={3}
              className={inputClass}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            className="rounded-sm border-2 border-terracotta bg-terracotta px-6 py-2.5 font-garamond text-paper hover:bg-terracottaDark"
          >
            {saving ? "Saving…" : editingId ? "Save notebook entry" : "Publish to notebook"}
          </button>
          {editingId ? (
            <button
              type="button"
              onClick={() => {
                setEditingId(null);
                setForm(emptyNotebookForm());
              }}
              className="rounded-sm border-2 border-[rgba(204,66,44,0.3)] px-6 py-2.5 font-garamond text-ink"
            >
              Cancel
            </button>
          ) : null}
        </div>
      </form>
    </section>
  );
}
