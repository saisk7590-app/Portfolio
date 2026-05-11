import Reveal from './Reveal'

function SkillGroupCard({ group, delay = 0 }) {
  const Icon = group.icon

  return (
    <Reveal delay={delay} className="h-full">
      <article className="glass-panel h-full p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-xl text-cyan-300">
          <Icon />
        </div>
        <h3 className="mt-5 text-xl font-semibold">{group.title}</h3>
        <div className="mt-5 flex flex-wrap gap-2">
          {group.items.map((item) => (
            <span key={item} className="badge">
              {item}
            </span>
          ))}
        </div>
      </article>
    </Reveal>
  )
}

export default SkillGroupCard
