// src/lib/ton.ts
import { TonClient, WalletContractV4, internal, beginCell } from "@ton/ton";
import { mnemonicToPrivateKey } from "@ton/crypto";

export const tonClient = new TonClient({
  endpoint: "https://testnet.toncenter.com/api/v2/jsonRPC",
  apiKey: process.env.TONCENTER_API_KEY,
});

// Initialize wallet from mnemonic
export async function getTonWallet() {
  const mnemonic = process.env.TON_MNEMONIC?.split(" ");
  if (!mnemonic) throw new Error("Missing TON_MNEMONIC");

  const keyPair = await mnemonicToPrivateKey(mnemonic);

  const wallet = WalletContractV4.create({
    publicKey: keyPair.publicKey,
    workchain: 0,
  });

  return { wallet, keyPair };
}

// Send TON payment
export async function sendTon(to: string, amountTon: number) {
  const { wallet, keyPair } = await getTonWallet();
  const walletContract = tonClient.open(wallet);

  const seqno = await walletContract.getSeqno();

  await walletContract.sendTransfer({
    secretKey: keyPair.secretKey,
    seqno,
    messages: [
      internal({
        to,
        value: amountTon * 1e9, // TON => nanoTON
      }),
    ],
  });

  return { success: true };
}
