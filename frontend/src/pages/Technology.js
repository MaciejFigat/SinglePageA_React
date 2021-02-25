import React from 'react'
import { Layout } from '../layout'
import { motion } from 'framer-motion'
import { AllTech } from '../components/TechPartners'

const pageTransition = {
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
  },
}
const Technology = () => {
  return (
    <Layout>
      <motion.div
        initial='out'
        animate='in'
        exit='out'
        variants={pageTransition}
      >
        <AllTech />
      </motion.div>
    </Layout>
  )
}
export default Technology
