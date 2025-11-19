import { parishData } from '@/data/parishData';
import { NextResponse } from 'next/server';

export async function GET() {
  const parishes = parishData.map(p => p.parish);
  return NextResponse.json(parishes);
}
