import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";
import { docToPost, postToDoc, slugify } from "@/lib/posts";

export async function GET() {
  try {
    const db = await getDb();
    const docs = await db.collection("posts").find({}).sort({ date: -1, title: 1 }).toArray();
    return NextResponse.json({ posts: docs.map(docToPost) });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    requireAdmin(request);
    const body = await request.json();
    const title = String(body.title || "").trim();
    if (!title) {
      return NextResponse.json({ error: "Title is required." }, { status: 400 });
    }
    const slug = String(body.slug || "").trim() || slugify(title);
    const db = await getDb();
    if (await db.collection("posts").findOne({ slug })) {
      return NextResponse.json({ error: "That slug is already used." }, { status: 400 });
    }
    const doc = postToDoc({ ...body, title, slug });
    doc.createdAt = new Date();
    await db.collection("posts").insertOne(doc);
    return NextResponse.json({ post: docToPost(doc) }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: err.status || 500 });
  }
}
