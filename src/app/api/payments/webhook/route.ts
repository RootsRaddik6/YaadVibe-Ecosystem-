import { NextResponse } from "next/server";

/**
 * Payment provider webhooks call this endpoint.
 * Validate provider signature in production.
 */
export async function POST(req: Request) {
  const event = await req.json();
  // Validate and update booking/payment in DB.
  // Trigger: mint SBT, create voucher, enqueue payout worker.
  console.log("webhook event", event);
  return NextResponse.json({ ok: true });
}
