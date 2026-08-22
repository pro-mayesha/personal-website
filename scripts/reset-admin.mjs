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

const adminId = (process.env.ADMIN_ID || "proma").trim().toLowerCase();
const password = process.env.ADMIN_PASSWORD || "PromaNotes2026!";

const client = new MongoClient(env.MONGODB_URI);
await client.connect();
const db = client.db(env.MONGODB_DB_NAME || "personal-blogs");
const passwordHash = await bcrypt.hash(password, 12);
const existing = await db.collection("admin").findOne({});
if (existing) {
  await db.collection("admin").updateOne({ adminId: existing.adminId }, { $set: { adminId, passwordHash } });
} else {
  await db.collection("admin").insertOne({ adminId, passwordHash, createdAt: new Date() });
}
console.log(`Admin ready. ID: ${adminId}`);
await client.close();
