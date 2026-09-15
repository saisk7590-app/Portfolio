import { useState } from 'react'
import { FiArrowRight, FiArrowUpRight, FiGithub, FiSmartphone, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import PhoneMockup from './PhoneMockup'
import Reveal from './Reveal'

function ProjectCard({ project, featured = false, delay = 0 }) {
  const [showPhoneModal, setShowPhoneModal] = useState(false)
  const hasMobile = project.screens?.mobile?.length > 0
  const mobileScreen = project.screens?.mobile?.[0]

  return (
    <>
      <Reveal delay={delay} className="h-full">
        <article className="glass-panel h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25">
          <div className="relative overflow-hidden">
            <img
              src={project.thumbnail}
              alt={`${project.title} preview`}
              className={`w-full object-cover ${featured ? 'h-72' : 'h-56'}`}
            />
            {hasMobile && (
              <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-slate-950/80 px-2.5 py-1 text-[11px] font-semibold text-cyan-300 backdrop-blur-md border border-cyan-400/30">
                <FiSmartphone className="text-xs" /> Mobile App
              </span>
            )}
          </div>

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

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link className="primary-button" to={`/projects/${project.slug}`}>
                View Case Study
                <FiArrowRight />
              </Link>
              {hasMobile && (
                <button
                  type="button"
                  onClick={() => setShowPhoneModal(true)}
                  className="secondary-button !border-cyan-400/30 !bg-cyan-400/10 text-cyan-300"
                  title="Preview in Mobile Phone Mockup"
                >
                  <FiSmartphone />
                  Phone View
                </button>
              )}
              {project.links?.github && (
                <a className="secondary-button" href={project.links.github} target="_blank" rel="noreferrer">
                  <FiGithub />
                  GitHub
                </a>
              )}
              {project.links?.demo && (
                <a className="secondary-button" href={project.links.demo} target="_blank" rel="noreferrer">
                  <FiArrowUpRight />
                  Demo
                </a>
              )}
            </div>
          </div>
        </article>
      </Reveal>

      {/* Interactive Mobile Phone Simulator Modal */}
      {showPhoneModal && mobileScreen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md animate-fadeIn"
          onClick={() => setShowPhoneModal(false)}
        >
          <div
            className="relative flex flex-col items-center rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-2xl max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex w-full items-center justify-between pb-4 mb-2 border-b border-white/10">
              <div>
                <h4 className="text-sm font-bold text-white">{project.title}</h4>
                <p className="text-xs text-cyan-400 font-medium">Mobile App Simulation</p>
              </div>
              <button
                onClick={() => setShowPhoneModal(false)}
                className="rounded-full p-1.5 text-slate-400 hover:bg-white/10 hover:text-white transition"
                aria-label="Close modal"
              >
                <FiX className="text-lg" />
              </button>
            </div>

            {/* Phone Mockup inside Modal */}
            <div className="py-2">
              <PhoneMockup
                src={mobileScreen.src}
                alt={mobileScreen.title}
                title={mobileScreen.title}
                subtitle="Interactive Mobile Experience"
                size="md"
              />
            </div>

            <Link
              to={`/projects/${project.slug}`}
              onClick={() => setShowPhoneModal(false)}
              className="primary-button mt-4 w-full text-center justify-center text-xs"
            >
              Open Full Case Study
              <FiArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectCard
