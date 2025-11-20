import { NextResponse } from "next/server";
import stripe from "@/lib/stripe";

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: "YaadVibe Booking" },
            unit_amount: body.total * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: body.success,
      cancel_url: body.cancel,
    });

    return NextResponse.json({ url: session.url });
  } catch (e) {
    return NextResponse.json({ error: e });
  }
}
