import { NextResponse } from "next/server";
import { PARISHES } from "../../parishData/parishes";
import { TOWNS } from "../../parishData/towns";
import { HOTELS } from "../../parishData/hotels";
import { ATTRACTIONS } from "../../parishData/attractions";
import { TOURS } from "../../parishData/tours";
import { TRANSPORTATION } from "../../parishData/transportation";
import { FLIGHTS } from "../../parishData/flights";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const parish = searchParams.get("parish");

  if (!parish) {
    return NextResponse.json({ error: "Missing ?parish parameter" }, { status: 400 });
  }

  const parishLower = parish.toLowerCase();

  // find parish (if you have a 'code' field, adapt accordingly)
  const parishObj = PARISHES.find(p => (p.code ?? "").toLowerCase() === parishLower) || null;

  const towns = TOWNS.filter(t => (t.parishCode ?? "").toLowerCase() === parishLower);
  const hotels = HOTELS.filter(h => (h.parishCode ?? "").toLowerCase() === parishLower);
  const attractions = ATTRACTIONS.filter(a => (a.parishCode ?? "").toLowerCase() === parishLower);
  const tours = TOURS.filter(t => (t.parishCode ?? "").toLowerCase() === parishLower);
  const transport = TRANSPORTATION.filter(x => (x.parishCode ?? "").toLowerCase() === parishLower);
  const flights = FLIGHTS.filter(f => (f.parishCode ?? "").toLowerCase() === parishLower);

  return NextResponse.json({
    parish: parishObj,
    towns,
    hotels,
    attractions,
    tours,
    transport,
    flights
  });
}
