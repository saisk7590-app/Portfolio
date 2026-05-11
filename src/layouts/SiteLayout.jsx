import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import PageLoader from '../components/ui/PageLoader'
import { useTheme } from '../hooks/useTheme'

function SiteLayout() {
  const [theme, setTheme] = useTheme()
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 900)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <>
      <AnimatePresence>{isLoading ? <PageLoader key="loader" /> : null}</AnimatePresence>

      <div className="relative min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--text-primary)] transition-colors duration-300">
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-10%] top-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute right-[-8%] top-[28rem] h-96 w-96 rounded-full bg-teal-400/10 blur-3xl" />
        </div>

        <Navbar
          theme={theme}
          onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />

        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <Outlet />
        </motion.main>

        <Footer />
      </div>
    </>
  )
}

export default SiteLayout
