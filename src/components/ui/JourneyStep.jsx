import Reveal from './Reveal'

function JourneyStep({ item, index }) {
  return (
    <Reveal delay={index * 0.06} className="relative pl-12">
      <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-sm font-semibold text-cyan-300">
        {index + 1}
      </div>
      <div className="glass-panel p-6">
        <h3 className="text-xl font-semibold">{item.stage}</h3>
        <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{item.description}</p>
      </div>
    </Reveal>
  )
}

export default JourneyStep
