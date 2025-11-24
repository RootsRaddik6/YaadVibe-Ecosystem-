"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
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
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative w-full h-screen overflow-hidden">
      {slides.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt="Jamaica Landscape"
          fill
          className={`absolute top-0 left-0 object-cover transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-extrabold drop-shadow-lg">
          YaadVibe Ecosystem
        </h1>
      </div>
    </main>
  );
}
