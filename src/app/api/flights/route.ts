// src/app/api/flights/route.ts
import { ok } from "@/lib/response";
import { getFlightsForParish } from "@/lib/parish";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const parish = url.searchParams.get("parish");
  if (parish) {
    const flights = getFlightsForParish(parish);
    return ok({ flights });
  }
  // otherwise return all flights
  const { FLIGHTS } = await import("@/app/parishData/flights");
  return ok({ flights: FLIGHTS });
}
