// src/utils/metadata.ts
import { parishes } from "@/utils/parishData";

export async function getHotelsForParish(parishName?: string) {
  if (!parishName) {
    // return all hotels
    return parishes.flatMap(p => p.hotels ?? []);
  }
  const found = parishes.find(p => (p.name || p.parish || "").toLowerCase() === parishName.toLowerCase());
  return found?.hotels ?? [];
}

// create functions for flights/tours/transport similarly
