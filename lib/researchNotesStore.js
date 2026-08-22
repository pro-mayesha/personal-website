import { getDb } from "@/lib/mongodb";
import { isMongoOnline } from "@/lib/mongoStatus";
import { readFileNotes, writeFileNotes } from "@/lib/jsonFileStore";
import { docToResearchNote, getStaticResearchNotes, mergeResearchNotes } from "@/lib/researchNotesModel";

export async function listResearchNotes({ includeUnpublished = false } = {}) {
  const fileNotes = await readFileNotes();
  if (await isMongoOnline()) {
    try {
      const db = await getDb();
      const docs = await db.collection("research_notes").find({}).sort({ date: -1 }).toArray();
      return mergeResearchNotes([...fileNotes, ...docs], includeUnpublished);
    } catch {
      /* fall through */
    }
  }
  return mergeResearchNotes(fileNotes, includeUnpublished);
}

export async function getResearchNoteBySlug(slug) {
  const notes = await listResearchNotes({ includeUnpublished: false });
  return notes.find((note) => note.slug === slug) || null;
}

export async function saveResearchNoteDoc(doc, { isNew }) {
  if (await isMongoOnline()) {
    const db = await getDb();
    if (isNew) {
      doc.createdAt = new Date();
      await db.collection("research_notes").insertOne(doc);
    } else {
      await db.collection("research_notes").updateOne({ id: doc.id }, { $set: doc });
    }
    return docToResearchNote({ ...doc, source: "cloud" });
  }

  const notes = await readFileNotes();
  const without = notes.filter((note) => note.id !== doc.id && note.slug !== doc.slug);
  without.push({ ...doc, source: "file" });
  await writeFileNotes(without);
  return docToResearchNote({ ...doc, source: "file" });
}

export async function deleteResearchNoteDoc(id) {
  if (await isMongoOnline()) {
    const db = await getDb();
    const result = await db.collection("research_notes").deleteOne({ id });
    if (result.deletedCount) return true;
  }
  const notes = await readFileNotes();
  const next = notes.filter((note) => note.id !== id);
  if (next.length === notes.length) return false;
  await writeFileNotes(next);
  return true;
}

export async function researchNoteSlugTaken(slug, exceptId) {
  const notes = await listResearchNotes({ includeUnpublished: true });
  return notes.some((note) => note.slug === slug && note.id !== exceptId);
}

export function getBuiltInNoteIds() {
  return new Set(getStaticResearchNotes().map((note) => note.id));
}
