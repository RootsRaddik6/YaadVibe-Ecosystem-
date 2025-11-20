// src/lib/cache.ts
type CacheEntry = { value: any; expiresAt: number };

const CACHE: Map<string, CacheEntry> = new Map();

/**
 * Set a value in cache with TTL seconds (default 60s).
 */
export function cacheSet(key: string, value: any, ttl = 60) {
  const expiresAt = Date.now() + ttl * 1000;
  CACHE.set(key, { value, expiresAt });
}

/**
 * Get value or null if missing/expired.
 */
export function cacheGet<T = any>(key: string): T | null {
  const e = CACHE.get(key);
  if (!e) return null;
  if (Date.now() > e.expiresAt) {
    CACHE.delete(key);
    return null;
  }
  return e.value as T;
}

/**
 * Clear key or entire cache.
 */
export function cacheDelete(key?: string) {
  if (key) CACHE.delete(key);
  else CACHE.clear();
}
