// src/app/api/metadata/hotels/route.ts
import { NextResponse } from "next/server";
import { parishes } from "@/data/parishData";

export async function GET() {
  // Return simplified hotels list compiled from parishData
  const hotels = parishes.flatMap(p => p.hotels || []);
  return NextResponse.json({ ok: true, hotels });
}
