import { useState } from 'react'
import { FiArrowRight, FiLayers, FiShield, FiSmartphone, FiMonitor } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import PhoneMockup from '../components/ui/PhoneMockup'
import SectionHeading from '../components/ui/SectionHeading'

function FeaturedProjectPreview({ project }) {
  const hasMobileScreens = project.screens?.mobile?.length > 0
  const [activeTab, setActiveTab] = useState(hasMobileScreens ? 'mobile' : 'admin')

  const mobileScreen = project.screens?.mobile?.[0]
  const adminScreen = project.screens?.admin?.[0]

  return (
    <section className="section-space">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Featured Project"
          title="ScrapCollector is the strongest example of my product engineering approach."
          description="It combines mobile UX, admin visibility, role-based access thinking, and a backend-ready structure in one recruiter-friendly case study."
        />

        <div className="glass-panel mt-12 overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_1.05fr]">
            {/* Left Column: Interactive Mobile App / Dashboard Showcase */}
            <div className="relative flex flex-col items-center justify-center bg-slate-950/70 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-[var(--border)]">
              {/* Screen Mode Switcher Pill */}
              <div className="mb-6 flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-muted)] p-1 backdrop-blur-md">
                {hasMobileScreens && (
                  <button
                    onClick={() => setActiveTab('mobile')}
                    className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                      activeTab === 'mobile'
                        ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 shadow-sm'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    <FiSmartphone className="text-sm" />
                    <span>Mobile App View</span>
                  </button>
                )}
                {adminScreen && (
                  <button
                    onClick={() => setActiveTab('admin')}
                    className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                      activeTab === 'admin'
                        ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 shadow-sm'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    <FiMonitor className="text-sm" />
                    <span>Admin Dashboard</span>
                  </button>
                )}
              </div>

              {/* View Display */}
              {activeTab === 'mobile' && mobileScreen ? (
                <div className="py-2">
                  <PhoneMockup
                    src={mobileScreen.src}
                    alt={mobileScreen.title}
                    title="ScrapCollector Mobile App"
                    subtitle="React Native Pickup Request Flow"
                    size="md"
                  />
                </div>
              ) : (
                <div className="w-full max-w-md overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] shadow-xl">
                  <div className="flex items-center gap-1.5 border-b border-[var(--border)] bg-slate-900/80 px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-rose-500/80" />
                    <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                    <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-[10px] text-slate-400">operations-admin.view</span>
                  </div>
                  <img
                    src={adminScreen?.src || project.thumbnail}
                    alt={`${project.title} admin dashboard`}
                    className="w-full aspect-[16/10] object-cover"
                  />
                </div>
              )}
            </div>

            {/* Right Column: Case Study Details */}
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <span className="section-label">{project.category}</span>
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300 border border-cyan-400/20">
                  📱 React Native
                </span>
              </div>

              <h3 className="mt-4 text-3xl font-bold">{project.title}</h3>
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
                    <span className="mt-2 h-2 w-2 rounded-full bg-teal-400 flex-shrink-0" />
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
