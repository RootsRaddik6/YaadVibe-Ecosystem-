import { NextResponse } from "next/server";
import { HOTELS } from "../../parishData";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const parish = searchParams.get("parish");

  if (!parish) {
    return NextResponse.json({ error: "Missing ?parish=" });
  }

  const parishLower = parish.toLowerCase();
  const hotels = HOTELS.filter(h => h.parishCode.toLowerCase() === parishLower);

  return NextResponse.json({ hotels });
}
