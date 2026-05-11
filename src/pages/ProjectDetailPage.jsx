import { FiArrowLeft, FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { Link, useParams } from 'react-router-dom'
import ProjectGalleryCard from '../components/ui/ProjectGalleryCard'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { getProjectBySlug } from '../utils/projectHelpers'

function DetailBlock({ title, content }) {
  return (
    <div className="glass-panel p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{content}</p>
    </div>
  )
}

function ListBlock({ title, items }) {
  return (
    <div className="glass-panel p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--text-secondary)]">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ProjectDetailPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <section className="section-space">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Project Not Found"
            title="The project you are looking for does not exist in this frontend demo."
            description="Try going back to the projects page to browse the available case studies."
          />
          <div className="mt-8">
            <Link className="secondary-button" to="/projects">
              <FiArrowLeft />
              Back to Projects
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-space">
      <div className="page-shell">
        <Reveal>
          <Link className="secondary-button" to="/projects">
            <FiArrowLeft />
            Back to Projects
          </Link>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <Reveal>
            <img src={project.thumbnail} alt={`${project.title} thumbnail`} className="glass-panel w-full object-cover" />
          </Reveal>

          <Reveal delay={0.06}>
            <span className="section-label">{project.category}</span>
            <h1 className="mt-6 text-4xl font-bold sm:text-5xl">{project.title}</h1>
            <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">{project.summary}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.techStack.map((item) => (
                <span key={item} className="badge">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a className="primary-button" href={project.links.github} target="_blank" rel="noreferrer">
                <FiGithub />
                GitHub
              </a>
              <a className="secondary-button" href={project.links.demo} target="_blank" rel="noreferrer">
                <FiArrowUpRight />
                Demo
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <DetailBlock title="Project Overview" content={project.overview} />
          <ListBlock title="Features" items={project.features} />
          <DetailBlock title="Architecture" content={project.architecture} />
          <DetailBlock title="RBAC / Multi-role Login" content={project.rbac} />
          <DetailBlock title="Backend/API Explanation" content={project.backendExplanation} />
          <ListBlock title="Challenges Faced" items={project.challenges} />
          <ListBlock title="Learnings" items={project.learnings} />
        </div>

        {project.screens.mobile.length ? (
          <div className="mt-16">
            <SectionHeading
              eyebrow="Mobile App Screens"
              title="Placeholder mobile views for the case study."
              description="These are mock visuals using gradient placeholders so the page architecture is ready before real screenshots are added."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {project.screens.mobile.map((screen, index) => (
                <ProjectGalleryCard key={screen.title} screen={screen} mobile delay={index * 0.06} />
              ))}
            </div>
          </div>
        ) : null}

        {project.screens.admin.length ? (
          <div className="mt-16">
            <SectionHeading
              eyebrow="Admin Dashboard Screens"
              title="Placeholder dashboard visuals for the admin experience."
              description="The layout supports real admin screenshots later, but already communicates the intended dashboard storytelling."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {project.screens.admin.map((screen, index) => (
                <ProjectGalleryCard key={screen.title} screen={screen} delay={index * 0.06} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default ProjectDetailPage
