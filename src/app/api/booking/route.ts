import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      origin,
      destination,
      transport,
      hotel,
      nights,
      excursions,
      guests,
    } = body;

    // Transport fee
    const baseTransport = transport === "knutsford" ? 4200 : 0;

    // Hotel fee example
    const hotelRate = 28000; // per night

    // Excursion fee example
    const excursionRate = 4500;

    // Cost calculation
    const cost =
      baseTransport * guests +
      hotelRate * nights +
      (excursions?.length ?? 0) * excursionRate;

    // 2% platform fee
    const platformFee = +(cost * 0.02).toFixed(2);

    return NextResponse.json({
      ok: true,
      cost,
      platformFee,
      total: cost + platformFee,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Invalid booking request" },
      { status: 400 }
    );
  }
}
