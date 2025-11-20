// src/utils/priceEngine.ts
// simple pricing engine used by booking route
export function calculatePrice(payload: any): number {
  // payload expected: { transport (number or string), guests, nights, excursions (array), hotelRate? }
  const baseTransport = Number(payload.transportRate ?? 5000);
  const hotelRate = Number(payload.hotelRate ?? 28000);
  const excursionRate = Number(payload.excursionRate ?? 4500);

  const guests = Number(payload.guests ?? 1);
  const nights = Number(payload.nights ?? 1);
  const excursionsCount = (payload.excursions?.length ?? 0);

  const cost = baseTransport * guests + hotelRate * nights + (excursionRate * excursionsCount);
  return Math.round(cost);
}
