import { NextResponse } from "next/server";
import { getToursByParish } from "@/utils/tours";
import type { Tour } from "@/types/tours";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const parishCode = searchParams.get("parish");

  if (!parishCode) {
    return NextResponse.json(
      { error: "Missing ?parish parameter" },
      { status: 400 }
    );
  }

  const tours: Tour[] = getToursByParish(parishCode);

  return NextResponse.json({ tours });
}
