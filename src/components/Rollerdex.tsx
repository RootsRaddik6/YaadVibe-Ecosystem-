"use client";

import { useState } from "react";

interface RollerDexProps {
  title: string;
  options: string[];
  value: string;
  onSelect: (val: string) => void;
}

export default function RollerDex({
  title,
  options,
  value,
  onSelect,
}: RollerDexProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-black/45 backdrop-blur border border-white/20 rounded-2xl p-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="text-lg font-semibold">{title}</span>
        <span>{open ? "▼" : "▶"}</span>
      </div>

      {open && (
        <div className="mt-3 flex flex-col gap-2">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => onSelect(opt)}
              className={`px-4 py-3 rounded-xl border transition ${
                value === opt
                  ? "bg-white text-black"
                  : "bg-black/40 border-white/25"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
