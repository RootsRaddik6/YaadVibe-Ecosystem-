import { NextResponse } from "next/server";
import { TRANSPORT } from "@/app/parishData";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const parish = searchParams.get("parish");

  if (!parish) {
    return NextResponse.json(
      { error: "Missing ?parish parameter" },
      { status: 400 }
    );
  }

  return NextResponse.json({
    transport: TRANSPORT.filter(x => x.parish.toLowerCase() === parish.toLowerCase())
  });
}
