// src/lib/lynk.ts
export async function createLynkPayment(amount: number, currency = "JMD", metadata = {}) {
  const res = await fetch("https://api.lynk.global/v1/checkout/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.LYNK_API_KEY}`,
    },
    body: JSON.stringify({ amount, currency, metadata }),
  });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`Lynk create failed: ${res.status} ${txt}`);
  }
  return res.json();
}
