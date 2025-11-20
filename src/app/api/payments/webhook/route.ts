// src/app/api/payments/webhook/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", { apiVersion: "2023-10-16" });

export async function POST(req: Request) {
  // Note: In Next.js serverless environments you may need to use raw body reading.
  try {
    const payload = await req.text();
    const sig = req.headers.get("stripe-signature") || "";
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET || "";

    let event: Stripe.Event;
    if (endpointSecret) {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } else {
      event = JSON.parse(payload);
    }

    // handle event types
    switch (event.type) {
      case "payment_intent.succeeded":
        console.log("payment succeeded", event.data.object);
        break;
      case "checkout.session.completed":
        console.log("checkout completed", event.data.object);
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    console.error("webhook error", err);
    return NextResponse.json({ ok: false, error: err?.message ?? "webhook" }, { status: 400 });
  }
}
