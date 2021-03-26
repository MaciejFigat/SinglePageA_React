import React from 'react'
import { Layout } from '../layout'

import { motion } from 'framer-motion'
// import { AllTech } from '../components/TechPartners'
const pageVariants = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: '-100vw',
  },
}
const pageTransition = {
  type: 'tween',
  // ease: 'anticipate',
  duration: 0.5,
}
const Install = () => {
  return (
    <Layout>
      <motion.div
        initial='out'
        animate='in'
        exit='out'
        variants={pageVariants}
        transition={pageTransition}
      >
        <h1>Instalacje </h1>
      </motion.div>
    </Layout>
  )
}
export default Install
