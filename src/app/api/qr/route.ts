import { NextResponse } from "next/server";
import QRCode from "qrcode";

export async function POST(req: Request) {
  const { text } = await req.json();

  const qr = await QRCode.toDataURL(text);

  return NextResponse.json({ qr });
}
