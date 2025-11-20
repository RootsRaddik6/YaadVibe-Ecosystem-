// src/lib/parish.ts
import {
  PARISHES,
  TOWNS,
  HOTELS,
  TOURS,
  TRANSPORT_OPTIONS,
  ATTRACTIONS,
  FLIGHTS,
} from "@/app/parishData";

/* existing getters (unchanged) */
export function getParish(parishCode: string) {
  return PARISHES.find((p) => p.code === parishCode) ?? null;
}
export function listParishes() { return PARISHES; }
export function getTownsForParish(parishCode: string) {
  return TOWNS.find((t) => t.parishCode === parishCode)?.towns ?? [];
}
export function getHotelsForParish(parishCode: string, town?: string) {
  return HOTELS.filter((h) => h.parishCode === parishCode && (town ? (h.neighborhood ?? "").toLowerCase().includes(town.toLowerCase()) || true : true));
}
export function getToursForParish(parishCode: string) { return TOURS.filter((t) => t.parishCode === parishCode); }
export function getTransportForParish(parishCode: string) { return TRANSPORT_OPTIONS.filter((t) => t.parishCode === parishCode); }
export function getAttractionsForParish(parishCode: string) { return ATTRACTIONS.filter((a) => a.parishCode === parishCode); }
export function getFlightsForParish(parishCode: string) { return FLIGHTS.filter((f) => f.parishHint === parishCode); }

/* NEW: slug helpers for town names (url-friendly) */
export function slugify(s: string) {
  return s
    .trim()
    .toLowerCase()
    .replace(/['"`]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function townToSlug(parishCode: string, townName: string) {
  const slug = slugify(townName);
  return `${parishCode}/${slug}`;
}

export function findTownBySlug(parishCode: string, slug: string) {
  const towns = getTownsForParish(parishCode);
  return towns.find((t) => slugify(t) === slug) ?? null;
}
