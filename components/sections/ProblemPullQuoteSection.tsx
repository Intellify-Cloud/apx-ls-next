export default function ProblemPullQuoteSection() {
  return (
    <section className="w-full bg-[#F8F8F6]">
      <div className="max-w-[1000px] mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-8 text-center">
          <div className="flex justify-center">
            <span className="label-caps text-secondary font-semibold">
              The Problem
            </span>
          </div>

          <blockquote className="relative max-w-[880px] mx-auto">
            <div
              className="absolute -top-8 -left-8 md:-left-12 text-[96px] leading-none font-display font-black text-secondary/15 pointer-events-none"
              aria-hidden="true"
            >
              &ldquo;
            </div>

            <p className="relative font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.12] tracking-tight text-[rgb(12,26,55)]">
              High performers don't always become great leaders. And that gap can cost organisations dearly.
            </p>
          </blockquote>

          <div className="space-y-5 max-w-[720px] mx-auto">
            <p className="font-inter text-[16px] leading-[26px] text-[rgba(12,26,55,0.7)]">
              You have talented people. But talent alone doesn't build great teams.
            </p>
            <p className="font-inter text-[16px] leading-[26px] text-[rgba(12,26,55,0.7)]">
              When leaders lack self-awareness, teams fracture, cultures stagnate, and your best people leave. You feel the pressure, but it can be hard to know where to start.
            </p>
            <p className="font-inter text-[16px] leading-[26px] text-[rgb(12,26,55)] font-medium">
              It doesn't have to be this way. Great leadership can be developed with the right guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
