import Link from "next/link";

export default function BackButton() {
  return (
    <Link
      href="/"
      className="text-xl font-bold bg-black/60 px-4 py-2 rounded-full backdrop-blur border border-white/30 fixed top-4 right-4 z-50"
    >
      ← Back
    </Link>
  );
}
