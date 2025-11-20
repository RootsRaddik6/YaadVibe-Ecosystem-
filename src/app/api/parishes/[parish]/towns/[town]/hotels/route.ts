// src/app/api/parishes/[parish]/towns/[town]/hotels/route.ts
import { ok, err } from "@/lib/response";
import { getHotelsForParish, getTownsForParish, findTownBySlug } from "@/lib/parish";
import { buildMetaForHotels } from "@/lib/metadata";
import { requireApiKey, rateLimit } from "@/lib/auth";

/**
 * Supports query params:
 *  - page (1-based)
 *  - limit (default 20)
 *  - minRating
 *  - maxRating
 *  - q (search text inside name)
 *
 * Example:
 * /api/parishes/st-james/towns/montego-bay/hotels?page=1&limit=10&minRating=4
 */
export async function GET(req: Request, { params }: { params: { parish: string; town: string } }) {
  try {
    // optional guard
    try { requireApiKey(req); rateLimit(req); } catch(e:any) { return err(e.message || "auth error", 401); }

    const { parish, town } = params;
    const towns = getTownsForParish(parish);
    // town param may be slug -> normalize
    const targetTown = findTownBySlug(parish, town) ?? town;
    if (!towns.some(t => t.toLowerCase() === (targetTown as string).toLowerCase())) {
      return err("Town not found in parish", 404);
    }

    const url = new URL(req.url);
    const page = Math.max(1, parseInt(url.searchParams.get("page") || "1", 10));
    const limit = Math.min(100, Math.max(1, parseInt(url.searchParams.get("limit") || "20", 10)));
    const minRating = parseFloat(url.searchParams.get("minRating") || "0");
    const maxRatingRaw = url.searchParams.get("maxRating");
    const maxRating = maxRatingRaw ? parseFloat(maxRatingRaw) : 5;
    const q = url.searchParams.get("q")?.toLowerCase() || "";

    let hotels = getHotelsForParish(parish, targetTown as string);

    // filter rating
    hotels = hotels.filter(h => (h.rating ?? 0) >= minRating && (h.rating ?? 0) <= maxRating);

    // text search
    if (q) hotels = hotels.filter(h => (h.name + " " + (h.neighborhood ?? "") + " " + (h.url ?? "")).toLowerCase().includes(q));

    const total = hotels.length;
    const start = (page - 1) * limit;
    const paged = hotels.slice(start, start + limit);
    const meta = buildMetaForHotels(paged);

    return ok({ parish, town: targetTown, page, limit, total, hotels: paged, meta });
  } catch (e:any) {
    return err(String(e), 500);
  }
}
