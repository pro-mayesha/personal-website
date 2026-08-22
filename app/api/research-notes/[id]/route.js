import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { researchNoteToDoc } from "@/lib/researchNotesModel";
import {
  deleteResearchNoteDoc,
  getBuiltInNoteIds,
  researchNoteSlugTaken,
  saveResearchNoteDoc,
} from "@/lib/researchNotesStore";

export async function PUT(request, { params }) {
  try {
    requireAdmin(request);
    const { id } = await params;
    if (getBuiltInNoteIds().has(id)) {
      return NextResponse.json({ error: "Built-in notes are edited in the site files." }, { status: 400 });
    }
    const body = await request.json();
    const doc = researchNoteToDoc({ ...body, id });
    if (!doc.title) {
      return NextResponse.json({ error: "Title is required." }, { status: 400 });
    }
    if (await researchNoteSlugTaken(doc.slug, id)) {
      return NextResponse.json({ error: "That slug is already used." }, { status: 400 });
    }
    const note = await saveResearchNoteDoc(doc, { isNew: false });
    return NextResponse.json({ note });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: err.status || 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    requireAdmin(request);
    const { id } = await params;
    if (getBuiltInNoteIds().has(id)) {
      return NextResponse.json({ error: "Built-in notes cannot be deleted from admin." }, { status: 400 });
    }
    const ok = await deleteResearchNoteDoc(id);
    if (!ok) {
      return NextResponse.json({ error: "Note not found." }, { status: 404 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: err.status || 500 });
  }
}
