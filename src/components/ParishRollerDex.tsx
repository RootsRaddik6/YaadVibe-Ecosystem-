import { useState } from "react";

const PARISHES = [
  { id: "kingston", title: "Kingston", img: "/images/parishes/kingston.jpg", short: "Capital culture & food" },
  { id: "st_andrew", title: "St. Andrew", img: "/images/parishes/st_andrew.jpg", short: "Hills & estates" },
  { id: "st_james", title: "St. James", img: "/images/parishes/st_james.jpg", short: "Beaches & nightlife" }
];

export default function ParishRollerDex(){
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div>
      {PARISHES.map(p => (
        <div key={p.id} style={{ marginBottom: 12, borderRadius: 10, overflow:'hidden', background:'rgba(0,0,0,0.45)' }}>
          <button onClick={() => setOpen(open === p.id ? null : p.id)} style={{
            width: '100%', padding: 14, display:'flex', justifyContent:'space-between', alignItems:'center', border:'none', background:'transparent', color:'#fff'
          }}>
            <div style={{ display:'flex', gap:12, alignItems:'center' }}>
              <img src={p.img} alt={p.title} style={{ width:72, height:48, objectFit:'cover', borderRadius:8 }} />
              <div>
                <div style={{ fontWeight:700 }}>{p.title}</div>
                <div style={{ fontSize:12, opacity:0.85 }}>{p.short}</div>
              </div>
            </div>
            <div style={{ fontSize:20 }}>{open === p.id ? "▾" : "▸"}</div>
          </button>
          {open === p.id && (
            <div style={{ padding: 12, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              <p style={{ margin: 0 }}>Tours, Transport, Food & more. Tap to add to booking.</p>
              <div style={{ marginTop:10, display:'flex', gap:8 }}>
                <button style={{ padding:'8px 10px', borderRadius:8, border:'none', background:'var(--gold)', color:'#000' }}>Explore</button>
                <button style={{ padding:'8px 10px', borderRadius:8, border:'1px solid rgba(255,255,255,0.08)', color:'#fff', background:'transparent' }}>Add to Itinerary</button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
