export async function sendTONPayment({ amount, to }) {
  return {
    ok: true,
    tx: "ton_dummy_hash",
    message: "TON payment simulated",
  };
}
