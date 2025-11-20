"use client";

import { useState } from "react";

export default function BookingPage() {
  const [form, setForm] = useState({
    ...
  });

import { useState } from "react";

export default function BookingPage() {
  const [form, setForm] = useState({
    origin: "",
    destination: "",
    transport: "knutsford",
    hotel: "",
    nights: 1,
    excursions: [],
    guests: 1,
  });

  const [result, setResult] = useState(null);

  const calculate = async () => {
    const res = await fetch("/api/booking", {
      method: "POST",
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <div>
      <h1>Trip Booking</h1>

      <button onClick={calculate}>Calculate Cost</button>

      {result && (
        <pre>{JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  );
}
