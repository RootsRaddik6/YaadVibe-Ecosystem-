import { NextResponse } from "next/server";
import { ATTRACTIONS } from "../../parishData/attractions";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const parish = searchParams.get("parish");

  if (!parish) {
    return NextResponse.json({ error: "Missing ?parish parameter" }, { status: 400 });
  }

  const parishLower = parish.toLowerCase();
  const attractions = ATTRACTIONS.filter(a => (a.parishCode ?? "").toLowerCase() === parishLower);

  return NextResponse.json({ attractions });
}
