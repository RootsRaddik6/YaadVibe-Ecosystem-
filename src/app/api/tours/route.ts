import { NextResponse } from "next/server";
import { TOURS } from "@/parishData/index";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const parishCode = searchParams.get("parish");

  if (!parishCode) {
    return NextResponse.json({
      error: "Missing ?parish="
    });
  }

  return NextResponse.json({
    tours: TOURS.filter(t => t.parishCode === parishCode)
  });
}
