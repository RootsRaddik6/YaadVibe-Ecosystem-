import { NextResponse } from "next/server";
import { ATTRACTIONS } from "@/parishData/index";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const parishCode = searchParams.get("parish");

  if (!parishCode) {
    return NextResponse.json({
      error: "Missing ?parish= parameter"
    });
  }

  return NextResponse.json({
    attractions: ATTRACTIONS.filter(a => a.parishCode === parishCode)
  });
}
