import Image from 'next/image'
import { siteContent } from '../../lib/data'

export default function TeamSection() {
  const { team } = siteContent

  return (
    <section id="team" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
          {team.title}
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          {team.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.people.map((member, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gray-200 relative">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <svg className="w-16 h-16" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
                <p className="text-accent font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.focus}</p>
                {member.qualifications && member.qualifications.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Qualifications:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {member.qualifications.slice(0, 3).map((q, i) => (
                        <li key={i}>• {q}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
