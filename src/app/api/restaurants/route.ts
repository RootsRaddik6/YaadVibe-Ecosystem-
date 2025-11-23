import { NextResponse } from "next/server";
import { getRestaurantsByParish } from "@/utils/restaurants";
import type { Restaurant } from "@/types/restaurants";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const parishCode = searchParams.get("parish");

  if (!parishCode) {
    return NextResponse.json(
      { error: "Missing ?parish parameter" },
      { status: 400 }
    );
  }

  const restaurants: Restaurant[] = getRestaurantsByParish(parishCode);

  return NextResponse.json({ restaurants });
}
