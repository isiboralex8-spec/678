import { Tag, Clock3 } from 'lucide-react';

export default function SummerOffer() {
  return (
    <section id="offers" className="mx-auto max-w-[1100px] px-4 py-20 sm:px-6 lg:px-0">
      <div className="relative overflow-hidden rounded-[32px] bg-mint px-4 py-8 shadow-[0_30px_60px_rgba(15,92,69,0.12)] sm:px-8 lg:px-10">
        <div className="grid items-center gap-6 lg:grid-cols-[0.9fr_1.1fr_0.7fr]">
          <div className="relative hidden h-[220px] lg:block">
            <img
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80"
              alt="Woman in sun hat smiling"
              className="absolute bottom-0 left-0 h-[220px] w-[220px] rounded-tr-[90px] object-cover shadow-xl"
              loading="lazy"
            />
          </div>

          <div className="text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/80">Limited offer</p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl">Summer Escape Offer</h2>
            <p className="mt-3 text-base text-slate-600">Up to 30% off on selected villas. Book early and save more!</p>
            <button type="button" className="mt-5 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary-dark">
              Book Now
            </button>

            <div className="mt-5 flex items-center justify-center gap-2 text-slate-600 lg:justify-start">
              <Clock3 size={16} className="text-primary" />
              <span className="text-sm font-medium">Offer ends in 08:21:54</span>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="flex w-full max-w-[210px] items-center justify-center rounded-[28px] bg-white px-5 py-6 text-center shadow-lg">
              <div>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-mint text-primary mx-auto">
                  <Tag size={20} />
                </div>
                <p className="text-4xl font-black tracking-[-0.05em] text-primary">30% OFF</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">Limited Time Only</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
