import { NextResponse } from "next/server";
import { getHotelsByParish } from "@/utils/hotels";
import type { Hotel } from "@/types/hotels";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const parishCode = searchParams.get("parish");

  if (!parishCode) {
    return NextResponse.json(
      { error: "Missing ?parish parameter" },
      { status: 400 }
    );
  }

  const hotels: Hotel[] = getHotelsByParish(parishCode);

  return NextResponse.json({ hotels });
}
