// src/app/api/parishes/[parish]/summary/route.ts
import { ok, err } from "@/lib/response";
import { getParish, getTownsForParish, getHotelsForParish, getToursForParish, getTransportForParish, getAttractionsForParish, getFlightsForParish } from "@/lib/parish";
import { buildMetaForAttractions, buildMetaForHotels, buildMetaForTours, buildMetaForTransport, buildMetaForFlights } from "@/lib/metadata";
import { requireApiKey, rateLimit } from "@/lib/auth";

/**
 * GET /api/parishes/[parish]/summary
 * Returns ONLY metadata summary (fast) — great for small widgets & prefetch.
 */
export async function GET(req: Request, { params }: { params: { parish: string } }) {
  try {
    // optional auth + rate limit — comment out if public
    try { requireApiKey(req); rateLimit(req); } catch (e:any) { return err(e.message || "auth error", 401); }

    const parishCode = params.parish;
    const parish = getParish(parishCode);
    if (!parish) return err("Parish not found", 404);

    const hotels = getHotelsForParish(parishCode);
    const tours = getToursForParish(parishCode);
    const transport = getTransportForParish(parishCode);
    const attractions = getAttractionsForParish(parishCode);
    const flights = getFlightsForParish(parishCode);

    const meta = {
      attractions: buildMetaForAttractions(attractions),
      hotels: buildMetaForHotels(hotels),
      tours: buildMetaForTours(tours),
      transport: buildMetaForTransport(transport),
      flights: buildMetaForFlights(flights),
      townsCount: getTownsForParish(parishCode).length
    };

    return ok({ parish: { name: parish.name, code: parish.code }, meta });
  } catch (e:any) {
    return err(String(e), 500);
  }
}
