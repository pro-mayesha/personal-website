import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getDb } from "@/lib/mongodb";
import { signToken } from "@/lib/auth";
import { getEnvAdmin, matchEnvAdmin } from "@/lib/envAdmin";

function normalizeAdminId(value) {
  return value.trim().toLowerCase();
}

export async function POST(request) {
  try {
    const body = await request.json();
    const adminId = normalizeAdminId(body.adminId || "");
    const password = String(body.password || "");

    if (matchEnvAdmin(adminId, password)) {
      const token = signToken({ adminId });
      return NextResponse.json({ token, adminId, source: "env" });
    }

    try {
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
      if (getEnvAdmin()) {
        return NextResponse.json({ error: "Wrong admin ID or password." }, { status: 401 });
      }
      return NextResponse.json(
        {
          error:
            "MongoDB is unreachable (cluster hostname not found). Use the ADMIN_ID and ADMIN_PASSWORD from your .env file, or create a new Atlas cluster and update MONGODB_URI.",
          detail: err.message,
        },
        { status: 503 }
      );
    }
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
