import { NextResponse } from "next/server";
import parishData from "../../parishData";

export async function GET() {
  return NextResponse.json({
    type: "hotels",
    data: parishData.hotels || [],
  });
}
