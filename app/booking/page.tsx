import FlagWave from "@/components/FlagWave";
import BackButton from "@/components/BackButton";
import TipButton from "@/components/TipButton";
import RollerDex from "@/components/RollerDex";
import { getUiPath } from "@/lib/imageFallback";

export default function BookingPage() {
  const parishImages = [
    "devonhouse",
    "springfarm",
    "eastoakridge",
    "sunrise"
  ];

  const parishLabels = [
    "Devon House — Kingston",
    "Spring Farm — Montego Bay",
    "East Oakridge — St Andrew",
    "Sunrise — Half Moon"
  ];

  function handleTip() {
    alert("Tip activated! (Payment integration ready)");
  }

  return (
    <main className="relative min-h-screen p-6 pt-20">

      <FlagWave />
      <BackButton />
      <TipButton onTip={handleTip} />

      <h1 className="text-4xl font-bold mb-6 text-center">
        Booking Menu
      </h1>

      <section className="glass p-6 rounded-2xl mb-8">
        <h2 className="text-2xl mb-2">Choose Parish</h2>

        <RollerDex
          images={parishImages}
          labels={parishLabels}
        />
      </section>

      <section className="glass p-6 rounded-2xl mb-8">
        <h2 className="text-2xl mb-4">Options</h2>

        <div className="flex flex-wrap gap-4">
          <button className="glass px-4 py-3 rounded-xl">🚗 Transport</button>
          <button className="glass px-4 py-3 rounded-xl">🏨 Hotels</button>
          <button className="glass px-4 py-3 rounded-xl">🍽 Restaurants</button>
          <button className="glass px-4 py-3 rounded-xl">🌊 Attractions</button>
          <button className="glass px-4 py-3 rounded-xl">📅 Tours</button>
        </div>
      </section>

    </main>
  );
}
