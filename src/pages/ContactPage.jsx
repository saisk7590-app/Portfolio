import { useState } from 'react'
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiClock,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMessageSquare,
  FiSend,
  FiUser,
} from 'react-icons/fi'
import PhoneMockup from '../components/ui/PhoneMockup'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { contactCards, siteMeta } from '../data/siteContent'

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
        {/* 1. TOP HEADING SECTION: Full-width, centered at top */}
        <div className="mb-10 sm:mb-14">
          <SectionHeading
            centered
            eyebrow="Contact"
            title="Let’s connect about entry-level product engineering opportunities."
            description="I’m looking for roles where I can contribute to real products, keep learning from experienced teammates, and grow through practical engineering work."
          />
        </div>

        {/* 2. MAIN CONTENT: ONE TWO-COLUMN LAYOUT (Phone on Left, Form on Right in the same row on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT COLUMN: ONE Polished Phone Mockup */}
          <div className="md:col-span-5 flex flex-col items-center justify-start">
            <Reveal delay={0.05} className="w-full flex justify-center">
              <PhoneMockup size="md" className="w-full">
                {/* Screen Content: Portfolio Contact / Profile Screen */}
                <div className="h-full w-full bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 p-3.5 flex flex-col justify-between text-slate-100 select-none">
                  {/* Top Profile Header */}
                  <div className="flex flex-col items-center text-center pt-2">
                    <div className="relative mb-2">
                      <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-cyan-400 via-teal-400 to-sky-500 flex items-center justify-center font-extrabold text-slate-950 shadow-md text-sm ring-2 ring-white/20">
                        SK
                      </div>
                      <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-slate-950 ring-2 ring-slate-900 flex items-center justify-center">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-white tracking-tight">{siteMeta.name}</h3>
                    <p className="text-[11px] font-semibold text-cyan-300">Product Engineer</p>

                    {/* Available for opportunities badge */}
                    <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[9.5px] font-medium text-emerald-300">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      </span>
                      Available for opportunities
                    </div>
                  </div>

                  {/* Channel Action Rows */}
                  <div className="flex flex-col gap-1.5 my-auto">
                    <a
                      href={`mailto:${siteMeta.email}`}
                      className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] p-2 text-left transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-cyan-400/15 text-cyan-300">
                          <FiMail className="text-[10px]" />
                        </div>
                        <div className="min-w-0 truncate">
                          <p className="text-[9px] font-medium text-slate-400 leading-none">Email</p>
                          <p className="mt-0.5 truncate text-[10px] font-semibold text-white group-hover:text-cyan-200">
                            {siteMeta.email}
                          </p>
                        </div>
                      </div>
                      <FiArrowUpRight className="shrink-0 text-[10px] text-slate-400 group-hover:text-cyan-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>

                    <a
                      href={siteMeta.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] p-2 text-left transition hover:border-sky-400/40 hover:bg-sky-400/10"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-sky-400/15 text-sky-300">
                          <FiLinkedin className="text-[10px]" />
                        </div>
                        <div className="min-w-0 truncate">
                          <p className="text-[9px] font-medium text-slate-400 leading-none">LinkedIn</p>
                          <p className="mt-0.5 truncate text-[10px] font-semibold text-white group-hover:text-sky-200">
                            sai-kiran-engineer
                          </p>
                        </div>
                      </div>
                      <FiArrowUpRight className="shrink-0 text-[10px] text-slate-400 group-hover:text-sky-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>

                    <a
                      href={siteMeta.github}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] p-2 text-left transition hover:border-purple-400/40 hover:bg-purple-400/10"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-purple-400/15 text-purple-300">
                          <FiGithub className="text-[10px]" />
                        </div>
                        <div className="min-w-0 truncate">
                          <p className="text-[9px] font-medium text-slate-400 leading-none">GitHub</p>
                          <p className="mt-0.5 truncate text-[10px] font-semibold text-white group-hover:text-purple-200">
                            sai-kiran-engineer
                          </p>
                        </div>
                      </div>
                      <FiArrowUpRight className="shrink-0 text-[10px] text-slate-400 group-hover:text-purple-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>

                  {/* Micro Footer Notice */}
                  <div className="text-center pt-1 pb-1">
                    <span className="text-[9px] text-slate-500 font-medium">Direct contact showcase</span>
                  </div>
                </div>
              </PhoneMockup>
            </Reveal>
          </div>

          {/* RIGHT COLUMN: Mobile-Inspired Web Contact Form + Existing Contact Info */}
          <div className="md:col-span-7 flex flex-col gap-5">
            <Reveal delay={0.1}>
              <div className="glass-panel relative overflow-hidden p-6 sm:p-8 lg:p-9">
                {/* Subtle top accent */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

                {/* Form Header */}
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-4">
                  <div>
                    <h2 className="text-xl font-bold tracking-tight text-[var(--text-primary)] sm:text-2xl">
                      Send a Message
                    </h2>
                    <p className="mt-0.5 text-xs text-[var(--text-muted)] sm:text-sm">
                      Have an opportunity, role, or team to discuss? Leave a message below.
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                    <FiClock className="text-xs" />
                    <span>Quick response</span>
                  </div>
                </div>

                <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit} noValidate>
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]"
                    >
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

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]"
                    >
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
                        placeholder="name@example.com"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]"
                    >
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

                  {/* Send Button and Status */}
                  <div className="pt-1">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="primary-button w-full sm:w-auto px-8 py-3.5 text-sm font-semibold tracking-wide disabled:opacity-70"
                      >
                        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                        <FiSend
                          className={`text-sm transition-transform duration-200 ${
                            isSubmitting ? 'translate-x-1' : ''
                          }`}
                        />
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
                          {status.type === 'success' && (
                            <FiCheckCircle className="shrink-0 text-emerald-400 text-base" />
                          )}
                          <span>{status.message}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </Reveal>

            {/* Direct Contact Channels near the form */}
            <Reveal delay={0.15}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {contactCards.map((item) => {
                  const Icon =
                    item.label === 'Email'
                      ? FiMail
                      : item.label === 'LinkedIn'
                      ? FiLinkedin
                      : FiGithub

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="glass-panel group flex items-center justify-between gap-3 p-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:shadow-[0_10px_25px_rgba(56,189,248,0.1)]"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 group-hover:bg-cyan-400/20 transition-colors">
                          <Icon className="text-sm" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                            {item.label}
                          </p>
                          <p className="mt-0.5 truncate text-xs font-semibold text-[var(--text-primary)] group-hover:text-cyan-300 transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </div>
                      <FiArrowUpRight className="shrink-0 text-xs text-[var(--text-secondary)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-300" />
                    </a>
                  )
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
