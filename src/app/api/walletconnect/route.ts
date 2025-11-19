import { NextResponse } from 'next/server';

const PROJECT_ID = process.env.WALLETCONNECT_PROJECT_ID;

export async function GET() {
  return NextResponse.json({
    projectId: PROJECT_ID,
    metadata: {
      name: "YaadVibe Ecosystem",
      description: "Jamaica Tourism Web3 Booking",
      url: "https://yaad-life-ecosystem.vercel.app",
      icons: ["https://yaad-life-ecosystem.vercel.app/favicon.ico"]
    }
  });
}
