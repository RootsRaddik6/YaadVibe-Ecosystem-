// src/lib/priceEngine.ts
import { parishes } from "@/data/parishData";

export function calculateBookingCost({ transport, nights = 1, guests = 1, excursions = [] }: {
  transport: string | number,
  nights: number,
  guests: number,
  excursions?: string[]
}) {
  // Example simplistic rules — adjust to your real pricing logic
  const transportCost = typeof transport === "number" ? transport : 15000; // JMD cents-like
  const hotelRate = 28000;
  const excursionRate = 4500;

  const excursionsCost = (excursions?.length ?? 0) * excursionRate;
  const cost = transportCost * guests + hotelRate * nights + excursionsCost;
  const platformFee = Math.round((cost * (Number(process.env.APP_PLATFORM_FEE_PERCENT || 10))) / 100);
  const total = cost + platformFee;

  return { cost, platformFee, total };
}
