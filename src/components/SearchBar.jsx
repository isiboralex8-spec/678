import { useMemo, useState } from 'react';
import DatePicker from 'react-datepicker';
import { CalendarDays, ChevronDown, Minus, Plus, Search, Sparkles, UserRound, Wifi, Wind, UtensilsCrossed, Waves } from 'lucide-react';
import 'react-datepicker/dist/react-datepicker.css';
import { destinations } from '../data/destinations';

const amenitiesConfig = [
  { key: 'pool', label: 'Pool', icon: Waves },
  { key: 'wifi', label: 'Free Wi-Fi', icon: Wifi },
  { key: 'ac', label: 'AC', icon: Wind },
  { key: 'breakfast', label: 'Breakfast', icon: UtensilsCrossed },
];

export default function SearchBar() {
  const [selectedAmenities, setSelectedAmenities] = useState(['pool']);
  const [startDate, setStartDate] = useState(new Date(2026, 4, 20));
  const [endDate, setEndDate] = useState(new Date(2026, 4, 25));
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [showGuestMenu, setShowGuestMenu] = useState(false);

  const dateLabel = useMemo(
    () => `${startDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })} – ${endDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}`,
    [startDate, endDate],
  );

  const toggleAmenity = (key) => {
    setSelectedAmenities((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key],
    );
  };

  return (
    <section className="relative z-20 mx-auto -mt-12 max-w-[1100px] px-4 sm:px-6 lg:px-0">
      <div className="rounded-[28px] border border-slate-200/80 bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.12)] sm:p-5">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_1.5fr_1.1fr] lg:divide-x lg:divide-slate-200">
          <div className="px-2 py-2">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Amenities</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {amenitiesConfig.map(({ key, label, icon: Icon }) => {
                const active = selectedAmenities.includes(key);
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => toggleAmenity(key)}
                    className={`flex flex-col items-center justify-center rounded-2xl border px-3 py-4 transition ${
                      active
                        ? 'border-primary bg-mint text-primary shadow-sm'
                        : 'border-slate-200 bg-white text-slate-500 hover:border-primary/60 hover:text-primary'
                    }`}
                    aria-pressed={active}
                    aria-label={label}
                  >
                    <Icon size={20} />
                    <span className="mt-2 text-xs font-medium">{label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="px-2 py-2 lg:pl-5">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Find Your Stay</p>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
              <div className="mb-3 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                <span>Check-in – Check-out</span>
                <CalendarDays size={16} className="text-primary" />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 outline-none ring-0"
                  dateFormat="dd MMM"
                />
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 outline-none ring-0"
                  dateFormat="dd MMM"
                />
              </div>

              <div className="mt-4 flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2.5">
                <div className="flex items-center gap-2 text-slate-700">
                  <UserRound size={16} className="text-primary" />
                  <span className="text-sm font-medium">{guests} Guests, {rooms} Room</span>
                </div>
                <button type="button" onClick={() => setShowGuestMenu((prev) => !prev)} aria-label="Adjust guests and rooms" className="text-slate-500 hover:text-primary">
                  <ChevronDown size={18} />
                </button>
              </div>

              {showGuestMenu && (
                <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-lg">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">Guests</span>
                    <div className="flex items-center gap-2">
                      <button type="button" onClick={() => setGuests((prev) => Math.max(1, prev - 1))} className="h-8 w-8 rounded-full border border-slate-200 text-slate-600"><Minus size={14} className="mx-auto" /></button>
                      <span className="w-6 text-center text-sm font-semibold text-slate-900">{guests}</span>
                      <button type="button" onClick={() => setGuests((prev) => prev + 1)} className="h-8 w-8 rounded-full border border-slate-200 text-slate-600"><Plus size={14} className="mx-auto" /></button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">Rooms</span>
                    <div className="flex items-center gap-2">
                      <button type="button" onClick={() => setRooms((prev) => Math.max(1, prev - 1))} className="h-8 w-8 rounded-full border border-slate-200 text-slate-600"><Minus size={14} className="mx-auto" /></button>
                      <span className="w-6 text-center text-sm font-semibold text-slate-900">{rooms}</span>
                      <button type="button" onClick={() => setRooms((prev) => prev + 1)} className="h-8 w-8 rounded-full border border-slate-200 text-slate-600"><Plus size={14} className="mx-auto" /></button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="px-2 py-2 lg:pl-5">
            <div className="flex items-start justify-between gap-2">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Top Destinations</p>
              <button type="button" aria-label="Search stays" className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 transition hover:scale-105">
                <Search size={18} />
              </button>
            </div>

            <div className="flex gap-3">
              {destinations.map((dest) => (
                <button key={dest.name} type="button" className="group flex flex-col items-center gap-2" aria-label={`Select ${dest.name}`}>
                  <img src={dest.image} alt={dest.name} className="h-14 w-14 rounded-full border-2 border-white object-cover shadow-md transition group-hover:scale-105" />
                  <span className="text-xs font-medium text-slate-600">{dest.name}</span>
                </button>
              ))}
            </div>

            <div className="mt-5 rounded-2xl bg-mint p-3 text-left">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/80">Selected</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">{dateLabel}</p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-white px-2 py-1 text-[11px] font-semibold text-primary">
                  <Sparkles size={12} />
                  Trending
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
