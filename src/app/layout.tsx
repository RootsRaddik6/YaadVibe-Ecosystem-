import "./global.css";

export const metadata = {
  title: "YaadVibe Ecosystem",
  description: "Experience Jamaica Like Never Before",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
