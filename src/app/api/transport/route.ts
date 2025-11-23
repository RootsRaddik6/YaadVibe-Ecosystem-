import { NextResponse } from "next/server";
import { PARISHES, TOWNS } from "@/parishData";

export async function GET() {
  return NextResponse.json(TRANSPORT_OPTIONS);
}
