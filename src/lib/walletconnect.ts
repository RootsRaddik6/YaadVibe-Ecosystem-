// src/lib/walletconnect.ts
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

export function createWalletConnector() {
  const connector = new WalletConnect({
    bridge: "https://bridge.walletconnect.org",
  });

  if (!connector.connected) {
    connector.createSession().then(() => {
      QRCodeModal.open(connector.uri);
    });
  }

  return connector;
}
