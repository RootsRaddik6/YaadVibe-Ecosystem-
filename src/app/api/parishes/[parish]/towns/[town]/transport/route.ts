// src/app/api/parishes/[parish]/towns/[town]/transport/route.ts
import { ok, err } from "@/lib/response";
import { getTransportForParish, getTownsForParish } from "@/lib/parish";
import { buildMetaForTransport } from "@/lib/metadata";

export async function GET(req: Request, { params }: { params: { parish: string; town: string } }) {
  const { parish, town } = params;
  const towns = getTownsForParish(parish);
  if (!towns.includes(town)) return err("Town not found in parish", 404);

  const transport = getTransportForParish(parish);
  const meta = buildMetaForTransport(transport);
  return ok({ parish, town, transport, meta });
}
