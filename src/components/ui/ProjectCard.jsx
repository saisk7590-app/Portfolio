import { FiArrowRight, FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'

function ProjectCard({ project, featured = false, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="glass-panel h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25">
        <img
          src={project.thumbnail}
          alt={`${project.title} preview`}
          className={`w-full object-cover ${featured ? 'h-72' : 'h-56'}`}
        />

        <div className="p-6 sm:p-7">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
            <span>{project.category}</span>
            <span className="h-1 w-1 rounded-full bg-[var(--text-muted)]" />
            <span>{project.role}</span>
          </div>

          <h3 className="mt-4 text-2xl font-semibold">{project.title}</h3>
          <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{project.shortDescription}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.techStack.map((item) => (
              <span key={item} className="badge">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="primary-button" to={`/projects/${project.slug}`}>
              View Case Study
              <FiArrowRight />
            </Link>
            <a className="secondary-button" href={project.links.github} target="_blank" rel="noreferrer">
              <FiGithub />
              GitHub
            </a>
            <a className="secondary-button" href={project.links.demo} target="_blank" rel="noreferrer">
              <FiArrowUpRight />
              Demo
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default ProjectCard
