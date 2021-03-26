import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { LinkPartners } from '../styles/boxColorStyles'
import { H2Bottom } from '../styles/responsiveContainer'
import {
  CardH3,
  CardP,
  CardWrapper,
  CardProper,
  CardProperActive,
  CardImage,
  WrapperCentringDiv,
} from '../styles/imageStyles'
import mountain2 from '../assets/sunset2.jpg'

import { techData } from '../data/techPartnersData'

const pageVariants = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
  },
}
const pageTransitions = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
}
const AllTech = () => {
  const [showDetails, setShowDetails] = useState(false)
  const [partnerName, setPartnerName] = useState({
    name: 'none',
    logo: React.FC,
    motto: '',
    description: '',
    link: '#',
  })
  const { name, motto, description, link } = partnerName

  const showDetailsHandler = (e) => {
    e.preventDefault()
    if (showDetails === true) {
      setShowDetails(false)
    } else {
      setShowDetails(true)
    }
  }
  return (
    <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={pageVariants}
      transitions={pageTransitions}
    >
      <WrapperCentringDiv>
        <CardWrapper>
          {techData.map((partner) => (
            <div
              key={partner.name}
              onClick={() =>
                setPartnerName({
                  name: partner.name,
                  motto: partner.motto,
                  description: partner.description,
                  link: partner.link,
                })
              }
            >
              <CardProper onClick={showDetailsHandler}>
                <CardImage src={mountain2} alt='mountain' />

                <LinkPartners>{partner.logo}</LinkPartners>
              </CardProper>
            </div>
          ))}{' '}
          {showDetails === true && (
            <motion.div
              initial='out'
              animate='in'
              exit='out'
              variants={pageVariants}
              transitions={pageTransitions}
            >
              <CardProperActive>
                <CardH3>
                  <H2Bottom onClick={showDetailsHandler}>
                    <i className='fas fa-times'></i>
                  </H2Bottom>
                </CardH3>
                <CardImage src={mountain2} alt='mountain' />

                <CardH3>{motto}</CardH3>
                <CardP>{description}</CardP>
                <CardP>
                  <LinkPartners href={link}>
                    <i className='fas fa-link'></i>
                    {name}
                  </LinkPartners>
                </CardP>
              </CardProperActive>
            </motion.div>
          )}
        </CardWrapper>
      </WrapperCentringDiv>
    </motion.div>
  )
}

export { AllTech }
