import Image from 'next/image'
import { siteContent } from '../../lib/data'

export default function ClientsSection() {
  const { clients } = siteContent

  return (
    <section id="clients" className="py-24 md:py-32 lg:py-40 bg-[#12121A] relative overflow-hidden">

      {/* Top edge line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, rgba(245,158,11,0.15), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* Section label */}
        <div className="flex items-center justify-center mb-6">
          <span className="font-mono text-xs text-amber-500 tracking-widest uppercase">Partners</span>
        </div>

        <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-center tracking-tight mb-4">
          {clients.title}
        </h2>
        <p className="text-zinc-500 text-center mb-16 max-w-md mx-auto text-sm">
          Trusted by leading organisations across Southern Africa.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {clients.list.map((client, index) => (
            <a
              key={index}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${client.title}`}
              className="group flex items-center justify-center p-5 rounded-xl border border-white/[0.08] transition-all duration-300 hover:border-amber-500/20 hover:bg-amber-500/[0.05] hover:shadow-glow-sm"
              style={{ background: 'rgba(26, 26, 36, 0.6)', backdropFilter: 'blur(8px)' }}
            >
              {client.logo ? (
                <Image
                  src={client.logo}
                  alt={client.title}
                  width={110}
                  height={55}
                  className="object-contain brightness-0 invert opacity-40 group-hover:opacity-70 transition-opacity duration-300"
                />
              ) : (
                <span className="text-zinc-500 font-medium text-sm text-center group-hover:text-zinc-300 transition-colors">{client.title}</span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
