"use client";

import { useState } from "react";

import {
  PARISHES,
  TOWNS,
  HOTELS,
  TOURS,
  TRANSPORT_OPTIONS,
  FLIGHTS,
  ATTRACTIONS
} from "@/app/parishData";

const BookingForm = () => {
  const [selectedParish, setSelectedParish] = useState<string>("");
  const [selectedTown, setSelectedTown] = useState<string>("");

  const towns = TOWNS.find(t => t.parishCode === selectedParish)?.towns || [];

  const hotels = HOTELS.filter(h => h.parishCode === selectedParish);
  const tours = TOURS.filter(t => t.parishCode === selectedParish);
  const transport = TRANSPORT_OPTIONS.filter(t => t.parishCode === selectedParish);
  const attractions = ATTRACTIONS.filter(a => a.parishCode === selectedParish);
  const airports = FLIGHTS.filter(f => f.parishHint === selectedParish);

  return (
    <div className="booking-form p-4 space-y-6">
      {/* SELECT PARISH */}
      <div>
        <label className="font-semibold block mb-1">Select Parish</label>
        <select
          className="border p-2 rounded w-full"
          value={selectedParish}
          onChange={(e) => {
            setSelectedParish(e.target.value);
            setSelectedTown("");
          }}
        >
          <option value="">Choose parish...</option>
          {PARISHES.map(p => (
            <option key={p.code} value={p.code}>{p.name}</option>
          ))}
        </select>
      </div>

      {/* SELECT TOWN */}
      {selectedParish && (
        <div>
          <label className="font-semibold block mb-1">Select Town</label>
          <select
            className="border p-2 rounded w-full"
            value={selectedTown}
            onChange={(e) => setSelectedTown(e.target.value)}
          >
            <option value="">Choose town...</option>
            {towns.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      )}

      {/* HOTELS */}
      {selectedParish && (
        <div>
          <h3 className="text-lg font-bold">Hotels in this area</h3>
          <ul className="list-disc ml-5">
            {hotels.length === 0 && <li>No listed hotels yet.</li>}
            {hotels.map(h => (
              <li key={h.name}>
                {h.name} {h.rating ? `(${h.rating}★)` : ""}  
                {h.url && <a className="text-blue-500 ml-2" href={h.url} target="_blank">Visit</a>}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* TOURS */}
      {selectedParish && (
        <div>
          <h3 className="text-lg font-bold">Available Tours</h3>
          <ul className="list-disc ml-5">
            {tours.length === 0 && <li>No tours listed.</li>}
            {tours.map(t => (
              <li key={t.name}>
                {t.name} — {t.durationMins ? `${t.durationMins} mins` : "Duration varies"}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* TRANSPORT */}
      {selectedParish && (
        <div>
          <h3 className="text-lg font-bold">Transport Options</h3>
          <ul className="list-disc ml-5">
            {transport.length === 0 && <li>No transport options.</li>}
            {transport.map(t => (
              <li key={t.name}>
                {t.name} ({t.type}) {t.notes ? `— ${t.notes}` : ""}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ATTRACTIONS */}
      {selectedParish && (
        <div>
          <h3 className="text-lg font-bold">Attractions</h3>
          <ul className="list-disc ml-5">
            {attractions.length === 0 && <li>No attractions.</li>}
            {attractions.map(a => (
              <li key={a.name}>
                {a.name} — {a.type}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* FLIGHTS */}
      {selectedParish && airports.length > 0 && (
        <div>
          <h3 className="text-lg font-bold">Closest Airports</h3>
          <ul className="list-disc ml-5">
            {airports.map(a => (
              <li key={a.airportCode}>
                {a.name} ({a.airportCode})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
