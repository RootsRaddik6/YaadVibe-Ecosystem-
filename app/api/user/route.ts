import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { wallet } = await req.json();

    if (!wallet) {
      return NextResponse.json({ error: "No wallet provided" }, { status: 400 });
    }

    // Placeholder (later: check DB)
    return NextResponse.json({
      ok: true,
      user: {
        wallet,
        status: "returning",
        sbtLevel: "Jamaica Explorer",
      },
    });
  } catch {
    return NextResponse.json({ error: "User lookup failed" }, { status: 500 });
  }
}
