import { NextResponse } from "next/server";
import { FLIGHTS } from "@/parishData/index";

export async function GET() {
  return NextResponse.json({
    flights: FLIGHTS
  });
}
