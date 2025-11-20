// src/app/api/booking/route.ts
import { NextResponse } from "next/server";
import { calculatePrice } from "@/utils/priceEngine";
import { createLynkPayment } from "@/lib/lynk";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // expected body: { origin, destination, transport, hotel, nights, excursions, guests }
    const cost = calculatePrice(body);
    const platformFee = Math.round(cost * 0.03); // example
    const total = cost + platformFee;

    // create payment intent with Lynk (or whichever provider)
    const payment = await createLynkPayment({ amount: total, currency: "JMD", metadata: { service: "booking" } });

    return NextResponse.json({ ok: true, cost, platformFee, total, payment });
  } catch (err: any) {
    console.error("booking error:", err);
    return NextResponse.json({ ok: false, error: err?.message ?? "unknown" }, { status: 500 });
  }
}
