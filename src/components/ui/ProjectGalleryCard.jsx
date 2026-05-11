import Reveal from './Reveal'

function ProjectGalleryCard({ screen, mobile = false, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="glass-panel p-4">
        <div
          className={`mx-auto overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface-muted)] ${
            mobile ? 'max-w-[220px]' : 'w-full'
          }`}
        >
          <img
            src={screen.src}
            alt={screen.title}
            className={`w-full object-cover ${mobile ? 'aspect-[9/18]' : 'aspect-[16/10]'}`}
          />
        </div>
        <p className="mt-4 text-sm font-semibold text-[var(--text-primary)]">{screen.title}</p>
      </div>
    </Reveal>
  )
}

export default ProjectGalleryCard
