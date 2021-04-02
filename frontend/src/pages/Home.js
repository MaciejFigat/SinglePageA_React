import React, { useState } from 'react'
import { Layout } from '../layout'
import AnimationWrapper from '../animations/AnimationWrapper'
import { OfferOne, OfferTwo } from '../components/Offer'
import { GridCenter, LinkAboutSubtle } from '../styles/boxColorStyles'
import { BigContainerDiv } from '../styles/responsiveContainer'

const Home = () => {
  const [showHomeEl, setShowHomeEl] = useState('showNone')

  const handleClickOne = () => {
    if (showHomeEl === 'showNone') {
      setShowHomeEl('showFirst')
    } else if (showHomeEl === 'showSecond') {
      setShowHomeEl('showFirst')
    } else {
      setShowHomeEl('showNone')
    }
  }
  const handleClickTwo = () => {
    if (showHomeEl === 'showNone') {
      setShowHomeEl('showSecond')
    } else if (showHomeEl === 'showFirst') {
      setShowHomeEl('showSecond')
    } else {
      setShowHomeEl('showNone')
    }
  }

  if (showHomeEl === 'showNone') {
    return (
      <Layout>
        <AnimationWrapper>
          <BigContainerDiv>
            <GridCenter>
              <LinkAboutSubtle onClick={handleClickOne}>
                <h3>
                  Realizacje <i className='fas fa-gavel'></i>
                </h3>
              </LinkAboutSubtle>
              <LinkAboutSubtle onClick={handleClickTwo}>
                <h3>
                  Projekty <i className='fas fa-drafting-compass'></i>
                </h3>
              </LinkAboutSubtle>
            </GridCenter>
          </BigContainerDiv>
        </AnimationWrapper>
      </Layout>
    )
  } else if (showHomeEl === 'showFirst') {
    return (
      <AnimationWrapper>
        <OfferOne handleClickOne={handleClickOne} />
      </AnimationWrapper>
    )
  } else {
    return (
      <AnimationWrapper>
        <OfferTwo handleClickTwo={handleClickTwo} />
      </AnimationWrapper>
    )
  }
}

export default Home
