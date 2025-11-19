import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'YaadVibe Ecosystem',
  description: 'Jamaica Tourism Web3 Powered by TON',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <header className="bg-black/90 backdrop-blur sticky top-0 z-50 border-b border-green-500">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
              YAADVIBE
            </h1>
            <w3m-button />
          </div>
        </header>
        {children}
      </body>
    </html>
  )
} 
