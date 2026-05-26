import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";
import { postToDoc, normalizeCategory } from "@/lib/posts";

export async function POST(request) {
  try {
    requireAdmin(request);
    const { posts } = await request.json();
    if (!Array.isArray(posts)) {
      return NextResponse.json({ error: "Expected { posts: [...] }" }, { status: 400 });
    }
    const db = await getDb();
    for (const raw of posts) {
      const doc = postToDoc({ ...raw, category: normalizeCategory(raw) });
      await db.collection("posts").updateOne({ slug: doc.slug }, { $set: doc }, { upsert: true });
    }
    return NextResponse.json({ count: posts.length });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: err.status || 500 });
  }
}
