// src/app/api/metadata/hotels/route.ts
import { NextResponse } from "next/server";
import { getHotelsForParish } from "@/utils/metadata";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const parish = url.searchParams.get("parish") || undefined;
    const results = await getHotelsForParish(parish);
    return NextResponse.json({ ok: true, data: results });
  } catch (err: any) {
    console.error("metadata hotels", err);
    return NextResponse.json({ ok: false, error: err?.message ?? "metadata error" }, { status: 500 });
  }
}
