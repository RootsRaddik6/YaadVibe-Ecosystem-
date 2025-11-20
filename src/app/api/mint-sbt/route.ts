import { NextResponse } from "next/server";

/**
 * Minimal endpoint to mint SBT after payment success.
 * Expects { bookingId, userWallet }
 */
export async function POST(req: Request) {
  const body = await req.json();
  // call server-side mint logic / relayer (stub)
  const result = { txHash: "tx_sbt_" + Date.now(), tokenId: "sbt_" + Date.now() };
  return NextResponse.json({ ok: true, result });
}
