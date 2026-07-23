import { NextResponse } from "next/server";
import { fetchMediumArticles } from "@/lib/medium/fetchMediumArticles";

export const revalidate = 3600;

export async function GET() {
  const { articles, source } = await fetchMediumArticles();
  return NextResponse.json({ articles, source });
}
