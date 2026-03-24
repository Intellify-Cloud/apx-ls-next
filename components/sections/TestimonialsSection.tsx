import { siteContent } from '../../lib/data'

export default function TestimonialsSection() {
  const { testimonials } = siteContent

  return (
    <section id="testimonials" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          {testimonials.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.people.slice(0, 6).map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-600 italic mb-4">"{testimonial.testimony}"</p>
              <div>
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-sm text-accent">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
