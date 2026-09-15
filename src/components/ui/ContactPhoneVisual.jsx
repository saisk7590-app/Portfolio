import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiWifi } from 'react-icons/fi'
import { siteMeta } from '../../data/siteContent'

function ContactPhoneVisual() {
  return (
    <div className="relative mx-auto flex w-full max-w-[280px] sm:max-w-[290px] flex-col items-center select-none">
      {/* Ambient background glow behind the phone */}
      <div
        className="pointer-events-none absolute -inset-4 -z-10 rounded-full bg-gradient-to-tr from-cyan-500/15 via-teal-500/10 to-transparent blur-2xl"
        aria-hidden="true"
      />

      {/* Smartphone Chassis */}
      <div className="relative w-full rounded-[42px] border-[8px] border-slate-800 bg-slate-950 p-2 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_30px_rgba(56,189,248,0.15)] ring-1 ring-white/15 transition-all duration-500 hover:shadow-[0_30px_70px_-10px_rgba(56,189,248,0.25),0_0_40px_rgba(45,212,191,0.2)] hover:scale-[1.01]">
        {/* Hardware side buttons */}
        <div className="pointer-events-none absolute -left-[10px] top-20 h-8 w-[2.5px] rounded-l bg-slate-700" />
        <div className="pointer-events-none absolute -left-[10px] top-32 h-10 w-[2.5px] rounded-l bg-slate-700" />
        <div className="pointer-events-none absolute -left-[10px] top-44 h-10 w-[2.5px] rounded-l bg-slate-700" />
        <div className="pointer-events-none absolute -right-[10px] top-28 h-12 w-[2.5px] rounded-r bg-slate-700" />

        {/* Screen glass glare reflection */}
        <div
          className="pointer-events-none absolute inset-0 z-30 rounded-[34px] bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08]"
          aria-hidden="true"
        />

        {/* Inner Phone Screen */}
        <div className="relative z-10 flex min-h-[480px] flex-col justify-between overflow-hidden rounded-[32px] bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 px-3.5 pt-2 pb-3 text-slate-100">
          {/* Top Notch / Dynamic Island */}
          <div className="relative z-20 flex w-full flex-col items-center">
            <div className="flex h-5 w-24 items-center justify-between rounded-full border border-white/10 bg-black px-2 shadow-inner">
              <div className="h-1.5 w-1.5 rounded-full bg-slate-800 ring-1 ring-slate-700" />
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-400/80 shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
            </div>

            {/* Mobile Status Bar */}
            <div className="mt-1 flex w-full items-center justify-between px-2 text-[10px] font-semibold text-slate-400 select-none">
              <span>09:41</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[8px] font-bold tracking-tight text-slate-300">5G</span>
                <FiWifi className="text-[10px] text-slate-300" />
                <div className="flex h-2.5 w-4 items-center rounded-[3px] border border-slate-400/80 p-[1px]">
                  <div className="h-full w-[85%] rounded-[1px] bg-cyan-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Screen Body Content */}
          <div className="my-auto flex flex-col items-center pt-2 pb-1 text-center">
            {/* Avatar Pill */}
            <div className="relative mb-2.5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-teal-400 to-sky-500 text-base font-extrabold text-slate-950 shadow-lg shadow-cyan-500/25 ring-2 ring-white/20">
                SK
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-slate-950 ring-2 ring-slate-900">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </span>
            </div>

            {/* Identity */}
            <h3 className="text-base font-bold tracking-tight text-white">
              {siteMeta.name}
            </h3>
            <p className="mt-0.5 text-xs font-semibold text-cyan-300">
              Product Engineer
            </p>

            {/* Availability Badge */}
            <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10.5px] font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for opportunities
            </div>

            {/* Mini Contact Channels List */}
            <div className="mt-3.5 flex w-full flex-col gap-2">
              <a
                href={`mailto:${siteMeta.email}`}
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] p-2 text-left transition duration-200 hover:border-cyan-400/40 hover:bg-cyan-400/10"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-400/15 text-cyan-300">
                    <FiMail className="text-xs" />
                  </div>
                  <div className="min-w-0 truncate">
                    <p className="text-[10px] font-medium text-slate-400 leading-none">Email</p>
                    <p className="mt-0.5 truncate text-[11px] font-semibold text-white group-hover:text-cyan-200">
                      {siteMeta.email}
                    </p>
                  </div>
                </div>
                <FiArrowUpRight className="shrink-0 text-xs text-slate-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-300" />
              </a>

              <a
                href={siteMeta.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] p-2 text-left transition duration-200 hover:border-sky-400/40 hover:bg-sky-400/10"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-sky-400/15 text-sky-300">
                    <FiLinkedin className="text-xs" />
                  </div>
                  <div className="min-w-0 truncate">
                    <p className="text-[10px] font-medium text-slate-400 leading-none">LinkedIn</p>
                    <p className="mt-0.5 truncate text-[11px] font-semibold text-white group-hover:text-sky-200">
                      sai-kiran-engineer
                    </p>
                  </div>
                </div>
                <FiArrowUpRight className="shrink-0 text-xs text-slate-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sky-300" />
              </a>

              <a
                href={siteMeta.github}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] p-2 text-left transition duration-200 hover:border-purple-400/40 hover:bg-purple-400/10"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-purple-400/15 text-purple-300">
                    <FiGithub className="text-xs" />
                  </div>
                  <div className="min-w-0 truncate">
                    <p className="text-[10px] font-medium text-slate-400 leading-none">GitHub</p>
                    <p className="mt-0.5 truncate text-[11px] font-semibold text-white group-hover:text-purple-200">
                      sai-kiran-engineer
                    </p>
                  </div>
                </div>
                <FiArrowUpRight className="shrink-0 text-xs text-slate-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-purple-300" />
              </a>
            </div>
          </div>

          {/* Bottom iOS Home Indicator */}
          <div className="flex w-full items-center justify-center pt-1.5 pb-0.5">
            <div className="h-1 w-20 rounded-full bg-white/35" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPhoneVisual
