import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  // Minimal stub: create draft booking record (replace with DB)
  const booking = {
    id: "bk_" + Date.now(),
    status: "draft",
    items: body.items ?? [],
    totalAmount: body.totalAmount ?? 0,
    currency: body.currency ?? "USD"
  };

  // In real app: insert into DB, return booking id and estimate
  return NextResponse.json({ booking, message: "Draft created (stub)" });
}
