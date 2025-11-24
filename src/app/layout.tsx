import "./global.css";

export const metadata = {
  title: "YaadVibe Ecosystem",
  description: "Find authentic Jamaican vibes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
