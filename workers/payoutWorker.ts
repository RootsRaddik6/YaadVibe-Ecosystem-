import { lynkSend } from "@/lib/lynk";
import { chainSend } from "@/lib/chainSend";

/**
 * Simplified payout worker - in production run as a separate worker (cron or queue)
 */
export async function processBookingPayment(payment: any, booking: any) {
  const subtotal = booking.totalAmount || 0;
  const platformFee = +(subtotal * Number(process.env.PLATFORM_FEE_PERCENT || 0.02)).toFixed(2);
  const lynkExtra = +(subtotal * Number(process.env.LYNK_EXTRA_PERCENT || 0.001)).toFixed(2);

  if (payment.method === "jamdex" || payment.method === "lynk") {
    const tx1 = await lynkSend(process.env.LYNK_PRIMARY || "@Rootsraddik", platformFee);
    const tx2 = await lynkSend(process.env.LYNK_SECONDARY || "@rootsraddik", lynkExtra);
    return { tx1, tx2 };
  }

  if (payment.method === "stripe") {
    // in production convert fiat to JamDex via off-ramp then send lynk
    const tx1 = await lynkSend(process.env.LYNK_PRIMARY || "@Rootsraddik", platformFee);
    const tx2 = await lynkSend(process.env.LYNK_SECONDARY || "@rootsraddik", lynkExtra);
    return { tx1, tx2 };
  }

  // crypto (ton, sol, matic)
  const tx1 = await chainSend({ method: payment.method, to: process.env.FOUNDER_PHANTOM_ADDRESS!, amount: platformFee });
  const tx2 = await lynkSend(process.env.LYNK_SECONDARY || "@rootsraddik", lynkExtra);
  return { tx1, tx2 };
}
