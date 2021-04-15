import React from 'react'
import { Layout } from '../layout'
import '../styles/about.scss'
import AnimationWrapper from '../animations/AnimationWrapper'
import { installationData } from '../data/ventilationMeasurement'
import InstallationSolarVent from '../components/InstallationSolarVent'
const About = () => {
  return (
    <Layout>
      <AnimationWrapper>
        <InstallationSolarVent installationData={installationData} />
      </AnimationWrapper>
    </Layout>
  )
}

export default About
