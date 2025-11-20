// src/app/api/parishes/[parish]/towns/[town]/tours/route.ts
import { ok, err } from "@/lib/response";
import { getToursForParish, getTownsForParish, findTownBySlug } from "@/lib/parish";
import { buildMetaForTours } from "@/lib/metadata";
import { requireApiKey, rateLimit } from "@/lib/auth";

/**
 * Supports:
 *  - page, limit
 *  - q (text search)
 *  - maxDuration
 */
export async function GET(req: Request, { params }: { params: { parish: string; town: string } }) {
  try {
    try { requireApiKey(req); rateLimit(req); } catch(e:any) { return err(e.message || "auth error", 401); }

    const { parish, town } = params;
    const towns = getTownsForParish(parish);
    const targetTown = findTownBySlug(parish, town) ?? town;
    if (!towns.some(t => t.toLowerCase() === (targetTown as string).toLowerCase())) {
      return err("Town not found in parish", 404);
    }

    const url = new URL(req.url);
    const page = Math.max(1, parseInt(url.searchParams.get("page") || "1", 10));
    const limit = Math.min(100, Math.max(1, parseInt(url.searchParams.get("limit") || "20", 10)));
    const q = url.searchParams.get("q")?.toLowerCase() || "";
    const maxDuration = parseInt(url.searchParams.get("maxDuration") || "0", 10) || null;

    let tours = getToursForParish(parish);

    if (maxDuration) tours = tours.filter(t => (t.durationMins ?? 0) <= maxDuration);
    if (q) tours = tours.filter(t => (t.name + " " + (t.description ?? "")).toLowerCase().includes(q));

    const total = tours.length;
    const start = (page - 1) * limit;
    const paged = tours.slice(start, start + limit);
    const meta = buildMetaForTours(paged);

    return ok({ parish, town: targetTown, page, limit, total, tours: paged, meta });
  } catch (e:any) {
    return err(String(e), 500);
  }
}
