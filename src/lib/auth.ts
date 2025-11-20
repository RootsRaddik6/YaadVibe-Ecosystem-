// src/lib/auth.ts
import { NextResponse } from "next/server";

/**
 * Simple API key check (set API_KEY in your .env)
 * and in-memory rate limiter (per key or per IP).
 *
 * Production: replace with Redis/Edge rate-limit.
 */

const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 60; // requests per window per key/ip
const BUCKETS: Map<string, { count: number; resetAt: number }> = new Map();

export function requireApiKey(req: Request) {
  const apiKey = process.env.API_KEY || "";
  const header = (req.headers.get("x-api-key") || req.headers.get("authorization") || "").replace("Bearer ", "");
  if (!apiKey) {
    // if no API_KEY configured, allow (dev mode)
    return;
  }
  if (!header || header !== apiKey) {
    throw new Error("Unauthorized: missing or invalid API key");
  }
}

/**
 * Rate limit by key (x-api-key) or IP fallback.
 * Throws on limit exceeded.
 */
export function rateLimit(req: Request) {
  const keyHeader = req.headers.get("x-api-key") || req.headers.get("authorization") || "";
  const remote = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
  const bucketKey = keyHeader || remote;

  const now = Date.now();
  const bucket = BUCKETS.get(bucketKey);
  if (!bucket || now > bucket.resetAt) {
    BUCKETS.set(bucketKey, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return;
  }
  bucket.count += 1;
  if (bucket.count > RATE_LIMIT_MAX) {
    const retryAfter = Math.ceil((bucket.resetAt - now) / 1000);
    const err: any = new Error("Rate limit exceeded");
    err.retryAfter = retryAfter;
    throw err;
  }
}
