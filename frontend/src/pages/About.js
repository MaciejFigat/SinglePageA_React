import React from 'react'
import { Layout } from '../layout'
import '../styles/about.scss'
import AnimationWrapper from '../animations/AnimationWrapper'
import InstallationSolarVent from '../components/InstallationSolarVent'

const About = () => {
  return (
    <Layout>
      <AnimationWrapper>
        <InstallationSolarVent />
      </AnimationWrapper>
    </Layout>
  )
}

export default About
