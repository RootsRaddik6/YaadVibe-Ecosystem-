import { NextResponse } from "next/server";
import * as ParishData from "@/parishData";

export async function GET() {
  return NextResponse.json(ATTRACTIONS);
}
