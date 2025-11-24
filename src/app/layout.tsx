export const metadata = {
  title: "YaadVibe Ecosystem",
  description: "Discover Jamaica effortlessly.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
