import { Link } from 'react-router-dom'
import ConceptCard from '../components/ui/ConceptCard'
import SectionHeading from '../components/ui/SectionHeading'

function EngineeringPreview({ concepts }) {
  return (
    <section className="section-space">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Engineering Concepts"
          title="I’m actively learning the systems behind the interfaces I build."
          description="These concept cards give recruiters a quick view into how I think about OTP, caching, RBAC, search, and system design fundamentals."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {concepts.slice(0, 3).map((concept, index) => (
            <ConceptCard key={concept.slug} concept={concept} delay={index * 0.06} />
          ))}
        </div>

        <div className="mt-8">
          <Link className="secondary-button" to="/engineering">
            Explore All Engineering Concepts
          </Link>
        </div>
      </div>
    </section>
  )
}

export default EngineeringPreview
