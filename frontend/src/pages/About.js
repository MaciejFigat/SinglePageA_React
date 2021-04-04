import React from 'react'
import { Layout } from '../layout'
import '../styles/about.scss'
import AnimationWrapper from '../animations/AnimationWrapper'
import InstallationExamples from '../components/InstallationExamples'

const About = () => {
  return (
    <Layout>
      <AnimationWrapper>
        <InstallationExamples />
      </AnimationWrapper>
    </Layout>
  )
}

export default About
