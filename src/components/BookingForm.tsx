"use client";

import React, { useState, useMemo } from "react";
import { parishes } from "@/app/parishData";
import Modal from "@/components/Modal";

export default function BookingForm() {
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    parish: "",
    town: "",
    hotel: "",
    tour: "",
    transport: "",
    dates: { start: "", end: "" },
  });

  const selectedParish = useMemo(
    () => parishes.find((p) => p.name === form.parish),
    [form.parish]
  );

  const towns = selectedParish?.towns ?? [];
  const hotels = selectedParish?.hotels ?? [];
  const tours = selectedParish?.tours ?? [];
  const transport = selectedParish?.transport ?? [];

  function update<K extends keyof typeof form>(key: K, value: any) {
    setForm((f) => ({
      ...f,
      [key]: value,
      ...(key === "parish"
        ? { town: "", hotel: "", tour: "", transport: "" }
        : {}),
    }));
  }

  async function handleSubmit() {
    const res = await fetch("/api/booking", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    alert("Booking response:\n" + JSON.stringify(data, null, 2));
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 rounded-lg bg-blue-600 text-white"
      >
        Start Booking
      </button>

      <Modal open={open} onClose={() => setOpen(false)} title="Book Your Trip">
        <div className="space-y-4">

          {/* Parish */}
          <div>
            <label className="block mb-1">Select Parish</label>
            <select
              className="w-full border rounded p-2"
              value={form.parish}
              onChange={(e) => update("parish", e.target.value)}
            >
              <option value="">-- Choose Parish --</option>
              {parishes.map((p) => (
                <option key={p.name} value={p.name}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>

          {/* Town */}
          <div>
            <label className="block mb-1">Town</label>
            <select
              className="w-full border rounded p-2"
              value={form.town}
              onChange={(e) => update("town", e.target.value)}
              disabled={!towns.length}
            >
              <option value="">-- Choose Town --</option>
              {towns.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Hotel */}
          <div>
            <label className="block mb-1">Accommodation</label>
            <select
              className="w-full border rounded p-2"
              value={form.hotel}
              onChange={(e) => update("hotel", e.target.value)}
              disabled={!hotels.length}
            >
              <option value="">-- Choose Hotel --</option>
              {hotels.map((h) => (
                <option key={h.name} value={h.name}>
                  {h.name} {h.rating ? `(${h.rating}★)` : ""}
                </option>
              ))}
            </select>
          </div>

          {/* Tour */}
          <div>
            <label className="block mb-1">Tour</label>
            <select
              className="w-full border rounded p-2"
              value={form.tour}
              onChange={(e) => update("tour", e.target.value)}
              disabled={!tours.length}
            >
              <option value="">-- Choose Tour --</option>
              {tours.map((t) => (
                <option key={t.name} value={t.name}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>

          {/* Transport */}
          <div>
            <label className="block mb-1">Transportation</label>
            <select
              className="w-full border rounded p-2"
              value={form.transport}
              onChange={(e) => update("transport", e.target.value)}
              disabled={!transport.length}
            >
              <option value="">-- Choose Transport --</option>
              {transport.map((tr) => (
                <option key={tr.name} value={tr.name}>
                  {tr.name} ({tr.type})
                </option>
              ))}
            </select>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block mb-1">Start Date</label>
              <input
                type="date"
                className="w-full border rounded p-2"
                value={form.dates.start}
                onChange={(e) =>
                  update("dates", { ...form.dates, start: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block mb-1">End Date</label>
              <input
                type="date"
                className="w-full border rounded p-2"
                value={form.dates.end}
                onChange={(e) =>
                  update("dates", { ...form.dates, end: e.target.value })
                }
              />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-green-600 text-white p-2 rounded-lg"
          >
            Submit Booking
          </button>
        </div>
      </Modal>
    </>
  );
}
