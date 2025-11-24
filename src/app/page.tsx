"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  // Pull images from your repo folders
  const slides = [
    "/images/backgrounds/IMG_0039.jpeg",
    "/images/parishes/Camera_1760355457294.jpeg",
    "/images/parishes/Camera_1761045942319.jpeg",
    "/images/parishes/IMG_0090.jpeg",
    "/images/parishes/IMG_0142.jpeg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds per slide

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <main className="relative w-full h-screen overflow-hidden">

      {/* --- BACKGROUND SLIDESHOW --- */}
      {slides.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt="Jamaica Landscape"
          fill
          priority={index === 0}
          className={`absolute top-0 left-0 object-cover transition-opacity duration-1000
            ${current === index ? "opacity-100" : "opacity-0"}
          `}
        />
      ))}

      {/* --- OVERLAY --- */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* --- CONTENT ON TOP --- */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-5">
        <h1 className="text-4xl font-bold drop-shadow-lg">YaadVibe Ecosystem</h1>
        <p className="mt-2 text-lg drop-shadow-lg">Experience Jamaica Like Never Before</p>

        <div className="mt-6 flex gap-4">
          <button className="px-6 py-3 bg-green-500 rounded-md font-semibold shadow-lg">
            Launch DApp (Coming Soon)
          </button>

          <button className="px-6 py-3 bg-white/80 text-black rounded-md font-semibold shadow-lg">
            Learn More
          </button>
        </div>
      </div>

    </main>
  );
}
