import { Heart, MapPin, Star } from 'lucide-react';

export default function StayCard({ stay, isFavorite, onToggleFavorite }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(15,92,69,0.12)]">
      <div className="relative overflow-hidden">
        <img
          src={stay.image}
          alt={stay.name}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white shadow-md">
          {stay.badge}
        </span>
        <button
          type="button"
          aria-label={isFavorite ? `Remove ${stay.name} from wishlist` : `Add ${stay.name} to wishlist`}
          onClick={() => onToggleFavorite(stay.id)}
          className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-white text-slate-700 shadow-md transition ${
            isFavorite ? 'text-red-500' : 'hover:text-red-500'
          }`}
        >
          <Heart size={18} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900">{stay.name}</h3>
            <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
              <MapPin size={14} />
              <span>{stay.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-sm font-semibold text-amber-500">
            <Star size={14} fill="currentColor" />
            {stay.rating}
          </div>
        </div>

        <div className="flex items-end justify-between border-t border-slate-200 pt-4">
          <div>
            <span className="text-2xl font-black text-primary">${stay.price}</span>
            <span className="ml-1 text-sm text-slate-400">/ night</span>
          </div>

          <button type="button" className="rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white shadow-md shadow-primary/20 transition hover:bg-primary-dark">
            Book now
          </button>
        </div>
      </div>
    </article>
  );
}
