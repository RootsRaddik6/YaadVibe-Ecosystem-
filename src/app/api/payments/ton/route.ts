// src/app/api/payments/ton/route.ts
import { NextResponse } from "next/server";
import { sendTon } from "@/lib/ton";

export async function POST(req: Request) {
  try {
    const { to, amountNano } = await req.json();
    const tx = await sendTon(to, amountNano);
    return NextResponse.json({ ok: true, tx });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
