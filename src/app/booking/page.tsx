"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Background from "@/public/ui/background-query.png";  
import Flag from "@/public/ui/flag.png";  

export default function BookingPage() {
  const [step, setStep] = useState< number >(1);

  const [parish, setParish] = useState("");
  const [travel, setTravel] = useState("");
  const [hotel, setHotel] = useState("");
  const [nights, setNights] = useState(1);
  const [guests, setGuests] = useState(2);
  const [food, setFood] = useState("");
  const [attraction, setAttraction] = useState("");

  // CALCULATIONS
  const total = () => {
    const base =
      (travel ? 120 : 0) +
      (hotel ? nights * 180 : 0) +
      (food ? guests * 40 : 0) +
      (attraction ? guests * 60 : 0);

    return Math.round(base * 1.02); // includes 2.0% platform fee
  };

  return (
    <main className="relative w-full min-h-screen overflow-hidden text-white">

      {/* BACKGROUND IMAGE */}
      <Image
        src={Background}
        alt="Background"
        fill
        className="object-cover opacity-40"
        priority
      />

      {/* FIXED FLAG + BACK BUTTON + TIP BUTTON */}
      <div className="fixed top-0 left-0 w-full p-4 flex items-center justify-between z-50">
        
        {/* FLAG LOGO (WAVING ANIMATION) */}
        <div className="animate-wave">
          <Image src={Flag} alt="Flag" width={55} height={55} />
        </div>

        {/* BACK BUTTON */}
        <Link
          href="/"
          className="text-xl font-bold bg-black/60 px-4 py-2 rounded-full backdrop-blur border border-white/30"
        >
          ← Back
        </Link>

        {/* TIPPING FIRE BUTTON */}
        <button className="text-3xl bg-black/60 rounded-full px-4 py-2 backdrop-blur border border-white/40">
          🔥
        </button>
      </div>

      {/* MAIN BOOKING CARD */}
      <div className="relative z-40 pt-28 px-6 pb-20">
        <div className="bg-black/45 backdrop-blur-md rounded-3xl border border-white/25 p-6 shadow-xl">

          {/* ROLLERDEX-LIKE STEP TITLE */}
          <h1 className="text-center text-3xl font-bold mb-4">
            {step === 1 && "Choose Parish"}
            {step === 2 && "Transportation"}
            {step === 3 && "Accommodation"}
            {step === 4 && "Food & Restaurants"}
            {step === 5 && "Attractions & Tours"}
            {step === 6 && "Calendar & Calculation"}
            {step === 7 && "Confirm & Pay"}
          </h1>

          {/* STEP 1 — PARISH ROLLERDEX */}
          {step === 1 && (
            <div className="flex flex-col items-center gap-3">
              <p className="opacity-80 text-center mb-3">
                Select the parish you'll be visiting 👇
              </p>

              <select
                className="w-full bg-black/50 p-3 rounded-xl border border-white/30"
                value={parish}
                onChange={(e) => setParish(e.target.value)}
              >
                <option value="">Select Parish</option>
                <option value="Kingston">Kingston</option>
                <option value="St. Andrew">Saint Andrew</option>
                <option value="St. James">Saint James</option>
                <option value="St. Ann">Saint Ann</option>
                <option value="Trelawny">Trelawny</option>
                <option value="Portland">Portland</option>
                <option value="Westmoreland">Westmoreland</option>
                <option value="Hanover">Hanover</option>
              </select>

              <button
                disabled={!parish}
                onClick={() => setStep(2)}
                className="mt-4 bg-white/20 px-5 py-3 rounded-xl backdrop-blur border border-white/30"
              >
                Continue →
              </button>
            </div>
          )}

          {/* STEP 2 — TRANSPORTATION */}
          {step === 2 && (
            <div className="flex flex-col gap-2">
              <p className="opacity-80 mb-2">How will you get there? 🚐</p>

              <div className="flex flex-wrap gap-3">
                {["Knutsford Express", "Taxi", "Charter Car"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTravel(t)}
                    className={`px-4 py-3 rounded-xl border ${
                      travel === t
                        ? "bg-white text-black"
                        : "bg-black/40 border-white/30"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <button
                disabled={!travel}
                onClick={() => setStep(3)}
                className="mt-4 bg-white/20 px-5 py-3 rounded-xl backdrop-blur border border-white/30"
              >
                Continue →
              </button>
            </div>
          )}

          {/* STEP 3 — HOTEL */}
          {step === 3 && (
            <div>
              <p className="opacity-80 mb-2">Where will you stay? 🏨</p>

              <div className="flex flex-wrap gap-3">
                {["Hyatt", "Half Moon", "RIU", "Airbnb"].map((h) => (
                  <button
                    key={h}
                    onClick={() => setHotel(h)}
                    className={`px-4 py-3 rounded-xl border ${
                      hotel === h
                        ? "bg-white text-black"
                        : "bg-black/40 border-white/30"
                    }`}
                  >
                    {h}
                  </button>
                ))}
              </div>

              <div className="mt-4">
                <label>Nights:</label>
                <input
                  type="number"
                  min="1"
                  value={nights}
                  onChange={(e) => setNights(parseInt(e.target.value))}
                  className="bg-black/40 p-3 rounded-xl border border-white/30 ml-2"
                />
              </div>

              <div className="mt-4">
                <label>Guests:</label>
                <input
                  type="number"
                  min="1"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                  className="bg-black/40 p-3 rounded-xl border border-white/30 ml-2"
                />
              </div>

              <button
                disabled={!hotel}
                onClick={() => setStep(4)}
                className="mt-4 bg-white/20 px-5 py-3 rounded-xl backdrop-blur border border-white/30"
              >
                Continue →
              </button>
            </div>
          )}

          {/* STEP 4 — FOOD */}
          {step === 4 && (
            <div>
              <p className="opacity-80 mb-3">Food & Restaurants 🍽️</p>

              <div className="flex flex-wrap gap-3">
                {["Local Food", "Hotel Dining", "Street Food"].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFood(f)}
                    className={`px-4 py-3 rounded-xl border ${
                      food === f
                        ? "bg-white text-black"
                        : "bg-black/40 border-white/30"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>

              <button
                disabled={!food}
                onClick={() => setStep(5)}
                className="mt-4 bg-white/20 px-5 py-3 rounded-xl backdrop-blur border border-white/30"
              >
                Continue →
              </button>
            </div>
          )}

          {/* STEP 5 — ATTRACTIONS */}
          {step === 5 && (
            <div>
              <p className="opacity-80 mb-3">Attractions & Tours 🎒</p>

              <div className="flex flex-wrap gap-3">
                {["Dunn’s River Falls", "Mystic Mountain", "Rick’s Café"].map(
                  (a) => (
                    <button
                      key={a}
                      onClick={() => setAttraction(a)}
                      className={`px-4 py-3 rounded-xl border ${
                        attraction === a
                          ? "bg-white text-black"
                          : "bg-black/40 border-white/30"
                      }`}
                    >
                      {a}
                    </button>
                  )
                )}
              </div>

              <button
                disabled={!attraction}
                onClick={() => setStep(6)}
                className="mt-4 bg-white/20 px-5 py-3 rounded-xl backdrop-blur border border-white/30"
              >
                Continue →
              </button>
            </div>
          )}

          {/* STEP 6 — SUMMARY */}
          {step === 6 && (
            <div>
              <h2 className="text-xl font-bold mb-2">Summary</h2>

              <div className="bg-black/40 p-4 rounded-2xl border border-white/20 mt-3">
                <p>Parish: {parish}</p>
                <p>Transport: {travel}</p>
                <p>Hotel: {hotel}</p>
                <p>Nights: {nights}</p>
                <p>Guests: {guests}</p>
                <p>Food: {food}</p>
                <p>Attraction: {attraction}</p>

                <hr className="my-3 opacity-40" />

                <p className="text-xl font-bold">
                  Total (incl. 2% fee): ${total()}
                </p>
              </div>

              <button
                onClick={() => setStep(7)}
                className="mt-4 bg-white/20 px-5 py-3 rounded-xl backdrop-blur border border-white/30"
              >
                Proceed to Payment →
              </button>
            </div>
          )}

          {/* STEP 7 — PAYMENT */}
          {step === 7 && (
            <div>
              <h2 className="text-xl font-bold mb-3">Payment</h2>

              <div className="grid grid-cols-2 gap-3">
                <button className="bg-black/40 border border-white/20 rounded-xl px-4 py-3">
                  💎 TON
                </button>

                <button className="bg-black/40 border border-white/20 rounded-xl px-4 py-3">
                  🔗 WalletConnect
                </button>

                <button className="bg-black/40 border border-white/20 rounded-xl px-4 py-3">
                  💳 Credit / Debit
                </button>

                <button className="bg-black/40 border border-white/20 rounded-xl px-4 py-3">
                  🟡 Lynk / JamDex
                </button>
              </div>

              <p className="mt-6 opacity-70 text-sm">
                After payment, a QR code + SBT receipt will be generated.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* WAVING ANIMATION */}
      <style jsx>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(5deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-wave {
          animation: wave 2.5s infinite ease-in-out;
        }
      `}</style>
    </main>
  );
}
