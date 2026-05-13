/**
 * Home page
 */

import { useNavigate } from 'react-router-dom';

const featureCards = [
  {
    icon: '🔐',
    title: 'Encrypted by Design',
    description: 'AES-256 helpers, protected routes, and secure token handling.',
  },
  {
    icon: '📡',
    title: 'Offline Fast Sync',
    description: 'IndexedDB storage, sync queues, and automatic recovery when online.',
  },
  {
    icon: '📊',
    title: 'Clinical Insights',
    description: 'Dashboard cards, reporting panels, and trend-ready placeholders.',
  },
];

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#03111f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(10,19,35,0.6),rgba(3,17,31,0.9))]" />

      <div className="absolute inset-x-0 top-0 h-80 opacity-80">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,transparent_48%,rgba(34,211,238,0.08)_48%,rgba(34,211,238,0.08)_52%,transparent_52%,transparent_100%)] bg-[length:56px_100%]" />
        <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle,_rgba(34,211,238,0.7)_0,_rgba(34,211,238,0.35)_3px,_transparent_4px)] bg-[length:72px_72px] bg-[position:16px_0] opacity-35" />
      </div>

      <main className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm text-cyan-100 shadow-[0_0_40px_rgba(34,211,238,0.14)] backdrop-blur-xl">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
              Secure telehealth with offline-first sync
            </div>

            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Care that stays online even when the network does not.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              A modern medical dashboard for doctors, patients, and admins with JWT auth,
              indexed offline records, automatic sync, and a responsive Tailwind UI built for
              unstable connections.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/login')}
                className="group inline-flex items-center justify-center rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.24)] transition hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                Login
                <span className="ml-2 transition group-hover:translate-x-0.5">→</span>
              </button>
              <button
                onClick={() => navigate('/register')}
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-cyan-300/30 hover:bg-white/10"
              >
                Register
              </button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <p className="text-2xl font-semibold text-white">99.9%</p>
                <p className="mt-1 text-sm text-slate-300">Uptime resilience target</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <p className="text-2xl font-semibold text-white">Offline</p>
                <p className="mt-1 text-sm text-slate-300">Queue records locally</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <p className="text-2xl font-semibold text-white">AES-256</p>
                <p className="mt-1 text-sm text-slate-300">Encrypted sensitive data</p>
              </div>
            </div>
          </section>

          <section className="relative">
            <div className="absolute -left-6 top-8 h-28 w-28 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -right-4 bottom-10 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-300">Clinic Overview</p>
                  <h2 className="text-xl font-semibold text-white">Live dashboard preview</h2>
                </div>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
                  Sync ready
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-cyan-400/10 bg-slate-950/40 p-4">
                  <p className="text-sm text-slate-300">Today’s appointments</p>
                  <p className="mt-2 text-3xl font-semibold text-white">12</p>
                  <div className="mt-4 h-2 rounded-full bg-white/10">
                    <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-cyan-300 to-blue-500" />
                  </div>
                </div>

                <div className="rounded-2xl border border-cyan-400/10 bg-slate-950/40 p-4">
                  <p className="text-sm text-slate-300">Unsynced records</p>
                  <p className="mt-2 text-3xl font-semibold text-white">3</p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-cyan-200">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
                    Auto-sync active
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-4">
                {featureCards.map((card) => (
                  <article
                    key={card.title}
                    className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/8"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-2xl shadow-[0_0_20px_rgba(34,211,238,0.12)]">
                        {card.icon}
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white">{card.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-slate-300">{card.description}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
