import { NextResponse } from "next/server";
import { TOURS } from "../../parishData/tours";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const parish = searchParams.get("parish");

  if (!parish) {
    return NextResponse.json({ error: "Missing ?parish parameter" }, { status: 400 });
  }

  const parishLower = parish.toLowerCase();
  const tours = TOURS.filter(t => (t.parishCode ?? "").toLowerCase() === parishLower);

  return NextResponse.json({ tours });
}
