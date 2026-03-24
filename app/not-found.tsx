import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Mountain Hero Background */}
      <Image
        src="/assets/img/hero/hero-bw.jpg"
        alt="Mountain landscape"
        fill
        className="object-cover"
        priority
      />
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        {/* Large 404 */}
        <h1 className="text-8xl md:text-9xl font-bold text-white mb-4 tracking-wider">
          404
        </h1>
        
        {/* Haiku */}
        <div className="mb-8">
          <p className="text-xl md:text-2xl text-gray-200 italic font-light leading-relaxed">
            Trails fade behind you
          </p>
          <p className="text-xl md:text-2xl text-gray-200 italic font-light leading-relaxed">
            The summit still waits for you
          </p>
          <p className="text-xl md:text-2xl text-gray-200 italic font-light leading-relaxed">
            Turn back, find the path
          </p>
        </div>
        
        {/* Subtitle */}
        <p className="text-lg text-gray-300 mb-8">
          You've wandered off the map. Let's get you back on the trail.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-[#e94560] text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Return Home
          </Link>
          <Link
            href="/contact"
            className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
          >
            Get Directions
          </Link>
        </div>
      </div>
      
      {/* Decorative mountain silhouette at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
    </main>
  )
}