import PhoneMockup from './PhoneMockup'
import Reveal from './Reveal'

function ProjectGalleryCard({ screen, mobile = false, delay = 0 }) {
  if (mobile) {
    return (
      <Reveal delay={delay}>
        <div className="glass-panel flex flex-col items-center justify-center p-5 transition duration-300 hover:border-cyan-400/30">
          <PhoneMockup
            src={screen.src}
            alt={screen.title}
            title={screen.title}
            size="sm"
          />
        </div>
      </Reveal>
    )
  }

  // Dashboard / Desktop Web view
  return (
    <Reveal delay={delay}>
      <div className="glass-panel p-4">
        <div className="w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] shadow-md">
          {/* Mock Browser Header Bar */}
          <div className="flex items-center gap-1.5 border-b border-[var(--border)] bg-slate-900/60 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-rose-500/80" />
            <span className="h-2 w-2 rounded-full bg-amber-500/80" />
            <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-[10px] text-slate-400 font-mono">{screen.title.toLowerCase().replace(/\s+/g, '-')}.view</span>
          </div>

          <img
            src={screen.src}
            alt={screen.title}
            className="w-full aspect-[16/10] object-cover"
          />
        </div>
        <p className="mt-4 text-sm font-semibold text-[var(--text-primary)]">{screen.title}</p>
      </div>
    </Reveal>
  )
}

export default ProjectGalleryCard
