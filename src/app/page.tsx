"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  // Auto-load ANY images inside /public/images
  const slides = [
    "/images/IMG_0039.jpeg",
    "/images/Camera_1760355457294.jpeg",
    "/images/Camera_1761045942319.jpeg",
    "/images/IMG_0090.jpeg",
    "/images/IMG_0142.jpeg",
    "/images/D5A1A39A-D1DF-4002-AC12-BD3C81764158.jpeg",
    "/images/8EF96E64-DD82-49FD-B51A-B100105FE214.jpeg",
    "/images/04DAFE0C-E9EA-4F3F-B96B-D2B9AB3ADB00.jpeg",
    "/images/B39C1C21-939B-4732-8E45-2308E88C8B13.jpeg",
    "/images/608E2C3C-5B40-4D8C-B55C-E6BF86C9AAEB.jpeg",
    "/images/0BFAFA98-68BD-4013-BDAB-4E0B860EFAA6.jpeg",
    "/images/21D65EED-BF89-492B-A94D-74A304914481.jpeg",
  ];

  const [current, setCurrent] = useState(0);

  // CHANGE THIS VALUE TO ADJUST HOW LONG EACH SLIDE HOLDS
  const SLIDE_DURATION = 5000; // 5 seconds per slide

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="landing">
      {/* Background Slideshow */}
      <div className="slideshow">
        <Image
          src={slides[current]}
          alt="Jamaica slideshow"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Overlay Content */}
      <div className="overlay">
        <h1>YaadVibe Ecosystem</h1>
        <p>Experience Jamaica Like Never Before</p>

        <div className="buttons">
          <button className="primary">Launch DApp (Coming Soon)</button>
          <button className="secondary">Learn More</button>
        </div>
      </div>
    </main>
  );
}
