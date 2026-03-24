import { siteContent } from '../../lib/data'

export default function AboutSection() {
  const { about } = siteContent

  return (
    <section id="about" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8">
          {about.title}
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed">
            {about.text}
          </p>
        </div>
      </div>
    </section>
  )
}
