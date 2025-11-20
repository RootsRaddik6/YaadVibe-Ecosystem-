import { NextResponse } from "next/server";

// Example price engine — replace with your real logic
function priceEngine(input: any) {
  let base = 100;
  if (input.hotel) base += 80;
  if (input.tour) base += 50;
  if (input.transport) base += 40;
  return { total: base, currency: "USD" };
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const required = ["parish", "town", "hotel", "transport", "dates"];
    for (const key of required) {
      if (!data[key]) {
        return NextResponse.json(
          { error: `${key} is required` },
          { status: 400 }
        );
      }
    }

    const pricing = priceEngine(data);

    return NextResponse.json({
      status: "success",
      booking: {
        id: "bk_" + Math.random().toString(36).substring(2),
        timestamp: Date.now(),
        ...data,
        pricing,
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Invalid request", details: String(err) },
      { status: 500 }
    );
  }
}
