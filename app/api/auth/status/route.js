import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { getEnvAdmin } from "@/lib/envAdmin";

export async function GET() {
  const env = getEnvAdmin();
  try {
    const db = await getDb();
    const admin = await db.collection("admin").findOne({});
    return NextResponse.json({
      hasAdmin: Boolean(admin || env),
      adminId: admin?.adminId || env?.adminId || null,
      mongo: true,
    });
  } catch {
    return NextResponse.json({
      hasAdmin: Boolean(env),
      adminId: env?.adminId || null,
      mongo: false,
    });
  }
}
