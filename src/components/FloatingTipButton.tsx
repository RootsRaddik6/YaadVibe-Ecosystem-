export default function FloatingTipButton(){
  async function openTipping(){
    // open tipping modal — implement modal logic / TON / Lynk integration
    alert("Tipping modal (implement TON / Lynk logic)");
  }
  return (
    <div style={{
      position: "fixed", left: 18, bottom: 24, zIndex: 60
    }}>
      <button onClick={openTipping} style={{
        width: 64, height: 64, borderRadius: 36, border: "none",
        background: "linear-gradient(180deg,#ff6b6b,#ff3b3b)",
        boxShadow: "0 8px 30px rgba(255,59,59,0.28)",
        color: "#fff", fontSize: 24
      }}>
        🔥
      </button>
    </div>
  );
}
