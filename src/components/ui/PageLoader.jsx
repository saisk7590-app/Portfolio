import { motion } from 'framer-motion'

function PageLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' } }}
    >
      <div className="flex flex-col items-center gap-5 text-center">
        <motion.div
          className="h-16 w-16 rounded-2xl border border-cyan-400/30 bg-cyan-400/10"
          animate={{ rotate: 360, scale: [1, 1.08, 1] }}
          transition={{
            rotate: { repeat: Infinity, duration: 3, ease: 'linear' },
            scale: { repeat: Infinity, duration: 1.8 },
          }}
        />
        <div>
          <p className="font-display text-2xl font-bold text-slate-100">Sai Kiran</p>
          <p className="mt-2 text-sm uppercase tracking-[0.28em] text-slate-400">
            Product Engineer Portfolio
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default PageLoader
