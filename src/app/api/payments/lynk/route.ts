// src/app/api/payments/lynk/route.ts
import { NextResponse } from "next/server";
import { createLynkPayment } from "@/lib/lynk";

export async function POST(req: Request) {
  try {
    const { amount, currency, metadata } = await req.json();
    const result = await createLynkPayment(amount, currency, metadata);
    return NextResponse.json({ ok: true, result });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
