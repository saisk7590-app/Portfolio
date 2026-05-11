import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import { navLinks, siteMeta } from '../../data/siteContent'
import ThemeToggle from '../ui/ThemeToggle'

function Navbar({ theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:var(--surface-strong)]/92 backdrop-blur-xl">
      <div className="page-shell flex h-20 items-center justify-between gap-4">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-teal-400 font-display text-sm font-bold text-slate-950">
            SK
          </div>
          <div>
            <p className="font-display text-sm font-bold sm:text-base">{siteMeta.name}</p>
            <p className="text-xs text-[var(--text-secondary)] sm:text-sm">{siteMeta.role}</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `route-link ${isActive ? 'route-link-active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-lg lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <nav className="page-shell flex flex-col gap-2 border-t border-[var(--border)] py-4 lg:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `route-link text-center ${isActive ? 'route-link-active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      ) : null}
    </header>
  )
}

export default Navbar
