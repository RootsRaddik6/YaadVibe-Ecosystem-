import { NextResponse } from "next/server";
import { prisma } from "@/app/utils/prisma";

export async function GET() {
  try {
    const test = await prisma.$queryRaw`SELECT NOW()`;
    return NextResponse.json({ ok: true, now: test });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) });
  }
}
