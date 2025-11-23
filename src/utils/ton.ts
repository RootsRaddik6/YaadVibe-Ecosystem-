import { TonClient, WalletContractV4 } from "ton";
import { mnemonicToPrivateKey } from "ton-crypto";

export const tonClient = new TonClient({
  endpoint: "https://testnet.toncenter.com/api/v2/jsonRPC",
  apiKey: process.env.TON_API_KEY
});
