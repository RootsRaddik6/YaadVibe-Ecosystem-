import Link from 'next/link';

export default async function ParishPage({ params }: { params: { parish: string } }) {
  const parishName = params.parish.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/towns?parish=${parishName}`, { cache: 'no-store' });
  const towns: string[] = await res.json();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-green-950 text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold text-center mb-12 capitalize drop-shadow-lg">
          {parishName} Parish
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {towns.map((town) => (
            <Link
              key={town}
              href={`/${params.parish}/${town.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-gradient-to-br from-yellow-500 to-green-600 p-12 rounded-3xl text-center font-bold text-3xl hover:scale-110 transition-all shadow-2xl"
            >
              {town}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
