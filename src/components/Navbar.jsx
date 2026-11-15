import { useState } from 'react';
import { Menu, X, UserRound } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Rooms', href: '#rooms' },
  { name: 'Offers', href: '#offers' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-[1100px] items-center justify-between px-4 py-4 sm:px-6 lg:px-0">
        <a href="#home" className="flex items-center gap-2" aria-label="MRstudio home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-lg font-black text-white shadow-md shadow-primary/30">
            MR
          </span>
          <span className="text-xl font-extrabold tracking-tight text-slate-900">studio</span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={item.name === 'Home' ? 'text-primary underline decoration-2 underline-offset-8' : 'transition hover:text-primary'}
            >
              {item.name}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/30 transition hover:bg-primary-dark md:inline-flex"
        >
          <UserRound size={16} />
          Login
        </button>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-[1100px] flex-col space-y-3 px-4 py-4 text-sm font-medium text-slate-700">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="rounded-md px-2 py-2 hover:bg-mint hover:text-primary" onClick={() => setMobileOpen(false)}>
                {item.name}
              </a>
            ))}
            <button type="button" className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-semibold text-white">
              <UserRound size={16} />
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
