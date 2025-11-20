// src/lib/lynk.ts
export async function createLynkPayment({ amount, currency = "JMD", metadata = {} }: { amount: number; currency?: string; metadata?: any }) {
  const apiKey = process.env.LYNK_API_KEY;
  if (!apiKey) throw new Error("Missing LYNK_API_KEY");

  const res = await fetch("https://api.lynk.global/v1/payments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      amount,
      currency,
      metadata,
    }),
  });

  if (!res.ok) throw new Error("Failed to create Lynk payment");
  return res.json();
}
