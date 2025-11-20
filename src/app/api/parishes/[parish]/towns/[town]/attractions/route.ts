// src/app/api/parishes/[parish]/towns/[town]/attractions/route.ts
import { ok, err } from "@/lib/response";
import { getAttractionsForParish, getTownsForParish, findTownBySlug } from "@/lib/parish";
import { buildMetaForAttractions } from "@/lib/metadata";
import { requireApiKey, rateLimit } from "@/lib/auth";

/**
 * GET /api/parishes/[parish]/towns/[town]/attractions
 * Query params:
 *  - page (1)
 *  - limit (20)
 *  - q (text search)
 *  - type (filter by attraction.type)
 */
export async function GET(req: Request, { params }: { params: { parish: string; town: string } }) {
  try {
    try { requireApiKey(req); rateLimit(req); } catch (e:any) { return err(e.message || "auth error", 401); }

    const { parish, town } = params;
    const towns = getTownsForParish(parish);
    const targetTown = findTownBySlug(parish, town) ?? town;
    if (!towns.some(t => t.toLowerCase() === (targetTown as string).toLowerCase())) {
      return err("Town not found in parish", 404);
    }

    const url = new URL(req.url);
    const page = Math.max(1, parseInt(url.searchParams.get("page") || "1", 10));
    const limit = Math.min(100, Math.max(1, parseInt(url.searchParams.get("limit") || "20", 10)));
    const q = (url.searchParams.get("q") || "").toLowerCase();
    const typeFilter = (url.searchParams.get("type") || "").toLowerCase();

    let items = getAttractionsForParish(parish);

    // optional type filter
    if (typeFilter) {
      items = items.filter(i => (i.type || "").toLowerCase() === typeFilter);
    }

    // text search
    if (q) {
      items = items.filter(i => ((i.name || "") + " " + (i.description || "") + " " + (i.notes || "")).toLowerCase().includes(q));
    }

    const total = items.length;
    const start = (page - 1) * limit;
    const paged = items.slice(start, start + limit);
    const meta = buildMetaForAttractions(paged);

    return ok({ parish, town: targetTown, page, limit, total, attractions: paged, meta });
  } catch (e:any) {
    return err(String(e), 500);
  }
}
