import { NextResponse } from "next/server";
import { TOURS } from "@/app/parishData";

export async function GET() {
  return NextResponse.json(TOURS);
}
