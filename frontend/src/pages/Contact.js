import React from 'react'
import { Layout } from '../layout'
import ContactForm from '../components/ContactForm'
import AnimationWrapper from '../animations/AnimationWrapper'

const Contact = () => {
  return (
    <Layout>
      <AnimationWrapper>
        <ContactForm />
      </AnimationWrapper>
    </Layout>
  )
}

export default Contact
