// src/app/api/search/route.ts
import { ok, err } from "@/lib/response";
import { globalSearch } from "@/lib/search";
import { requireApiKey, rateLimit } from "@/lib/auth";

export async function GET(req: Request) {
  try {
    try { requireApiKey(req); rateLimit(req); } catch (e:any) { return err(e.message || "auth error", 401); }

    const url = new URL(req.url);
    const q = url.searchParams.get("q") ?? "";
    const type = url.searchParams.get("type") ?? undefined;
    const limit = Math.min(200, Math.max(1, parseInt(url.searchParams.get("limit") || "50", 10)));

    if (!q) return err("Missing query param 'q'", 400);
    const results = globalSearch(q, type, limit);
    return ok({ q, type, results });
  } catch (e:any) {
    return err(String(e), 500);
  }
}
