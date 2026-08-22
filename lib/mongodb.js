import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME || "personal-blogs";

if (!uri) {
  console.warn("MONGODB_URI is not set.");
}

let clientPromise;

async function connect() {
  const client = new MongoClient(uri, { serverSelectionTimeoutMS: 2500 });
  const connected = await client.connect();
  const db = connected.db(dbName);
  await db.collection("posts").createIndex({ slug: 1 }, { unique: true });
  await db.collection("posts").createIndex({ date: -1 });
  await db.collection("admin").createIndex({ adminId: 1 }, { unique: true });
  return connected;
}

export async function getDb() {
  if (!uri) {
    throw new Error("MONGODB_URI is not configured.");
  }
  if (!clientPromise) {
    clientPromise = connect();
  }
  try {
    const connected = await clientPromise;
    return connected.db(dbName);
  } catch (err) {
    // Don't cache a rejected connection — allow the next request to retry
    // (e.g. after a transient DNS/network failure recovers).
    clientPromise = undefined;
    throw err;
  }
}
