import { NextResponse } from "next/server";
import { sendLynkPayment } from "@/lib/lynk";

export async function POST(req: Request) {
  const body = await req.json();
  const res = await sendLynkPayment(body);

  return NextResponse.json(res);
}
