export async function sendLynkPayment(amount: number, orderId: string) {
  const apiKey = process.env.LYNK_API_KEY;
  const merchantId = process.env.LYNK_MERCHANT_ID;

  if (!apiKey || !merchantId)
    throw new Error("Missing LYNK credentials");

  // Mock Lynk response for now
  return {
    status: "success",
    amount,
    orderId,
    reference: "LYNK-" + Math.floor(Math.random() * 999999),
  };
}
