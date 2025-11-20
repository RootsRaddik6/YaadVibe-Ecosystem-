import { NextResponse } from "next/server";
import { sendLynkPayment } from "@/lib/lynk";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { amount, orderId } = body;

    const result = await sendLynkPayment(amount, orderId);

    return NextResponse.json({ ok: true, result });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Lynk payment failed" },
      { status: 500 }
    );
  }
}
