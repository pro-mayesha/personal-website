import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";
import { docToPost, postToDoc, slugify } from "@/lib/posts";

export async function PUT(request, { params }) {
  try {
    requireAdmin(request);
    const { id } = await params;
    const body = await request.json();
    const title = String(body.title || "").trim();
    if (!title) {
      return NextResponse.json({ error: "Title is required." }, { status: 400 });
    }
    const slug = String(body.slug || "").trim() || slugify(title);
    const db = await getDb();
    const conflict = await db.collection("posts").findOne({ slug, id: { $ne: id } });
    if (conflict) {
      return NextResponse.json({ error: "That slug is already used." }, { status: 400 });
    }
    const doc = postToDoc({ ...body, id, title, slug });
    const updated = await db.collection("posts").findOneAndUpdate(
      { id },
      { $set: doc },
      { returnDocument: "after" }
    );
    if (!updated) {
      return NextResponse.json({ error: "Post not found." }, { status: 404 });
    }
    return NextResponse.json({ post: docToPost(updated) });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: err.status || 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    requireAdmin(request);
    const { id } = await params;
    const db = await getDb();
    const result = await db.collection("posts").deleteOne({ id });
    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Post not found." }, { status: 404 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: err.status || 500 });
  }
}
