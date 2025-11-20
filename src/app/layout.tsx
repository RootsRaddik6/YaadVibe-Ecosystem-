import "./globals.css";
import Header from "@/components/Header";
import FloatingTipButton from "@/components/FloatingTipButton";

export const metadata = {
  title: "YaadVibe Ecosystem",
  description: "YaadVibe — Travel, Tours, Food & Local Jamaica"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <FloatingTipButton />
      </body>
    </html>
  );
}
