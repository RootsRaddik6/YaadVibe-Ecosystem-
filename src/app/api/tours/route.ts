import { NextResponse } from "next/server";
import { PARISHES } from "../../../parishData/parishes";

export async function GET() {
  return Response.json({ parishes: PARISHES });
}
