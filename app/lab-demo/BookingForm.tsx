"use client";

import { useState } from "react";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [test, setTest] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !mobile || !test) {
      alert("Please fill all details.");
      return;
    }

    const message =
      `Hello LifeCare Diagnostics,%0A%0A` +
      `I want to book a lab test.%0A%0A` +
      `Name: ${name}%0A` +
      `Mobile: ${mobile}%0A` +
      `Test: ${test}`;

    window.open(
      `https://wa.me/917982957296?text=${message}`,
      "_blank"
    );
  };

  return (
    <form onSubmit={handleSubmit} className="mt-7 space-y-4">

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border rounded-lg px-4 py-3"
      />

      <input
        type="tel"
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        className="w-full border rounded-lg px-4 py-3"
      />

      <select
        value={test}
        onChange={(e) => setTest(e.target.value)}
        className="w-full border rounded-lg px-4 py-3"
      >
        <option value="">Select Test</option>
        <option>Complete Blood Count</option>
        <option>Blood Sugar</option>
        <option>Lipid Profile</option>
        <option>Thyroid Profile</option>
        <option>Liver Function Test</option>
        <option>Kidney Function Test</option>
      </select>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold"
      >
        Book Test on WhatsApp
      </button>

    </form>
  );
}