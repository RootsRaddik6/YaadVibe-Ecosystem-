import { NextResponse } from "next/server";
import { sendTONPayment } from "@/lib/ton";

export async function POST(req: Request) {
  const body = await req.json();
  const res = await sendTONPayment(body);

  return NextResponse.json(res);
}
