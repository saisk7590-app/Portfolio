import ConceptCard from '../components/ui/ConceptCard'
import SectionHeading from '../components/ui/SectionHeading'
import { engineeringConcepts } from '../data/engineeringConcepts'

function EngineeringPage() {
  return (
    <section className="section-space">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Engineering"
          title="Concepts I’m learning to become a stronger full stack product engineer."
          description="These cards are intentionally concise and beginner-friendly. They show the kind of system thinking I’m growing alongside frontend and product work."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {engineeringConcepts.map((concept, index) => (
            <ConceptCard key={concept.slug} concept={concept} delay={index * 0.06} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EngineeringPage
