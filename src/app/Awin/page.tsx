export default function AwinLanding() {
  return (
    <main style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
        YaadVibe Ecosystem – Travel, Culture & Local Experiences in Jamaica
      </h1>

      <p style={{ marginTop: "1rem", fontSize: "1.2rem" }}>
        YaadVibe is a decentralized travel companion built for discovering the
        real Jamaica — its parishes, towns, attractions, accommodations, tours,
        transportation options, and cultural experiences.
      </p>

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "bold" }}>What We Offer</h2>
        <ul style={{ marginTop: ".5rem", lineHeight: "1.7" }}>
          <li>Browse all 14 Jamaican parishes with real metadata</li>
          <li>Discover hotels, guesthouses, and unique stays</li>
          <li>Get local attractions, tours, events, flights & transportation data</li>
          <li>Wallet login (TON / Web3 optional)</li>
          <li>Optional tipping & digital payments via TON, Stripe, Lynk & JamDex</li>
          <li>No platform fees on tips — 100% goes to creators/vendors</li>
        </ul>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "bold" }}>Affiliate Transparency</h2>
        <p style={{ marginTop: ".5rem" }}>
          This website may contain outbound links to third-party services for
          flights, hotels, tours, transportation and other travel services.
          Some outbound links may be affiliate partnerships (including AWIN).
          This means YaadVibe may receive a commission at no extra cost to you.
        </p>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "bold" }}>Our Mission</h2>
        <p style={{ marginTop: ".5rem" }}>
          YaadVibe connects global travelers to authentic Jamaican experiences
          while supporting local communities, small businesses, and cultural
          heritage. Our ecosystem prioritizes transparency, accessibility, and
          community-driven discovery.
        </p>
      </section>

      <footer style={{ marginTop: "3rem", opacity: 0.8 }}>
        <p>© {new Date().getFullYear()} YaadVibe Ecosystem.</p>
      </footer>
    </main>
  );
}
