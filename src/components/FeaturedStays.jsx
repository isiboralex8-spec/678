import { ArrowRight } from 'lucide-react';
import { stays } from '../data/stays';
import StayCard from './StayCard';

export default function FeaturedStays({ wishlist, onToggleFavorite }) {
  return (
    <section id="rooms" className="mx-auto max-w-[1100px] px-4 py-20 sm:px-6 lg:px-0">
      <div className="mb-8 flex items-center justify-between gap-4">
        <h2 className="text-3xl font-black tracking-[-0.04em] text-slate-900">Featured Stays</h2>
        <a href="#rooms" className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-dark">
          View all <ArrowRight size={16} />
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {stays.map((stay) => (
          <StayCard
            key={stay.id}
            stay={stay}
            isFavorite={wishlist.includes(stay.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </section>
  );
}
