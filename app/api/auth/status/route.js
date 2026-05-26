import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export async function GET() {
  try {
    const db = await getDb();
    const admin = await db.collection("admin").findOne({});
    return NextResponse.json({ hasAdmin: Boolean(admin) });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
