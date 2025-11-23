import { NextResponse } from "next/server";

import { PARISHES } from "@/app/parishdata";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const parishCode = searchParams.get("parish");

  if (!parishCode) {
    return NextResponse.json({ error: "Missing ?parish query" });
  }

  const parish = PARISHES.find(p => p.code === parishCode);
  if (!parish) {
    return NextResponse.json({ error: "Invalid parish code" });
  }

  return NextResponse.json({
    parish,
    towns: TOWNS.filter(t => t.parishCode === parishCode),
    hotels: HOTELS.filter(h => h.parishCode === parishCode),
    tours: TOURS.filter(t => t.parishCode === parishCode),
    transport: TRANSPORT_OPTIONS.filter(t => t.parishCode === parishCode),
    attractions: ATTRACTIONS.filter(a => a.parishCode === parishCode),
    flights: FLIGHTS.filter(f => f.parishHint === parishCode)
  });
}
