import { siteContent } from '../../lib/data'
import { ReactNode } from 'react'
import { Award, Shield, Users } from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
}

export default function BenefitsSection() {
  const { benefitsSection } = siteContent

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-white">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-center mb-6">
          <span className="label-caps text-secondary font-semibold">THE FOUNDATION</span>
        </div>

        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(12,26,55)] text-center tracking-tight mb-8 max-w-2xl mx-auto">
          {benefitsSection.headline}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[900px] mx-auto">
          {benefitsSection.items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center -translate-y-1 p-5 bg-white border border-[rgba(12,26,55,0.12)] rounded-lg shadow-lg transition-colors duration-300 hover:border-secondary/35"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-orange-600 mb-3 shrink-0">
                {iconMap[item.title === 'Proven Results' ? 'Award' : item.title === 'Tailored Approach' ? 'Shield' : 'Users']}
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
