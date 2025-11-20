import { SITE } from "@/config/siteConfig";
import ParishRollerDex from "@/components/ParishRollerDex";
import IconRow from "@/components/IconRow";

export default function HomePage() {
  return (
    <section style={{ padding: 24 }}>
      <h1>YaadVibe Ecosystem</h1>
      <p>Base: {SITE.BASE_URL}</p>

      <div style={{ marginTop: 24 }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ borderRadius: 12, overflow: "hidden", position: "relative" }}>
            {/* background image will be set via CSS file using public/images/backgrounds/main-bg.jpg */}
            <div style={{ padding: 24 }}>
              <div style={{ marginBottom: 18 }}>
                <strong>Quick Actions</strong>
                <IconRow />
              </div>

              <ParishRollerDex />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
