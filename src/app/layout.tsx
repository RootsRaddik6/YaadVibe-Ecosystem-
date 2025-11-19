import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import '@web3modal/wagmi/react/styles.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'YaadVibe Ecosystem',
  description: 'Jamaica Tourism × Web3 × TON Payments',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Providers>
          <header className="bg-black/90 backdrop-blur sticky top-0 z-50 border-b-4 border-green-500">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 via-yellow-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg">
                YAADVIBE
              </h1>
              <div className="flex gap-4 items-center">
                <w3m-button size="sm" label="Connect Wallet" />
              </div>
            </div>
          </header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
