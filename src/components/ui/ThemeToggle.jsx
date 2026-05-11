import { FiMoon, FiSun } from 'react-icons/fi'

function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-lg text-[var(--text-primary)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? <FiSun /> : <FiMoon />}
    </button>
  )
}

export default ThemeToggle
