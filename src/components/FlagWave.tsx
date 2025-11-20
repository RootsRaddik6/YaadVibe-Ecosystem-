// components/FlagWave.tsx
"use client";
import Image from "next/image";
import { getUiPath } from "@/lib/imageFallback";

export default function FlagWave() {
  return (
    <div className="fixed top-4 left-4 z-50 animate-flagwave">
      <Image
        src={getUiPath("flag")}
        alt="Flag"
        width={56}
        height={36}
        priority
      />
      <style jsx>{`
        @keyframes flagwave {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(5deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-flagwave {
          animation: flagwave 2.5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
