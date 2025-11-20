// src/app/api/flights/route.ts
import { ok, err } from "@/lib/response";
import { getFlightsForParish } from "@/lib/parish";
import { requireApiKey, rateLimit } from "@/lib/auth";

/**
 * GET /api/flights?parish=st-james&page=1&limit=20
 */
export async function GET(req: Request) {
  try {
    try { requireApiKey(req); rateLimit(req); } catch (e:any) { return err(e.message || "auth error", 401); }

    const url = new URL(req.url);
    const parish = url.searchParams.get("parish");
    const page = Math.max(1, parseInt(url.searchParams.get("page") || "1", 10));
    const limit = Math.min(100, Math.max(1, parseInt(url.searchParams.get("limit") || "50", 10)));

    if (parish) {
      const flights = getFlightsForParish(parish);
      const total = flights.length;
      const start = (page - 1) * limit;
      const paged = flights.slice(start, start + limit);
      return ok({ parish, page, limit, total, flights: paged });
    }

    // Return all (paginated)
    const { FLIGHTS } = await import("@/app/parishData/flights");
    const total = FLIGHTS.length;
    const start = (page - 1) * limit;
    const paged = FLIGHTS.slice(start, start + limit);
    return ok({ page, limit, total, flights: paged });
  } catch (e:any) {
    return err(String(e), 500);
  }
}
