import React from 'react'
import { Layout } from '../layout'
import AnimationWrapper from '../animations/AnimationWrapper'
import { installationData } from '../data/installationAC'
import InstallationSolarVent from '../components/InstallationSolarVent'
const Install = () => {
  return (
    <Layout>
      <AnimationWrapper>
        <InstallationSolarVent installationData={installationData} />
      </AnimationWrapper>
    </Layout>
  )
}
export default Install
