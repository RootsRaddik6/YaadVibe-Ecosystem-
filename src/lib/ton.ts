// src/lib/ton.ts
// Placeholder TON utilities. Adapt to the TON SDK you prefer.
export async function sendTon(to: string, amount: number, comment?: string) {
  // This file must be adapted to whichever ton-sdk you will use.
  // Example: call toncenter or other service to create a transfer.
  // We'll return a mock response for now; replace with real SDK calls.
  return {
    ok: true,
    to,
    amount,
    comment,
    txId: `mock-tx-${Date.now()}`,
  };
}
