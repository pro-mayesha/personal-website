import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { docToPost, getSeedFallback } from "@/lib/posts";

export async function GET(_request, { params }) {
  try {
    const { slug } = await params;
    const db = await getDb();
    const doc = await db.collection("posts").findOne({ slug });
    if (doc) {
      return NextResponse.json({ post: docToPost(doc) });
    }
    const fallback = getSeedFallback(slug);
    if (fallback) {
      return NextResponse.json({ post: fallback });
    }
    return NextResponse.json({ error: "Post not found." }, { status: 404 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
