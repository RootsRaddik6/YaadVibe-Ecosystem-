"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="fixed top-4 right-4 z-50 bg-black/60 px-4 py-2 rounded-xl border border-white/30 backdrop-blur-md"
    >
      ⬅ Back
    </button>
  );
}
