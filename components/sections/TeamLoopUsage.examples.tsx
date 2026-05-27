// Example usage of TeamLoop component
// File: app/coaches/page.tsx or components/pages/CoachesPage.tsx

import { TeamLoop } from './TeamLoop'

// Example 1: Show all coaches with header
export function AllCoachesPage() {
  return (
    <main>
      <TeamLoop />
    </main>
  )
}

// Example 2: Show featured coaches (first 3) without header
export function FeaturedCoaches() {
  return <TeamLoop limit={3} showHeader={false} />
}

// Example 3: Show coaches with offset (skip first, show next 3)
export function SecondaryCoaches() {
  return <TeamLoop limit={3} offset={1} showHeader={false} />
}

// Example 4: Show coaches in reverse order
export function ReverseCoaches() {
  return <TeamLoop limit={3} reversed={true} />
}

// Example 5: Custom data
const customTeam = [
  {
    name: "Sarah Johnson",
    role: "Leadership Coach",
    image: "/images/sarah.jpg",
    focus: "Executive leadership and team dynamics",
    qualifications: ["ICF PCC", "15+ years experience"],
  },
  {
    name: "Michael Chen",
    role: "Performance Coach",
    image: "/images/michael.jpg",
    focus: "Peak performance and resilience",
    qualifications: ["Sports Psychology", "Olympic coach"],
  },
] as any

export function CustomTeamSection() {
  return <TeamLoop people={customTeam} showHeader={false} />
}

// Example 6: Multiple sections on one page
export function MultiSectionPage() {
  return (
    <main>
      {/* Featured coaches */}
      <TeamLoop limit={3} />
      
      {/* All coaches */}
      <TeamLoop offset={3} showHeader={false} />
    </main>
  )
}

// Example 7: With custom styling
export function StyledTeamLoop() {
  return (
    <div className="my-12">
      <TeamLoop limit={4} />
    </div>
  )
}

// Example 8: Conditional rendering
export function ConditionalTeamDisplay({ showCoaches }: { showCoaches: boolean }) {
  if (!showCoaches) return null
  
  return <TeamLoop limit={6} />
}

// Example 9: Server component with data fetching
// app/coaches/page.tsx (Server Component by default in Next.js App Router)
export async function CoachesServerPage() {
  // Can fetch data here if needed
  // const coaches = await fetchCoaches()
  
  return (
    <main className="min-h-screen">
      <TeamLoop />
    </main>
  )
}

// Example 10: Client component with state
'use client'

import { useState } from 'react'

export function InteractiveTeamSection() {
  const [limit, setLimit] = useState<number | undefined>(3)
  
  return (
    <div>
      <div className="mb-4">
        <button 
          onClick={() => setLimit(3)}
          className="px-4 py-2 bg-secondary text-white text-[16px] leading-[24px] rounded mr-2"
        >
          Show 3
        </button>
        <button 
          onClick={() => setLimit(6)}
          className="px-4 py-2 bg-secondary text-white text-[16px] leading-[24px] rounded mr-2"
        >
          Show 6
        </button>
        <button 
          onClick={() => setLimit(undefined)}
          className="px-4 py-2 bg-secondary text-white text-[16px] leading-[24px] rounded"
        >
          Show All
        </button>
      </div>
      
      <TeamLoop limit={limit} />
    </div>
  )
}
