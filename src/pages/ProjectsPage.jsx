import SectionHeading from '../components/ui/SectionHeading'
import ProjectCard from '../components/ui/ProjectCard'
import { projects } from '../data/projects'

function ProjectsPage() {
  return (
    <section className="section-space">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Projects"
          title="A growing portfolio of product-oriented engineering work."
          description="Each project is presented as a clear case study so recruiters can quickly understand the product context, tech choices, and engineering thinking behind the interface."
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} delay={index * 0.06} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsPage
