import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME || "personal-blogs";

if (!uri) {
  console.warn("MONGODB_URI is not set.");
}

let client;
let clientPromise;

export async function getDb() {
  if (!uri) {
    throw new Error("MONGODB_URI is not configured.");
  }
  if (clientPromise) {
    return clientPromise.then((c) => c.db(dbName));
  }
  client = new MongoClient(uri);
  clientPromise = client.connect().then(async (connected) => {
    const db = connected.db(dbName);
    await db.collection("posts").createIndex({ slug: 1 }, { unique: true });
    await db.collection("posts").createIndex({ date: -1 });
    await db.collection("admin").createIndex({ adminId: 1 }, { unique: true });
    return connected;
  });
  const connected = await clientPromise;
  return connected.db(dbName);
}
