"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Automatically load all hero images from /public/images
const slides = [
  "/images/IMG_0039.jpeg",
  "/images/Camera_1760355457294.jpeg",
  "/images/Camera_1761045942319.jpeg",
  "/images/IMG_0090.jpeg",
  "/images/IMG_0142.jpeg",
];

const SLIDE_DURATION = 5000; // 5 seconds per slide — adjust as needed

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
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
