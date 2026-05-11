import { motion } from 'framer-motion'
import { fadeInUp } from '../../theme/motion'

function Reveal({ children, className = '', delay = 0, variants = fadeInUp }) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
