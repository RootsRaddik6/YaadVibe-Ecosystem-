// src/lib/ton.ts
// This is a minimal TON wrapper — adapt to the exact SDK you prefer.
// The example below uses a generic HTTP client approach.

export const TON_ENDPOINT = process.env.TON_ENDPOINT || "https://testnet.toncenter.com";
export const TON_API_KEY = process.env.TONCENTER_API_KEY || "";

export async function sendTon(to: string, amountNano: number) {
  // This function sketches sending TON via your chosen SDK or provider.
  // Replace with Ton SDK (e.g. ton-client-js) implementation you prefer.
  // Example: call your TON node or TONCenter API to submit transfer.
  const res = await fetch(`${TON_ENDPOINT}/v2/transfer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": TON_API_KEY,
    },
    body: JSON.stringify({ to, amount: amountNano }),
  });
  if (!res.ok) throw new Error(`TON send failed: ${res.status}`);
  return res.json();
}
