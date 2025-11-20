import Image from "next/image";

export default function Header() {
  return (
    <header style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      height: 64,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 16px",
      background: "linear-gradient(90deg, rgba(0,0,0,0.4), rgba(0,0,0,0.25))",
      zIndex: 50
    }}>
      {/* LEFT: waving flag / 1Drop logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 56, height: 36, overflow: "hidden", borderRadius: 6 }}>
          <Image src="/images/logo/1drop-flag.png" alt="1Drop" width={56} height={36} priority />
        </div>
        <div style={{ fontWeight: 700 }}>
          <span style={{ color: "#ff0000", marginRight: 6 }}>YAAD</span>
          <span style={{ color: "#e8b300" }}>VIBE</span>
        </div>
      </div>

      {/* RIGHT: static back button (top-right) */}
      <div>
        <button aria-label="Back" style={{
          border: "none",
          background: "transparent",
          color: "#fff",
          fontSize: 18,
          padding: "8px 12px",
          borderRadius: 10,
          boxShadow: "0 4px 14px rgba(232,179,0,0.08)"
        }} onClick={() => history.back()}>
          ◀︎
        </button>
      </div>
    </header>
  );
}
