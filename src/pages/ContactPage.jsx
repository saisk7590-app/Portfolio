import { useState } from 'react'
import { FiCheckCircle, FiClock, FiMail, FiMessageSquare, FiSend, FiUser } from 'react-icons/fi'
import ContactInfoCard from '../components/ui/ContactInfoCard'
import ContactPhoneVisual from '../components/ui/ContactPhoneVisual'
import Reveal from '../components/ui/Reveal'
import { contactCards } from '../data/siteContent'

const initialFormState = {
  name: '',
  email: '',
  message: '',
}

function ContactPage() {
  const [formData, setFormData] = useState(initialFormState)
  const [status, setStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
    if (status) setStatus(null)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please fill in your name, email, and message before sending.',
      })
      return
    }

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setStatus({
        type: 'success',
        message: 'Thanks for reaching out! Your message has been sent successfully.',
      })
      setFormData(initialFormState)
    }, 400)
  }

  return (
    <section className="section-space">
      <div className="page-shell">
        {/* Main Two-Column Layout (Desktop) / Vertical Stack (Mobile) */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* LEFT SIDE — Mobile Visual & Intro Heading */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <Reveal>
              <div>
                <span className="section-label">Contact</span>
                <h1 className="mt-5 font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-[var(--text-primary)]">
                  Let’s connect about entry-level product engineering opportunities.
                </h1>
                <p className="mt-4 text-base leading-7 text-[var(--text-secondary)] sm:text-lg sm:leading-8">
                  I’m looking for roles where I can contribute to real products, keep learning from experienced teammates, and grow through practical engineering work.
                </p>
              </div>
            </Reveal>

            {/* Mobile Visual Showcase */}
            <Reveal delay={0.15}>
              <div className="mt-8 flex justify-center sm:mt-10 lg:mt-12">
                <ContactPhoneVisual />
              </div>
            </Reveal>
          </div>

          {/* RIGHT SIDE — Mobile-Inspired Contact Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="glass-panel relative overflow-hidden p-6 sm:p-8 lg:p-10">
                {/* Subtle decorative top bar */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

                {/* Form Header */}
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-5">
                  <div>
                    <h2 className="text-xl font-bold tracking-tight text-[var(--text-primary)] sm:text-2xl">
                      Send a Message
                    </h2>
                    <p className="mt-1 text-xs text-[var(--text-muted)] sm:text-sm">
                      Have a role or idea to discuss? Drop me a line below.
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                    <FiClock className="text-xs" />
                    <span>Quick response</span>
                  </div>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                      Name
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-[var(--text-muted)]">
                        <FiUser className="text-base" />
                      </div>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] py-3.5 pr-4 pl-11 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none transition duration-200 focus:border-cyan-400/60 focus:bg-cyan-400/5 focus:ring-2 focus:ring-cyan-400/15 sm:text-base"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                      Email
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-[var(--text-muted)]">
                        <FiMail className="text-base" />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] py-3.5 pr-4 pl-11 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none transition duration-200 focus:border-cyan-400/60 focus:bg-cyan-400/5 focus:ring-2 focus:ring-cyan-400/15 sm:text-base"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                      />
                    </div>
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                      Message
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute top-3.5 left-0 flex items-center pl-4 text-[var(--text-muted)]">
                        <FiMessageSquare className="text-base" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        required
                        className="w-full resize-none rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] py-3.5 pr-4 pl-11 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none transition duration-200 focus:border-cyan-400/60 focus:bg-cyan-400/5 focus:ring-2 focus:ring-cyan-400/15 sm:text-base"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Share the role, team, or product opportunity you'd like to discuss."
                      />
                    </div>
                  </div>

                  {/* Submission and Status */}
                  <div className="pt-1">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="primary-button w-full sm:w-auto px-7 py-3.5 text-sm font-semibold tracking-wide disabled:opacity-70"
                      >
                        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                        <FiSend className={`text-sm transition-transform duration-200 ${isSubmitting ? 'translate-x-1' : ''}`} />
                      </button>

                      {status && (
                        <div
                          role="status"
                          aria-live="polite"
                          className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-medium sm:text-sm ${
                            status.type === 'success'
                              ? 'border border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
                              : 'border border-rose-500/30 bg-rose-500/10 text-rose-300'
                          }`}
                        >
                          {status.type === 'success' && <FiCheckCircle className="shrink-0 text-emerald-400 text-base" />}
                          <span>{status.message}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Contact Links Section (Direct channel cards) */}
        <div className="mt-12 sm:mt-16">
          <div className="grid gap-4 sm:grid-cols-3">
            {contactCards.map((item, index) => (
              <ContactInfoCard key={item.label} item={item} delay={index * 0.07} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
