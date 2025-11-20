"use client";
import Image from "next/image";
import { useState } from "react";
import { getUiPath } from "@/lib/imageFallback";

interface RollerProps {
  images: string[];
  labels: string[];
}

export default function RollerDex({ images, labels }: RollerProps) {
  const [index, setIndex] = useState(0);

  function next() { setIndex((i) => (i + 1) % images.length); }
  function prev() { setIndex((i) => (i - 1 + images.length) % images.length); }

  return (
    <div className="w-full flex flex-col items-center mt-4">
      <div className="relative w-72 h-48 rounded-xl overflow-hidden">
        <Image
          src={getUiPath(images[index])}
          alt={labels[index]}
          fill
          className="object-cover"
        />
      </div>

      <p className="mt-3 text-lg font-bold">{labels[index]}</p>

      <div className="flex gap-4 mt-4">
        <button onClick={prev} className="px-4 py-2 rounded-lg glass">◀</button>
        <button onClick={next} className="px-4 py-2 rounded-lg glass">▶</button>
      </div>
    </div>
  );
}
