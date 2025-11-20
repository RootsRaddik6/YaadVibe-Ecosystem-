import { NextResponse } from "next/server";

const CJ_ID = process.env.CJ_AFFILIATE_ID;

// --- Validate environment var once on cold start ---
if (!CJ_ID) {
  console.error("❌ Missing CJ_AFFILIATE_ID environment variable");
}

export async function GET(request: Request) {
  try {
    // Validate ENV
    if (!CJ_ID) {
      return NextResponse.json(
        {
          ok: false,
          error: "CJ_AFFILIATE_ID not set in environment.",
        },
        { status: 500 }
      );
    }

    const { searchParams } = new URL(request.url);

    const hotel = searchParams.get("hotel") || "Sandals";

    // Supported partners
    const affiliateLinks: Record<string, string> = {
      Sandals: `https://www.anrdoezrs.net/links/${CJ_ID}/type/dlg/https://www.sandals.com`,
      Expedia: `https://www.expedia.com/affiliate/${CJ_ID}`,
      Booking: `https://www.booking.com/index.html?aid=${CJ_ID}`,
    };

    // Validate hotel
    if (!affiliateLinks[hotel]) {
      console.warn(`⚠️ Unsupported hotel value: ${hotel}`);
      return NextResponse.json(
        {
          ok: false,
          error: `Unsupported hotel '${hotel}'. Valid options: ${Object.keys(
            affiliateLinks
          ).join(", ")}`,
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      ok: true,
      hotel,
      link: affiliateLinks[hotel],
    });
  } catch (err: any) {
    console.error("❌ Affiliate API Error:", err);

    return NextResponse.json(
      {
        ok: false,
        error: "Server error generating affiliate link",
      },
      { status: 500 }
    );
  }
}
