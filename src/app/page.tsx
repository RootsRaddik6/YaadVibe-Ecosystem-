// src/app/page.tsx
"use client";

import { useEffect, useState } from "react";

const images = [
  "/images/backgrounds/IMG_0039.jpeg",
  "/images/parishes/IMG_0090.jpeg",
  "/images/parishes/IMG_0142.jpeg",
  "/images/logo/IMG_0460.png"
  // add or reorder any other files you have in public/images
];

export default function Home() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % images.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="landing">
      <div className="slideshow">
        {images.map((src, i) => (
          <div
            key={src}
            className={`slide ${i === idx ? "active" : ""}`}
            style={{ backgroundImage: `url(${src})` }}
            role="img"
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="hero">
        <img src="/images/logo/IMG_0460.png" alt="YaadVibe" className="logo" />
        <h1>YaadVibe</h1>
        <p>Your Gateway to Jamaica’s Digital Experience</p>

        <div className="ctaRow">
          <a className="cta primary" href="#">Launch DApp (Coming Soon)</a>
          <a className="cta" href="/learn">Learn More</a>
        </div>

        <p className="small">Touch the map UI coming soon. For now enjoy the views.</p>
      </div>
    </main>
  );
}
