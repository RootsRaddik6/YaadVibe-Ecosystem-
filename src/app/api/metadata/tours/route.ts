// src/app/api/metadata/tours/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    tours: [
      { id: "bobMarley", title: "Bob Marley Tour", price: 3500 },
      { id: "blueMountain", title: "Blue Mountain Day Trip", price: 6000 },
    ],
  });
}
