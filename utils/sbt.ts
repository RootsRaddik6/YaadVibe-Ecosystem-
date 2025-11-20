export async function mintSBT(wallet: string, booking: any) {
  return {
    ok: true,
    sbt: "SBT_MINTED",
    wallet,
    data: booking,
  };
}
