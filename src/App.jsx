import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <Hero />
      <Services />

      <section id="why" className="bg-black py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">Why choose Nex</h2>
              <p className="mt-3 text-white/70">Transparent pricing, clean APIs, and an experience built for speed. We focus on reliability and developer productivity so you can ship faster.</p>
              <ul className="mt-6 space-y-3 text-sm text-white/80">
                <li>• Predictable, usage‑based pricing</li>
                <li>• Developer‑first console and CLI</li>
                <li>• Fast global network and edge routing</li>
                <li>• Observability built‑in: metrics, logs, traces</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-3xl font-semibold">99.99%</p>
                  <p className="mt-1 text-sm text-white/70">Uptime SLA</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold">50+ Tbps</p>
                  <p className="mt-1 text-sm text-white/70">Anycast edge</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold"><span className="align-top text-base">$</span>0.01</p>
                  <p className="mt-1 text-sm text-white/70">per GB egress</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold"><span className="align-top text-base">&lt;</span>150ms</p>
                  <p className="mt-1 text-sm text-white/70">p95 globe‑wide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-black py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-semibold sm:text-3xl">Transparent pricing</h2>
          <p className="mt-2 max-w-2xl text-white/70">Simple, predictable rates across compute, storage, and networking.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {["Compute", "Storage", "GPU"].map((tier) => (
              <div key={tier} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
                <h3 className="text-lg font-semibold">{tier}</h3>
                <p className="mt-2 text-sm text-white/70">Usage‑based. No surprises.</p>
                <a href="#" className="mt-4 inline-block rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 hover:bg-emerald-400">View details</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
