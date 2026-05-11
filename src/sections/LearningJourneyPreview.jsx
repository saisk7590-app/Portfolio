import JourneyStep from '../components/ui/JourneyStep'
import SectionHeading from '../components/ui/SectionHeading'
import { learningJourney } from '../data/siteContent'

function LearningJourneyPreview() {
  return (
    <section className="section-space">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Learning Journey"
          title="A roadmap built on fundamentals, curiosity, and product implementation."
          description="I’ve been building my foundation step by step so I can contribute with more confidence across frontend, backend, and product thinking."
        />

        <div className="relative mt-12 space-y-6 before:absolute before:left-[15px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-[var(--border)]">
          {learningJourney.map((item, index) => (
            <JourneyStep key={item.stage} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default LearningJourneyPreview
