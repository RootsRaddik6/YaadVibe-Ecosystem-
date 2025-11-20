import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { amount, method } = await req.json();

    if (!amount || !method) {
      return NextResponse.json({ error: "Missing payment data" }, { status: 400 });
    }

    return NextResponse.json({
      ok: true,
      paymentIntent: {
        method,
        amount,
        currency: "JMD",
        status: "pending",
      },
    });
  } catch (e) {
    return NextResponse.json({ error: "Payment error" }, { status: 500 });
  }
}
