import React, { useState } from 'react'
import { Layout } from '../layout'
import { motion } from 'framer-motion'
import { OfferOne, OfferTwo } from '../components/Offer'
import { GridCenter, LinkAboutSubtle } from '../styles/boxColorStyles'
import { BigContainerDiv } from '../styles/responsiveContainer'

const pageVariants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
}
const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
}
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
        <motion.div
          initial='out'
          animate='in'
          exit='out'
          variants={pageVariants}
          transition={pageTransition}
        >
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
        </motion.div>
      </Layout>
    )
  } else if (showHomeEl === 'showFirst') {
    return (
      <motion.div
        initial='out'
        animate='in'
        exit='out'
        variants={pageVariants}
        transition={pageTransition}
      >
        <OfferOne handleClickOne={handleClickOne} />
      </motion.div>
    )
  } else {
    return (
      <motion.div
        initial='out'
        animate='in'
        exit='out'
        variants={pageVariants}
        transition={pageTransition}
      >
        <OfferTwo handleClickTwo={handleClickTwo} />
      </motion.div>
    )
  }
}

export default Home
