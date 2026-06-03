"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-6 z-50 w-full px-6">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-black/70 px-6 py-4 shadow-2xl shadow-black/60 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
              ✦
            </div>

            <span className="text-xl font-bold text-white">
              She Can Foundation
            </span>
          </Link>

          <div className="hidden items-center gap-10 text-sm font-medium text-neutral-400 md:flex">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <Link href="/about" className="transition hover:text-white">About</Link>
            <Link href="/volunteer" className="transition hover:text-white">Volunteer</Link>
            <Link href="/admin/manage-admins" className="transition hover:text-white">Manage Admins</Link>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <Link href="/admin/login" className="text-sm font-medium text-neutral-400 transition hover:text-white">
              Sign in
            </Link>

            <Link href="/admin/signup" className="rounded-xl bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-neutral-200">
              Admin Signup
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white md:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {open && (
          <div className="mt-5 flex flex-col gap-4 border-t border-white/10 pt-5 text-neutral-300 md:hidden">
            <Link onClick={() => setOpen(false)} href="/">Home</Link>
            <Link onClick={() => setOpen(false)} href="/about">About</Link>
            <Link onClick={() => setOpen(false)} href="/volunteer">Volunteer</Link>
            <Link onClick={() => setOpen(false)} href="/admin/manage-admins">Manage Admins</Link>
            <Link onClick={() => setOpen(false)} href="/admin/login">Sign in</Link>
            <Link
              onClick={() => setOpen(false)}
              href="/admin/signup"
              className="rounded-xl bg-white px-5 py-3 text-center font-semibold text-black"
            >
              Admin Signup
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}