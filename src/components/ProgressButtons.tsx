"use client";

interface Props {
  step: number;
  setStep: (n: number) => void;
}

export default function ProgressButtons({ step, setStep }: Props) {
  const steps = [
    { id: 1, icon: "📍" }, // select parish
    { id: 2, icon: "🚐" }, // transport
    { id: 3, icon: "🏨" }, // hotels
    { id: 4, icon: "🍽️" }, // restaurants
    { id: 5, icon: "🎒" }, // excursions
    { id: 6, icon: "📅" }, // schedule
    { id: 7, icon: "💳" }, // payment
  ];

  return (
    <div className="flex justify-center mb-4 gap-3">
      {steps.map((s) => (
        <button
          key={s.id}
          onClick={() => setStep(s.id)}
          className={`text-2xl px-3 py-2 rounded-full border transition ${
            step === s.id
              ? "bg-white text-black border-white"
              : "bg-black/40 border-white/25 text-white"
          }`}
        >
          {s.icon}
        </button>
      ))}
    </div>
  );
}
