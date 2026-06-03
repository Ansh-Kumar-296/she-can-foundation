"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function AdminPage() {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [adminName, setAdminName] = useState("Admin");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    const loginStatus = localStorage.getItem("adminLoggedIn");
    const savedAdminName = localStorage.getItem("adminName");

    if (loginStatus !== "true") {
      router.push("/admin/login");
      return;
    }

    setIsLoggedIn(true);
    setAdminName(savedAdminName || "Admin");
    fetchSubmissions();
  }, [router]);

  async function fetchSubmissions() {
    setLoading(true);

    try {
      const res = await fetch("/api/contact");
      const data = await res.json();

      if (data.success) {
        setSubmissions(data.submissions);
      }
    } catch (error) {
      console.log("Error fetching submissions:", error);
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    localStorage.removeItem("adminLoggedIn");
    localStorage.removeItem("adminName");
    router.push("/admin/login");
  }

  async function handleDelete(id) {
    const confirmDelete = confirm(
      "Are you sure you want to delete this submission?"
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch("/api/contact", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const data = await res.json();

      if (data.success) {
        setSubmissions(submissions.filter((item) => item._id !== id));
      } else {
        alert("Failed to delete submission");
      }
    } catch (error) {
      alert("Something went wrong");
    }
  }

  async function handleStatusUpdate(id, status) {
    try {
      const res = await fetch("/api/contact", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, status }),
      });

      const data = await res.json();

      if (data.success) {
        setSubmissions(
          submissions.map((item) =>
            item._id === id ? { ...item, status } : item
          )
        );
      } else {
        alert("Failed to update status");
      }
    } catch (error) {
      alert("Something went wrong");
    }
  }

  const filteredSubmissions = submissions.filter((item) => {
    const name = item.name || "";
    const email = item.email || "";
    const status = item.status || "Pending";

    const matchesSearch =
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === "All" || status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  if (!isLoggedIn) {
    return null;
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="px-6 pt-32 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
                Volunteer Management
              </p>

              <h1 className="text-4xl font-bold md:text-6xl">
                Admin Panel
              </h1>

              <p className="mt-3 text-neutral-400">
                Welcome, {adminName} 👋
              </p>
            </div>

            <button
              onClick={handleLogout}
              className="w-fit rounded-xl bg-red-600 px-5 py-2 font-medium text-white transition hover:bg-red-700"
            >
              Logout
            </button>
          </div>

          <div className="mb-10 grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="rounded-xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none placeholder:text-neutral-500 focus:ring-2 focus:ring-cyan-400"
            />

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="rounded-xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <option value="All">All Volunteers</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          {loading ? (
            <p className="text-neutral-500">Loading submissions...</p>
          ) : filteredSubmissions.length === 0 ? (
            <p className="text-neutral-500">No matching submissions found.</p>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filteredSubmissions.map((item) => (
                <div
                  key={item._id}
                  className="group relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-neutral-900 to-black p-6 shadow-xl shadow-black/50 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-cyan-500/10"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_35%)]" />

                  <div className="relative z-10">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h2 className="text-xl font-bold text-white">
                          {item.name}
                        </h2>
                        <p className="text-sm text-neutral-400">
                          {item.email}
                        </p>
                      </div>

                      <span
                        className={
                          item.status === "Approved"
                            ? "w-fit rounded-full bg-green-500/20 px-3 py-1 text-sm font-semibold text-green-400"
                            : item.status === "Rejected"
                            ? "w-fit rounded-full bg-red-500/20 px-3 py-1 text-sm font-semibold text-red-400"
                            : "w-fit rounded-full bg-yellow-500/20 px-3 py-1 text-sm font-semibold text-yellow-400"
                        }
                      >
                        {item.status || "Pending"}
                      </span>
                    </div>

                    <p className="mt-5 leading-relaxed text-neutral-300">
                      {item.message}
                    </p>

                    <p className="mt-4 text-sm text-neutral-500">
                      {new Date(item.createdAt).toLocaleString()}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <button
                        onClick={() =>
                          handleStatusUpdate(item._id, "Approved")
                        }
                        className="rounded-xl bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700"
                      >
                        Approve
                      </button>

                      <button
                        onClick={() =>
                          handleStatusUpdate(item._id, "Rejected")
                        }
                        className="rounded-xl bg-yellow-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-yellow-700"
                      >
                        Reject
                      </button>

                      <button
                        onClick={() => handleDelete(item._id)}
                        className="rounded-xl bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </div>
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