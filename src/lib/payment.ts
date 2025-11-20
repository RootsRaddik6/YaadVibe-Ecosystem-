// small helpers for price calc & sessions
export function calculateBookingEstimate(items: any[], occupancy = 1) {
  const subtotal = items.reduce((s, it) => s + (it.total_price ?? 0), 0);
  const platformFee = +((subtotal) * Number(process.env.PLATFORM_FEE_PERCENT ?? 0.02)).toFixed(2);
  const total = +(subtotal + platformFee).toFixed(2);
  return { subtotal, platformFee, total };
}
