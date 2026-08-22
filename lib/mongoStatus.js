import { getDb } from "@/lib/mongodb";

let cache = { ok: null, checkedAt: 0 };

export async function isMongoOnline() {
  if (cache.ok !== null && Date.now() - cache.checkedAt < 30_000) {
    return cache.ok;
  }
  try {
    const db = await getDb();
    await db.command({ ping: 1 });
    cache = { ok: true, checkedAt: Date.now() };
    return true;
  } catch {
    cache = { ok: false, checkedAt: Date.now() };
    return false;
  }
}
