import { Cpu, Server, HardDrive, Box, Globe, Bot, Database, ShieldCheck } from 'lucide-react'

const items = [
  {
    icon: Cpu,
    title: 'Cloud Compute',
    desc: 'Elastic VMs optimized for performance and cost.',
  },
  {
    icon: Server,
    title: 'GPU Hosting',
    desc: 'NVIDIA GPUs for training and high‑throughput inference.',
  },
  {
    icon: HardDrive,
    title: 'Object Storage',
    desc: 'S3‑compatible, durable storage with simple pricing.',
  },
  {
    icon: Box,
    title: 'Dedicated Bare Metal',
    desc: 'Single‑tenant servers for maximum control.',
  },
  {
    icon: Bot,
    title: 'AI Inference APIs',
    desc: 'Host models with autoscaling and observability.',
  },
  {
    icon: Database,
    title: 'Managed Databases',
    desc: 'Postgres and vector stores with daily backups.',
  },
  {
    icon: Globe,
    title: 'Global Edge',
    desc: 'Anycast network with low‑latency routing.',
  },
  {
    icon: ShieldCheck,
    title: 'Identity & Auth',
    desc: 'Secure, standards‑based authentication.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-semibold sm:text-3xl">Built for modern workloads</h2>
        <p className="mt-2 max-w-2xl text-white/70">A clean and modular platform for cloud, hosting, and AI.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition hover:bg-white/[0.06]">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-400/30">
                <Icon size={18} />
              </div>
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
