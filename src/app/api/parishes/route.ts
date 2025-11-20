// src/app/api/parishes/[parish]/route.ts
import { ok, err } from "@/lib/response";
import { getParish, getTownsForParish, getHotelsForParish, getToursForParish, getTransportForParish, getAttractionsForParish, getFlightsForParish } from "@/lib/parish";
import { buildMetaForAttractions, buildMetaForHotels, buildMetaForTours, buildMetaForTransport, buildMetaForFlights } from "@/lib/metadata";
import { requireApiKey, rateLimit } from "@/lib/auth";

export async function GET(req: Request, { params }: { params: { parish: string } }) {
  try {
    try { requireApiKey(req); rateLimit(req); } catch (e:any) { return err(e.message || "auth error", 401); }

    const parishCode = params.parish;
    const parish = getParish(parishCode);
    if (!parish) return err("Parish not found", 404);

    const towns = getTownsForParish(parishCode);
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
    };

    return ok({ parish, towns, hotels, tours, transport, attractions, flights, meta });
  } catch (e:any) {
    return err(String(e), 500);
  }
}
