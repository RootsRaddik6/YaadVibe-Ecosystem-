import { NextResponse } from "next/server";
import { HOTELS } from "@/parishData";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const parishCode = searchParams.get("parish");

  if (!parishCode) {
    return NextResponse.json({ error: "Missing parish parameter" });
  }

  return NextResponse.json({
    hotels: HOTELS.filter((h) => h.parishCode === parishCode),
  });
}
