import { Menu, Server, Cpu, Cloud, Rocket } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500 text-white shadow-lg shadow-emerald-500/30">
            <Rocket size={18} />
          </div>
          <span className="text-lg font-semibold text-white md:text-gray-100">Nex</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#why" className="hover:text-white">Why Nex</a>
          <a href="/test" className="hover:text-white">Status</a>
        </nav>

        <button className="md:hidden inline-flex items-center justify-center rounded-md border border-white/15 bg-white/10 p-2 text-white">
          <Menu size={18} />
        </button>
      </div>
    </header>
  )
}
