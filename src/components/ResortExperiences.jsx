import { useMemo, useState } from 'react';
import { ArrowRight, Leaf, Play, Sparkles, SunMedium, Waves } from 'lucide-react';
import { experiences } from '../data/experiences';

const iconMap = {
  waves: Waves,
  sun: SunMedium,
  sparkles: Sparkles,
  leaf: Leaf,
};

export default function ResortExperiences() {
  const [activeImage, setActiveImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeExperience = useMemo(() => experiences[activeImage], [activeImage]);

  return (
    <section className="mx-auto max-w-[1100px] px-4 py-20 sm:px-6 lg:px-0">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.25fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_40px_rgba(15,23,42,0.05)] sm:p-8">
          <h2 className="text-3xl font-black tracking-[-0.04em] text-slate-900">Resort Experiences</h2>

          <div className="mt-8 space-y-4">
            {experiences.map((experience) => {
              const Icon = iconMap[experience.icon];
              return (
                <div key={experience.id} className="flex items-center gap-4 rounded-2xl border border-transparent bg-slate-50 p-3 transition hover:border-primary/20 hover:bg-mint/60">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mint text-primary shadow-sm shadow-primary/10">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-slate-900">{experience.title}</p>
                    <p className="text-sm text-slate-500">{experience.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <button type="button" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-primary/20 bg-mint px-4 py-3.5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white">
            Explore All Experiences <ArrowRight size={16} />
          </button>
        </div>

        <div className="rounded-[30px] border border-slate-200 bg-white p-4 shadow-[0_20px_40px_rgba(15,23,42,0.05)] sm:p-5">
          <div className="relative overflow-hidden rounded-[24px]">
            <img
              src={activeExperience.image}
              alt={activeExperience.title}
              className="h-[420px] w-full object-cover"
              loading="lazy"
            />
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              aria-label="Play resort experience video"
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-xl"
            >
              <Play size={26} className="ml-1 fill-current" />
            </button>
          </div>

          <div className="mt-4 grid grid-cols-4 gap-3">
            {experiences.map((experience, index) => (
              <button
                key={experience.id}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`View ${experience.title}`}
                className={`overflow-hidden rounded-2xl border-2 transition ${
                  activeImage === index ? 'border-white shadow-lg shadow-slate-200' : 'border-transparent opacity-80'
                }`}
              >
                <img src={experience.image} alt={experience.title} className="h-20 w-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <h3 className="text-lg font-bold text-slate-900">Resort Preview</h3>
              <button type="button" onClick={() => setIsModalOpen(false)} className="rounded-full border border-slate-200 px-3 py-1 text-sm font-medium text-slate-700">Close</button>
            </div>
            <div className="aspect-video bg-slate-200">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/ScMzIvxBSi4?si=E24FJf3W7k7nCexY"
                title="Resort video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
