"use client";

interface Props {
  step: number;
  setStep: (n: number) => void;
}

export default function ProgressButtons({ step, setStep }: Props) {
  const steps = [
    { id: 1, icon: "📍" },
    { id: 2, icon: "🚐" },
    { id: 3, icon: "🏨" },
    { id: 4, icon: "🍽️" },
    { id: 5, icon: "🎒" },
    { id: 6, icon: "📅" },
    { id: 7, icon: "💳" },
  ];

  return (
    <div className="flex justify-center mb-4 gap-3">
      {steps.map((s) => (
        <button
          key={s.id}
          onClick={() => setStep(s.id)}
          className={`text-2xl px-3 py-2 rounded-full border transition ${
            step === s.id
              ? "bg-white text-black"
              : "bg-black/40 border-white/25"
          }`}
        >
          {s.icon}
        </button>
      ))}
    </div>
  );
}
