import { Link } from 'react-router-dom'
import Reveal from '../components/ui/Reveal'

function ContactCta() {
  return (
    <section className="section-space">
      <div className="page-shell">
        <Reveal>
          <div className="glass-panel overflow-hidden p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="section-label">Contact</span>
                <h2 className="section-title">Looking for an entry-level engineer who can think across product and implementation.</h2>
                <p className="section-copy">
                  I’m interested in opportunities where I can contribute to real user-facing products, keep learning from strong teams, and grow through hands-on engineering work.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <Link className="primary-button" to="/contact">
                  Contact Sai Kiran
                </Link>
                <Link className="secondary-button" to="/projects">
                  Review Project Work
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default ContactCta
