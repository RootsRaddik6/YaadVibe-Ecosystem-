import { NextResponse } from "next/server";
import { sendWC } from "@/lib/walletconnect";

export async function POST(req: Request) {
  const body = await req.json();
  const res = await sendWC(body);

  return NextResponse.json(res);
}
