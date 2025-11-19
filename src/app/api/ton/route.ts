import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  // Simple TON testnet invoice generator
  const amount = body.amount || 1; // in TON
  const payload = body.payload || "YaadVibe Booking";

  const invoice = `ton://transfer/EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c?amount=${amount * 1000000000}&text=${encodeURIComponent(payload)}`;

  return NextResponse.json({ invoiceLink: invoice });
}
