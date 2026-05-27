import { siteContent } from '../../lib/data'
import { BookOpen, Brain, ShieldCheck } from 'lucide-react'

const iconMap = {
  '5 Lens Enneagram': <BookOpen className="w-5 h-5" />,
  'Brain-Based Coaching': <Brain className="w-5 h-5" />,
  'Comensa Standards': <ShieldCheck className="w-5 h-5" />,
}

export default function MethodologySection() {
  const { methodologySection } = siteContent

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-white">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-center mb-6">
          <span className="label-caps text-secondary font-semibold">OUR METHODOLOGY</span>
        </div>

        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(12,26,55)] text-center tracking-tight mb-8 max-w-2xl mx-auto">
          {methodologySection.headline}
        </h2>

        <p className="text-[16px] leading-[26px] text-[rgba(12,26,55,0.7)] text-center max-w-2xl mx-auto mb-14">
          {methodologySection.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[900px] mx-auto">
          {[
            { title: '5 Lens Enneagram', description: 'A data-driven personality framework that gives leaders deep insight into their patterns of thinking, feeling, and behaving.' },
            { title: 'Brain-Based Coaching', description: 'Grounded in neuroscience, this approach helps leaders understand how to change behaviour and build new habits that stick.' },
            { title: 'Comensa Standards', description: 'All our coaches operate within the ethical and professional framework set by Coaches and Mentors of South Africa.' },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center -translate-y-1 p-5 bg-white border border-[rgba(12,26,55,0.12)] rounded-lg shadow-lg transition-colors duration-300 hover:border-secondary/35"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-orange-600 mb-3">
                {iconMap[item.title as keyof typeof iconMap]}
              </div>
              <h3 className="font-manrope font-bold text-[18px] leading-[25px] text-[rgb(12,26,55)] mb-1">
                {item.title}
              </h3>
              <p className="font-inter font-normal text-[14px] leading-[23px] text-[rgba(12,26,55,0.7)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
