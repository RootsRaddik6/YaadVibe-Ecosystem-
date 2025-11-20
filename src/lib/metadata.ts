// src/lib/metadata.ts
import { cacheGet, cacheSet } from "@/lib/cache";
import type { AttractionInfo, HotelInfo, TourInfo, TransportOption, FlightInfo } from "@/app/parishData";

/* existing compute helpers kept but results cached */
function computeScore(itemsCount: number, diversity = 1) { const base = Math.min(100, itemsCount * 8); return Math.round(base * Math.min(2, 1 + diversity * 0.1)); }
function uniqueCategories(items: any[], field = "type") { const s = new Set<string>(); items.forEach((it) => { if (it && it[field]) s.add(it[field]); }); return Array.from(s); }

export function buildMetaForAttractions(items: AttractionInfo[]) {
  const key = `meta:attractions:${items.length}:${JSON.stringify(items.map(i => i.name))}`;
  const cached = cacheGet(key);
  if (cached) return cached;
  const count = items.length;
  const categories = uniqueCategories(items, "type");
  const score = computeScore(count, categories.length);
  const summary = `Found ${count} attractions (${categories.join(", ") || "various"}).`;
  const result = { count, categories, score, summary };
  cacheSet(key, result, 30); // 30s TTL
  return result;
}

export function buildMetaForHotels(items: HotelInfo[]) {
  const key = `meta:hotels:${items.length}:${items.map(h => h.name).join("|")}`;
  const cached = cacheGet(key);
  if (cached) return cached;
  const count = items.length;
  const avgRating = items.reduce((s, h) => s + (h.rating ?? 0), 0) / Math.max(1, count);
  const score = computeScore(count, avgRating || 1);
  const summary = `Found ${count} hotels (avg rating ${avgRating.toFixed(1)}).`;
  const result = { count, score: Math.round(score), summary };
  cacheSet(key, result, 30);
  return result;
}

export function buildMetaForTours(items: TourInfo[]) {
  const key = `meta:tours:${items.length}:${items.map(t => t.name).join("|")}`;
  const cached = cacheGet(key);
  if (cached) return cached;
  const count = items.length;
  const avgDuration = items.reduce((s, t) => s + (t.durationMins ?? 0), 0) / Math.max(1, count);
  const score = computeScore(count, avgDuration ? avgDuration / 60 : 1);
  const summary = `Found ${count} tours (avg duration ${Math.round(avgDuration)} mins).`;
  const result = { count, score: Math.round(score), summary };
  cacheSet(key, result, 30);
  return result;
}

export function buildMetaForTransport(items: TransportOption[]) {
  const key = `meta:transport:${items.length}:${items.map(t=>t.name).join("|")}`;
  const cached = cacheGet(key);
  if (cached) return cached;
  const count = items.length;
  const types = uniqueCategories(items, "type");
  const score = computeScore(count, types.length);
  const summary = `Found ${count} transport options (${types.join(", ")}).`;
  const result = { count, categories: types, score: Math.round(score), summary };
  cacheSet(key, result, 30);
  return result;
}

export function buildMetaForFlights(items: FlightInfo[]) {
  const key = `meta:flights:${items.length}:${items.map(f=>f.airportCode).join("|")}`;
  const cached = cacheGet(key);
  if (cached) return cached;
  const count = items.length;
  const codes = items.map((f) => f.airportCode);
  const score = computeScore(count, codes.length);
  const summary = `Found ${count} nearby airports: ${codes.join(", ")}`;
  const result = { count, score: Math.round(score), summary };
  cacheSet(key, result, 60); // airports change slower
  return result;
}
