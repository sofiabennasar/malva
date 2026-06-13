import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* ─── HERO ────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col">

        {/* Full-bleed image area */}
        <div className="relative flex-1 bg-sand overflow-hidden min-h-[70vh]">
          {/* Replace this div with <Image> once real photography is ready */}
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-px">
            <div className="bg-clay col-span-2 row-span-2"></div>
            <div className="bg-moss"></div>
            <div className="bg-slate"></div>
          </div>

          {/* Floating label — top-left */}
          <div className="absolute top-8 left-8 z-10">
            <p className="font-archivo text-xs tracking-widest uppercase text-paper opacity-70">
              Salta · AR
            </p>
          </div>

          {/* Floating label — bottom-right */}
          <div className="absolute bottom-8 right-8 z-10">
            <p className="font-archivo text-xs tracking-widest uppercase text-paper opacity-70">
              Hecho a mano
            </p>
          </div>
        </div>

        {/* Tagline + intro */}
        <div className="bg-linen px-8 py-16 md:px-20 md:py-20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-end">
            <div>
              <h1 className="font-fraunces text-5xl md:text-6xl italic leading-tight text-ink">
                Raw Textures.<br />
                <span className="text-clay">Modern</span> Spaces.
              </h1>
            </div>
            <div>
              <p className="font-archivo text-base leading-relaxed text-slate mb-10">
                Sourced straight from the hands that shape them. At Estudio Malva, we
                believe a home should be shaped by stories. We travel directly to remote
                artisan communities across Argentina to bring you singular, handmade objects.
                No middlemen, no compromise. By working face-to-face with independent makers,
                we ensure every piece honors generational heritage while securing direct,
                sustainable livelihoods for the communities keeping these traditions alive.
              </p>
              <Link
                href="/about"
                className="inline-block font-archivo font-semibold text-xs tracking-widest uppercase px-6 py-3 bg-clay text-paper hover:bg-ink transition"
              >
                Explore the Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CORE VALUES ─────────────────────────────────────────────────── */}
      <section className="bg-paper py-24 px-8 md:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="border-b border-bone pb-6 mb-16">
            <p className="font-archivo text-xs tracking-widest uppercase text-clay">
              01 · Cómo Trabajamos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">

            <div className="flex flex-col">
              <h3 className="font-fraunces text-2xl italic text-ink mb-6">
                Direct Alliance
              </h3>
              <p className="font-archivo text-sm leading-relaxed text-slate">
                By bypassing traditional supply chains entirely, we cultivate deep,
                face-to-face relationships inside the remote workshops and family homes
                where these objects are born.
              </p>
            </div>

            <div className="flex flex-col md:border-l md:border-bone md:pl-12">
              <h3 className="font-fraunces text-2xl italic text-ink mb-6">
                Absolute Equity
              </h3>
              <p className="font-archivo text-sm leading-relaxed text-slate">
                Guided by a non-negotiable commitment to financial transparency, we honor
                the autonomy of the makers to set their own pricing, ensuring immediate
                compensation that respects the true value of their craft.
              </p>
            </div>

            <div className="flex flex-col md:border-l md:border-bone md:pl-12">
              <h3 className="font-fraunces text-2xl italic text-ink mb-6">
                Culture Preserved
              </h3>
              <p className="font-archivo text-sm leading-relaxed text-slate">
                By partnering to protect generational techniques at risk of being lost to
                mass production, we bring these time-honored crafts into contemporary
                spaces to keep local heritage vibrant, relevant, and self-sustaining.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ─── JOURNAL + NEW WAVE ──────────────────────────────────────────── */}
      <section className="bg-linen py-24 px-8 md:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="border-b border-bone pb-6 mb-16">
            <p className="font-archivo text-xs tracking-widest uppercase text-clay">
              02 · El Estudio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Journal / samples */}
            <div className="flex flex-col">
              <div className="grid grid-cols-2 gap-2 mb-8">
                {/* Placeholder tiles — replace with real photos */}
                <div className="bg-sand h-48"></div>
                <div className="bg-clay h-48"></div>
                <div className="bg-slate h-36 col-span-2"></div>
              </div>

              <p className="font-archivo text-xs tracking-widest uppercase text-slate mb-4">
                The Journal · Samples in Progress
              </p>
              <p className="font-archivo text-sm leading-relaxed text-slate mb-8">
                Currently in development. Our initial editions are coming soon.
              </p>
              <Link
                href="/portfolio"
                className="inline-block font-archivo font-semibold text-xs tracking-widest uppercase px-6 py-3 border-2 border-ink text-ink hover:bg-ink hover:text-paper transition w-fit"
              >
                See Products
              </Link>
            </div>

            {/* New Wave panel */}
            <div className="bg-moss text-paper p-12 flex flex-col justify-between min-h-[480px]">
              <div>
                <p className="font-archivo text-xs tracking-widest uppercase text-paper opacity-60 mb-8">
                  Evolving the Craft
                </p>
                <h3 className="font-fraunces text-4xl italic leading-tight mb-8">
                  The New Wave Collection
                </h3>
                <p className="font-archivo text-sm leading-relaxed opacity-80">
                  Discover the innovative creations of a new generation of artisans,
                  blending time-honored heritage with recycled plastic to rewrite the
                  rules of traditional design.
                </p>
              </div>
              <Link
                href="/portfolio"
                className="inline-block font-archivo font-semibold text-xs tracking-widest uppercase px-6 py-3 border border-paper text-paper hover:bg-paper hover:text-moss transition w-fit mt-10"
              >
                Discover More
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
