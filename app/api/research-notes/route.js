import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { researchNoteToDoc } from "@/lib/researchNotesModel";
import { listResearchNotes, researchNoteSlugTaken, saveResearchNoteDoc } from "@/lib/researchNotesStore";

export async function GET(request) {
  try {
    let includeUnpublished = false;
    try {
      requireAdmin(request);
      includeUnpublished = true;
    } catch {
      includeUnpublished = false;
    }
    const notes = await listResearchNotes({ includeUnpublished });
    return NextResponse.json({ notes });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    requireAdmin(request);
    const body = await request.json();
    const doc = researchNoteToDoc(body);
    if (!doc.title) {
      return NextResponse.json({ error: "Title is required." }, { status: 400 });
    }
    if (doc.paragraphs.length === 0) {
      return NextResponse.json({ error: "Add at least one paragraph." }, { status: 400 });
    }
    if (await researchNoteSlugTaken(doc.slug)) {
      return NextResponse.json({ error: "That slug is already used." }, { status: 400 });
    }
    const note = await saveResearchNoteDoc(doc, { isNew: true });
    return NextResponse.json({ note }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: err.status || 500 });
  }
}
