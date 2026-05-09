import Link from 'next/link'
import { siteContent } from '../../../lib/data'
import CoachHero from '../../../components/sections/CoachHero'
import Coach2TextColumnSection from '../../../components/sections/Coach2TextColumnSection'
import CoachCTA from '../../../components/sections/CoachCTA'
import Coach3Card from '../../../components/sections/Coach3Card'

export const metadata = {
  title: 'Helen Stone | Executive Coach & Wellness Specialist | Apex Leadership Specialists',
  description: 'Helen Stone is an executive coach and wellness specialist empowering individuals to unlock their true potential through personalized coaching.',
}

export default function HelenStonePage() {
  const { team, clients, testimonials } = siteContent
  const helen = team.people.find(p => p.name === 'Helen Stone')!

  const howIHelpText = helen.howIHelp || ''
  const parts = howIHelpText.split('\n\n')
  const introPart = parts[0] || ''

  const bulletSection = parts.slice(1).join('\n\n')
  const bulletPoints = bulletSection
    .split('\n')
    .map(line => line.replace(/^[•\-\*\s]+/, '').trim())
    .filter(line => line.length > 0 && !line.toLowerCase().includes('people who benefit'))

  return (
    <>
      <CoachHero
        name="Helen Stone"
        title="Leadership & Wellness Coach"
        description="Empowering individuals to unlock potential through personalized coaching."
        cardDescription="Empowering individuals to unlock potential through personalized coaching."
        image="/assets/team/helen-stone.png"
        imageAlt="Helen Stone"
        coachId="helen-stone"
      />

      <Coach2TextColumnSection
        title="About Helen"
        text={helen.aboutCraig || ''}
        qualifications={helen.qualifications || []}
        image={helen.image || ''}
        imageAlt={helen.name}
      />

      <Coach3Card items={helen.whatIDo || []} />

      <CoachCTA coachId="helen-stone" />

    </>
  )
}