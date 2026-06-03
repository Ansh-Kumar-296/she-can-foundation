import Image from "next/image";

export default function Impact() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-24">
      
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1e293b_0%,#0f172a_25%,#000000_70%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Creating Real Impact
          </h2>

          <p className="text-neutral-300 text-lg leading-8 mb-8">
            She Can Foundation works to uplift women by providing education,
            mentorship, awareness programs, and opportunities to grow with
            confidence.
          </p>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-white">500+</h3>
              <p className="text-sm text-neutral-400">Women Supported</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-white">50+</h3>
              <p className="text-sm text-neutral-400">Workshops</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-white">20+</h3>
              <p className="text-sm text-neutral-400">Communities</p>
            </div>
          </div>
        </div>

        <div className="relative h-[420px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
            alt="Women empowerment and community support"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}