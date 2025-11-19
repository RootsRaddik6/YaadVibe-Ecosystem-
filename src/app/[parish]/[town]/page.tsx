// src/app/[parish]/[town]/page.tsx

import { parishData } from '@/data/parishData';

export default function TownPage({ params }: { params: { parish: string; town: string } }) {
  const parishName = params.parish.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const townName = params.town.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  const parish = parishData.find(p => p.parish.toLowerCase() === parishName.toLowerCase());
  const townData = parish?.towns[townName];

  if (!townData) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center text-3xl">
        Town not found
      </div>
    );
  }

  const categories = [
    { name: 'Attractions', items: townData.attractions },
    { name: 'Tours', items: townData.tours },
    { name: 'Transport', items: townData.transport },
    { name: 'Stay', items: townData.accommodations },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-800 via-black to-yellow-600 py-12 text-center">
        <h1 className="text-6xl font-bold drop-shadow-lg">{townName}</h1>
        <p className="text-2xl opacity-90 mt-2">{parishName} Parish</p>
      </div>

      {/* 4 Tabs Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div key={cat.name} className="bg-zinc-900 rounded-3xl p-8 border-2 border-green-500 shadow-2xl">
              <h3 className="text-3xl font-bold text-yellow-400 mb-6">{cat.name}</h3>
              <ul className="space-y-4 text-lg">
                {cat.items.map((item: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-400 mr-2">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pay with TON button */}
        <div className="text-center mt-16">
          <button className="bg-green-600 hover:bg-green-500 text-3xl font-bold px-16 py-8 rounded-full shadow-2xl animate-pulse transition">
            Pay with TON Wallet 🚀
          </button>
        </div>
      </div>
    </div>
  );
}
