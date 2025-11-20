// TON / SOL / MATIC relayer stubs
export async function chainSend({ method, to, amount }: { method: string; to: string; amount: number }) {
  console.log("chainSend", method, to, amount);
  return `${method}_tx_${Date.now()}`; // txId stub
}
