import { NextResponse } from "next/server";
import { getEventsByParish } from "@/utils/events";
import type { Event } from "@/types/events";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const parishCode = searchParams.get("parish");

  if (!parishCode) {
    return NextResponse.json(
      { error: "Missing ?parish parameter" },
      { status: 400 }
    );
  }

  const events: Event[] = getEventsByParish(parishCode);

  return NextResponse.json({ events });
}
