// src/app/components/BookingForm.tsx
"use client";
import React, { useEffect, useState } from "react";

type ParishSummary = { name: string; code: string; description?: string; image?: string; mainAirport?: string | null; };
type Meta = any;

export default function BookingForm() {
  const [parish, setParish] = useState<string>("");
  const [parishMeta, setParishMeta] = useState<Meta | null>(null);
  const [fullData, setFullData] = useState<any | null>(null);
  const [town, setTown] = useState<string>("");

  useEffect(() => {
    if (!parish) return;
    // fast meta (summary)
    fetch(`/api/parishes/${parish}/summary`, { headers: { "x-api-key": "" } })
      .then(r => r.json())
      .then(js => { if (js.status === "ok") setParishMeta(js.payload.meta); else setParishMeta(null); })
      .catch(() => setParishMeta(null));

    // full data later (optional)
    fetch(`/api/parishes/${parish}`)
      .then(r => r.json())
      .then(js => { if (js.status === "ok") setFullData(js.payload); })
      .catch(() => setFullData(null));
  }, [parish]);

  return (
    <div className="p-4">
      <label>Parish</label>
      <input value={parish} onChange={e => setParish(e.target.value)} placeholder="e.g. st-james" />
      {parishMeta && (
        <div className="mt-3 p-2 border rounded">
          <strong>Summary</strong>
          <div>Hotels: {parishMeta.hotels.count}</div>
          <div>Tours: {parishMeta.tours.count}</div>
          <div>Attractions: {parishMeta.attractions.count}</div>
        </div>
      )}
      {fullData && (
        <div className="mt-3">
          <strong>Town Picker</strong>
          <select value={town} onChange={e => setTown(e.target.value)}>
            <option value="">Choose town</option>
            {fullData.towns.map((t: string) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      )}
    </div>
  );
}
