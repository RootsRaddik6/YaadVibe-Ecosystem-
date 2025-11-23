import { NextResponse } from "next/server";
import { TRANSPORTATION } from "../../parishData";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const parish = searchParams.get("parish");

  if (!parish) {
    return NextResponse.json({ error: "Missing ?parish=" });
  }

  const parishLower = parish.toLowerCase();
  const transport = TRANSPORTATION.filter(t => t.parishCode.toLowerCase() === parishLower);

  return NextResponse.json({ transport });
}
