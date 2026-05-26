import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";
import { postToDoc, normalizeCategory } from "@/lib/posts";
import { defaultBlogPosts } from "@/lib/blog/defaultBlogPosts";

export async function POST(request) {
  try {
    requireAdmin(request);
    const db = await getDb();
    const count = await db.collection("posts").countDocuments();
    if (count > 0) {
      return NextResponse.json({ error: "Database already has notes." }, { status: 400 });
    }
    const now = new Date();
    const docs = defaultBlogPosts.map((p) => ({
      ...postToDoc({ ...p, category: normalizeCategory(p) }),
      createdAt: now,
    }));
    await db.collection("posts").insertMany(docs);
    return NextResponse.json({ count: docs.length });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: err.status || 500 });
  }
}
