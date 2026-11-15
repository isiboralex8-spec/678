import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValid) {
      setMessage('Please enter a valid email address.');
      return;
    }

    setMessage('Thanks for subscribing! Your travel deals are on the way.');
    setEmail('');
  };

  return (
    <section className="mx-auto max-w-[1100px] px-4 py-20 sm:px-6 lg:px-0">
      <div className="relative overflow-hidden rounded-[30px] bg-[#0F5C45] px-6 py-8 shadow-[0_30px_70px_rgba(15,92,69,0.18)] sm:px-8 lg:px-10">
        <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_55%)] lg:block" />
        <div className="relative grid items-center gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl">Get exclusive travel deals &amp; tips</h2>
            <p className="mt-2 text-sm text-emerald-100">Subscribe to our newsletter</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email address"
              aria-label="Email address"
              className="flex-1 rounded-xl border border-white/20 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-emerald-300"
            />
            <button type="submit" className="rounded-xl bg-[#3E9A6E] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-800/20 transition hover:bg-emerald-500">
              Subscribe
            </button>
          </form>
        </div>

        {message && (
          <p className={`mt-4 text-sm ${message.includes('valid') ? 'text-amber-200' : 'text-emerald-100'}`}>{message}</p>
        )}
      </div>
    </section>
  );
}
