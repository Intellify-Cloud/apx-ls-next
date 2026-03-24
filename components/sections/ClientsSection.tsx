import Image from 'next/image'
import { siteContent } from '../../lib/data'

export default function ClientsSection() {
  const { clients } = siteContent

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          {clients.title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {clients.list.map((client, index) => (
            <a
              key={index}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={client.title}
              className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all"
            >
              {client.logo ? (
                <Image
                  src={client.logo}
                  alt={client.title}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              ) : (
                <span className="text-gray-600 font-medium text-center">{client.title}</span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
