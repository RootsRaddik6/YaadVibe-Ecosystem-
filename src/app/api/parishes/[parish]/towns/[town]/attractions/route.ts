// src/app/api/parishes/[parish]/towns/[town]/attractions/route.ts
import { ok, err } from "@/lib/response";
import { getAttractionsForParish, getTownsForParish } from "@/lib/parish";
import { buildMetaForAttractions } from "@/lib/metadata";

export async function GET(req: Request, { params }: { params: { parish: string; town: string } }) {
  const { parish, town } = params;
  const towns = getTownsForParish(parish);
  if (!towns.includes(town)) return err("Town not found in parish", 404);

  const attractions = getAttractionsForParish(parish).filter(a => (a.name ?? "").toLowerCase().includes(town.toLowerCase()) ? true : true);
  const meta = buildMetaForAttractions(attractions);
  return ok({ parish, town, attractions, meta });
}
