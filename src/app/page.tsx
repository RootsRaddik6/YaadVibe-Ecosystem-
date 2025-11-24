export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "white",
        padding: "2rem",
        textAlign: "center"
      }}
    >
      <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
        YAADVIBE
      </h1>
      <p style={{ marginTop: "1rem", opacity: 0.8 }}>
        Your Gateway to Jamaica’s Digital Travel & Cultural Ecosystem
      </p>

      <button
        style={{
          marginTop: "2rem",
          padding: "1rem 2rem",
          background: "#00d26a",
          border: "none",
          fontSize: "1.2rem",
          borderRadius: "12px",
          cursor: "pointer"
        }}
        onClick={() => window.location.href = "/map"}
      >
        Enter Platform
      </button>
    </main>
  );
}
