import Reveal from './Reveal'

function ConceptCard({ concept, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="glass-panel h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25">
        <div className="rounded-2xl border border-cyan-400/15 bg-gradient-to-br from-cyan-400/10 to-teal-400/10 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Architecture Visual</p>
          <p className="mt-3 text-sm font-medium text-[var(--text-primary)]">{concept.visualLabel}</p>
        </div>
        <h3 className="mt-5 text-xl font-semibold">{concept.title}</h3>
        <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{concept.summary}</p>
      </article>
    </Reveal>
  )
}

export default ConceptCard
