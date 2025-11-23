import * as ParishData from "@/parishData";

export async function GET() {
  return NextResponse.json(TOURS);
}
