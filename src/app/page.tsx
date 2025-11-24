"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const slides = [
    "/images/backgrounds/IMG_0039.jpeg",
    "/images/logo/IMG_0460.png",
    "/images/parishes/Camera_1760355457294.jpeg",
    "/images/parishes/Camera_1761045942319.jpeg",
    "/images/parishes/IMG_0090.jpeg",
    "/images/parishes/IMG_0142.jpeg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <main className="relative w-full h-screen overflow-hidden">
      <Image
        src={slides[current]}
        alt="Slideshow Background"
        fill
        priority
        style={{ objectFit: "cover" }}
      />

      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className="text-white text-5xl font-extrabold drop-shadow-lg">
          Welcome to YaadVibe Ecosystem
        </h1>
      </div>
    </main>
  );
}
