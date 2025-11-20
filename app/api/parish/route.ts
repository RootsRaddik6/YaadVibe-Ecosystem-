import { NextResponse } from "next/server";

const parishes = [
  "Kingston",
  "St. Andrew",
  "St. Thomas",
  "Portland",
  "St. Mary",
  "St. Ann",
  "Trelawny",
  "St. James",
  "Hanover",
  "Westmoreland",
  "St. Elizabeth",
  "Manchester",
  "Clarendon",
  "St. Catherine"
];

export async function GET() {
  return NextResponse.json({
    ok: true,
    parishes,
  });
}
