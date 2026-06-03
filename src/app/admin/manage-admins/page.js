"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function ManageAdminsPage() {
  const router = useRouter();

  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loginStatus = localStorage.getItem("adminLoggedIn");

    if (loginStatus !== "true") {
      router.push("/admin/login");
      return;
    }

    fetchAdmins();
  }, [router]);

  async function fetchAdmins() {
    try {
      const res = await fetch("/api/admins");
      const data = await res.json();

      if (data.success) {
        setAdmins(data.admins);
      }
    } catch (error) {
      console.log("Error fetching admins:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleDeleteAdmin(id) {
    const confirmDelete = confirm("Are you sure you want to delete this admin?");

    if (!confirmDelete) return;

    try {
      const res = await fetch("/api/admins", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const data = await res.json();

      if (data.success) {
        setAdmins(admins.filter((admin) => admin._id !== id));
      } else {
        alert("Failed to delete admin");
      }
    } catch (error) {
      alert("Something went wrong");
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="px-6 pt-32 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
              Admin Management
            </p>

            <h1 className="text-5xl font-bold">Manage Admins</h1>

            <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
              View and manage all registered administrators.
            </p>
          </div>

          {loading ? (
            <p className="text-center text-neutral-500">Loading admins...</p>
          ) : admins.length === 0 ? (
            <p className="text-center text-neutral-500">No admins found.</p>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {admins.map((admin) => (
                <div
                  key={admin._id}
                  className="group relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-neutral-900 to-black p-6 shadow-xl shadow-black/50 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-cyan-500/10"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_35%)]" />

                  <div className="relative z-10">
                    <h2 className="text-xl font-bold text-white">
                      {admin.name}
                    </h2>

                    <p className="mt-2 text-sm text-neutral-400">
                      {admin.email}
                    </p>

                    <p className="mt-4 text-sm text-neutral-500">
                      Joined: {new Date(admin.createdAt).toLocaleDateString()}
                    </p>

                    <button
                      onClick={() => handleDeleteAdmin(admin._id)}
                      className="mt-6 rounded-xl bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                    >
                      Delete Admin
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}