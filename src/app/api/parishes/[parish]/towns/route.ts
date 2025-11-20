// src/app/api/parishes/[parish]/towns/route.ts
import { ok, err } from "@/lib/response";
import { getParish, getTownsForParish, slugify } from "@/lib/parish";
import { requireApiKey, rateLimit } from "@/lib/auth";

/**
 * GET /api/parishes/[parish]/towns
 * Returns list of towns with slugs for URL usage.
 * optional ?q= filter
 */
export async function GET(req: Request, { params }: { params: { parish: string } }) {
  try {
    try { requireApiKey(req); rateLimit(req); } catch (e:any) { return err(e.message || "auth error", 401); }

    const parishCode = params.parish;
    const parish = getParish(parishCode);
    if (!parish) return err("Parish not found", 404);

    const url = new URL(req.url);
    const q = (url.searchParams.get("q") || "").toLowerCase();

    const towns = getTownsForParish(parishCode)
      .filter(t => !q || t.toLowerCase().includes(q))
      .map(t => ({ name: t, slug: slugify(t) }));

    return ok({ parish: { name: parish.name, code: parish.code }, towns, count: towns.length });
  } catch (e:any) {
    return err(String(e), 500);
  }
}
