import React from 'react'
import { Layout } from '../layout'
import ContactForm from '../components/ContactForm'
import { motion } from 'framer-motion'
const pageTransition = {
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
  },
}
const Contact = () => {
  return (
    <Layout>
      <motion.div
        initial='out'
        animate='in'
        exit='out'
        variants={pageTransition}
      >
        <ContactForm />
      </motion.div>
    </Layout>
  )
}

export default Contact
