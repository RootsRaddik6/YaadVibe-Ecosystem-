import { NextResponse } from "next/server";
import { HOTELS, ATTRACTIONS, TOURS, TRANSPORT } from "@/app/parishData";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const parish = searchParams.get("parish");

  if (!parish) {
    return NextResponse.json(
      { error: "Missing ?parish parameter" },
      { status: 400 }
    );
  }

  const parishLower = parish.toLowerCase();

  return NextResponse.json({
    hotels: HOTELS.filter(h => h.parish.toLowerCase() === parishLower),
    attractions: ATTRACTIONS.filter(a => a.parish.toLowerCase() === parishLower),
    tours: TOURS.filter(t => t.parish.toLowerCase() === parishLower),
    transport: TRANSPORT.filter(x => x.parish.toLowerCase() === parishLower)
  });
}
