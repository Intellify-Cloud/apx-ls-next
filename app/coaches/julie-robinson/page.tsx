import { siteContent } from '../../../lib/data'
import CoachHero from '../../../components/sections/CoachHero'
import Coach2TextColumnSection from '../../../components/sections/Coach2TextColumnSection'
import CoachCTA from '../../../components/sections/CoachCTA'
import Coach3Card from '../../../components/sections/Coach3Card'
import PersonJsonLd from '../../../components/PersonJsonLd'

export const metadata = {
  title: {
    absolute: 'Julie Robinson | Executive Coach & Industrial/Organisational Psychologist | Apex Leadership Specialists',
  },
  description: 'Julie Robinson is an executive coach and Industrial/Organisational Psychologist supporting leaders with self-awareness, resilience, wellbeing, and sustainable performance.',
}

export default function JulieRobinsonPage() {
  const { team } = siteContent
  const julie = team.people.find(p => p.name === 'Julie Robinson')!

  return (
    <>
      <PersonJsonLd
        name="Julie Robinson"
        jobTitle="Executive Coach & Industrial/Organisational Psychologist"
        description={julie.focus}
        image="https://apexleadership.co.za/assets/team/Julie-Robinson%20-%20Copy.png"
        url="https://apexleadership.co.za/coaches/julie-robinson"
      />

      <CoachHero
        name="Julie Robinson"
        title="Executive Coach & Industrial/Organisational Psychologist"
        description="A mind-body approach to leadership, self-awareness, and wellbeing."
        cardDescription="A mind-body approach to leadership, self-awareness, and wellbeing."
        image="/assets/team/Julie-Robinson - Copy.png"
        imageAlt="Julie Robinson, executive coach and industrial organisational psychologist in South Africa"
        coachId="julie-robinson"
      />

      <Coach2TextColumnSection
        title="About Julie"
        text={julie.aboutCraig || ''}
        qualifications={julie.qualifications || []}
        image={julie.image || ''}
        imageAlt="Julie Robinson, executive coach and industrial organisational psychologist in South Africa"
      />

      <Coach3Card items={julie.whatIDo || []} />

      <CoachCTA coachId="julie-robinson" />
    </>
  )
}
