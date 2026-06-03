"use client";

import { useState } from "react";
import { Button } from "@/components/ui/moving-border";
import { GravityStarsBackground } from "@/components/ui/gravity-stars";

export default function VolunteerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      setStatus(data.message || "Form Submitted Successfully");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative overflow-hidden bg-black px-6 py-24">
      <div className="absolute inset-0 h-full w-full">
        <GravityStarsBackground
          starsCount={120}
          starsSize={2}
          starsOpacity={0.9}
          glowIntensity={18}
          mouseInfluence={140}
          gravityStrength={100}
          movementSpeed={0.4}
          className="absolute inset-0 h-full w-full text-cyan-300"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto flex min-h-[720px] items-center justify-center">
        <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-black/60 p-8 shadow-2xl backdrop-blur-xl">
          <h2 className="mb-4 text-center text-4xl font-bold text-white md:text-5xl">
            Volunteer / Join Us
          </h2>

          <p className="mb-8 text-center text-neutral-300">
            Fill this form to connect with She Can Foundation and become part of
            a mission that empowers women.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Enter your name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-cyan-400"
            />

            <input
              type="email"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-cyan-400"
            />

            <textarea
              placeholder="Enter your message"
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="h-32 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-cyan-400"
            />

            <div className="flex justify-center">
              <Button
                type="submit"
                disabled={loading}
                borderRadius="1rem"
                className="border-neutral-700 bg-white text-black"
              >
                {loading ? "Submitting..." : "Submit Form"}
              </Button>
            </div>
          </form>

          {status && (
            <p className="mt-6 text-center font-semibold text-green-400">
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}