"use client";

import { useState } from "react";

export default function BookingForm() {
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
    const res = await fetch("/api/booking/calc", {
      method: "POST",
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <div>
      {/* your form UI here */}
    </div>
  );
}
