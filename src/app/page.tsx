// src/app/page.tsx   ← THIS IS YOUR HOME PAGE (PARISH GRID)

import Link from 'next/link';

async function getParishes() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/parishes`, { cache: 'no-store' });
  if (!res.ok) return [];
  return res.json();
}

export default async function Home() {
  const parishes: string[] = await getParishes();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-black to-yellow-900 text-white">
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-7xl md:text-9xl font-bold mb-8 drop-shadow-2xl bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
          YAADVIBE ECOSYSTEM
        </h1>
        <p className="text-2xl md:text-4xl mb-16 opacity-90">Jamaica Tourism × Web3 × TON Payments</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {parishes.map((parish) => (
            <Link
              key={parish}
              href={`/${parish.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-black/70 backdrop-blur-lg border-4 border-green-500 rounded-3xl p-12 text-4xl font-bold hover:scale-110 hover:bg-green-900/80 transition-all shadow-2xl"
            >
              {parish}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
