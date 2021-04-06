import React from 'react'
import { Layout } from '../layout'
import '../styles/about.scss'
import AnimationWrapper from '../animations/AnimationWrapper'
import InstallationAC from '../components/InstallationAC'

const About = () => {
  return (
    <Layout>
      <AnimationWrapper>
        <InstallationAC />
      </AnimationWrapper>
    </Layout>
  )
}

export default About
