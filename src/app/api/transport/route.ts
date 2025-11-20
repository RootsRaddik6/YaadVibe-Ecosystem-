import { NextResponse } from "next/server";
import { TRANSPORT_OPTIONS } from "@/app/parishData";

export async function GET() {
  return NextResponse.json(TRANSPORT_OPTIONS);
}
