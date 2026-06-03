"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function AdminSignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("/api/admin/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setStatus(data.message);

    if (data.success) {
      setFormData({
        name: "",
        email: "",
        password: "",
      });
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="flex min-h-screen items-center justify-center px-6 pt-28">
        <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 shadow-2xl md:grid-cols-2">
          <div className="relative hidden min-h-[650px] overflow-hidden bg-[#080912] md:block">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#1d4ed8_0%,transparent_28%),radial-gradient(circle_at_70%_80%,#0ea5e9_0%,transparent_25%)] opacity-30" />

            <div className="absolute inset-0 bg-[linear-gradient(135deg,#111827_0%,#020617_55%,#000_100%)]" />

            <div className="absolute left-[-10%] top-[45%] h-72 w-[120%] rotate-12 rounded-[50%] border border-blue-500/20 bg-blue-500/5 blur-sm" />
            <div className="absolute left-[5%] top-[55%] h-72 w-[120%] rotate-12 rounded-[50%] border border-white/10 bg-white/5 blur-sm" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center gap-5">
                <div className="relative">
                  <div className="h-16 w-16 rounded-2xl border-4 border-cyan-400" />
                  <div className="absolute left-8 top-8 h-16 w-16 rounded-2xl bg-cyan-500" />
                </div>

                <h2 className="text-6xl font-light tracking-wide">
                  SheCan
                </h2>
              </div>
            </div>
          </div>

          <div className="flex min-h-[650px] items-center justify-center bg-neutral-900 px-8 py-12">
            <div className="w-full max-w-md">
              <h1 className="text-center text-4xl font-bold">
                Create account
              </h1>

              <p className="mt-3 text-center text-neutral-400">
                Create your admin account to manage volunteers.
              </p>

              <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-neutral-800 px-5 py-3 font-semibold text-white transition hover:bg-neutral-700">
                <span className="text-lg">G</span>
                Continue with Google
              </button>

              <div className="my-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-neutral-500">or</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-2 block font-medium">
                    Full name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/10 bg-neutral-800 px-4 py-3 text-white outline-none placeholder:text-neutral-500 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium">
                    Email address
                  </label>

                  <input
                    type="email"
                    placeholder="hello@app.com"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/10 bg-neutral-800 px-4 py-3 text-white outline-none placeholder:text-neutral-500 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium">
                    Password
                  </label>

                  <input
                    type="password"
                    placeholder="Create password"
                    required
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/10 bg-neutral-800 px-4 py-3 text-white outline-none placeholder:text-neutral-500 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
                  Create Account
                </button>
              </form>

              {status && (
                <p className="mt-5 text-center text-green-400">
                  {status}
                </p>
              )}

              <p className="mt-6 text-center text-neutral-400">
                Already have an account?{" "}
                <Link href="/admin/login" className="text-white underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}