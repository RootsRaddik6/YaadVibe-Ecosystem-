export async function sendJamDex(to: string, amount: number) {
  return await fetch("https://api.lynk.com/jamdex/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.LYNK_API_KEY}`
    },
    body: JSON.stringify({
      to,
      amount
    })
  }).then(r => r.json());
}
