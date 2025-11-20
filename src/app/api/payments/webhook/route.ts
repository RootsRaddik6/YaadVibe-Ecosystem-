// src/app/api/payments/webhook/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.text(); // keep raw for signature check
  // Implement webhook signature verification here (Stripe, Lynk, etc)
  // Example: stripe.webhooks.constructEvent(body, sig, endpointSecret)

  // For now just ack:
  return NextResponse.json({ ok: true, received: true });
}
