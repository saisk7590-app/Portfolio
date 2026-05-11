import { engineeringConcepts } from '../data/engineeringConcepts'
import { getFeaturedProject } from '../utils/projectHelpers'
import AboutPreview from '../sections/AboutPreview'
import ContactCta from '../sections/ContactCta'
import EngineeringPreview from '../sections/EngineeringPreview'
import FeaturedProjectPreview from '../sections/FeaturedProjectPreview'
import HomeHero from '../sections/HomeHero'
import LearningJourneyPreview from '../sections/LearningJourneyPreview'
import SkillsPreview from '../sections/SkillsPreview'

function HomePage() {
  const featuredProject = getFeaturedProject()

  return (
    <>
      <HomeHero />
      <AboutPreview />
      <SkillsPreview />
      <FeaturedProjectPreview project={featuredProject} />
      <EngineeringPreview concepts={engineeringConcepts} />
      <LearningJourneyPreview />
      <ContactCta />
    </>
  )
}

export default HomePage
