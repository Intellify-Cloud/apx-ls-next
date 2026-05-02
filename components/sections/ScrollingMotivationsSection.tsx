"use client"

import { siteContent } from '../../lib/data'
import { useRouter } from 'next/navigation'
import * as React from 'react'

export default function ScrollingMotivationsSection() {
  const { motivationKeywords } = siteContent
  const duplicatedMotivations = [...motivationKeywords, ...motivationKeywords]
  const router = useRouter()

  const handleScroll = () => {
    router.push('#about')
  }

  return (
    <section 
      className="h-[68.5px] flex items-center bg-[#0c1a37] border-y border-white/[0.06] overflow-hidden cursor-pointer" 
      onClick={handleScroll}
    >
      <div className="w-full">
        <div className="relative">
          <div className="flex animate-scroll items-center gap-[24px]">
            {duplicatedMotivations.map((keyword, index) => (
              <React.Fragment key={index}>
                <span className="font-display text-[14px] leading-[14px] font-semibold text-white uppercase tracking-widest whitespace-nowrap">
                  {keyword}
                </span>
                {index < duplicatedMotivations.length - 1 && (
                  <span className="text-[#ed5c2c]/40 mx-[6px]">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
