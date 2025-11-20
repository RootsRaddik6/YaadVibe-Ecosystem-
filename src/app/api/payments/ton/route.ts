// src/app/api/payments/ton/route.ts
import { NextResponse } from "next/server";
import { sendTon } from "@/lib/ton";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // expected: { to, amount, comment? }
    const { to, amount, comment } = body;
    const tx = await sendTon(to, amount, comment);
    return NextResponse.json({ ok: true, tx });
  } catch (err: any) {
    console.error("ton send error:", err);
    return NextResponse.json({ ok: false, error: err?.message ?? "ton error" }, { status: 500 });
  }
}
