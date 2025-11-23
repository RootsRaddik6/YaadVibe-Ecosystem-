import { NextResponse } from "next/server";
import { FLIGHTS } from "../../parishData/flights";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const parish = searchParams.get("parish");

  if (!parish) {
    return NextResponse.json({ error: "Missing ?parish parameter" }, { status: 400 });
  }

  const parishLower = parish.toLowerCase();
  const flights = FLIGHTS.filter(f => (f.parishCode ?? "").toLowerCase() === parishLower);

  return NextResponse.json({ flights });
}
