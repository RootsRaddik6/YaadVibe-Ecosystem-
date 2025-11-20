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

    const baseTransport = transport === "knutsford" ? 4200 : 0;
    const hotelRate = 28000;
    const excursionRate = 4500;

    const cost =
      baseTransport * guests +
      hotelRate * nights +
      (excursions?.length ?? 0) * excursionRate;

    const platformFee = +(cost * 0.02).toFixed(2);

    return NextResponse.json({
      ok: true,
      cost,
      platformFee,
      total: cost + platformFee,
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid booking request" },
      { status: 400 }
    );
  }
}
