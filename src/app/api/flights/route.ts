import { NextResponse } from "next/server";
import { getFlightsByParish } from "@/utils/flights";
import type { Flight } from "@/types/flights";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const parishCode = searchParams.get("parish");

  if (!parishCode) {
    return NextResponse.json(
      { error: "Missing ?parish parameter" },
      { status: 400 }
    );
  }

  const flights: Flight[] = getFlightsByParish(parishCode);

  return NextResponse.json({ flights });
}
