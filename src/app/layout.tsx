import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YaadVibe Ecosystem",
  description: "Seamless Jamaica travel, booking, food, tours & DApp payments",
  manifest: "/manifest.json",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <div className="min-h-screen w-full relative overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
