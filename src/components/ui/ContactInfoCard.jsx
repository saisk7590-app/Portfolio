import { FiArrowUpRight } from 'react-icons/fi'
import Reveal from './Reveal'

function ContactInfoCard({ item, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <a
        href={item.href}
        target={item.href.startsWith('http') ? '_blank' : undefined}
        rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
        className="glass-panel flex items-center justify-between gap-4 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25"
      >
        <div>
          <p className="text-sm text-[var(--text-muted)]">{item.label}</p>
          <p className="mt-1 text-sm font-semibold text-[var(--text-primary)] sm:text-base">{item.value}</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
          <FiArrowUpRight />
        </div>
      </a>
    </Reveal>
  )
}

export default ContactInfoCard
