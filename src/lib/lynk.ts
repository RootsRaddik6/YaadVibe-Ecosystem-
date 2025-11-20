// JamDex / Lynk stub interface
export async function lynkSend(handle: string, amount: number) {
  if (!amount || amount <= 0) return null;
  // TODO: replace with JamDex SDK call
  console.log(`lynkSend -> to: ${handle}, amount: ${amount}`);
  return `lynk_tx_${Date.now()}`;
}
