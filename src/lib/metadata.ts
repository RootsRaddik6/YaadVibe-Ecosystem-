// src/lib/metadata.ts
import type { AttractionInfo, HotelInfo, TourInfo, TransportOption, FlightInfo } from "@/app/parishData";

/**
 * Small metadata engine:
 * - aggregates
 * - computes simple score
 * - generates a short summary
 */

type MetaResult = {
  count: number;
  categories?: string[];
  score?: number;
  summary?: string;
};

function computeScore(itemsCount: number, diversity = 1) {
  // simple, deterministic scoring for now
  const base = Math.min(100, itemsCount * 8);
  return Math.round(base * Math.min(2, 1 + diversity * 0.1));
}

function uniqueCategories(items: any[], field = "type") {
  const s = new Set<string>();
  items.forEach((it) => {
    if (it && it[field]) s.add(it[field]);
  });
  return Array.from(s);
}

export function buildMetaForAttractions(items: AttractionInfo[]): MetaResult {
  const count = items.length;
  const categories = uniqueCategories(items, "type");
  const score = computeScore(count, categories.length);
  const summary = `Found ${count} attractions (${categories.join(", ") || "various"}).`;
  return { count, categories, score, summary };
}

export function buildMetaForHotels(items: HotelInfo[]): MetaResult {
  const count = items.length;
  const avgRating =
    items.reduce((s, h) => s + (h.rating ?? 0), 0) / Math.max(1, count);
  const score = computeScore(count, avgRating || 1);
  const summary = `Found ${count} hotels (avg rating ${avgRating.toFixed(1)}).`;
  return { count, score: Math.round(score), summary };
}

export function buildMetaForTours(items: TourInfo[]): MetaResult {
  const count = items.length;
  const avgDuration =
    items.reduce((s, t) => s + (t.durationMins ?? 0), 0) /
    Math.max(1, count);
  const score = computeScore(count, avgDuration ? avgDuration / 60 : 1);
  const summary = `Found ${count} tours (avg duration ${Math.round(avgDuration)} mins).`;
  return { count, score: Math.round(score), summary };
}

export function buildMetaForTransport(items: TransportOption[]): MetaResult {
  const count = items.length;
  const types = uniqueCategories(items, "type");
  const score = computeScore(count, types.length);
  const summary = `Found ${count} transport options (${types.join(", ")}).`;
  return { count, categories: types, score: Math.round(score), summary };
}

export function buildMetaForFlights(items: FlightInfo[]): MetaResult {
  const count = items.length;
  const codes = items.map((f) => f.airportCode);
  const score = computeScore(count, codes.length);
  const summary = `Found ${count} nearby airports: ${codes.join(", ")}`;
  return { count, score: Math.round(score), summary };
}
