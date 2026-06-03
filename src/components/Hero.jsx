import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/moving-border";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1f2937_0%,#050505_45%,#000000_100%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />

      <div className="absolute inset-0 z-0">
        <BackgroundBeams />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
          SHE CAN FOUNDATION
        </p>

        <h1 className="bg-gradient-to-b from-white via-neutral-200 to-neutral-500 bg-clip-text text-5xl font-bold leading-tight text-transparent md:text-7xl">
          Empowering Women,
          <br />
          Creating Opportunities.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-neutral-300">
          Join She Can Foundation in building a stronger future through
          education, mentorship, leadership and community support.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button borderRadius="0.75rem" className="bg-white text-black">
            Join Our Mission
          </Button>

          <a
            href="/about"
            className="rounded-xl border border-neutral-700 bg-neutral-900 px-6 py-3 text-white transition hover:bg-neutral-800"
          >
            Explore More
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 z-20 h-48 w-full bg-gradient-to-b from-transparent via-black/80 to-black" />
    </section>
  );
}