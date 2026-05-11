import { motion } from 'framer-motion'
import { FiArrowRight, FiBriefcase, FiLayers } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { heroStats } from '../data/siteContent'
import Reveal from '../components/ui/Reveal'

function HomeHero() {
  return (
    <section className="section-space pt-12 sm:pt-16">
      <div className="page-shell grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <Reveal>
            <span className="section-label">Recruiter-focused product engineer portfolio</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Building full stack products with clear UX, scalable frontend structure, and practical backend thinking.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
              I’m Sai Kiran, a fresher Full Stack Product Engineer who enjoys turning product ideas into responsive
              web and mobile experiences using React, React Native, Node.js, Express, PostgreSQL, and UI/UX planning.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link className="primary-button" to="/projects/scrapcollector">
                View ScrapCollector Case Study
                <FiArrowRight />
              </Link>
              <Link className="secondary-button" to="/projects">
                Browse Projects
                <FiBriefcase />
              </Link>
              <Link className="secondary-button" to="/engineering">
                Engineering Concepts
                <FiLayers />
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="glass-panel relative overflow-hidden p-6 sm:p-8">
            <motion.div
              className="absolute right-6 top-6 h-24 w-24 rounded-full bg-cyan-400/15 blur-3xl"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            />

            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-muted)] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
                Product Engineer Snapshot
              </p>
              <p className="mt-3 text-2xl font-semibold">Frontend-first, architecture-aware, UI/UX-informed.</p>
              <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                I like products where the user experience, technical structure, and future scalability all matter.
              </p>
            </div>

            <div className="mt-6 space-y-4">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] p-5">
                  <p className="text-sm text-[var(--text-muted)]">{stat.label}</p>
                  <p className="mt-2 text-lg font-semibold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default HomeHero
