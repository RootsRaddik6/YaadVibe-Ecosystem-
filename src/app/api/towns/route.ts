import { NextResponse } from "next/server";
import { TOWNS } from "@/app/parishData";

export async function GET() {
  return NextResponse.json(TOWNS);
}
  const { searchParams } = new URL(request.url);
  const parish = searchParams.get('parish');
  
  if (!parish) return NextResponse.json({ error: 'Parish required' }, { status: 400 });

  const found = parishData.find(p => p.parish.toLowerCase() === parish.toLowerCase());
  if (!found) return NextResponse.json({ error: 'Parish not found' }, { status: 404 });

  return NextResponse.json(Object.keys(found.towns));
}
