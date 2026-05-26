import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getDb } from "@/lib/mongodb";
import { signToken } from "@/lib/auth";

function normalizeAdminId(value) {
  return value.trim().toLowerCase();
}

export async function POST(request) {
  try {
    const body = await request.json();
    const adminId = normalizeAdminId(body.adminId || "");
    const password = String(body.password || "");
    const db = await getDb();
    const admin = await db.collection("admin").findOne({ adminId });
    if (!admin) {
      return NextResponse.json({ error: "Wrong admin ID or password." }, { status: 401 });
    }
    const ok = await bcrypt.compare(password, admin.passwordHash);
    if (!ok) {
      return NextResponse.json({ error: "Wrong admin ID or password." }, { status: 401 });
    }
    const token = signToken({ adminId });
    return NextResponse.json({ token, adminId });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
