import { NextResponse } from "next/server";

/**
 * Expects { bookingId, method }
 * Methods: ton, walletconnect, jamdex, stripe, sol, matic
 */
export async function POST(req: Request) {
  const body = await req.json();
  const { bookingId, method } = body;

  // create payment session (stub)
  const session = {
    id: "ps_" + Date.now(),
    bookingId,
    method,
    amount: body.amount ?? 0,
    currency: body.currency ?? "USD"
  };

  // For stripe you'd return client_secret; for wallets return payload to sign.
  return NextResponse.json({ session, instructions: "Use client to sign/use provider SDK (stub)" });
}
