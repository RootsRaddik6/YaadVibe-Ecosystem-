import Link from "next/link";

const ICONS = [
  { key: "accom", label: "Accommodation", emoji: "🏠", href: "/accommodation" },
  { key: "lugg", label: "Luggage", emoji: "🧳", href: "/luggage" },
  { key: "flight", label: "Flights", emoji: "✈️", href: "/flights" },
  { key: "cal", label: "Calendar", emoji: "📅", href: "/calendar" },
  { key: "map", label: "Map", emoji: "🌍", href: "/map" },
  { key: "attract", label: "Attractions", emoji: "🎢", href: "/attractions" },
  { key: "taxi", label: "Taxi", emoji: "🚕", href: "/taxi" },
  { key: "ticket", label: "Tickets", emoji: "🎟️", href: "/tickets" },
  { key: "food", label: "Food", emoji: "🍽️", href: "/food" }
];

export default function IconRow(){
  return (
    <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
      {ICONS.map(i => (
        <Link key={i.key} href={i.href} style={{
          display:'inline-flex', alignItems:'center', gap:8, padding:'10px 14px',
          borderRadius: 14, background:'rgba(255,255,255,0.04)', color:'#fff', textDecoration:'none'
        }}>
          <span style={{ fontSize:20 }}>{i.emoji}</span>
          <span style={{ fontSize:13 }}>{i.label}</span>
        </Link>
      ))}
    </div>
  );
}
