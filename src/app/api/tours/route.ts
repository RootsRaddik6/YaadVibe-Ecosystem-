import { NextResponse } from "next/server";
import { PARISHES } from "@/app/parishdata";

export async function GET() {
  return Response.json({ parishes: PARISHES });
}
