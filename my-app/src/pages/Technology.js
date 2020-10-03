import React, { useState } from 'react'
import { Layout } from '../layout'
import { AnimatePresence, motion } from 'framer-motion'
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
  const [showHomeEl, setShowHomeEl] = useState('showAll')

  const handleClickOne = () => {
    if (showHomeEl === 'showAll') {
      setShowHomeEl('showFirst')
    } else if (showHomeEl === 'showSecond') {
      setShowHomeEl('showFirst')
    } else {
      setShowHomeEl('showNone')
    }
  }

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
