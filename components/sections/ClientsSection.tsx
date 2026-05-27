import Image from 'next/image'
import { siteContent } from '../../lib/data'

export default function ClientsSection() {
  const { clients } = siteContent
  const duplicatedClients = [...clients.list, ...clients.list, ...clients.list] // Triple for smoother infinite loop

  return (
    <section id="clients" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">

        {/* Section label */}
        <div className="flex items-center justify-center mb-6">
          <span className="label-caps text-secondary font-semibold">{clients.sectionTitle}</span>
        </div>

        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(12,26,55)] text-center tracking-tight mb-4 max-w-[760px] mx-auto">
          {clients.title}
        </h2>
        <p className="font-normal text-[16px] leading-[26px] text-[rgba(12,26,55,0.7)] mb-14 max-w-[680px] mx-auto text-center">
          {clients.subtitle}
        </p>

        <div className="relative">
          {/* Ticker / Carousel Effect */}
          <div className="flex animate-scroll gap-6 lg:gap-8 items-center">
            {duplicatedClients.map((client, index) => (
                <div
                  key={index}
                  className="group flex-shrink-0 -translate-y-1 bg-slate-50/80 rounded-lg border border-[rgba(12,26,55,0.12)] shadow-lg flex items-center justify-center w-[210px] md:w-[288px] h-[120px] md:h-[144px] px-6 py-4 transition-colors duration-300 hover:border-secondary/35"
                >
                  {client.logo ? (
                    <div className="relative w-full h-full grayscale opacity-60 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                        <Image
                          src={client.logo}
                          alt={client.title}
                          width={80}
                          height={80}
                          className="object-contain"
                          style={{ width: 'auto', height: 'auto' }}
                        />
                    </div>
                  ) : (
                  <span className="text-[rgb(12,26,55)] font-display font-bold text-sm tracking-widest uppercase text-center leading-tight">
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
