import { NextResponse } from "next/server";
import { FLIGHTS } from "@/app/parishData";

export async function GET() {
  return NextResponse.json(FLIGHTS);
}
