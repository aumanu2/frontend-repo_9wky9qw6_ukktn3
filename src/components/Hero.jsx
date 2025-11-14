import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient + vignette for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/80 backdrop-blur">
            Built for modern workloads
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Nex — infrastructure designed for builders
          </h1>
          <p className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
            Fast, scalable, and engineered for the next generation. Your backbone for compute, storage, and AI deployment—delivered with a clean, developer‑first experience.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
            >
              Launch Console
              <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 text-sm text-white/70 sm:max-w-md">
            <div>
              <p className="font-semibold text-white">Transparent pricing</p>
              <p>No hidden fees. Simple usage‑based billing.</p>
            </div>
            <div>
              <p className="font-semibold text-white">Developer‑first</p>
              <p>Clean APIs, modern tooling, instant setup.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
