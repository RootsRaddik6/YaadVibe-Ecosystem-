// src/app/api/search/route.ts
import { ok, err } from "@/lib/response";
import { globalSearch } from "@/lib/search";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const q = url.searchParams.get("q") ?? "";
    const type = url.searchParams.get("type") ?? undefined;
    if (!q) return err("Missing query param 'q'", 400);

    const results = globalSearch(q, type);
    return ok({ q, type, results });
  } catch (e) {
    return err(String(e), 500);
  }
}
