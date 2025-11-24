import "./globals.css";

export const metadata = {
  title: "YaadVibe Ecosystem",
  description: "Experience Jamaica your way",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
