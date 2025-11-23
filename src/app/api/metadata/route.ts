import { NextResponse } from "next/server";
import { METADATA } from "@/parishData/index";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const parishCode = searchParams.get("parish");

  return NextResponse.json({
    metadata: METADATA[parishCode ?? "fallback"]
  });
}
