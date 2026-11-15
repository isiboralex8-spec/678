import { Mail, MapPin, Phone } from 'lucide-react';

const socialLinks = [
  { name: 'Facebook', path: 'M13.5 8.5h2V5h-2c-2.2 0-4 1.8-4 4v1.5H7V12h2.5V19h2.5v-7h2.2l.5-2.5h-2.7V9.5c0-.6.4-1 1-1z' },
  { name: 'Instagram', path: 'M7 3.5h10a3.5 3.5 0 0 1 3.5 3.5v10A3.5 3.5 0 0 1 17 20.5H7A3.5 3.5 0 0 1 3.5 17V7A3.5 3.5 0 0 1 7 3.5zm0 2.5A1 1 0 0 0 6 7v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7zm5 2.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5zm0 2.5A2 2 0 1 0 14 13a2 2 0 0 0-2-2zm4.5-3.5a1 1 0 1 1-1 1 1 1 0 0 1 1-1z' },
  { name: 'Twitter', path: 'M18.9 5.5c-.7.3-1.4.6-2.2.7a3.6 3.6 0 0 0 1.5-2c-.7.4-1.5.7-2.3.9A3.5 3.5 0 0 0 12 8.3c0 .3 0 .6.1.9A10 10 0 0 1 4.4 5.1c-.4.7-.6 1.5-.6 2.3 0 1.6.8 3 2 3.8-.6 0-1.2-.2-1.8-.5v.1c0 2.3 1.6 4.2 3.8 4.6-.4.1-.8.2-1.2.2-.3 0-.6 0-.9-.1.6 2 2.4 3.4 4.5 3.4A7.2 7.2 0 0 1 3.5 17c1 1 2.2 1.6 3.6 1.6A10.2 10.2 0 0 0 17.3 8.7V8c.8-.5 1.4-1.3 1.8-2.1z' },
  { name: 'Pinterest', path: 'M12 3.5A8.5 8.5 0 0 0 9 18.8c0-1.1.3-1.8.7-2.4-.2-.8-.6-2.1-.1-3.5.5-1.7 2.2-3 3.7-3.3.9-2.2 2.9-3.5 5.2-3.5 2.2 0 3.7 1.3 3.7 3.6 0 2.7-1.3 5.1-3.6 5.1-1.2 0-2-.9-1.7-2.1.3-1.2 1-2.5 1-3.8 0-.9-.5-1.7-1.5-1.7-1.2 0-2.1 1.3-2.1 3 0 1 .3 1.6.3 1.6l-1.3 5.5c-.2.8-.1 1.9.1 2.6-.8.2-1.6.3-2.4.3A8.5 8.5 0 1 0 12 3.5z' },
];

function SocialIcon({ name, path }) {
  return (
    <svg viewBox="0 0 24 24" aria-label={name} className="h-4 w-4 fill-current">
      <path d={path} />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="mx-auto w-full max-w-[1200px] px-4 pb-8 pt-4 sm:px-6 lg:px-0">
      <div className="rounded-t-[30px] bg-slate-100 px-6 pb-8 pt-10 shadow-[0_-10px_30px_rgba(15,23,42,0.04)] sm:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-lg font-black text-white">MR</span>
              <span className="text-xl font-extrabold text-slate-900">studio</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-600">Creating unforgettable travel experiences around the world.</p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map(({ name, path }) => (
                <a key={name} href="#" aria-label={name} className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-primary hover:text-primary">
                  <SocialIcon name={name} path={path} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li><a href="#" className="hover:text-primary">About Us</a></li>
              <li><a href="#" className="hover:text-primary">Careers</a></li>
              <li><a href="#" className="hover:text-primary">Press</a></li>
              <li><a href="#" className="hover:text-primary">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900">Support</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li><a href="#" className="hover:text-primary">Help Center</a></li>
              <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary">Cancellation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2"><Phone size={15} className="text-primary" /> +1 234 567 890</li>
              <li className="flex items-center gap-2"><Mail size={15} className="text-primary" /> hello@mrstudio.com</li>
              <li className="flex items-center gap-2"><MapPin size={15} className="text-primary" /> 123 Beach Road, Bali, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2024 MRstudio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary">Terms of Use</a>
            <a href="#" className="hover:text-primary">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
