import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getDb } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";

export async function POST(request) {
  try {
    const admin = requireAdmin(request);
    const body = await request.json();
    const currentPassword = String(body.currentPassword || "");
    const newPassword = String(body.newPassword || "");
    if (newPassword.length < 8) {
      return NextResponse.json({ error: "New password must be at least 8 characters." }, { status: 400 });
    }
    const db = await getDb();
    const record = await db.collection("admin").findOne({ adminId: admin.adminId });
    if (!record) {
      return NextResponse.json({ error: "Admin not found." }, { status: 404 });
    }
    const ok = await bcrypt.compare(currentPassword, record.passwordHash);
    if (!ok) {
      return NextResponse.json({ error: "Current password is wrong." }, { status: 401 });
    }
    const passwordHash = await bcrypt.hash(newPassword, 12);
    await db.collection("admin").updateOne({ adminId: admin.adminId }, { $set: { passwordHash } });
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: err.status || 500 });
  }
}
