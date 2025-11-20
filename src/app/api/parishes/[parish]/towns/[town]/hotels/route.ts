// src/app/api/parishes/[parish]/towns/[town]/hotels/route.ts
import { ok, err } from "@/lib/response";
import { getHotelsForParish, getTownsForParish } from "@/lib/parish";
import { buildMetaForHotels } from "@/lib/metadata";

export async function GET(req: Request, { params }: { params: { parish: string; town: string } }) {
  const { parish, town } = params;
  const towns = getTownsForParish(parish);
  if (!towns.includes(town)) return err("Town not found in parish", 404);

  const hotels = getHotelsForParish(parish, town);
  const meta = buildMetaForHotels(hotels);
  return ok({ parish, town, hotels, meta });
}
