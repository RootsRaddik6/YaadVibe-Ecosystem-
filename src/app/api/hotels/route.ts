import { NextResponse } from "next/server";
import { HOTELS } from "@/app/parishData";

export async function GET() {
  return NextResponse.json(HOTELS);
}
