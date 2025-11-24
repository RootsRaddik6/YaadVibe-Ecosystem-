"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  "/images/backgrounds/IMG_0039.jpeg",
  "/images/parishes/Camera_1760355457294.jpeg",
  "/images/parishes/Camera_1761045942319.jpeg",
  "/images/parishes/IMG_0090.jpeg",
  "/images/parishes/IMG_0142.jpeg",
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="landing">
      <div className="slideshow">
        <Image
          src={slides[current]}
          alt="Slideshow"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      <div className="overlay">
        <h1>YaadVibe Ecosystem</h1>
        <p>Experience Jamaica Like Never Before</p>
      </div>
    </main>
  );
}
