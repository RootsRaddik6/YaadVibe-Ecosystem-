import { NextResponse } from "next/server";
import { parishes } from "@/data/parishData";

export async function GET() {
  try {
    return NextResponse.json({ ok: true, parishes });
  } catch (err) {
    return NextResponse.json({ ok: false, error: "Failed to load parishes" }, { status: 500 });
  }
}
