import { NextResponse } from "next/server";

/**
 * Provider scans QR and calls this endpoint with { voucherPayload, signature }
 * Server validates HMAC/signature and redeems voucher.
 */
export async function POST(req: Request) {
  const body = await req.json();
  // validate signature & mark voucher redeemed
  return NextResponse.json({ ok: true, message: "Voucher verified (stub)" });
}
