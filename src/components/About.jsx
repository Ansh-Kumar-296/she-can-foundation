"use client";

import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export default function About() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
      
      <BackgroundRippleEffect />

      {/* Dark overlay for smooth Hero → About transition */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/40" />

      <div className="pointer-events-none relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-6">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            About Us
          </p>

          <h2 className="mb-8 text-5xl font-bold text-white md:text-7xl">
            Empowering Women
            <br />
            To Lead Change
          </h2>

          <p className="max-w-3xl text-lg leading-8 text-neutral-300">
            She Can Foundation is dedicated to empowering women through
            education, leadership development, mentorship, skill-building
            programs, and community support. We believe every woman deserves
            equal opportunities to learn, grow, and create meaningful impact in
            society.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-white">500+</h3>
              <p className="mt-2 text-neutral-400">Women Supported</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-white">50+</h3>
              <p className="mt-2 text-neutral-400">Workshops Conducted</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-white">20+</h3>
              <p className="mt-2 text-neutral-400">Communities Reached</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}