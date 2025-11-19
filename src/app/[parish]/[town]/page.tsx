import { parishData } from '@/data/parishData';
import Image from 'next/image';

export default function TownPage({ params }: { params: { parish: string; town: string } }) {
  const parishName = params.parish.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const townName = params.town.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  const parish = parishData.find(p => p.parish.toLowerCase() === parishName.toLowerCase());
  const townData = parish?.towns[townName];

  if (!townData) return <div>Town not found</div>;

  const tabs = [
    { name: 'Attractions', data: townData.attractions },
    { name: 'Tours', data: townData.tours },
    { name: 'Transport', data: townData.transport },
    { name: 'Stay', data: townData.accommodations },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="bg-gradient-to-r from-green-800 to-yellow-600 p-8 text-center">
        <h1 className="text-5xl font-bold">{townName}</h1>
        <p className="text-2xl opacity-90">{parishName} Parish</p>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tabs.map((tab) => (
            <div key={tab.name} className="bg-zinc-900 rounded-2xl p-6 border border-green-500">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">{tab.name}</h3>
              <ul className="space-y-3">
                {tab.data.map((item: string, i: number) => (
                  <li key={i} className="text-lg hover:text-green-400 transition">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-green-600 hover:bg-green-500 text-2xl px-12 py-6 rounded-full font-bold animate-pulse">
            Pay with TON Wallet 🚀
          </button>
        </div>
      </div>
    </div>
  );
}
