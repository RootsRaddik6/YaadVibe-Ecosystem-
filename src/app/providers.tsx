'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { wagmiConfig } from '@/lib/wagmi';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

const queryClient = new QueryClient();

createWeb3Modal({
  wagmiConfig,
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
  enableAnalytics: false,
  themeMode: 'dark',
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TonConnectUIProvider manifestUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/tonconnect-manifest.json`}>
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </WagmiProvider>
    </TonConnectUIProvider>
  );
}
