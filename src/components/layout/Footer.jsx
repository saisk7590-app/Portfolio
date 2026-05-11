import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { siteMeta } from '../../data/siteContent'

function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="page-shell flex flex-col gap-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div>
          <p className="text-sm font-semibold text-[var(--text-primary)]">
            {siteMeta.name} · {siteMeta.role}
          </p>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            Frontend-only portfolio architecture built for recruiter clarity and scalable project storytelling.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-[var(--text-secondary)] sm:justify-end">
          <a className="secondary-button !px-4 !py-2" href={siteMeta.github} target="_blank" rel="noreferrer">
            <FiGithub />
            GitHub
          </a>
          <a className="secondary-button !px-4 !py-2" href={siteMeta.linkedin} target="_blank" rel="noreferrer">
            <FiLinkedin />
            LinkedIn
          </a>
          <a className="secondary-button !px-4 !py-2" href={`mailto:${siteMeta.email}`}>
            <FiMail />
            Email
          </a>
          <button type="button" className="secondary-button !px-4 !py-2">
            {siteMeta.resumeLabel}
          </button>
        </div>
      </div>

      <div className="page-shell mt-6 text-center text-xs text-[var(--text-muted)] sm:text-left">
        © {new Date().getFullYear()} {siteMeta.name}. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
