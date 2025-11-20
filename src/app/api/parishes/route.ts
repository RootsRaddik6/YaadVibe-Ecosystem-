import { NextResponse } from "next/server";
import { PARISHES, TOWNS } from "@/app/parishData";

export async function GET() {
  return NextResponse.json({
    parishes: PARISHES,
    towns: TOWNS
  });
}
