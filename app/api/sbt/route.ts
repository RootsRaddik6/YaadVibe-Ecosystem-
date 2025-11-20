import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { wallet, level } = await req.json();

    if (!wallet) {
      return NextResponse.json({ error: "Missing wallet address" }, { status: 400 });
    }

    return NextResponse.json({
      ok: true,
      sbt: {
        wallet,
        level: level || "Explorer",
        issued: Date.now(),
      },
    });
  } catch {
    return NextResponse.json(
      { error: "SBT generation failed" },
      { status: 500 }
    );
  }
}
