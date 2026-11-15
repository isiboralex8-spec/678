import { MapPin, Star } from 'lucide-react';

const heroImage = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80';

export default function Hero() {
  return (
    <section id="home" className="relative mx-auto max-w-[1100px] px-4 pt-6 sm:px-6 lg:px-0">
      <div className="relative overflow-hidden rounded-[32px] border border-primary/10 bg-gradient-to-r from-mint via-mint/80 to-transparent shadow-[0_30px_90px_rgba(15,92,69,0.12)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(62,154,110,0.18),_transparent_45%)]" />

        <div className="relative grid min-h-[560px] items-center gap-8 lg:grid-cols-[1.05fr_1.15fr] lg:px-10">
          <div className="relative z-10 px-6 py-10 sm:px-8 lg:px-0 lg:py-16">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-3 py-1.5 text-xs font-semibold text-primary shadow-sm backdrop-blur">
              <Star size={14} fill="currentColor" className="text-primary" />
              Curated luxury escapes
            </p>

            <h1 className="max-w-xl text-4xl font-black leading-[1.05] tracking-[-0.05em] text-slate-900 sm:text-5xl lg:text-[64px]">
              Discover Your <span className="text-primary">Perfect</span> Getaway
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
              Relax, unwind and create unforgettable memories at the world&apos;s most beautiful destinations.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-primary/10 bg-white/80 px-4 py-2.5 shadow-sm backdrop-blur">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin size={18} />
              </span>
              <span className="text-sm font-semibold text-slate-700">Oceanview Villas &amp; Resorts</span>
            </div>
          </div>

          <div className="relative h-full min-h-[260px] lg:min-h-[560px]">
            <div className="absolute inset-0 bg-gradient-to-l from-slate-900/30 via-slate-900/0 to-transparent" />
            <img
              src={heroImage}
              alt="Luxury tropical resort with pool and palmtrees at sunset"
              className="h-full w-full object-cover object-center"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
