// src/app/api/metadata/flights/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  // Stub - integrate real flight API or preseed data
  return NextResponse.json({
    ok: true,
    flights: [
      { from: "KIN", to: "MBJ", carrier: "LocalAir", price: 15000 },
      { from: "MBJ", to: "KIN", carrier: "LocalAir", price: 15000 },
    ],
  });
}
