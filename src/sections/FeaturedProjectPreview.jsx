import { FiArrowRight, FiLayers, FiShield } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/ui/SectionHeading'

function FeaturedProjectPreview({ project }) {
  return (
    <section className="section-space">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Featured Project"
          title="ScrapCollector is the strongest example of my product engineering approach."
          description="It combines mobile UX, admin visibility, role-based access thinking, and a backend-ready structure in one recruiter-friendly case study."
        />

        <div className="glass-panel mt-12 overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[1fr_1.05fr]">
            <img src={project.thumbnail} alt={`${project.title} screenshot preview`} className="h-full w-full object-cover" />

            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{project.category}</p>
              <h3 className="mt-4 text-3xl font-semibold">{project.title}</h3>
              <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">{project.summary}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-muted)] p-5">
                  <FiLayers className="text-xl text-cyan-300" />
                  <p className="mt-4 font-semibold">Mobile + Admin Dashboard</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                    Planned as a two-client product with user-facing mobile flows and an operations dashboard.
                  </p>
                </div>
                <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-muted)] p-5">
                  <FiShield className="text-xl text-cyan-300" />
                  <p className="mt-4 font-semibold">RBAC Thinking</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                    Includes role-based access considerations for users, operators, and admins.
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--text-secondary)]">
                {project.architectureHighlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-teal-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link className="primary-button" to={`/projects/${project.slug}`}>
                  View Case Study
                  <FiArrowRight />
                </Link>
                <Link className="secondary-button" to="/projects">
                  View All Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjectPreview
