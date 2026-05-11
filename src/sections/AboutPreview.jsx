import { aboutPreview } from '../data/siteContent'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'

function AboutPreview() {
  return (
    <section className="section-space">
      <div className="page-shell">
        <SectionHeading
          eyebrow="About Preview"
          title="I like building products where frontend polish, backend logic, and user flow all connect."
          description="My approach is product-oriented: understand the user journey, shape a clean interface, and support it with a structure that can scale as the product grows."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {aboutPreview.map((item, index) => {
            const Icon = item.icon

            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="glass-panel h-full p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-xl text-cyan-300">
                    <Icon />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{item.description}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
