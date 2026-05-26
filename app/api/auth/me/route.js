import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";

export async function GET(request) {
  try {
    const admin = requireAdmin(request);
    return NextResponse.json({ adminId: admin.adminId });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: err.status || 401 });
  }
}
