import { FiWifi } from 'react-icons/fi'

function PhoneMockup({
  src,
  alt = 'Mobile app screen',
  title,
  subtitle,
  size = 'md',
  className = '',
}) {
  // Size presets
  const sizeClasses = {
    sm: 'max-w-[210px] rounded-[34px] border-[6px]',
    md: 'max-w-[260px] rounded-[40px] border-[8px]',
    lg: 'max-w-[310px] rounded-[46px] border-[10px]',
  }

  const selectedSize = sizeClasses[size] || sizeClasses.md

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Smartphone Outer Chassis */}
      <div
        className={`relative w-full overflow-hidden border-slate-800 bg-slate-950 shadow-[0_20px_50px_rgba(0,0,0,0.6)] ring-1 ring-white/15 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_25px_60px_rgba(56,189,248,0.2)] ${selectedSize}`}
      >
        {/* Subtle Glass Glare / Screen Reflection */}
        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08]" />

        {/* Top Speaker Ear-piece */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 z-30 h-1 w-12 rounded-full bg-slate-800" />

        {/* Dynamic Island / Notch */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 flex h-4 w-20 items-center justify-center rounded-full bg-black border border-white/10 shadow-sm">
          <div className="h-1.5 w-1.5 rounded-full bg-slate-900 border border-slate-700 mr-1" />
          <div className="h-1 w-1 rounded-full bg-cyan-500/80" />
        </div>

        {/* Mobile Status Bar */}
        <div className="relative z-10 flex h-8 w-full items-center justify-between px-4 pt-1.5 text-[9px] font-semibold text-white/90 select-none">
          <span>09:41</span>
          <div className="flex items-center gap-1.5 text-[8px]">
            <span className="text-[7px] font-bold opacity-80">5G</span>
            <FiWifi className="text-[9px]" />
            <div className="flex h-2 w-3.5 items-center rounded-[2px] border border-white/80 p-[1px]">
              <div className="h-full w-[80%] rounded-[1px] bg-white" />
            </div>
          </div>
        </div>

        {/* Mobile App Screen Content */}
        <div className="relative aspect-[9/18] w-full overflow-hidden bg-slate-900">
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover select-none"
            loading="lazy"
          />
        </div>

        {/* Bottom iOS Home Indicator Bar */}
        <div className="relative z-20 flex h-4 w-full items-center justify-center bg-slate-950/80 pb-1">
          <div className="h-1 w-20 rounded-full bg-white/40" />
        </div>
      </div>

      {/* Screen Title & Subtitle (if provided) */}
      {(title || subtitle) && (
        <div className="mt-3 text-center">
          {title && <p className="text-sm font-semibold text-[var(--text-primary)]">{title}</p>}
          {subtitle && <p className="text-xs text-[var(--text-secondary)] mt-0.5">{subtitle}</p>}
        </div>
      )}
    </div>
  )
}

export default PhoneMockup
