import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const hotel = searchParams.get("hotel") || "Sandals";

  const CJ_ID = process.env.CJ_AFFILIATE_ID;

  const affiliateLinks: Record<string, string> = {
    Sandals: `https://www.anrdoezrs.net/links/${CJ_ID}/type/dlg/https://www.sandals.com`,
    Expedia: `https://www.expedia.com/affiliate/${CJ_ID}`,
    Booking: `https://www.booking.com/index.html?aid=${CJ_ID}`,
  };

  return NextResponse.json({
    ok: true,
    link: affiliateLinks[hotel] || affiliateLinks.Booking,
  });
}
