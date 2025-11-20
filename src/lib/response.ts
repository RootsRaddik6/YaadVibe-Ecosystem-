// src/lib/response.ts
import { NextResponse } from "next/server";

export function ok(payload: any) {
  return NextResponse.json({ status: "ok", payload }, { status: 200 });
}

export function err(message: string, code = 400) {
  return NextResponse.json({ status: "error", message }, { status: code });
}
