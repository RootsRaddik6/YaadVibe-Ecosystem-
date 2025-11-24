export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a0a0a, #1c1c1c)",
        color: "white",
        fontFamily: "system-ui, sans-serif",
        padding: "40px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: 800,
          marginBottom: "20px",
          letterSpacing: "-1px",
        }}
      >
        YAADVIBE ECOSYSTEM
      </h1>

      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "600px",
          lineHeight: 1.6,
          opacity: 0.85,
          marginBottom: "40px",
        }}
      >
        Discover Jamaica like never before. Explore parishes, book stays, find
        tours, enjoy attractions, and connect with transportation — all powered
        by crypto-friendly, community-driven technology.
      </p>

      <a
        href="#"
        style={{
          padding: "14px 28px",
          borderRadius: "8px",
          background: "#00d26a",
          color: "#000",
          fontWeight: 700,
          fontSize: "1.1rem",
          textDecoration: "none",
          transition: "0.2s",
        }}
        onMouseOver={(e) => {
          (e.target as HTMLAnchorElement).style.background = "#00ff80";
        }}
        onMouseOut={(e) => {
          (e.target as HTMLAnchorElement).style.background = "#00d26a";
        }}
      >
        Enter the Experience
      </a>
    </main>
  );
}
