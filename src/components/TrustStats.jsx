import { useEffect, useRef, useState } from 'react';
import { Building2, Headphones, Smile, Star } from 'lucide-react';

const statConfig = [
  { value: 10, suffix: 'K+', icon: Smile, label: 'Happy Guests', color: 'text-primary' },
  { value: 150, suffix: '+', icon: Building2, label: 'Premium Properties', color: 'text-primary' },
  { value: 24, suffix: '/7', icon: Headphones, label: 'Customer Support', color: 'text-primary' },
  { value: 4.8, suffix: '', icon: Star, label: 'Average Rating', color: 'text-amber-500' },
];

export default function TrustStats() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="mx-auto max-w-[1100px] px-4 py-20 sm:px-6 lg:px-0">
      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_40px_rgba(15,23,42,0.05)] sm:p-8">
        <h2 className="mb-8 text-center text-3xl font-black tracking-[-0.04em] text-slate-900">Trusted by Travelers</h2>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 xl:divide-x xl:divide-slate-200">
          {statConfig.map(({ value, suffix, icon: Icon, label, color }) => (
            <div key={label} className="flex flex-col items-center justify-center gap-3 px-4 py-4 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-mint text-primary">
                <Icon size={22} className={color} fill={label === 'Average Rating' ? 'currentColor' : 'none'} />
              </div>
              <div className="text-3xl font-black tracking-[-0.04em] text-slate-900">
                {isVisible ? (
                  <span>{Math.round(value * 100) / 100}</span>
                ) : (
                  <span>0</span>
                )}
                {suffix}
              </div>
              <p className="text-sm text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
