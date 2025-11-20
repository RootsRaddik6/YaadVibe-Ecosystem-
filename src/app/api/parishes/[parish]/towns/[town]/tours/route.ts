// src/app/api/parishes/[parish]/towns/[town]/tours/route.ts
import { ok, err } from "@/lib/response";
import { getToursForParish, getTownsForParish } from "@/lib/parish";
import { buildMetaForTours } from "@/lib/metadata";

export async function GET(req: Request, { params }: { params: { parish: string; town: string } }) {
  const { parish, town } = params;
  const towns = getTownsForParish(parish);
  if (!towns.includes(town)) return err("Town not found in parish", 404);

  const tours = getToursForParish(parish).filter(t => true); // extend filter by town if you collect town->tour mapping
  const meta = buildMetaForTours(tours);
  return ok({ parish, town, tours, meta });
}
