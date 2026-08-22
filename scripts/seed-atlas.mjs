import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";
import { readFileSync } from "fs";

const env = Object.fromEntries(
  readFileSync(new URL("../.env", import.meta.url), "utf8")
    .split("\n")
    .filter((line) => line && !line.startsWith("#"))
    .map((line) => {
      const i = line.indexOf("=");
      return [line.slice(0, i), line.slice(i + 1)];
    })
);

function loadDefaultPosts() {
  const src = readFileSync(new URL("../lib/blog/defaultBlogPosts.js", import.meta.url), "utf8").replace(
    /^[\s\S]*?export const defaultBlogPosts = /,
    "return "
  );
  return new Function(src)();
}

const client = new MongoClient(env.MONGODB_URI, { serverSelectionTimeoutMS: 12000 });
await client.connect();
const db = client.db(env.MONGODB_DB_NAME || "personal-blogs");

const adminId = "proma";
const passwordHash = await bcrypt.hash("PromaNotes2026!", 12);
await db.collection("admin").deleteMany({});
await db.collection("admin").insertOne({ adminId, passwordHash, createdAt: new Date() });

if ((await db.collection("posts").countDocuments()) === 0) {
  const docs = loadDefaultPosts().map((post) => ({
    ...post,
    category: post.category === "research" ? "research" : "personal",
    updatedAt: new Date(),
    createdAt: new Date(),
  }));
  await db.collection("posts").insertMany(docs);
}

await db.collection("posts").createIndex({ slug: 1 }, { unique: true });
await db.collection("admin").createIndex({ adminId: 1 }, { unique: true });

console.log(
  JSON.stringify(
    {
      adminId,
      posts: await db.collection("posts").find({}).project({ slug: 1, category: 1, title: 1 }).toArray(),
    },
    null,
    2
  )
);
await client.close();
