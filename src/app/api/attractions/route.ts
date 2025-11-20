import { NextResponse } from "next/server";
import { ATTRACTIONS } from "@/app/parishData";

export async function GET() {
  return NextResponse.json(ATTRACTIONS);
}
