// src/app/api/booking/route.ts
import { NextResponse } from "next/server";
import { calculateBookingCost } from "@/lib/priceEngine";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // expect { origin, destination, transport, hotel, nights, excursions, guests }
    const { total, cost, platformFee } = calculateBookingCost(body);
    return NextResponse.json({ ok: true, cost, platformFee, total });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
