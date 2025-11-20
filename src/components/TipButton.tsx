"use client";

export default function TipButton({ onTip }: { onTip: () => void }) {
  return (
    <button
      onClick={onTip}
      className="fixed bottom-6 right-6 z-50 bg-yellow-400 text-black px-5 py-3 text-lg font-bold rounded-full shadow-xl"
    >
      🔥 Tip
    </button>
  );
}
