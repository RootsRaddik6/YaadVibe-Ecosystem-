import { NextResponse } from "next/server";
import { FLIGHTS } from "@/app/parishData";

export async function GET() {
  return NextResponse.json(FLIGHTS);
}
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
