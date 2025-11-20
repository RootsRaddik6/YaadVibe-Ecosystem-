// src/app/api/metadata/transportation/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    transports: [
      { id: "knutsford", name: "Knutsford Express", base: 15000 },
      { id: "taxi", name: "Taxi", base: 8000 },
    ],
  });
}
