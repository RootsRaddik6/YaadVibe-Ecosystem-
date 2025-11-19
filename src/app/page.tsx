import Link from 'next/link';
import { Suspense } from 'react';

async function getParishes() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/parishes`, { cache: 'no-store' });
  return res.json();
}

export default async function Home() {
  const parishes = await getParishes();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-black to-yellow-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-6xl font-bold text-center mb-4 drop-shadow-lg">
          YAADVIBE ECOSYSTEM 🇯🇲
        </h1>
        <p className="text-xl text-center mb-12 opacity-90">
          Book Tours • Pay with TON • Earn Affiliate
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {parishes.map((parish: string) => (
            <Link
              key={parish}
              href={`/${parish.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-black/50 backdrop-blur-sm border-2 border-green-500 rounded-2xl p-8 text-center hover:bg-green-900/50 transition-all hover:scale-105 shadow-2xl"
            >
              <h2 className="text-2xl font-bold">{parish}</h2>
              <p className="text-yellow-400 mt-2">Explore →</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
