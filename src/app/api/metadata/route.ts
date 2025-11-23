import { NextResponse } from "next/server";
import { METADATA } from "@/app/parishData/metadata";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const parishCode = searchParams.get("parish");

  if (!parishCode) {
    return NextResponse.json({
      error: "Missing ?parish= parameter",
    });
  }

  const metadata = getParishMetadata(parishCode);

  if (!metadata) {
    return NextResponse.json({
      error: "No metadata found for parish",
    });
  }

  return NextResponse.json({ metadata });
}
