import React from 'react'
import { Layout } from '../layout'
import { AllTech } from '../components/TechPartners'
import AnimationWrapper from '../animations/AnimationWrapper'

const Technology = () => {
  return (
    <Layout>
      <AnimationWrapper>
        <AllTech />
      </AnimationWrapper>
    </Layout>
  )
}
export default Technology
