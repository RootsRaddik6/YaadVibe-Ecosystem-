import Stripe from "stripe";

if (!process.env.STRIPE_SECRET) {
  throw new Error("STRIPE_SECRET missing");
}

const stripe = new Stripe(process.env.STRIPE_SECRET, {
  apiVersion: "2023-10-16",
});

export default stripe;
