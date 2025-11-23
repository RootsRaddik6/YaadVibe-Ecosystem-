import { NextResponse } from "next/server";
import {
  PARISHES,
  TOWNS,
  HOTELS,
  ATTRACTIONS,
  TOURS,
  FLIGHTS,
  TRANSPORTATION
} from "../../parishData";

export async function GET() {
  return NextResponse.json({
    parishes: PARISHES,
    towns: TOWNS,
    hotels: HOTELS,
    attractions: ATTRACTIONS,
    tours: TOURS,
    flights: FLIGHTS,
    transport: TRANSPORTATION
  });
}
