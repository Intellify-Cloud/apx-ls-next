import Image from 'next/image'
import Link from 'next/link'

interface CoachHeroProps {
  name: string
  title: string
  description: string
  cardDescription?: string
  image: string
  imageAlt: string
  coachId: string
}

export default function CoachHero({
  name,
  title,
  description,
  cardDescription,
  image,
  imageAlt,
  coachId,
}: CoachHeroProps) {

  return (
    <section className="relative h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#f8f8f6]">
      <div className="absolute inset-0 max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 pt-20">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center h-full">
           <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left px-4 md:px-0 pb-8 md:pb-0">
             <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0c1a37] tracking-tight mb-4 md:mb-6 leading-[1.05]">
               {title}
             </h1>
             <p className="text-base md:text-lg lg:text-xl text-[#0c1a37]/70 mb-6 md:mb-10 max-w-[560px] leading-relaxed">
               {description}
             </p>
             <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
               <Link
                 href={`/contact?coach=${coachId}`}
                 className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-[#ed5c2c] text-white font-semibold rounded-[12px] transition-all duration-200 hover:bg-[#dd5128] hover:shadow-[0_0_30px_rgba(237,92,44,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ed5c2c]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
               >
                 Start your journey
               </Link>
             </div>
           </div>

           <div className="relative flex justify-center md:justify-end lg:justify-start">
             <div className="relative w-full max-w-[380px] md:max-w-[420px] lg:max-w-[480px] flex items-center justify-center">
                {/* Orange accent square - desktop (lg+): offset behind image */}
                <div className="absolute -z-10 hidden lg:block inset-0 rotate-5 scale-110">
                  <div className="w-full h-full rounded-3xl bg-[#ed5c2c]" />
                </div>
                {/* Tablet/mobile: orange accent square centered on image, rotated 5° */}
                <div className="absolute -z-10 lg:hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 rotate-5 rounded-3xl bg-[#ed5c2c]" />
                </div>

               <div className="relative z-10 bg-white rounded-3xl shadow-2xl overflow-hidden">
                 <Image
                   src={image}
                   alt={imageAlt}
                   width={400}
                   height={400}
                   className="object-contain w-full h-auto"
                   priority
                 />
               </div>

                 {/* Desktop: name card with horizontal center aligned to left edge of profile image */}
                 <div className="hidden lg:block absolute z-20 bottom-4 left-0 -translate-x-1/2">
                   <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 w-[260px]">
                     <p className="font-display text-lg md:text-xl font-bold text-[#0c1a37] mb-1 md:mb-2">{name}</p>
                     <p className="text-[#0c1a37]/70 text-xs md:text-sm">{cardDescription || description}</p>
                   </div>
                 </div>

                  {/* Tablet: name card with horizontal center aligned to left edge of profile image */}
                  <div className="hidden md:block lg:hidden absolute z-20 bottom-4 left-0 -translate-x-1/2">
                    <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 w-[260px]">
                      <p className="font-display text-lg md:text-xl font-bold text-[#0c1a37] mb-1 md:mb-2">{name}</p>
                      <p className="text-[#0c1a37]/70 text-xs md:text-sm">{cardDescription || description}</p>
                    </div>
                  </div>

                  {/* Phone: name card with offset to avoid clipping */}
                  <div className="md:hidden absolute z-20 bottom-4 left-4">
                    <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 w-[260px]">
                      <p className="font-display text-lg md:text-xl font-bold text-[#0c1a37] mb-1 md:mb-2">{name}</p>
                      <p className="text-[#0c1a37]/70 text-xs md:text-sm">{cardDescription || description}</p>
                    </div>
                  </div>
              </div>
            </div>
         </div>
      </div>
    </section>
   )
 }