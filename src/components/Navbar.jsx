import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-6 z-50 w-full px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-3xl border border-white/10 bg-black/70 px-8 py-4 shadow-2xl shadow-black/60 backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
            ✦
          </div>

          <span className="text-xl font-bold text-white">
            She Can Foundation
          </span>
        </Link>

        <div className="hidden items-center gap-10 text-sm font-medium text-neutral-400 md:flex">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>

          <Link href="/about" className="transition hover:text-white">
            About
          </Link>

          <Link href="/volunteer" className="transition hover:text-white">
            Volunteer
          </Link>

          <Link href="/admin/manage-admins" className="transition hover:text-white">
            Manage Admins
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/admin/login"
            className="hidden text-sm font-medium text-neutral-400 transition hover:text-white md:block"
          >
            Sign in
          </Link>

          <Link
            href="/admin/signup"
            className="rounded-xl bg-white px-5 py-2 text-sm font-semibold text-black shadow-md transition hover:bg-neutral-200"
          >
            Admin Signup
          </Link>
        </div>
      </div>
    </nav>
  );
}