import { createConfig, http } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { walletConnect, injected } from 'wagmi/connectors';

export const wagmiConfig = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    walletConnect({ projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID! }),
    injected(),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});
