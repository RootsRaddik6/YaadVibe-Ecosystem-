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

/**
 * Lightweight typed helpers to read parishData
 */

export function getParish(parishCode: string) {
  return PARISHES.find((p) => p.code === parishCode) ?? null;
}

export function listParishes() {
  return PARISHES;
}

export function getTownsForParish(parishCode: string) {
  return TOWNS.find((t) => t.parishCode === parishCode)?.towns ?? [];
}

export function getHotelsForParish(parishCode: string, town?: string) {
  return HOTELS.filter(
    (h) => h.parishCode === parishCode && (town ? (h.neighborhood ?? "").includes(town) || true : true)
  );
}

export function getToursForParish(parishCode: string) {
  return TOURS.filter((t) => t.parishCode === parishCode);
}

export function getTransportForParish(parishCode: string) {
  return TRANSPORT_OPTIONS.filter((t) => t.parishCode === parishCode);
}

export function getAttractionsForParish(parishCode: string) {
  return ATTRACTIONS.filter((a) => a.parishCode === parishCode);
}

export function getFlightsForParish(parishCode: string) {
  return FLIGHTS.filter((f) => f.parishHint === parishCode);
}
