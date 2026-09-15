import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import Reveal from './Reveal'

const iconMap = {
  Email: FiMail,
  LinkedIn: FiLinkedin,
  GitHub: FiGithub,
}

function ContactInfoCard({ item, delay = 0 }) {
  const Icon = iconMap[item.label] || FiArrowUpRight

  return (
    <Reveal delay={delay}>
      <a
        href={item.href}
        target={item.href.startsWith('http') ? '_blank' : undefined}
        rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
        className="glass-panel flex items-center justify-between gap-4 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_15px_30px_rgba(56,189,248,0.1)] group"
      >
        <div className="flex items-center gap-3.5 min-w-0">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 group-hover:bg-cyan-400/20 group-hover:border-cyan-400/40 transition-colors">
            <Icon className="text-base" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">{item.label}</p>
            <p className="mt-0.5 truncate text-sm font-semibold text-[var(--text-primary)] group-hover:text-cyan-300 transition-colors">
              {item.value}
            </p>
          </div>
        </div>
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-[var(--text-secondary)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-300">
          <FiArrowUpRight />
        </div>
      </a>
    </Reveal>
  )
}

export default ContactInfoCard
