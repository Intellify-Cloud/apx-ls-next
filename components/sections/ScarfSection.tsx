import Image from 'next/image'
import { siteContent } from '../../lib/data'

export default function ScarfSection() {
  const { scarf } = siteContent

  return (
    <section id="scarf" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="relative h-80 md:h-full min-h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={scarf.image}
              alt="SCARF Assessment"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {scarf.title}
            </h2>
            <p className="text-gray-600 mb-2">{scarf.description}</p>
            <p className="text-lg font-medium text-primary mb-2">{scarf.welcomeText}</p>
            <p className="text-gray-600 mb-6">{scarf.details}</p>

            <ul className="space-y-2 mb-6">
              {scarf.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-600">
                  <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>

            <p className="text-gray-500 text-sm mb-8">{scarf.instructions}</p>

            <a
              href={scarf.buttonLink}
              className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              {scarf.buttonText}
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
