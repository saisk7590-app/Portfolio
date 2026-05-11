import { useState } from 'react'
import ContactInfoCard from '../components/ui/ContactInfoCard'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { contactCards } from '../data/siteContent'

const initialFormState = {
  name: '',
  email: '',
  message: '',
}

function ContactPage() {
  const [formData, setFormData] = useState(initialFormState)
  const [status, setStatus] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in your name, email, and message before sending.')
      return
    }

    // Frontend-only form handling keeps the portfolio demo deployable without extra services.
    setStatus('Thanks for reaching out. This demo form stores nothing yet and is ready for future backend or email integration.')
    setFormData(initialFormState)
  }

  return (
    <section className="section-space">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s connect about entry-level product engineering opportunities."
          description="I’m looking for roles where I can contribute to real products, keep learning from experienced teammates, and grow through practical engineering work."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-4">
            {contactCards.map((item, index) => (
              <ContactInfoCard key={item.label} item={item} delay={index * 0.06} />
            ))}
          </div>

          <Reveal>
            <div className="glass-panel p-6 sm:p-8">
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-muted)] p-5">
                <p className="text-sm leading-7 text-[var(--text-secondary)]">
                  This is a frontend-only contact flow for now. It already has the correct UI and state handling, and
                  can later be connected to EmailJS, Resend, Formspree, or a custom backend.
                </p>
              </div>

              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="input-field"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="input-field"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    className="input-field resize-none"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share the role, team, or project you’d like to discuss."
                  />
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <button type="submit" className="primary-button">
                    Send Message
                  </button>
                  <p className="text-sm text-[var(--text-secondary)]">{status}</p>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
