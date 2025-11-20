import { NextResponse } from "next/server";
import { mintSBT } from "@/utils/sbt";

export async function POST(req: Request) {
  const data = await req.json();
  const result = await mintSBT(data.wallet, data.booking);

  return NextResponse.json(result);
}
