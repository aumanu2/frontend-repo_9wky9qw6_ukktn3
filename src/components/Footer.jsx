export default function Footer() {
  return (
    <footer className="w-full bg-black py-10 text-white/60">
      <div className="mx-auto max-w-7xl px-6 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <p className="text-sm">© {new Date().getFullYear()} Nex. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm">
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#why" className="hover:text-white">Why Nex</a>
        </div>
      </div>
    </footer>
  )
}
