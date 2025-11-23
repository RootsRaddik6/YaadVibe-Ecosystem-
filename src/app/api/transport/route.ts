import { NextResponse } from "next/server";
import parishData from "../../parishData";

export async function GET() {
  return NextResponse.json({
    type: "transport",
    data: parishData.transport || [],
  });
}
