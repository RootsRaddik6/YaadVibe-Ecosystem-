// src/app/layout.tsx
import "./global.css";

export const metadata = {
  title: "YaadVibe Ecosystem",
  description: "Experience Jamaica Like Never Before",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
