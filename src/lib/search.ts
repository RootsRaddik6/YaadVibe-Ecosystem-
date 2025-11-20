// src/lib/search.ts
import {
  PARISHES,
  TOWNS,
  HOTELS,
  TOURS,
  TRANSPORT_OPTIONS,
  ATTRACTIONS,
  FLIGHTS,
} from "@/app/parishData";

/**
 * Basic fuzzy search engine (no deps).
 * - search across types
 * - ranking by simple score
 */

function normalize(s?: string) {
  return (s ?? "").toLowerCase();
}

function scoreMatch(target: string, q: string) {
  const t = normalize(target);
  const qn = normalize(q);
  if (!qn) return 0;
  if (t === qn) return 100;
  if (t.includes(qn)) return 50;
  // token overlap
  const qt = qn.split(/\s+/);
  let score = 0;
  qt.forEach((token) => {
    if (t.includes(token)) score += 10;
  });
  return score;
}

export function globalSearch(q: string, type?: string, limit = 50) {
  const results: any[] = [];

  const add = (item: any, kind: string) => {
    const s =
      scoreMatch(item.name ?? item.title ?? item.airportCode ?? "", q) +
      (scoreMatch(item.description ?? item.neighborhood ?? "", q) / 2);
    if (s > 0) results.push({ item, kind, score: s });
  };

  // narrow types if requested
  const include = (k: string) => !type || k === type;

  if (include("parish")) {
    PARISHES.forEach((p) => add({ name: p.name, code: p.code, description: p.description }, "parish"));
  }
  if (include("town")) {
    TOWNS.forEach((t) => {
      t.towns.forEach((town) => add({ name: town, parishCode: t.parishCode }, "town"));
    });
  }
  if (include("hotel")) HOTELS.forEach((h) => add(h, "hotel"));
  if (include("tour")) TOURS.forEach((t) => add(t, "tour"));
  if (include("transport")) TRANSPORT_OPTIONS.forEach((tt) => add(tt, "transport"));
  if (include("attraction")) ATTRACTIONS.forEach((a) => add(a, "attraction"));
  if (include("flight")) FLIGHTS.forEach((f) => add(f, "flight"));

  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit);
}
