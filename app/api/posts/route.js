import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";
import { isMongoOnline } from "@/lib/mongoStatus";
import { readFilePosts, writeFilePosts } from "@/lib/jsonFileStore";
import { docToPost, postToDoc, slugify } from "@/lib/posts";

export async function GET() {
  try {
    if (await isMongoOnline()) {
      const db = await getDb();
      const docs = await db.collection("posts").find({}).sort({ date: -1, title: 1 }).toArray();
      return NextResponse.json({ posts: docs.map(docToPost), mongo: true });
    }
    const posts = (await readFilePosts()).map(docToPost);
    return NextResponse.json({ posts, mongo: false });
  } catch {
    const posts = (await readFilePosts()).map(docToPost);
    return NextResponse.json({ posts, mongo: false });
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
    const doc = postToDoc({ ...body, title, slug });
    doc.createdAt = new Date();

    if (await isMongoOnline()) {
      const db = await getDb();
      if (await db.collection("posts").findOne({ slug })) {
        return NextResponse.json({ error: "That slug is already used." }, { status: 400 });
      }
      await db.collection("posts").insertOne(doc);
      return NextResponse.json({ post: docToPost(doc) }, { status: 201 });
    }

    const posts = await readFilePosts();
    if (posts.some((p) => p.slug === slug)) {
      return NextResponse.json({ error: "That slug is already used." }, { status: 400 });
    }
    posts.push(doc);
    await writeFilePosts(posts);
    return NextResponse.json({ post: docToPost(doc) }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: err.status || 500 });
  }
}
