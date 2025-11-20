"use client";

import React, { useState } from "react";

interface BookingFormProps {
  parish?: string;
  town?: string;
  category?: "accommodation" | "flights" | "tours" | "transportation" | "all";
  metadata?: any; // from parishData.ts, scraped data, API results, etc.
}

export default function BookingForm({
  parish,
  town,
  category = "all",
  metadata = {}
}: BookingFormProps) {

  const [form, setForm] = useState({
    type: category !== "all" ? category : "",
    name: "",
    email: "",
    dates: { from: "", to: "" },
    guests: 1,
    flightFrom: "",
    flightTo: parish || "",
    tour: "",
    transportType: "",
  });

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleDate(e: any) {
    setForm({
      ...form,
      dates: { ...form.dates, [e.target.name]: e.target.value }
    });
  }

  function submit() {
    console.log("Submitting Booking ➜", form);

    // You can replace this with:
    // /api/booking , /api/payments/ton , stripe , lynk etc.
    alert("Booking submitted successfully!");
  }

  return (
    <div className="w-full max-w-xl mx-auto p-6 rounded-xl border bg-black/20 backdrop-blur text-white">

      <h2 className="text-xl font-semibold mb-4">
        Booking Request {parish ? `for ${parish}` : ""}
      </h2>

      {/* Booking Type */}
      <div className="mb-4">
        <label className="block text-sm mb-1">Booking Type</label>
        <select
          name="type"
          className="w-full p-2 rounded bg-black/40 border"
          value={form.type}
          onChange={handleChange}
        >
          <option value="">Select Type</option>
          <option value="accommodation">Accommodation</option>
          <option value="flights">Flights</option>
          <option value="tours">Tours</option>
          <option value="transportation">Transportation</option>
          <option value="all">All Options</option>
        </select>
      </div>

      {/* Name */}
      <div className="mb-4">
        <label className="block text-sm mb-1">Full Name</label>
        <input
          name="name"
          className="w-full p-2 rounded bg-black/40 border"
          value={form.name}
          onChange={handleChange}
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-sm mb-1">Email</label>
        <input
          name="email"
          type="email"
          className="w-full p-2 rounded bg-black/40 border"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      {/* Dates */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm mb-1">Check-In / From</label>
          <input
            type="date"
            name="from"
            className="w-full p-2 rounded bg-black/40 border"
            value={form.dates.from}
            onChange={handleDate}
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Check-Out / To</label>
          <input
            type="date"
            name="to"
            className="w-full p-2 rounded bg-black/40 border"
            value={form.dates.to}
            onChange={handleDate}
          />
        </div>
      </div>

      {/* Guests */}
      <div className="mb-4">
        <label className="block text-sm mb-1">Guests</label>
        <input
          type="number"
          name="guests"
          className="w-full p-2 rounded bg-black/40 border"
          min={1}
          value={form.guests}
          onChange={handleChange}
        />
      </div>

      {/* Flights */}
      {form.type === "flights" && (
        <>
          <div className="mb-4">
            <label className="block text-sm mb-1">Flying From</label>
            <input
              name="flightFrom"
              className="w-full p-2 rounded bg-black/40 border"
              value={form.flightFrom}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Flying To (Destination)</label>
            <input
              name="flightTo"
              className="w-full p-2 rounded bg-black/40 border"
              value={form.flightTo}
              onChange={handleChange}
            />
          </div>
        </>
      )}

      {/* Tours */}
      {form.type === "tours" && (
        <div className="mb-4">
          <label className="block text-sm mb-1">Select Tour</label>
          <select
            name="tour"
            className="w-full p-2 rounded bg-black/40 border"
            value={form.tour}
            onChange={handleChange}
          >
            <option value="">Choose a Tour</option>
            {(metadata?.tours || []).map((tour: string, i: number) => (
              <option key={i} value={tour}>{tour}</option>
            ))}
          </select>
        </div>
      )}

      {/* Transportation */}
      {form.type === "transportation" && (
        <div className="mb-4">
          <label className="block text-sm mb-1">Transportation Type</label>
          <select
            name="transportType"
            className="w-full p-2 rounded bg-black/40 border"
            value={form.transportType}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="taxi">Taxi</option>
            <option value="shuttle">Shuttle</option>
            <option value="rental">Car Rental</option>
          </select>
        </div>
      )}

      <button
        onClick={submit}
        className="w-full mt-4 p-3 bg-emerald-500 hover:bg-emerald-600 rounded font-semibold text-black"
      >
        Submit Booking
      </button>
    </div>
  );
}
