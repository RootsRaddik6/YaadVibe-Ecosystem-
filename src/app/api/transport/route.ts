import { NextResponse } from "next/server";
import { TRANSPORT_OPTIONS } from "@/parishData";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const parishCode = searchParams.get("parish");

  if (!parishCode) {
    return NextResponse.json({ error: "Missing parish parameter" });
  }

  return NextResponse.json({
    transport: TRANSPORT_OPTIONS.filter((t) => t.parishCode === parishCode),
  });
}
