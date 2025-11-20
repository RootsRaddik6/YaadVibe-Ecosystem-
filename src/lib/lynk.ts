// src/lib/lynk.ts
export async function createLynkPayment(amount: number, currency: string = "USD") {
  const res = await fetch("https://api.lynk.global/payments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.LYNK_API_KEY}`,
    },
    body: JSON.stringify({
      amount,
      currency,
      metadata: { service: "YaadVibe Booking" },
    }),
  });

  if (!res.ok) throw new Error("Failed to create Lynk payment");

  return await res.json();
}
