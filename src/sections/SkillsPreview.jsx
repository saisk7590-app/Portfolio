import SkillGroupCard from '../components/ui/SkillGroupCard'
import SectionHeading from '../components/ui/SectionHeading'
import { skillGroups } from '../data/siteContent'

function SkillsPreview() {
  return (
    <section className="section-space">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Skills Preview"
          title="A practical stack shaped around shipping product experiences."
          description="The goal is not to use every tool. It is to use the right mix of frontend, backend, database, and design skills to build useful products well."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {skillGroups.map((group, index) => (
            <SkillGroupCard key={group.title} group={group} delay={index * 0.05} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsPreview
