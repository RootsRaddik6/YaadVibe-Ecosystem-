import { NextResponse } from "next/server";
import { getAttractionsByParish } from "@/utils/attractions";
import type { Attraction } from "@/types/attractions";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const parishCode = searchParams.get("parish");

  if (!parishCode) {
    return NextResponse.json(
      { error: "Missing ?parish parameter" },
      { status: 400 }
    );
  }

  const attractions: Attraction[] = getAttractionsByParish(parishCode);

  return NextResponse.json({ attractions });
}
