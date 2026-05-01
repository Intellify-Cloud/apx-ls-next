import Image from 'next/image'
import { siteContent } from '../../lib/data'

export default function ClientsSection() {
  const { clients } = siteContent
  const duplicatedClients = [...clients.list, ...clients.list, ...clients.list] // Triple for smoother infinite loop

  return (
    <section id="clients" className="py-[120px] bg-white relative overflow-hidden border-y border-gray-100">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Headline: 42px, 700 weight, Dark Navy */}
        <h2 className="font-display text-[42px] leading-[42px] font-bold text-[#051424] text-center tracking-tighter mb-[80px] uppercase">
          {clients.title}
        </h2>

        <div className="relative">
          {/* Ticker / Carousel Effect */}
          <div className="flex animate-scroll space-x-8 items-center">
            {duplicatedClients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-slate-50/80 rounded-2xl border border-slate-100 flex items-center justify-center w-[210px] md:w-[288px] h-[120px] md:h-[144px] px-6 py-4 transition-all duration-500 group"
              >
                {client.logo ? (
                  <div className="relative w-full h-full grayscale opacity-60 group-hover:opacity-100 transition-all duration-500">
                    <Image
                      src={client.logo}
                      alt={client.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <span className="text-slate-400 font-display font-bold text-sm tracking-widest uppercase text-center leading-tight">
                    {client.title}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
