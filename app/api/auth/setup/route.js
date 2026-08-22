import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getDb } from "@/lib/mongodb";
import { signToken } from "@/lib/auth";

function normalizeAdminId(value) {
  return value.trim().toLowerCase();
}

export async function POST(request) {
  try {
    const { getEnvAdmin } = await import("@/lib/envAdmin");
    if (getEnvAdmin()) {
      return NextResponse.json(
        { error: "An admin login is already set in .env (ADMIN_ID / ADMIN_PASSWORD). Use Sign in." },
        { status: 400 }
      );
    }
    const db = await getDb();
    if (await db.collection("admin").findOne({})) {
      return NextResponse.json({ error: "Admin account already exists." }, { status: 400 });
    }
    const body = await request.json();
    const adminId = normalizeAdminId(body.adminId || "");
    const password = String(body.password || "");
    if (!adminId) {
      return NextResponse.json({ error: "Admin ID is required." }, { status: 400 });
    }
    if (password.length < 8) {
      return NextResponse.json({ error: "Password must be at least 8 characters." }, { status: 400 });
    }
    const passwordHash = await bcrypt.hash(password, 12);
    await db.collection("admin").insertOne({ adminId, passwordHash, createdAt: new Date() });
    const token = signToken({ adminId });
    return NextResponse.json({ token, adminId });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
