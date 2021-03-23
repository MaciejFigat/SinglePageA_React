import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Paragraph, LinkPartners, LinkLogo } from '../styles/boxColorStyles'
import {
  ResponsiveDiv,
  BigContainerDiv,
  H2,
} from '../styles/responsiveContainer'
import { CardWrapper, CardProper, CardImage } from '../styles/imageStyles'
import mountain2 from '../assets/sunset2.jpg'
import sunset1 from '../assets/sunset1.jpg'

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
  const [partnerName, setPartnerName] = useState({
    name: 'none',
    logo: React.FC,
    motto: '',
    description: '',
    link: '#',
  })
  const { name, logo, motto, description, link } = partnerName

  const clickBackHandler = () => {
    setPartnerName({
      name: 'none',
      logo: '',
      motto: '',
      description: '',
      link: '#',
    })
    console.log(partnerName)
  }

  return (
    <>
      {partnerName.name === 'none' && (
        <motion.div
          initial='out'
          animate='in'
          exit='out'
          variants={pageVariants}
          transitions={pageTransitions}
        >
          <CardWrapper>
            {techData.map((partner) => (
              <CardProper key={partner.name}>
                <CardImage src={mountain2} alt='mountain' />

                <LinkPartners
                  onClick={() =>
                    setPartnerName({
                      name: partner.name,
                      motto: partner.motto,
                      description: partner.description,
                      logo: partner.name,
                      link: partner.link,
                    })
                  }
                >
                  {partner.logo}
                </LinkPartners>
              </CardProper>
            ))}
          </CardWrapper>
        </motion.div>
      )}
      {partnerName.name !== 'none' && (
        <motion.div
          initial='out'
          animate='in'
          exit='out'
          variants={pageVariants}
          transitions={pageTransitions}
        >
          <BigContainerDiv>
            <ResponsiveDiv>
              <H2 onClick={clickBackHandler}>
                <i className='fas fa-chevron-circle-left'></i>
              </H2>
              <LinkLogo href={link}>{logo}</LinkLogo>
              <h4>
                <Paragraph>{motto}</Paragraph>
              </h4>{' '}
              <br />
              <Paragraph>{description}</Paragraph>
            </ResponsiveDiv>
          </BigContainerDiv>
        </motion.div>
      )}
    </>
  )
}

export { AllTech }
